import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774856453/ASPIRE_DI_FINAL_VERSION_FINALOUT_1_dj6ozj.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774857167/RenewX_2MINS_VIDEO_OP2_1_gqxzpp.mp4",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774858181/Cauvery_Rice_Correction_1_aqfzf3.mp4",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774858932/6bd12d62-4664-464f-ae50-67b24dc5afcd_wiftsq.mp4",
  },
];

const CoperateBanner = () => {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePlayWithSound = (index) => {
    // mute all first
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = true;
    });

    // unmute selected
    const video = videoRefs.current[index];
    if (video) {
      video.muted = false;
      video.play();
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="ml-10">
        <h1 className="text-3xl md:text-5xl font-bold mt-10 text-black">
          Corporate Videos
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-3 md:px-4 mb-20 gap-5">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => handlePlayWithSound(index)}
          >
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              autoPlay
              muted
              loop
              className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            {/* Sound Indicator */}
            <div className="absolute top-3 right-3 text-white text-sm bg-black/60 px-3 py-1 rounded-full backdrop-blur">
              {activeIndex === index ? "🔊 Sound On" : "🔇 Tap for Sound"}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition"
              >
                Project {index + 1}
              </motion.h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoperateBanner;