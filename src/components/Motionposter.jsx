import React, { useState } from "react";
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
  const [active, setActive] = useState(null);

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden md:px-40">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-3 mb-16 text-center">
        <p className="text-xs tracking-[0.4em] text-gray-400 uppercase mb-4">
          Visual Showcase
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Motion <span className="text-[#fec000] italic">Posters</span>
        </h2>
      </div>

      {/* GRID (STATIC HEIGHT → NO SHIFT) */}
      <div className="max-w-9xl mx-auto px-5 grid grid-cols-1 md:grid-cols-1 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative h-[420px] md:h-[600px] rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => setActive(index)}
          >
            <video
              src={video.url}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN OVERLAY (NO LAYOUT BREAK) */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center px-4"
          >
            {/* CLOSE */}
            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-8 text-white text-3xl"
            >
              ✕
            </button>

            {/* VIDEO */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <video
                src={videos[active].url}
                autoPlay
                controls
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Motionposter;