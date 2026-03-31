import React from 'react';
import { motion } from 'framer-motion';

const WhatMeyMeans = () => {

    // Reusable Screen Content matching the precise reference text and typography
    const ScreenContent = ({ isMobile }) => (
        <div className={`w-full h-full bg-[#fbd415] flex flex-col items-center justify-center text-center ${isMobile ? 'px-6 py-6' : 'px-12 py-10 lg:px-20 lg:py-16'}`}>
            <h2 className={`text-[#111] font-medium tracking-tight ${isMobile ? 'text-2xl mb-8' : 'text-4xl lg:text-5xl mb-12'}`}>
                What MEY Means
            </h2>

            <div className={`w-[70%] h-[1px] bg-black/10 ${isMobile ? 'mb-8' : 'mb-12'}`} />

            <h3 className={`font-semibold text-[#111] tracking-tight ${isMobile ? 'text-[17px] mb-6' : 'text-2xl lg:text-3xl mb-8'}`}>
                MEY stands for truth.
            </h3>

            <p className={`text-black/80 font-medium ${isMobile ? 'text-[13px] mb-8' : 'text-lg lg:text-xl mb-12'}`}>
                Not as a statement, but as a <span className="font-bold text-black border-b-[2px] border-black/80 pb-[1px]">standard.</span>
            </p>

            <div className={`w-[70%] h-[1px] bg-black/10 ${isMobile ? 'mb-8' : 'mb-12'}`} />

            <p className={`text-black/90 font-medium ${isMobile ? 'text-[12px] leading-[1.8]' : 'text-[15px] lg:text-[18px] leading-[1.8] max-w-[85%]'}`}>
                At <span className="font-bold">MEY</span>, every brand we build
                {isMobile ? ' ' : <br />}
                or transform is anchored in one
                {isMobile ? ' ' : <br />}
                principle: <span className="font-bold border-b border-black/80 pb-[1px]">alignment between identity, perception, and reality.</span>
            </p>
        </div>
    );

    return (
        <section className="relative w-full py-24 md:py-32 bg-white flex flex-col items-center justify-center overflow-hidden">

            <div className="relative w-full max-w-[1000px] mx-auto px-4 md:px-0 flex justify-center items-center mt-10 md:mt-20 mb-20">

                {/* Macbook Mockup CSS Component */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-[800px] mx-auto z-10 hidden md:block"
                >
                    {/* Laptop Lid (Screen Bezel) */}
                    <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] rounded-[2rem] p-3 md:p-4 shadow-2xl ring-1 ring-black/10">
                        {/* Camera Dot */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#0a0a0a] rounded-full"></div>
                        {/* Screen Area */}
                        <div className="w-full h-full bg-[#fbd415] rounded-[1rem] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]">
                            <ScreenContent isMobile={false} />
                        </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="relative w-[115%] -left-[7.5%] h-5 md:h-6 bg-gradient-to-b from-[#e3e3e3] to-[#a8a8a8] rounded-b-[2rem] rounded-t-[4px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] flex justify-center">
                        {/* Trackpad Notch */}
                        <div className="w-24 h-2 md:h-3 bg-[#bebebe] rounded-b-md shadow-inner"></div>
                    </div>
                </motion.div>

                {/* iPhone Mockup CSS Component */}
                <motion.div
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="md:absolute md:-right-8 lg:-right-16 md:-bottom-12 z-20 w-[280px] md:w-[320px] mx-auto"
                >
                    {/* Main phone body */}
                    <div className="relative w-full aspect-[9/19] bg-[#1a1a1a] rounded-[3rem] p-2 md:p-[14px] shadow-[0_25px_50px_rgba(0,0,0,0.5)] ring-1 ring-gray-900 border-[4px] border-[#2A2A2A]">
                        {/* iPhone Notch */}
                        <div className="absolute top-2 md:top-[14px] left-1/2 -translate-x-1/2 w-[45%] h-[28px] bg-[#1a1a1a] rounded-b-3xl z-30 flex justify-center items-center">
                            <div className="w-12 h-[4px] bg-[#333] rounded-full mt-1"></div>
                        </div>

                        {/* Screen */}
                        <div className="w-full h-full bg-[#fbd415] rounded-[2.2rem] overflow-hidden relative shadow-[inset_0_0_15px_rgba(0,0,0,0.05)]">
                            <ScreenContent isMobile={true} />
                        </div>

                        {/* Side hardware buttons (subtle details) */}
                        <div className="absolute top-24 -left-[6px] w-[3px] h-8 bg-gray-700/80 rounded-l-md"></div>
                        <div className="absolute top-36 -left-[6px] w-[3px] h-14 bg-gray-700/80 rounded-l-md"></div>
                        <div className="absolute top-28 -right-[6px] w-[3px] h-16 bg-gray-700/80 rounded-r-md"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhatMeyMeans;
