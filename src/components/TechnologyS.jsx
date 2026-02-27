import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechnologyS = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-out-cubic'
        });
    }, []);

    return (
        <section className="">
            <div className="grid md:grid-cols-2 min-h-[600px]">

                {/* Left: High Contrast Equipment Image */}
                <div className="relative h-full w-full overflow-hidden group" data-aos="fade-right">
                    <div className="absolute inset-0 bg-yellow-100/50 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                    {/* Using a high-quality dental equipment image placeholder */}
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop"
                        alt="Advanced Dental Technology"
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale hover:grayscale-0"
                    />
                </div>

                {/* Right: Content */}
                <div className="flex flex-col justify-center px-8 py-20 md:p-20 relative overflow-hidden">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-lg space-y-8" data-aos="fade-left">
                        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block">
                            Our Precision
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl  text-white leading-[1.1]">
                            Technology That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B5952F]">Strengthens</span> Decisions.
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                            Digital imaging. Laser-assisted procedures. Precision restorative systems. Structured sterilization protocols.
                        </p>

                        <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed border-l-2 border-[#D4AF37] pl-6 italic">
                            "We invest in clarity so your treatment is predictable."
                        </p>

                        <div className="pt-8">
                            {/* Assuming CTA links to About or Services, using a dummy link for now or just a button style */}
                            <button
                                onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                                className="inline-flex items-center gap-4 text-white font-bold tracking-widest uppercase text-sm group hover:text-[#D4AF37] transition-colors"
                            >
                                See How We Work
                                <span className="w-12 h-[1px] bg-white group-hover:w-20 group-hover:bg-[#D4AF37] transition-all duration-300"></span>
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyS;