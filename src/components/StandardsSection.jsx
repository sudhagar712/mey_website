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
    <section className="relative w-full py-24 md:py-32 px-4 md:px-12 bg-[#fafafa] overflow-hidden">
      {/* 🌤 Premium Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(254,192,0,0.15),transparent_10%)]"></div>

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 🏆 Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight">
            What Drives Us
          </h2>
          <p className="text-yellow-500 mt-4 max-w-xl mx-auto text-base md:text-lg">
            The principles behind everything we create.
          </p>
        </div>

        {/* 📱 MOBILE = STACKED CARDS */}
        <div className="flex flex-col gap-6 md:hidden">
          {drives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-black rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-2 border-white">
                {/* 🔢 Big Number */}
                <div className="text-5xl font-bold text-[#fec000] mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* ✨ Accent */}
                <div className="h-[3px] w-10 bg-[#fec000] mb-4 rounded-full"></div>

                <p className="text-white  leading-relaxed text-base ">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 💻 DESKTOP TIMELINE */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#fec000] to-transparent" />

          {drives.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-center mb-24">
                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-[#fec000] rounded-full shadow-[0_0_20px_rgba(254,192,0,0.6)]"></div>
                </div>

                {/* Content */}
                <div
                  className={`w-1/2 ${
                    isLeft ? "pr-16 text-right" : "pl-16 ml-auto"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative bg-black p-8 rounded-2xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)] transition duration-500">
                      {/* 🔢 Number */}
                      <div className="absolute -top-6 text-6xl font-bold text-[#fec000]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Accent Line */}
                      <div className="h-[3px] w-12 bg-[#fec000] mb-4 rounded-full"></div>

                      <p className="text-white text-3xl font-bold leading-relaxed">
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
