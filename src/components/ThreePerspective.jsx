import React from "react";
import { motion } from "framer-motion";
import im1 from "../assets/1imm.png"
import im2 from "../assets/2imm.png"
import im3 from "../assets/3imm.png"

const ThreePerspective = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#FCFCFC] text-black overflow-hidden flex flex-col justify-center">
      {/* Background Subtle Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Main Content Container */}
        <div className="flex flex-col justify-center lg:py-4">

          {/* Header label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <h4 className="text-sm tracking-[0.3em] font-bold text-gray-500 uppercase">
              Where It Began
            </h4>
          </motion.div>

          {/* Introduction huge text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-5xl text-gray-900 font-bold mb-16 md:w-4/5 leading-tight"
          >
            MEY began with three friends from completely different worlds, brought together by a shared discomfort they couldn’t ignore.
          </motion.h2>

          {/* The Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full mt-4">

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col group"
            >
              <div className="overflow-hidden rounded-2xl mb-8 aspect-[4/5] relative bg-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={im1}
                  alt="Strategy Perspective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4 uppercase tracking-widest text-xs">
                01. Strategy
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                <span className="text-gray-900 font-semibold">One approached brands through strategy,</span> constantly analysing positioning, market gaps, and the invisible forces that influence choice.
              </p>
            </motion.div>

            {/* Creativity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col group"
            >
              <div className="overflow-hidden rounded-2xl mb-8 aspect-[4/5] relative bg-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={im2}
                  alt="Creativity Perspective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4 uppercase tracking-widest text-xs">
                02. Creativity
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                <span className="text-gray-900 font-semibold">Another saw brands through creativity,</span> understanding how design, storytelling, and visual memory shape perception.
              </p>
            </motion.div>

            {/* Business */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="flex flex-col group"
            >
              <div className="overflow-hidden rounded-2xl mb-8 aspect-[4/5] relative bg-gray-100 shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={im3}
                  alt="Business Perspective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4 uppercase tracking-widest text-xs">
                03. Business
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                <span className="text-gray-900 font-semibold">The third came from a business lens,</span> recognising that a brand is not just identity, but a system that either drives growth or silently limits it.
              </p>
            </motion.div>

          </div>

          {/* Conclusion Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="mt-20 pt-12 border-t border-gray-200 md:max-w-4xl max-w-full"
          >
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 italic font-serif">
              Despite their differences, they kept arriving at the same realisation.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Across industries, businesses were investing more into branding and marketing than ever before, yet becoming increasingly indistinguishable. <br className="hidden md:block" /> <span className="text-black font-bold bg-yellow-500/20 px-2 py-1 inline-block mt-3">The problem wasn’t effort. It wasn’t talent. It wasn’t even execution.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ThreePerspective;