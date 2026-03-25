import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OutcomeSection = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 px-6 overflow-hidden mb-3">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

      {/* Huge Background Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute text-[120px] md:text-[220px] font-serif text-white/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
      >
        TRUTH
      </motion.h1>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="text-xs tracking-[0.4em] text-[#f1bd40]">
            THE OUTCOME
          </span>
          <div className="h-[1px] w-16 bg-[#f1bd40]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-serif leading-tight"
        >
          Clearer. Stronger.
        </motion.h2>

        {/* Sub Heading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#f1bd40] text-2xl md:text-5xl mt-4"
        >
          Impossible to ignore.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-white/60 mt-8 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          If a brand feels unclear, inconsistent, or replaceable, the issue is
          rarely effort or visibility. It is a lack of alignment at its core.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="text-white/50 mt-4"
        >
          That is where MEY begins.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.8 }}
          className="mt-10"
        >
          <button className="relative px-8 py-4 border border-[#f1bd40] text-[#f1bd40] tracking-[0.2em] text-sm overflow-hidden group">
            {/* Hover Fill */}
            <span className="absolute inset-0 bg-[#f1bd40] translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out" />

            {/* Text */}
            <Link to="/contact">
              <span className="relative z-10 group-hover:text-black transition duration-500">
                START THE CONVERSATION
              </span>
            </Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OutcomeSection;