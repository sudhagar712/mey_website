import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "Clarity is non-negotiable",
    desc: "Complexity is often a sign of something unresolved. We strip it away until only truth remains.",
  },
  {
    title: "Truth creates longevity",
    desc: "Trends create dependency. A brand anchored in truth stands through every market shift.",
  },
  {
    title: "Design follows decisions",
    desc: "Design is powerful only when it is guided by clear decisions. Aesthetics without strategy is decoration.",
  },
  {
    title: "Consistency builds trust",
    desc: "Recognition, trust, and recall are built through consistent identity over time — not campaigns.",
  },
  {
    title: "A brand must ultimately perform",
    desc: "If it does not contribute to growth, it does not work. Every branding decision must serve a business outcome.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const StandardsSection = () => {
  return (
    <section className="relative bg-white text-black px-6 md:px-12 lg:px-24 py-20 md:py-28 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs tracking-[0.3em] font-bold uppercase">
              What Drives Us
            </span>
            <div className="w-10 h-[1px] bg-gray-400"></div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            The standards we hold{" "}
            <span className="italic text-black/70">non-negotiable.</span>
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {data.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8  border-4 border-yellow-500 backdrop-blur-xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              {/* Glass highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              {/* Title */}
              <h3 className="text-lg md:text-3xl text-[#f1bd40] font-medium mb-3">
                {itemData.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-md mt-10 text-white leading-relaxed">
                {itemData.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StandardsSection;
