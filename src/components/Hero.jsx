import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <>
           
          
            <motion.section
                className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >

                {/* Subtle Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} />

                <div className="relative z-10 max-w-[1400px] w-full mx-auto flex flex-col items-center text-center mt-[-6vh]">

                    {/* Giant Logo with Overlay Text */}
                    <div className="relative mb-24 w-full flex flex-col items-center justify-center">

                        <motion.h1
                            className="text-[150px] sm:text-[240px] md:text-[320px] lg:text-[400px] leading-[0.75] font-premium-serif font-bold tracking-tighter text-black select-none z-0"
                            initial={{ y: 18, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            MEY
                        </motion.h1>

                        {/* Glassmorphism Strip Overlay */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] flex justify-center items-center pointer-events-none z-10"
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        >
                            <div className="w-full h-[60px] md:h-[110px] bg-[#ffcc01]/60 backdrop-blur-md flex items-center justify-center border-y border-black/10 transform shadow-2xl shadow-[#ffff00]/50">
                                <p className="font-premium-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-wider whitespace-nowrap px-8 font-light">
                                    Truth Before Business
                                </p>
                            </div>
                        </motion.div>

                    </div>

                    {/* Content Box */}
                    <motion.div
                        className="flex flex-col items-center max-w-4xl mx-auto"
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >

                        <div className="flex items-center gap-6 mb-10 w-full justify-center">
                            <div className="w-16 h-px bg-black/30"></div>
                            <h2 className="text-[12px] md:text-xs bg-white p-5 md:p-3 rounded-md  font-bold uppercase tracking-[0.3em] text-black/80 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Branding & Digital Marketing Agency in Chennai
                            </h2>
                            <div className="w-16 h-px bg-black/30"></div>
                        </div>

                        <p className="text-xl md:text-3xl lg:text-[2.1rem] text-black/80 font-medium leading-[1.6] mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            We build <span className="text-black font-bold italic border-b border-black/30">clear</span>, <span className="text-black font-bold italic border-b border-black/30">powerful</span> and <span className="text-black font-bold italic border-b border-black/30">growth-focused</span> brands <br className="hidden lg:block" /> for startups and ambitious businesses.
                        </p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                        >
                            {/* Premium Button 1 */}
                            <Link
                                to="/work"
                                className="group relative px-14 py-6 bg-black text-white text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 rounded-none border-[1.5px] border-black overflow-hidden shadow-2xl shadow-black/20"
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            >
                                <div className="absolute inset-0 w-full h-full bg-[#ffff00]  translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
                                View Work
                                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>

                            {/* Premium Button 2 */}
                           <Link
  to="contact"
  smooth={true}
  duration={600}
  offset={-80}
  className="group relative px-14 py-6 bg-transparent text-black text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 rounded-none border-[1.5px] border-black overflow-hidden"
  style={{ fontFamily: "Poppins, sans-serif" }}
>
  <div className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>

  Start a Project

  <svg
    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
</Link>
                        </motion.div>

                    </motion.div>
                </div>

              

                <style dangerouslySetInnerHTML={{
                    __html: `
          @keyframes slideDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(200%); opacity: 0; }
          }
        `}} />
            </motion.section>
        </>
    );
};

export default Hero;