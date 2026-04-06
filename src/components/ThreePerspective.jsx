import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "01",
    text: "One approached brands through strategy, constantly analysing positioning, market gaps, and the invisible forces that influence choice.",
    image:
      "https://www.outsourceaccelerator.com/wp-content/uploads/2021/12/10-types-of-brand-strategy-that-will-help-your-business-succeed.png",
  },
  {
    title: "02",
    text: "Another saw brands through creativity, understanding how design, storytelling, and visual memory shape perception.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFIYDoCeowdSw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714746366526?e=2147483647&v=beta&t=zVmONTCqRQkx2bEVCHIefwp6w_GI4Yn6efQ_tO0X4IA",
  },
  {
    title: "03",
    text: "The third came from a business lens, recognising that a brand is not just identity, but a system that either drives growth or silently limits it.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600",
  },
];

const ThreePerspective = () => {
  return (
    <section className="relative w-full bg-white py-32 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Title */}
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
          className="text-4xl font-bold leading-tight mb-20"
        >
          MEY began with three friends from completely different worlds,
          brought together by a shared discomfort they couldn’t ignore.
        </motion.h2>

        {/* Cards */}
        <div className="space-y-16">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="card"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white max-w-2xl">
                <span className="text-5xl font-bold text-[#fec000]">
                  {item.title}
                </span>

                <p className="mt-4 text-lg md:text-xl leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-32 text-center"
        >
          <p className="text-3xl md:text-5xl font-bold leading-tight">
            Despite their differences, they kept arriving at the same
            realisation.
          </p>

          <p className="text-xl md:text-2xl text-[#fec000] mt-4">
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