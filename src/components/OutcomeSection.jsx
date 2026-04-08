import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OutcomeSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-3 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

      {/* Huge Background Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute text-[120px] md:text-[300px] font-serif text-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
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
          {" "}
          <div className="h-[4px] w-10 bg-[#f1bd40]" />
          <span className="text-md tracking-[0.4em] font-bold text-black">
            THE OUTCOME
          </span>
        </motion.div>

        {/* Heading */}

        {/* Description */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className=" text-2xl md:text-3xl mt-10   lg:text-6xl font-medium text-[#111] "
        >
          If a brand feels unclear, inconsistent, or replaceable, the issue is
          rarely effort or visibility.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className=" mt-8 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          It is a lack of alignment at its core.
        </motion.p>

        <div className="inline-block mt-4 md:mt-8">
          <p className="text-lg md:text-xl font-extrabold text-[#111] uppercase tracking-[0.2em] relative">
            That is where MEY begins
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-yellow-400"></span>
          </p>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.8 }}
          className="mt-10"
        >
          <button className="relative px-8 py-4 border-3 border-[#f1bd40] text-[#f1bd40] font-bold tracking-[0.2em] text-sm overflow-hidden group">
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