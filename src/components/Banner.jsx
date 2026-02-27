import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import bannerpic from '../assets/bannerpic.png';
import animationVideo from '../assets/animationv7.mp4';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 }
    }
};

const Banner = () => {
    return (
        <section className="relative w-full mt-10 md:mt-0 min-h-screen lg:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-28 pb-12 lg:pt-20 px-4 md:px-8 lg:px-12">
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Text Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center mt-0 lg:mt-10 items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8"
                >

                    {/* Badge */}
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-sm transition-transform hover:scale-105 duration-300">
                        <span className="relative flex h-2.5 w-2.5 lg:h-3 lg:w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 lg:h-3 lg:w-3 bg-[#D4AF37]"></span>
                        </span>
                        <span className="text-white text-xs lg:text-sm font-bold tracking-widest uppercase">
                            Best Dental Clinic in Anna Nagar
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <div className="space-y-3 lg:space-y-4">
                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight drop-shadow-xl">
                            <span className="block text-white">AJ &nbsp; DENTO</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                AESTHETIC CARE
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-base md:text-lg lg:text-xl text-gray-200 italic font-light max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Crafting Smiles with Precision. <br className="hidden md:block" />
                        </motion.p>
                    </div>

                    {/* Action Buttons */}
                    <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 lg:pt-4">
                        <button
                            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#FFE600] to-[#FFC200] text-[#4D0013] font-bold rounded-full overflow-hidden shadow-[0_10px_20px_rgba(255,220,0,0.35)] hover:shadow-[0_15px_30px_rgba(255,220,0,0.55)] active:scale-95 transition-all duration-300 inline-block text-center"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm lg:text-base">
                                Begin Consultation
                                <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 lg:px-8 lg:py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group text-sm lg:text-base">
                            <span>Explore Expertise</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Hero Image */}
                <motion.div
                    variants={imageAnimation}
                    initial="hidden"
                    animate="visible"
                    className="relative w-full flex justify-center items-center text-center mt-5"
                >
                    <div className="relative w-full max-w-full md:max-w-md lg:max-w-xl aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-full blur-3xl -z-10"></div>

                        <video
                            src={animationVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={bannerpic}
                            className="relative z-10 w-full h-full md:h-[500px] md:w-[500px] object-cover rounded-full  drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700 ease-out mix-blend-screen"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;