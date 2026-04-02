import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    title: "Brand Film",
    url: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259141/compressed-video_1_n99kv8.mp4",
  },
  {
    title: "Ad Campaign",
    url: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259179/Gulf_RENDER_COMP_Final_2_vigp9h.mp4",
  },
  {
    title: "Product Shoot",
    url: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259142/b0cd6816-c64a-42cb-8776-2e38fbbab640_kuiyfs.mp4",
  },
];

const Motionposter = () => {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-white selection:bg-[#f1bd40] selection:text-white">
      {/* Subtle background glow for depth on white background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f1bd40]/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Grid Pattern overlay for premium subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Title Area */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 md:w-20 bg-[#f1bd40]"></div>
            <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold text-gray-500">
              Visual Showcase
            </span>
            <div className="h-[2px] w-12 md:w-20 bg-[#f1bd40]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#111] tracking-tight"
          >
            Motion <span className="text-[#f1bd40] italic font-serif">Posters</span>
          </motion.h2>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="relative flex justify-center items-center h-[520px] sm:h-[650px] md:h-[750px] w-full"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence mode="popLayout">
            {videos.map((video, index) => {
              // Calculating circular offset
              let offset = index - active;
              if (offset < -1) offset += videos.length;
              if (offset > 1) offset -= videos.length;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${offset * 115}%)`,
                    scale: isActive ? 1 : 0.75,
                    rotateY: offset * -25, // Negative rotation gives the 3D 'look-in' effect
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 20 : 10,
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute top-1/2 left-1/2 -translate-y-1/2 w-[260px] h-[462px] sm:w-[320px] sm:h-[568px] md:w-[380px] md:h-[675px] rounded-3xl overflow-hidden cursor-pointer transition-shadow duration-500 ${
                    isActive ? "shadow-[0_40px_80px_rgba(0,0,0,0.15)] ring-4 ring-[#f1bd40]/40" : "shadow-xl"
                  }`}
                  onClick={() => setActive(index)}
                >
                  {/* Premium internal border */}
                  <div className="absolute inset-0 border border-black/10 rounded-3xl pointer-events-none z-20" />

                  {/* Gradient overlay to ensure depth for active text */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

                  {/* Title overlay */}
                  <div className={`absolute bottom-8 left-0 right-0 text-center z-30 transition-all duration-700 pointer-events-none ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide drop-shadow-md">
                      {video.title}
                    </h3>
                  </div>

                  {/* Video Component */}
                  <video
                    src={video.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover bg-gray-100"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center mt-12 md:mt-16 gap-3 relative z-10">
          {videos.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-500 ease-out ${
                active === i
                  ? "w-12 bg-[#f1bd40] shadow-[0_0_10px_rgba(241,189,64,0.4)]"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motionposter;