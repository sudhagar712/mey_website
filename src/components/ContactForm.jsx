import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, Clock, Phone, User, MessageSquare } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TIME_SLOTS = ['Morning (9–12)', 'Afternoon (12–4)', 'Evening (4–7)'];

const InputWrapper = ({ children, delay = 0 }) => (
    <div
        className="group relative"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        {children}
    </div>
);

const fieldBase =
    'peer w-full pl-12 pr-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm placeholder-transparent ' +
    'focus:outline-none focus:border-[#FFE600]/60 focus:bg-white/8 ' +
    'group-hover:border-white/20 transition-all duration-300 ' +
    'shadow-inner shadow-black/20';

const labelBase =
    'absolute left-12 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none ' +
    'peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 ' +
    'peer-focus:-translate-y-[1.65rem] peer-focus:text-[10px] peer-focus:text-[#FFE600] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase ' +
    'peer-[:not(:placeholder-shown)]:-translate-y-[1.65rem] peer-[:not(:placeholder-shown)]:text-[10px] ' +
    'peer-[:not(:placeholder-shown)]:text-[#FFE600] peer-[:not(:placeholder-shown)]:font-bold ' +
    'peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase ' +
    'bg-transparent';

const iconBase =
    'absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 ' +
    'group-focus-within:text-[#FFE600] transition-colors duration-300 pointer-events-none';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        concern: '',
        preferredTime: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 800, once: false, easing: 'ease-out-cubic' });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectTime = (slot) => {
        setFormData({ ...formData, preferredTime: slot });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const message = `New Consultation Request%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AConcern: ${formData.concern}%0APreferred Time: ${formData.preferredTime}`;
        const whatsappUrl = `https://wa.me/918098449999?text=${message}`;
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false); 
            setFormData({ name: '', phone: '', concern: '', preferredTime: '' });
        }, 1500);
    };

    return (
        <div className="relative group perspective-1000">
            {/* Ambient glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#FFE600]/30 via-[#4D0013]/20 to-[#FFE600]/10 rounded-[2rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-700" />

            <div className="relative bg-gradient-to-br from-[#111]/90 via-[#1a1a1a]/95 to-[#0d0d0d]/90 rounded-[2rem] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">

                {/* Corner shimmer accents */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FFE600]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#4D0013]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                {/* Thin gold top bar */}
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#FFE600] to-transparent opacity-60" />

                <div className="relative z-10 p-7 md:p-10">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8" data-aos="fade-down">
                        <div>
                            <p className="text-[#FFE600] text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
                                AJ Dento Aesthetic Care
                            </p>
                            <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                Book Your
                                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] to-[#FFC200]">
                                    Consultation
                                </span>
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FFE600]/10 border border-[#FFE600]/20 flex items-center justify-center shadow-lg shadow-[#FFE600]/10 flex-shrink-0">
                            <Clock className="w-5 h-5 text-[#FFE600]" />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <InputWrapper delay={100}>
                            <User className={iconBase} />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder=" "
                                className={fieldBase}
                                required
                            />
                            <label htmlFor="name" className={labelBase}>Full Name</label>
                            {/* bottom glow line on focus */}
                            <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FFE600]/70 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-center" />
                        </InputWrapper>

                        {/* Phone */}
                        <InputWrapper delay={180}>
                            <Phone className={`${iconBase} top-1/2`} />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder=" "
                                className={fieldBase}
                            />
                            <label htmlFor="phone" className={labelBase}>Phone Number</label>
                            <span className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#FFE600]/70 to-transparent scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 origin-center" />
                        </InputWrapper>

                        {/* Concern */}
                        <InputWrapper delay={260}>
                            <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-gray-500 group-focus-within:text-[#FFE600] transition-colors duration-300 pointer-events-none" />
                            <textarea
                                name="concern"
                                id="concern"
                                value={formData.concern}
                                onChange={handleChange}
                                placeholder=" "
                                rows="3"
                                className={`${fieldBase} resize-none`}
                                required
                            />
                            <label
                                htmlFor="concern"
                                className="absolute left-12 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm peer-focus:-translate-y-[1.65rem] peer-focus:text-[10px] peer-focus:text-[#FFE600] peer-focus:font-bold peer-focus:tracking-widest peer-focus:uppercase peer-[:not(:placeholder-shown)]:-translate-y-[1.65rem] peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#FFE600] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:tracking-widest peer-[:not(:placeholder-shown)]:uppercase bg-transparent"
                            >
                                Your Concern
                            </label>
                        </InputWrapper>

                        {/* Preferred Time — pill selector */}
                        <div data-aos="fade-up" data-aos-delay="340">
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                <Clock className="w-3 h-3 text-[#FFE600]" />
                                Preferred Time
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {TIME_SLOTS.map((slot) => {
                                    const active = formData.preferredTime === slot;
                                    return (
                                        <button
                                            key={slot}
                                            type="button"
                                            onClick={() => selectTime(slot)}
                                            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 focus:outline-none
                                                ${active
                                                    ? 'bg-gradient-to-r from-[#FFE600] to-[#FFC200] text-[#4D0013] border-transparent shadow-[0_4px_14px_rgba(255,220,0,0.35)] scale-105'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-[#FFE600]/40 hover:text-white hover:bg-white/10'
                                                }`}
                                        >
                                            {slot}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Submit */}
                        <div data-aos="fade-up" data-aos-delay="420" className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 bg-gradient-to-r from-[#FFE600] to-[#FFC200] text-[#4D0013] font-extrabold text-sm tracking-wide rounded-2xl shadow-[0_6px_20px_rgba(255,220,0,0.35)] hover:shadow-[0_10px_30px_rgba(255,220,0,0.55)] transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Processing…
                                    </>
                                ) : (
                                    <>
                                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4D0013]" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Secure My Consultation
                                        <CheckCircle className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Direct contact row */}
                    <div className="mt-7 pt-6 border-t border-white/[0.07] grid grid-cols-2 gap-3">
                        <a
                            href="tel:+918098449999"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-[#FFE600]/30 transition-all duration-300 group"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#FFE600] group-hover:scale-110 transition-transform" />
                            +91 80984 49999
                        </a>
                        <a
                            href="https://wa.me/918098449999?text=Hi,%20I%20would%20like%20to%20secure%20a%20consultation."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-white text-xs font-semibold hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 group"
                        >
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366] group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
