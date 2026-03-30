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
    <section className="py-24 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Title Area */}
      <div className="relative z-10 text-center mb-16 px-4">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-[1px] w-8 md:w-16 bg-yellow-500"></div>
          <span className="text-xs md:text-sm tracking-[0.4em] uppercase font-bold text-yellow-500">
            Showcase
          </span>
          <div className="h-[1px] w-8 md:w-16 bg-yellow-500"></div>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold  tracking-tight">
          Motion Posters
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="relative flex justify-center items-center h-[450px] sm:h-[550px] md:h-[650px] w-full max-w-7xl mx-auto"
        style={{ perspective: "1500px" }}
      >
        <AnimatePresence>
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
                  x: `calc(-50% + ${offset * 110}%)`,
                  scale: isActive ? 1 : 0.85,
                  rotateY: offset * -25, // Negative rotation gives the 3D 'look-in' effect
                  opacity: isActive ? 1 : 0.3,
                  zIndex: isActive ? 20 : 10,
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[260px] h-[380px] sm:w-[320px] sm:h-[480px] md:w-[380px] md:h-[560px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] cursor-pointer"
                onClick={() => setActive(index)}
              >
                {/* Premium Border for active element */}
                <div
                  className={`absolute inset-0 border-[1.5px] rounded-[2rem] transition-colors duration-500 pointer-events-none z-20 ${isActive ? 'border-yellow-500/40' : 'border-white/10'
                    }`}
                />

                {/* Gradient overlay to ensure text is highly readable */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Video Component */}
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover bg-black"
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
            className={`h-2 rounded-full cursor-pointer transition-all duration-500 ease-out ${active === i
                ? "w-12 bg-yellow-500"
                : "w-3 bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Motionposter;