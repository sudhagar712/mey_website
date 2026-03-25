import React from "react";
import { motion } from "framer-motion";
import about from "../assets/brandneww.png";

const AboutMey = () => {
  return (
    <section className="w-full bg-white">
      {/* Container */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 ">
        {/* LEFT CONTENT */}
        <div className="flex justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full"
          >
            {/* Heading small */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-black"></div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em]">
                ABOUT MEY
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 font-semibold">
              The Truth Behind
              <span className="text-yellow-500 ml-3">Brands</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-2xl leading-relaxed">
              Most brands don't fail because of poor design. They fail because
              they are built on assumptions, imitation, and noise. MEY exists to
              change that.
            </p>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[790px]   overflow-hidden">
          <motion.img
            src={about}
            alt="About MEY Agency"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-fit  hover:scale-105 transition duration-1000 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMey;