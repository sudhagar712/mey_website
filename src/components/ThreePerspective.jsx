import React from "react";
import { motion } from "framer-motion";
import three from "../assets/threefnds2.jpg";

const ThreePerspective = () => {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      {/* 🌟 Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,192,0,0.12),transparent_60%)]" />

      {/* 🔲 Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10">
        {/* 🔖 Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-[3px] bg-[#FEC000]"></div>
          <h2 className="text-md tracking-[0.4em] font-semibold uppercase text-gray-600">
            Where It Began
          </h2>
        </div>

        {/* 🧠 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold leading-tight mb-12 md:mb-16 text-gray-900 max-w-2xl"
        >
          MEY began with three friends from completely different worlds, brought
          together by a shared discomfort they couldn’t ignore.
        </motion.h2>

        {/* 💎 MAIN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* 🖼 IMAGE LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
          >
            <img
              src={three}
              alt="three friends"
              className="w-full h-full object-cover object-center"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* 📖 CONTENT RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.08)]">
              {/* ✨ Accent */}
              <div className="h-[3px] w-12 bg-[#FEC000] mb-6 rounded-full"></div>

              {/* Story */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-lg">
                <p>
                  One approached brands through{" "}
                  <span className="font-semibold text-gray-900">strategy</span>{" "}
                  — constantly analysing positioning, market gaps, and the
                  invisible forces that influence choice.
                </p>

                <p>
                  Another saw brands through{" "}
                  <span className="font-semibold text-gray-900">
                    creativity
                  </span>{" "}
                  — understanding how design, storytelling, and visual memory
                  shape perception.
                </p>

                <p>
                  And another focused on{" "}
                  <span className="font-semibold text-gray-900">execution</span>{" "}
                  — ensuring that ideas are not just imagined, but built with
                  clarity, consistency, and impact.
                </p>
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#FEC000]/40 transition duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* 🎯 FINAL LINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-xl md:text-3xl font-semibold text-gray-900 leading-tight">
            Despite their differences, they kept arriving at the same
            realisation.
          </p>

          <p className="mt-5">
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
