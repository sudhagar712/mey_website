import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import i1 from "../assets/i1.png"
import i2 from "../assets/i2.png"
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i1.png";



const images = [
  i1,i2,i3,i4,i5
];

const PdfPreview = () => {
  const [index, setIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(nextSlide, 3000);
  return () => clearInterval(interval);
}, []);




  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full  bg-gray-100 flex items-center justify-center  mb-4 px-4">
      {/* SLIDER */}
      <div className="relative w-full max-w-5xl h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
        {/* IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={images[index]}
              alt="slider"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
        >
          ❮
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
        >
          ❯
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;