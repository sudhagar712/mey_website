import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/DigitalCreative/01 trauma.jpg";
import img2 from "../assets/DigitalCreative/1.jpg";
import img3 from "../assets/DigitalCreative/Luxus Camp.jpeg";
import img4 from "../assets/DigitalCreative/3M car care.jpg";
import img5 from "../assets/DigitalCreative/Alain Dehaze.jpg";
import img6 from "../assets/DigitalCreative/Boosting Exports & Imports.jpg";
import img7 from "../assets/DigitalCreative/bull show 2.jpg";
import img8 from "../assets/DigitalCreative/Davos Series 8.jpg";
import img9 from "../assets/DigitalCreative/cp 1.jpg";
import img10 from "../assets/DigitalCreative/cultural fest 2.jpg";
import img11 from "../assets/DigitalCreative/Davos Series 12.jpg";
import img12 from "../assets/DigitalCreative/Davos Series 5.jpg";

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
];

const Digitalcreative = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full   bg-[#fbba00]/40 flex flex-col items-center justify-center py-10 md:py-16 overflow-hidden">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-10  ">
        Digital Gallery
      </h1>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-16 bg-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition z-50"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-16 bg-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 transition z-50"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <div className="relative w-full max-w-7xl h-[300px] sm:h-[400px] md:h-[600px] lg:h-[750px] flex items-center justify-center">
        {images.map((img, index) => {
          const isActive = index === activeIndex;
          const isLeft =
            index === (activeIndex - 1 + images.length) % images.length;
          const isRight = index === (activeIndex + 1) % images.length;

          return (
            <img
              key={index}
              src={img}
              alt=""
              className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-xl bg-transparent p-3  
              
              ${isActive ? "w-[85%] h-full object-contain scale-100 z-30 opacity-100" : ""}
              
              ${isLeft ? "w-[60%] h-[80%] object-contain -translate-x-[110%] scale-90 opacity-60 blur-sm z-20" : ""}
              
              ${isRight ? "w-[60%] h-[80%] object-contain translate-x-[110%] scale-90 opacity-60 blur-sm z-20" : ""}
              
              ${!isActive && !isLeft && !isRight ? "opacity-0 scale-75" : ""}
              `}
            />
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-6 md:mt-10 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === activeIndex ? "w-6 bg-yellow-500" : "w-2 bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Digitalcreative;