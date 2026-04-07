import React from "react";
import { motion } from "framer-motion";

const drives = [
  "Clarity is non-negotiable. Complexity is often a sign of something unresolved.",
  "Truth creates longevity. Trends create dependency.",
  "Design is powerful only when it is guided by clear decisions.",
  "Consistency builds recognition, trust, and recall over time.",
  "A brand must ultimately perform. If it does not contribute to growth, it does not work.",
];

const WhatDrivesUs = () => {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-12 bg-black overflow-hidden">
      {/* 🔥 Premium Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#fec000]/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

      {/* 🔲 Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
            What Drives Us
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Principles that define how we think, design, and build.
          </p>
        </div>

        <div className="relative">
          {/* 🌟 Gradient Timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#fec000]/60 to-transparent" />

          {drives.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-start md:items-center mb-20"
              >
                {/* ✨ Glow Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-[#fec000] shadow-[0_0_20px_#fec000,0_0_40px_#fec000]"></div>
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                  } pl-10 md:pl-0`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    {/* 💎 Glass Card */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition duration-500 group-hover:bg-white/10 group-hover:border-[#fec000]/40">
                      {/* Glow Border */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-[#fec000]/30 blur-[1px]" />

                      <p className="text-gray-200 text-base md:text-lg leading-relaxed tracking-wide">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
