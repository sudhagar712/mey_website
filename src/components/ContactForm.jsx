import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars -- motion used in JSX (motion.div, motion.form, motion.button)
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────
// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_9yu5t4j';
const EMAILJS_TEMPLATE_ID = 'template_ueiha2r';
const EMAILJS_PUBLIC_KEY   = 'fWRejZGu0v3sDpKcP';

const serviceOptions = [
    'Brand Identity Design',
    'Social Media Marketing',
    'Website Design & Development',
    'Video Production',
    'Performance Marketing',
    'Outdoor Advertising',
    'Multiple Services',
    'Not sure yet',
];

const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 – ₹75,000',
    '₹75,000 – ₹2,00,000',
    '₹2,00,000+',
];

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''));

const ContactForm = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        details: '',
    });
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        const nameTrim = form.name.trim();
        if (!nameTrim) newErrors.name = 'Name is required';
        else if (nameTrim.length < 2) newErrors.name = 'Enter a valid name';

        const phoneDigits = form.phone.replace(/\D/g, '');
        const phone10 = phoneDigits.length >= 10 ? phoneDigits.slice(-10) : phoneDigits;
        if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (phone10.length !== 10 || !validatePhone(phone10)) newErrors.phone = 'Enter a valid 10-digit Indian mobile number';

        if (!form.email.trim()) newErrors.email = 'Email is required';
        else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email address';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        // EmailJS template parameters
        const templateParams = {
            from_name: form.name.trim(),
            from_email: form.email.trim(),
            phone: form.phone.trim(),
            company: form.company.trim() || 'Not provided',
            service: form.service || 'Not selected',
            budget: form.budget || 'Not selected',
            message: form.details.trim() || 'No details provided',
        };

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Show success popup
            setShowPopup(true);

            // Reset form
            setForm({
                name: '',
                company: '',
                phone: '',
                email: '',
                service: '',
                budget: '',
                details: '',
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again or call us directly.');
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
      <div className="w-full relative">

        {/* ─── SUCCESS POPUP OVERLAY ─── */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              key="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={closePopup}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 max-w-lg w-full text-center shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="mx-auto mb-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#fbba00] to-[#f59e0b] flex items-center justify-center shadow-[0_0_40px_rgba(251,186,0,0.3)]"
                >
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    className="w-12 h-12 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>

                {/* Success Text */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Message Sent!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-sm mx-auto"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Thank you for reaching out to <span className="text-[#fbba00] font-semibold">MEY</span>. Our team will review your brief and get back to you within <span className="text-white font-medium">24 hours</span>.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
                  className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#fbba00] to-transparent mx-auto mb-8"
                />

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closePopup}
                  className="bg-[#fbba00] text-black font-bold uppercase tracking-[0.2em] text-xs px-10 py-4 rounded-full hover:bg-[#f5a623] transition-all duration-300 shadow-lg shadow-[#fbba00]/20"
                >
                  Done
                </motion.button>

                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#fbba00]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#fbba00]/5 rounded-full blur-3xl pointer-events-none" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── CONTACT FORM ─── */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          onSubmit={handleSubmit}
          className="w-full bg-black rounded-[2.5rem] px-5 py-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative group"
        >
          {/* Subtle decorative accent */}
          <div className="absolute top-0 left-0 w-full h-2 rounded-t-[2.5rem]"></div>

          <div className="mb-12">
            <h3
              className="text-4xl md:text-5xl text-yellow-500 font-bold tracking-tighter mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Start a Conversation
            </h3>
            <p
              className="text-white text-base md:text-lg font-medium"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Fill out the details below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 mb-8">
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`bg-white border-b-2 px-4 py-3 text-base md:text-lg focus:outline-none transition-all duration-300 hover:bg-gray-50 rounded-t-lg ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-black"
                }`}
                placeholder="Enter your name"
                required
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400 font-medium">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4  text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                placeholder="Business Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`bg-[#fcfcfc] border-b-2 px-4 py-4 text-black text-lg focus:outline-none transition-all duration-300 hover:bg-gray-50 rounded-t-lg ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-black"
                }`}
                placeholder="Enter a mobile number"
                required
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-400 font-medium">
                  {errors.phone}
                </p>
              )}
            </div>
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`bg-[#fcfcfc] border-b-2 px-4 py-4 text-black text-lg focus:outline-none transition-all duration-300 hover:bg-gray-50 rounded-t-lg ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-black"
                }`}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Service Required
              </label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg appearance-none cursor-pointer focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col relative group/input">
              <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
                Budget Range
              </label>
              <div className="relative">
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg appearance-none cursor-pointer focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                >
                  <option value="" disabled>
                    Select budget
                  </option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/50">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative group/input mb-12 md:mb-37   ">
            <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-yellow-500 mb-3 transition-colors group-focus-within/input:text-black">
              Project Details
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              rows={4}
              className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-10 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 resize-none rounded-t-lg"
              placeholder="Enter a Project Details.."
            />
          </div>

          <div className="flex justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              type="submit"
              disabled={loading}
              className={`bg-[#fbba00] text-gray-800 font-bold uppercase tracking-[0.2em] text-xs md:text-sm w-full sm:w-auto px-8 py-4 rounded-full hover:text-black transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-black/10 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Brief
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    );
};

export default ContactForm;
