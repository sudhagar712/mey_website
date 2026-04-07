import React from "react";
import { motion } from "framer-motion";

const WhatMeyMeans = () => {

  const ScreenContent = ({ isMobile }) => (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center text-center overflow-hidden
      ${isMobile ? "px-6 py-6" : "px-12 py-10 lg:px-20 lg:py-16"}
      bg-gradient-to-br from-[#fbd415] via-[#ffe45e] to-[#fff3a3]`}
    >

      {/* ✨ Shine Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 animate-shine" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-[#111] font-semibold tracking-[-0.02em]
        ${isMobile ? "text-2xl mb-8" : "text-4xl lg:text-5xl mb-12"}`}
      >
        What MEY Means
      </motion.h2>

      <div className={`w-[70%] h-[1px] bg-black/10 ${isMobile ? "mb-8" : "mb-12"}`} />

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className={`font-semibold text-[#111] tracking-tight
        ${isMobile ? "text-[17px] mb-6" : "text-2xl lg:text-3xl mb-8"}`}
      >
        MEY stands for truth.
      </motion.h3>

      <p className={`text-black/80 font-medium ${isMobile ? "text-[13px] mb-8" : "text-lg lg:text-xl mb-12"}`}>
        Not as a statement, but as a{" "}
        <span className="font-bold text-black border-b-[2px] border-black/80 pb-[1px]">
          standard.
        </span>
      </p>

      <div className={`w-[70%] h-[1px] bg-black/10 ${isMobile ? "mb-8" : "mb-12"}`} />

      <p className={`text-black/90 font-medium ${isMobile ? "text-[12px] leading-[1.8]" : "text-[15px] lg:text-[18px] leading-[1.8] max-w-[85%]"}`}>
        At <span className="font-bold">MEY</span>, every brand we build
        {isMobile ? " " : <br />}
        or transform is anchored in one
        {isMobile ? " " : <br />}
        principle:{" "}
        <span className="font-bold border-b border-black/80 pb-[1px]">
          alignment between identity, perception, and reality.
        </span>
      </p>
    </div>
  );

  return (
    <section className="relative w-full py-24 md:py-32 bg-white flex flex-col items-center justify-center overflow-hidden">

      {/* 🌌 Premium Background Glow */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.05), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.05), transparent 40%)",
        }}
      />

      <div className="relative w-full max-w-[1000px] mx-auto px-4 md:px-0 flex justify-center items-center mt-10 md:mt-20 mb-20">

        {/* 💻 Laptop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-full max-w-[800px] mx-auto z-10 hidden md:block"
        >
          <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] rounded-[2rem] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.25)]">
            
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full" />

            <div className="w-full h-full rounded-[1rem] overflow-hidden">
              <ScreenContent isMobile={false} />
            </div>
          </div>

          <div className="relative w-[115%] -left-[7.5%] h-6 bg-gradient-to-b from-[#e3e3e3] to-[#a8a8a8] rounded-b-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] flex justify-center">
            <div className="w-24 h-3 bg-[#bebebe] rounded-b-md shadow-inner"></div>
          </div>
        </motion.div>

        {/* 📱 Mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          whileHover={{ scale: 1.05 }}
          animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="md:absolute md:-right-8 lg:-right-16 md:-bottom-12 z-20 w-[280px] md:w-[320px] mx-auto"
        >
          <div className="relative w-full aspect-[9/19] bg-[#1a1a1a] rounded-[3rem] p-[14px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] border-[4px] border-[#2A2A2A]">

            <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[45%] h-[28px] bg-[#1a1a1a] rounded-b-3xl z-30 flex justify-center items-center">
              <div className="w-12 h-[4px] bg-[#333] rounded-full mt-1"></div>
            </div>

            <div className="w-full h-full rounded-[2.2rem] overflow-hidden">
              <ScreenContent isMobile={true} />
            </div>

            {/* Buttons */}
            <div className="absolute top-24 -left-[6px] w-[3px] h-8 bg-gray-700 rounded-l-md"></div>
            <div className="absolute top-36 -left-[6px] w-[3px] h-14 bg-gray-700 rounded-l-md"></div>
            <div className="absolute top-28 -right-[6px] w-[3px] h-16 bg-gray-700 rounded-r-md"></div>
          </div>
        </motion.div>

      </div>

      {/* ✨ Shine Animation CSS */}
      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-50%) rotate(12deg); }
            100% { transform: translateX(50%) rotate(12deg); }
          }
          .animate-shine {
            animation: shine 6s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default WhatMeyMeans;