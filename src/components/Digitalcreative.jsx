import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
import img13 from "../assets/DigitalCreative/Vision and Ideas.jpg";
import img14 from "../assets/DigitalCreative/Meet Successful IT Entrepreneurs.jpg";

const gallery = [
  { img: img1, title: "Trauma Care Campaign" },
  { img: img2, title: "Brand Social Post" },
  { img: img3, title: "Luxury Camp Branding" },
  { img: img4, title: "3M Car Care Creative" },
  { img: img5, title: "Corporate Leader Series" },
  { img: img6, title: "Exports & Imports Campaign" },
  { img: img7, title: "Event Promotion" },
  { img: img8, title: "Davos Series Creative" },
  { img: img9, title: "Corporate Post" },
  { img: img10, title: "Cultural Fest Poster" },
  { img: img11, title: "Davos Campaign" },
  { img: img12, title: "Brand Identity Visual" },
  { img: img13, title: "Vision Campaign" },
  { img: img14, title: "Entrepreneurs Event" },
];

const metroStyles = [
  { span: "col-span-2 row-span-2", color: "bg-black", tintClass: "" }, // 0. Trauma (Me Tile)
  { span: "col-span-2 row-span-1", color: "bg-[#00aba9]", tintClass: "opacity-40 mix-blend-overlay" }, // 1. Messaging Wide
  { span: "col-span-1 row-span-1", color: "bg-[#e3a21a]", tintClass: "opacity-70 mix-blend-luminosity" }, // 2. Small Box
  { span: "col-span-1 row-span-1", color: "bg-[#603cba]", tintClass: "opacity-70 mix-blend-luminosity" }, // 3. Small Box
  { span: "col-span-2 row-span-2", color: "bg-black", tintClass: "" }, // 4. Big Square (Diego Montes photo)
  { span: "col-span-2 row-span-2", color: "bg-[#d24726]", tintClass: "opacity-80 mix-blend-multiply" }, // 5. Red Office App Tile
  { span: "col-span-2 row-span-1 md:col-span-4 md:row-span-1", color: "bg-[#fbba00]/50", tintClass: "opacity-80 mix-blend-overlay" }, // 6. Long Green Xbox
  { span: "col-span-1 row-span-1", color: "bg-[#2d89ef]", tintClass: "opacity-70 mix-blend-hard-light" }, // 7. Blue Skype
  { span: "col-span-1 row-span-1", color: "bg-[#e51400]", tintClass: "opacity-70 mix-blend-luminosity" }, // 8. Red Camera
  { span: "col-span-2 row-span-1", color: "bg-[#0050ef]", tintClass: "opacity-70 mix-blend-overlay" }, // 9. Blue Internet Explorer
  { span: "col-span-2 row-span-2 md:col-span-4 md:row-span-2", color: "bg-black", tintClass: "" }, // 10. Massive Calendar Photo
  { span: "col-span-1 row-span-1", color: "bg-[#a4c400]", tintClass: "opacity-70 mix-blend-luminosity" }, // 11. Green Store
  { span: "col-span-1 row-span-1", color: "bg-[#fa6800]", tintClass: "opacity-70 mix-blend-color-burn" }, // 12. Orange App
  { span: "col-span-2 row-span-1", color: "bg-[#825a2c]", tintClass: "opacity-80 mix-blend-multiply" }, // 13. Settings Wide
];

const DigitalCreativeGrid = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextSlide = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="w-full relative min-h-screen bg-black py-20 px-4 md:px-12 flex flex-col justify-center overflow-hidden font-sans">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full">
        {/* 🔥 Metro UI Style Header */}
        <div className="mb-12 pl-2">
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white">
            Digital Creative
          </h1>
         
        </div>

        {/* 🔥 Metro Live Tiles Masonry Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[130px] md:auto-rows-[160px] gap-2 grid-flow-row-dense relative"
        >
          {gallery.map((item, index) => {
            const style = metroStyles[index];

            return (
              <motion.div
                key={index}
                onClick={() => setSelectedIndex(index)}
                variants={{
                  hidden: {
                    opacity: 0,
                    rotateX: -60,
                    y: 50,
                    transformPerspective: 1200,
                  },
                  show: {
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    transformPerspective: 1200,
                    transition: { type: "spring", stiffness: 150, damping: 20 },
                  },
                }}
                // Pop the tile outward beautifully on hover so they can clearly inspect it
                whileHover={{
                  scale: 1.03,
                  filter: "brightness(1.1)",
                  zIndex: 10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden cursor-pointer shadow-lg ease-out ${style.color} ${style.span}`}
              >
                {/* Background Image with optional Metro Tinting */}
                <img
                  src={item.img}
                  alt={item.title}
                  // Raw image is revealed upon hover naturally by dropping the blend mode!
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1s] ease-out group-hover:scale-110 group-hover:mix-blend-normal group-hover:opacity-100 ${style.tintClass}`}
                />

                {/* Shading for untinted raw images to keep text totally readable, fading on hover */}
                {!style.tintClass && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
                )}

                {/* Metro Corner Typography */}
                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 z-20 pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <h3 className="text-white text-xs md:text-[15px] font-semibold tracking-wide drop-shadow-md z-20 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* 🔥 Full Screen Modal (Carousel Lightbox) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 select-none cursor-zoom-out"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="Close full view"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left Carousel Control */}
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-[110] active:scale-90"
              onClick={prevSlide}
              title="Previous"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right Carousel Control */}
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-[110] active:scale-90"
              onClick={nextSlide}
              title="Next"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Current Active Image sliding wrap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={gallery[selectedIndex].img}
                  alt={gallery[selectedIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 select-none pointer-events-none"
                />
                <div className="mt-8 text-center px-4">
                  <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide drop-shadow-lg">
                    {gallery[selectedIndex].title}
                  </h3>
                  <p className="text-[#1ba1e2] mt-2 tracking-widest uppercase text-xs md:text-sm font-semibold">
                    {selectedIndex + 1} / {gallery.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DigitalCreativeGrid;