import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";

const images = [p1, p2, p3, p4];

const Printcreative = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔄 Auto Slide
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden ">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* 🔥 Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#fec000]/10 blur-[140px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

      <div className="relative z-10 px-4 md:px-16">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-semibold tracking-tight">
            Print Creatives
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg">
            Crafted visuals that elevate brand presence across print mediums.
          </p>
        </div>

        {/* 🎬 SLIDER */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {images.map((img, i) => {
              const position = (i - index + images.length) % images.length;

              const isCenter = position === 0;

              return (
                <motion.div
                  key={i}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative flex-shrink-0"
                  style={{
                    width: isCenter ? "320px" : "260px",
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                    {/* Image */}
                    <img
                      src={img}
                      alt="creative"
                      className="w-full h-[420px] object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Label */}
                    <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                      <span className="text-white text-sm font-medium">
                        Creative {i + 1}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white">
                        Print
                      </span>
                    </div>

                    {/* Glow Border */}
                    {isCenter && (
                      <div className="absolute inset-0 border border-[#fec000]/60 rounded-2xl"></div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Printcreative;
