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
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // IMPORTANT: user interaction la play pannum
    if (video.paused) {
      video.play();
    }

    video.muted = !video.muted;

    const updated = [...mutedStates];
    updated[index] = video.muted;
    setMutedStates(updated);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="ml-3">
        <h1 className="text-3xl md:text-5xl font-bold mt-10 text-black">
          Corporate Videos
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-3 md:px-4 mb-20 gap-5">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group overflow-hidden"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-[300px] md:h-[400px] object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <button
              onClick={() => toggleMute(index)}
              className="absolute top-3 right-3 text-white text-sm bg-black/60 px-3 py-1 rounded-full backdrop-blur"
            >
              {mutedStates[index] ? "🔇" : "🔊"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoperateBanner;