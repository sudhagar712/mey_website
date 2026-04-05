import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "01",
    text: "One approached brands through strategy, constantly analysing positioning, market gaps, and the invisible forces that influence choice.",
  },
  {
    title: "02",
    text: "Another saw brands through creativity, understanding how design, storytelling, and visual memory shape perception.",
  },
  {
    title: "03",
    text: "The third came from a business lens, recognising that a brand is not just identity, but a system that either drives growth or silently limits it.",
  },
];

const ThreePerspective = () => {
  return (
    <section className="relative w-full bg-white py-32 overflow-hidden">
      {/* Background subtle lines */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* SMALL TITLE */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[2px] bg-yellow-500"></div>
          <h2 className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            Where It Began
          </h2>
        </div>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-4xl font-bold leading-tight mb-20"
        >
          MEY began with three friends from completely different worlds, brought
          together by a shared discomfort they couldn’t ignore.
        </motion.h2>

        {/* Story Blocks */}
        <div className="space-y-32">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-start gap-8"
            >
              {/* Number */}
              <span className="text-6xl font-bold text-[#fec000] ">
                {item.title}
              </span>

              {/* Text */}
              <p className="text-xl md:text-2xl leading-relaxed  max-w-xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Emotional Punch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-40 text-center"
        >
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            Despite their differences, they kept arriving at the same
            realisation.
          </p>

          <p className="text-xl md:text-2xl  text-[#fec000] mt-4">
            Across industries, businesses were investing more into branding and
            marketing than ever before, yet becoming increasingly
            indistinguishable.
          </p>

        
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePerspective;
