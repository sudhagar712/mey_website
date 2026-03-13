import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    'Let’s discuss',
];

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
        details: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="w-full relative">
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        className="rounded-[2.5rem] p-12 lg:p-20 text-center shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center min-h-[500px]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                            className="w-24 h-24 rounded-full  flex items-center justify-center mb-8 text-5xl text-black shadow-xl shadow-[#ffff00]/20"
                        >
                            ✓
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl text-black font-bold mb-6 tracking-tighter" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Brief Received
                        </h2>
                        <p className="text-black/60 text-lg md:text-xl font-medium leading-relaxed max-w-lg mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Thank you for reaching out to MEY. Our team will review your requirements and get back to you within 24 hours.
                        </p>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        onSubmit={handleSubmit}
                        className="w-full bg-black p-6 md:p-12 lg:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 relative group"
                    >
                        {/* Subtle decorative accent */}
                        <div className="absolute top-0 left-0 w-full h-2 rounded-t-[2.5rem]"></div>

                        <div className="mb-12">
                            <h3 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Start a Conversation
                            </h3>
                            <p className="text-white text-base md:text-lg font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Fill out the details below.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white mb-3 transition-colors group-focus-within/input:text-black">Your Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="bg-gray-300  border-b-2 border-gray-200 px-4 py-4 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    placeholder="Enter your name "
                                    required
                                />
                            </div>
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    placeholder="Business Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    placeholder="+91 98765 43210"
                                    required
                                />
                            </div>
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    placeholder="you@company.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Service Required</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        className="w-full bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg appearance-none cursor-pointer focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    >
                                        <option value="" disabled>Select a service</option>
                                        {serviceOptions.map((s) => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/50">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col relative group/input">
                                <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Budget Range</label>
                                <div className="relative">
                                    <select
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        className="w-full bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg appearance-none cursor-pointer focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 rounded-t-lg"
                                    >
                                        <option value="" disabled>Select budget</option>
                                        {budgetOptions.map((b) => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/50">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col relative group/input mb-12">
                            <label className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/50 mb-3 transition-colors group-focus-within/input:text-black">Project Details</label>
                            <textarea
                                name="details"
                                value={form.details}
                                onChange={handleChange}
                                rows={4}
                                className="bg-[#fcfcfc] border-b-2 border-gray-200 px-4 py-4 text-black text-lg focus:outline-none focus:border-black transition-all duration-300 hover:bg-gray-50 resize-none rounded-t-lg"
                                placeholder="Tell us about your business, goals, and what you're looking to achieve..."
                            />
                        </div>

                        <div className="flex justify-end">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-black text-white font-bold uppercase tracking-[0.2em] text-xs md:text-sm px-12 py-5 rounded-full hover:bg-[#ffff00] hover:text-black transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-black/10"
                            >
                                Send Brief
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
