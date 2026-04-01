import React from "react";
import { motion } from "framer-motion";

const ThreePerspective = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white text-black overflow-hidden flex flex-col justify-center">
      {/* Background Subtle Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 relative z-10">

        {/* Left Side: Editorial Image & Caption */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-gray-900/5 group">
            {/* Team/Friends Image. Grayscale by default to look highly aesthetic, reveals color on hover */}
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
              alt="Three Founders Background"
              className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-110"
            />

            {/* Vignette styling for a smooth text caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none transition-opacity duration-1000 group-hover:opacity-40" />
            <div className="absolute inset-x-0 bottom-0 p-8 pb-10">
              <p className="text-white font-serif italic text-2xl drop-shadow-lg">The shared discomfort.</p>
              <div className="w-10 h-1 bg-yellow-500 mt-4"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Story */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:py-4">

          {/* Header label */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
            className="text-3xl md:text-4xl text-gray-900 mb-12"
          >
            MEY began with three friends from completely different worlds, brought together by a shared discomfort they couldn’t ignore.
          </motion.h2>

          {/* The Three Pillars Text Box */}
          <div className="space-y-8 pl-6 border-l-[3px] border-yellow-500/40">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
            >
              <span className="text-[#111] font-bold">One approached brands through strategy,</span> constantly analysing positioning, market gaps, and the invisible forces that influence choice.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
            >
              <span className="text-[#111] font-bold">Another saw brands through creativity,</span> understanding how design, storytelling, and visual memory shape perception.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-light"
            >
              <span className="text-[#111] font-bold">The third came from a business lens,</span> recognising that a brand is not just identity, but a system that either drives growth or silently limits it.
            </motion.p>
          </div>

          {/* Conclusion Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="mt-12 pt-10 border-t border-gray-200"
          >
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 italic font-serif">
              Despite their differences, they kept arriving at the same realisation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Across industries, businesses were investing more into branding and marketing than ever before, yet becoming increasingly indistinguishable. <span className="text-[#111] font-bold bg-yellow-500/20 px-1 py-0.5">The problem wasn’t effort. It wasn’t talent. It wasn’t even execution.</span>
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ThreePerspective;