import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const differentiators = [
    {
        title: 'Truth-First Strategy',
        desc: 'We understand the real problem before designing the solution.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="1" />
                <circle cx="12" cy="12" r="3" strokeWidth="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: 'Clarity Over Clutter',
        desc: 'Every design decision must earn its place.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 4h16v16H4z" />
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10 10h4v4h-4z" />
            </svg>
        ),
    },
    {
        title: 'First-Principles Thinking',
        desc: 'No templates. Every project is built from scratch.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 2L2 12h3v8h14v-8h3L12 2z" />
            </svg>
        ),
    },
    {
        title: 'Built For Growth',
        desc: 'We create brands that scale without losing identity.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M3 21h18" />
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M5 21v-8M12 21V9M19 21V4" />
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M5 13l7-4 7-5" />
            </svg>
        ),
    },
];

const clients = [
    'Artisan Co.', 'BuildRight', 'Nova Ventures', 'ClearPath',
    'Elevate Hub', 'Prism Group', 'Anchor Brands', 'Solis Tech'
];

const DIFFERENTIATOR = () => {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const currentRefs = sectionRefs.current;
        currentRefs.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            currentRefs.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <>
            <style>
                {`
                .scroll-fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .scroll-fade-up.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                /* Responsive Checkerboard for Client Grid */
                .client-grid-container > div {
                    background-color: white;
                    color: black;
                }
                
                /* Large Screens (4 columns) - Checkerboard logic */
                @media (min-width: 1024px) {
                    .client-grid-container > div:nth-child(8n + 2),
                    .client-grid-container > div:nth-child(8n + 4),
                    .client-grid-container > div:nth-child(8n + 5),
                    .client-grid-container > div:nth-child(8n + 7) {
                        background-color: #050505;
                        color: white;
                    }
                }
                
                /* Medium Screens (2 columns) - Checkerboard logic */
                @media (max-width: 1023px) {
                    .client-grid-container > div:nth-child(4n + 2),
                    .client-grid-container > div:nth-child(4n + 3) {
                        background-color: #050505;
                        color: white;
                    }
                }
                `}
            </style>

            {/* 1. WHY MEY Section */}
            <section className="bg-[#fcfcfc] py-32 lg:py-48 px-2 md:px-12 lg:px-24 overflow-hidden relative">
                <div className="max-w-[1500px] mx-auto">

                    <div className="mb-20 scroll-fade-up text-left" ref={addToRefs}>
                        <h4 className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-black/50 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our Approach
                        </h4>
                        <h2 className="font-premium-serif text-5xl md:text-7xl font-bold text-black tracking-tighter">
                            Why MEY
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Left Side: Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {differentiators.map((diff, i) => (
                                <motion.div
                                    key={diff.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                                    className="bg-black  p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-start hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-shadow duration-500 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffff00]/10 rounded-full blur-3xl group-hover:bg-[#ffff00]/20 transition-colors duration-500"></div>
                                    <div className="text-white mb-8 p-4 bg-[#f7d83c] rounded-2xl group-hover:bg-[#ffff00] group-hover:scale-110 transition-all duration-500 relative z-10">
                                        {diff.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-white mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {diff.title}
                                    </h3>
                                    <p className="text-sm text-white font-medium leading-relaxed relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        {diff.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                            className="relative h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                                alt="MEY Strategy Presentation"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Element over Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md p-6 lg:p-8 rounded-3xl border border-white/20"
                            >
                                <p className="text-white font-medium text-base md:text-lg leading-relaxed italic" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    "Design is intelligence made visible. We don't just create visuals, we engineer business solutions."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* 2. SELECT CLIENTS Section */}
            <section className="bg-black py-32 md:py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1500px] mx-auto">

                    <div className="mb-24 text-center scroll-fade-up" ref={addToRefs}>
                        <h4 className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-white/50 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Select Clients
                        </h4>
                        <h2 className="font-premium-serif text-5xl md:text-7xl font-bold text-white tracking-tighter">
                            Trusted By
                        </h2>
                    </div>

                    <div className="client-grid-container grid grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden scroll-fade-up" ref={addToRefs}>
                        {clients.map((client) => (
                            <div
                                key={client}
                                className="relative flex items-center justify-center p-12 md:p-16 border-b border-r border-[#ffffff10] last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 hover:opacity-80 transition-opacity duration-300"
                            >
                                <img
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                    alt={`Branding clients in Chennai and India - ${client}`}
                                    className="absolute inset-0 w-full h-full opacity-0"
                                />
                                <span className="font-premium-serif text-2xl md:text-3xl font-bold italic tracking-wider text-center z-10">
                                    {client}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 3. FINAL CTA Section */}
            <section className="relative py-32 lg:py-56 px-6 md:px-12 text-center flex flex-col items-center overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg"
                        alt="CTA Background"
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-[#ffcc01]/90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto scroll-fade-up" ref={addToRefs}>

                    <h2 className="font-premium-serif text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tighter leading-[1.05] mb-6">
                        Ready to build <br />
                        <span className="italic font-light opacity-90">with clarity?</span>
                    </h2>

                    <p className="text-2xl md:text-3xl font-bold text-black/70 mb-16 tracking-wide uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Start with MEY.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
                        <Link
                            to="/contact"
                            className="group relative px-14 py-6 bg-black text-white text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-black flex items-center justify-center gap-4 border-[1.5px] border-black overflow-hidden shadow-2xl shadow-black/20"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <div className="absolute inset-0 w-full h-full bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
                            Start a Project
                            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>

                        <Link
                            to="/work"
                            className="group relative px-14 py-6 bg-transparent text-black text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 border-[1.5px] border-black overflow-hidden"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            <div className="absolute inset-0 w-full h-full bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
                            View Work
                            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
};

export default DIFFERENTIATOR;