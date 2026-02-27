import React, { useEffect } from 'react';
import { ClipboardList, Stethoscope, Calendar, Activity, Smile } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ourapproach = () => {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    const steps = [
        {
            title: "Assessment",
            icon: ClipboardList,
            description: "Comprehensive clinical evaluation.",
            number: "01"
        },
        {
            title: "Diagnosis",
            icon: Stethoscope,
            description: "Digital clarity and structured findings.",
            number: "02"
        },
        {
            title: "Planning",
            icon: Calendar,
            description: "Personalized treatment roadmap.",
            number: "03"
        },
        {
            title: "Execution",
            icon: Activity,
            description: "Precision-driven procedure delivery.",
            number: "04"
        },
        {
            title: "Follow-Up",
            icon: Smile,
            description: "Monitoring for long-term stability.",
            number: "05"
        },
    ];

    return (
        <section className="relative py-20 md:py-28 overflow-hidden">

            {/* Yellow Gradient Background */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #FFD700 0%, #FFC200 20%, #FFAA00 45%, #F5A623 65%, #E8960A 85%, #D4830A 100%)' }} />

            {/* Center radial glow */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.28) 0%, transparent 70%)' }} />

            {/* Decorative Overlay Circles */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-amber-900/15 translate-x-1/3 translate-y-1/3 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-56 h-56 rounded-full bg-white/15 blur-2xl" />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `radial-gradient(circle, #4D0013 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-14 md:mb-20" data-aos="fade-down">
                    <span className="inline-block text-[#4D0013]/70 font-semibold tracking-[0.25em] uppercase text-xs mb-3">
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#4D0013] drop-shadow-sm mb-4">
                        Our <span className="text-white drop-shadow-md">Approach</span>
                    </h2>
                    <div className="w-20 h-1 bg-white/60 mx-auto rounded-full" />
                    <p className="mt-5 text-[#4D0013]/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-medium">
                        A structured, patient-first process designed to deliver precise, comfortable, and lasting dental care.
                    </p>
                </div>

                {/* Steps Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group relative"
                        >
                            {/* Connector Line (Desktop only, between cards) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[52px] left-[calc(100%-0px)] w-full h-[2px] z-0">
                                    <div className="w-full h-full bg-white/40 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent animate-pulse" />
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div className="relative z-10 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-[0_8px_32px_rgba(77,0,19,0.12)] hover:bg-white/35 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(77,0,19,0.20)] transition-all duration-400 cursor-default h-full
                                flex flex-row items-center gap-4
                                lg:flex-col lg:items-center lg:text-center lg:p-7">

                                {/* Step Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#4D0013] text-white text-xs font-extrabold flex items-center justify-center shadow-lg border-2 border-white">
                                    {step.number}
                                </div>

                                {/* Icon Circle — Left on mobile, top on desktop */}
                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex-shrink-0 flex items-center justify-center lg:mb-5 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border-4 border-[#D4AF37]/30">
                                    <step.icon
                                        size={28}
                                        className="text-[#4D0013] group-hover:text-[#800020] transition-colors duration-300"
                                    />
                                </div>

                                {/* Right Content — title + desc on mobile, stacked on desktop */}
                                <div className="flex flex-col items-start lg:items-center flex-grow">
                                    {/* Title */}
                                    <h3 className="text-[#4D0013] font-extrabold text-base lg:text-lg mb-1 lg:mb-2 tracking-wide text-left lg:text-center">
                                        {step.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-8 lg:w-10 h-0.5 bg-[#4D0013]/30 rounded-full mb-2 group-hover:w-14 transition-all duration-300" />

                                    {/* Description */}
                                    <p className="text-[#4D0013]/75 text-sm leading-relaxed font-medium text-left lg:text-center">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <div className="text-center mt-12 md:mt-16" data-aos="fade-up" data-aos-delay="600">
                    <p className="text-[#4D0013]/70 font-semibold text-sm tracking-widest uppercase">
                        ✦ &nbsp; Every step. Every smile. Perfected. &nbsp; ✦
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Ourapproach;