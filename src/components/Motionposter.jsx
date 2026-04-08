import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-6xl font-bold">
          Motion <span className="text-[#fec000] italic">Posters</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div
        className="flex justify-center items-center gap-6 md:gap-10 px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {videos.map((video, i) => {
          const position = (i - index + videos.length) % videos.length;

          const isCenter = position === 0;
          const isLeft = position === videos.length - 1;
          const isRight = position === 1;

          return (
            <motion.div
              key={i}
              animate={{
                scale: isCenter ? 1 : 0.75,
                opacity: isCenter ? 1 : 0.4,
                x: isLeft ? -60 : isRight ? 60 : 0,
              }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
              style={{
                width: isCenter ? "320px" : "220px",
              }}
            >
              <div className="relative h-[420px] md:h-[520px] rounded-[28px] overflow-hidden shadow-xl">
                
                {/* VIDEO */}
                <video
                  src={video.url}
                  autoPlay={isCenter}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />

                {/* TITLE */}
                {isCenter && (
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-lg font-semibold">
                      {video.title}
                    </h3>
                  </div>
                )}

                {/* GLOW */}
                {isCenter && (
                  <div className="absolute inset-0 border border-[#fec000]/60 rounded-[28px] shadow-[0_0_40px_rgba(254,192,0,0.4)]"></div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Motionposter;