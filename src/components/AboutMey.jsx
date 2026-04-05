import React from "react";
import { motion } from "framer-motion";
import about from "../assets/aboutro.png";

const AboutMey = () => {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden py-20">
      {/* Background subtle lines */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          {/* SMALL TITLE */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[2px] bg-yellow-500"></div>
            <h2 className="text-xs tracking-[0.4em] text-gray-400 uppercase">
              About MEY
            </h2>
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-8">
            The Truth Behind{" "}
            <span className="text-yellow-400 relative">
              Brands
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-yellow-500/20 -z-10"></span>
            </span>
          </h1>

          {/* CONTENT */}
          <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              Most brands don't fail because of poor design. They fail because
              they are built on assumptions, imitation, and noise.
            </p>

            <p>
              They look right. They sound right. But over time, they become
              forgettable, replaceable, and dependent on constant marketing to
              survive.
            </p>

            <p className="text-white font-medium ">
              MEY exists to change that.
            </p>

            <p>
              We believe when a brand is built on truth, it doesn’t chase
              attention - it earns it, holds it, and scales with clarity.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[300px] sm:w-[350px] lg:w-[450px] aspect-square">
            {/* Glass Circle */}
            <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"></div>

            {/* Rotating Image */}
            <motion.img
              src={about}
              alt="About MEY"
              className="w-full h-full object-contain relative z-10"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            />

            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full border border-yellow-500/20 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMey;