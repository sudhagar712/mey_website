import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i1.png";

const images = [i1, i2, i3, i4, i5];

const PdfPreview = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" py-20 md:py-32 bg-black  md:px-32 relative overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fec000]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16 text-center">
         

          <h2 className="text-4xl md:text-6xl text-white  font-bold ">
            Pitch <span className="text-yellow-500">Decks</span>
          </h2>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-[80px_1fr] gap-6 items-center">
          {/* SIDE THUMBNAILS */}
          <div className="hidden md:flex flex-col gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`cursor-pointer rounded-xl overflow-hidden border ${
                  i === index ? "border-[#fec000]" : "border-white/10"
                }`}
              >
                <img src={img} className="w-full h-16 object-cover" />
              </div>
            ))}
          </div>

          {/* MAIN PREVIEW */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {/* IMAGE */}
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
              <motion.div
                key={index}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-[#fec000]"
              />
            </div>

            {/* CONTROLS */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
                className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white/20"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1,
                  )
                }
                className="bg-[#fec000] text-black px-4 py-2 rounded-full font-medium"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE DOT NAV */}
        <div className="flex justify-center mt-6 gap-2 md:hidden">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#fec000]" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PdfPreview;
