import React from "react";
import { motion } from "framer-motion";
import lol from "../assets/newpp.png"

const HowWeThink = () => {
    return (
      <section className="relative w-full py-24 md:py-32 bg-white text-[#111] overflow-hidden border-t border-gray-100 shadow-sm">
        {/* Subtle Grid Background for light theme */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        {/* Soft Glow effects for light background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-yellow-500"></span>
              <h4 className="text-gray-800 font-bold tracking-[0.2em] uppercase text-md md:text-base">
                How We Think
              </h4>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-5xl font-light mb-8 leading-tight md:leading-[1.1] tracking-tight text-gray-900">
              We don’t begin with design or marketing.{" "}
              <br className="hidden lg:block" />
              <span className="font-extrabold text-black block mt-2 lg:mt-4">
                We begin with understanding.
              </span>
            </h2>

            <div className="w-20 h-[2px] bg-gray-200 mb-8" />

            <p className="text-gray-600 text-md md:text-lg font-light leading-relaxed mb-6">
              We look at what the brand truly represents, what it can own in the
              market, and why it deserves to be chosen. This clarity becomes the
              foundation on which everything else is built.
            </p>
            <p className="text-gray-800 text-md md:text-lg font-medium leading-relaxed">
              Across different industries and stages of growth, this approach
              has consistently shifted brands from being noticed to{" "}
              <span className="text-yellow-600 font-bold">
                being preferred.
              </span>
            </p>
          </motion.div>

          {/* Right animated media element / GIF */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full aspect-square  rounded-[2rem] overflow-hidden group shadow-2xl ring-1 ring-gray-900/5 bg-gray-100"
          >
            {/* Abstract Business / Strategy / Network video acting as GIF. Dark video elegantly contrasts White UI */}
            <img
              src={lol}
              alt=""
            />

            {/* Elegant Inner shadow / Vignette overlay for light mode */}
            <div className="absolute inset-0 border border-black/10 rounded-[2rem] z-30 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.15)]" />
          </motion.div>
        </div>
      </section>
    );
};

export default HowWeThink;
