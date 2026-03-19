import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import img1 from "../assets/DigitalCreative/01 trauma.jpg";
import img2 from "../assets/DigitalCreative/1.jpg";
import img3 from "../assets/DigitalCreative/1200x628.png";
import img4 from "../assets/DigitalCreative/3M car care.jpg";
import img5 from "../assets/DigitalCreative/Alain Dehaze.jpg";
import img6 from "../assets/DigitalCreative/Boosting Exports & Imports.jpg";
import img7 from "../assets/DigitalCreative/bull show 2.jpg";
import img8 from "../assets/DigitalCreative/CK sir Woman day wishes-03.jpg";
import img9 from "../assets/DigitalCreative/cp 1.jpg";
import img10 from "../assets/DigitalCreative/cultural fest 2.jpg";
import img11 from "../assets/DigitalCreative/Davos Series 12.jpg";
import img12 from "../assets/DigitalCreative/Davos Series 5.jpg";



const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,

];

const Digitalcreative = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevSlide = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Digital Gallery
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 px-2 md:px-10 md:py-5">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openModal(index)}
            className="overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* 🔥 Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white"
          >
            <X size={32} />
          </button>

          {/* Prev Button */}
          <button onClick={prevSlide} className="absolute left-5 text-white">
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />

          {/* Next Button */}
          <button onClick={nextSlide} className="absolute right-5 text-white">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Digitalcreative;
