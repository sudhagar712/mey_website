import React from "react";
import { motion } from "framer-motion";

const WeOperate = () => {
  return (
    <section className="py-20 bg-yellow-500 px-6 md:px-16 relative">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 3px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            How We Operate
          </h2>

          {/* LINE */}
          <div className="w-16 h-[2px] bg-black"></div>

          <p className=" text-lg leading-relaxed">
            Our role is not to observe from the outside, but to engage from
            within.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10  bg-black p-10 text-white"
        >
          {/* BLOCK 1 */}
          <div>
            <p className="text-xl md:text-2xl text-yellow-500 leading-relaxed font-medium">
              We question assumptions, remove what weakens the brand, and build
              what strengthens it.
            </p>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-gray-200"></div>

          {/* BLOCK 2 */}
          <div>
            <p className="text-lg md:text-xl  leading-relaxed">
              From early-stage ventures finding direction to established
              businesses redefining their position, our focus remains
              consistent.
            </p>
          </div>

          {/* HIGHLIGHT */}
          <div className="border-l-4 border-yellow-500 pl-6">
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Ensuring that branding decisions directly contribute to business
              outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeOperate;
