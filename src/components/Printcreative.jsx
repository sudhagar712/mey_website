import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";

const images = [p1, p2, p3, p4];

const Printcreative = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* BG Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#fec000]/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl text-white font-semibold">
            Print Creatives
          </h2>
          <p className="text-gray-400 mt-3 max-w-md text-sm">
            Crafted visuals that elevate brand presence across print mediums.
          </p>
        </div>

        {/* 🎬 SLIDER */}
        <div
          className="relative w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 🔹 MOBILE VIEW (ONLY CENTER CARD) */}
          <div className="block md:hidden">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={images[index]}
                  alt="creative"
                  className="w-full h-[320px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <span className="text-white text-sm">
                    Creative {index + 1}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                    Print
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 🔹 DESKTOP / TABLET VIEW */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10">
            {images.map((img, i) => {
              const position = (i - index + images.length) % images.length;
              const isCenter = position === 0;

              return (
                <motion.div
                  key={i}
                  animate={{
                    scale: isCenter ? 1 : 0.85,
                    opacity: isCenter ? 1 : 0.4,
                    y: isCenter ? 0 : 30,
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                  style={{
                    width: isCenter ? "340px" : "260px",
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={img}
                      alt="creative"
                      className="w-full h-[420px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-5 left-5 right-5 flex justify-between">
                      <span className="text-white text-sm">
                        Creative {i + 1}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                        Print
                      </span>
                    </div>

                    {isCenter && (
                      <div className="absolute inset-0 border border-[#fec000]/60 rounded-2xl shadow-[0_0_30px_rgba(254,192,0,0.3)]"></div>
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
