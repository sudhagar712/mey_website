import React, { useRef } from "react";
import { motion } from "framer-motion";

const WeOperate = () => {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-[#050505] overflow-hidden text-neutral-300"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          
          {/* Left Column: Headings & Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center space-x-3 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
              </span>
              <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">The MEY Method</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05]">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 block mt-2">Operate</span>
            </h2>

            <div className="border-l-2 border-yellow-500/50 pl-6 lg:pl-8 mt-8">
              <p className="text-2xl md:text-3xl font-light text-neutral-300 leading-snug">
                Our role is not to observe from the outside, but to <span className="font-semibold text-white">engage from within.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Main Paragraph */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:w-1/2 pt-10 lg:pt-0"
          >
            <div className="relative p-8 md:p-12 lg:p-14 bg-white/[0.02] border border-white/[0.05] rounded-3xl backdrop-blur-md shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-2xl" />
              
              <div className="relative z-10">
                <svg className="w-12 h-12 text-yellow-500/30 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed md:leading-[1.8]">
                  We question assumptions, remove what weakens the brand, and build what strengthens it. From early-stage ventures finding direction to established businesses redefining their position, our focus remains the same:
                  <br /><br />
                  <span className="font-medium text-white group-hover:text-yellow-400 transition-colors duration-500">
                    ensuring that branding decisions directly contribute to business outcomes.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Callout/Line */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
          className="mt-24 lg:mt-32 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent origin-left"
        />
      </div>
    </section>
  );
};

export default WeOperate;
