import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";

const images = [p1,  p3, p4];

const Printcreative = () => {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // 🔥 AUTO SCROLL (INFINITE LOOP FEEL)
  useEffect(() => {
    if (paused) return;

    const scroll = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;

        // infinite loop reset
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth / 2
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 16); // smooth

    return () => clearInterval(scroll);
  }, [paused]);

  return (
    <section className="w-full py-16 md:py-24 md:px-5 md:p-10  overflow-hidden relative">
         {/* GRID BACKGROUND SOFT */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 2px, transparent 1px), linear-gradient(90deg, #000 2px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-[2px] bg-yellow-500"></div>
        <h2 className="text-md tracking-[0.4em] uppercase">
          Print Creative
        </h2>
      </div>
     
      <div
        ref={containerRef}
        className="flex gap-6 md:gap-10 px-6 md:px-20 overflow-x-scroll no-scrollbar"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...images, ...images].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="relative w-[260px] md:w-[340px] h-[380px] md:h-[500px]  overflow-hidden shadow-xl">
              {/* IMAGE */}
              <img
                src={img}
                alt="creative"
                className="w-full h-full object-cover"
              />

              {/* 🔥 PREMIUM OVERLAY (APPLE STYLE DEPTH) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 rounded-[28px] border border-white/10 opacity-0 hover:opacity-100 transition duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Printcreative;
