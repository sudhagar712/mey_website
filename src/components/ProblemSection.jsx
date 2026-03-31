import React from "react";
import { motion } from "framer-motion";

const text = `Businesses were investing more into branding than ever before — yet becoming increasingly indistinguishable.`;

const words = text.split(" ");

const ProblemSection = () => {
  return (
    <section className="relative bg-black text-white px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #fffbfbff 2px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,163,106,0.12),transparent_60%)]"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="text-xs tracking-[0.4em] text-[#f1bd40] uppercase">
            The problem was foundation
          </span>
          <div className="w-12 h-[1px] bg-[#f1bd40]"></div>
        </motion.div>

        <div className="flex items-center justify-center mb-10">
          <img
            src="https://media.tenor.com/pd7K0X-zSGcAAAAM/mad-locked-in.gif"
            alt="Focused"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-[0_0_40px_rgba(241,189,64,0.3)] ring-2 ring-[#f1bd40]/50 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-sm sm:text-base md:text-lg text-[#b0b0b0]"
        >
          The problem wasn't effort. It wasn't talent. It wasn't even execution.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-[#b0b0b0]"
        >
          Most brands were built on{" "}
          <span className="text-white font-medium relative">
            borrowed ideas
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#f1bd40] scale-x-0 group-hover:scale-x-100 transition"></span>
          </span>
          , temporary trends, and surface-level thinking. Designed to look good - but not to stand strong.
        </motion.p>

        {/* Bottom Quote */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 text-lg sm:text-xl md:text-2xl italic text-[#f1bd40]"
        >
          That realisation didn't feel like an insight. It felt like a
          responsibility.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;