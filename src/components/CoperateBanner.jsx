import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774856453/ASPIRE_DI_FINAL_VERSION_FINALOUT_1_dj6ozj.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776627079/Cauvery_Rice_Correction_1_tu5t0m.mp4",
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

  const [playingStates, setPlayingStates] = useState(
    videos.map(() => false)
  );
  const [mutedStates, setMutedStates] = useState(
    videos.map(() => true)
  );

  // ▶ PLAY BUTTON
  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.play();

    setPlayingStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  // ⏯️ CLICK VIDEO → TOGGLE
  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setPlayingStates((prev) => {
      const updated = [...prev];
      updated[index] = !video.paused;
      return updated;
    });
  };

  // 🔊 MUTE
  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = !video.muted;

    setMutedStates((prev) => {
      const updated = [...prev];
      updated[index] = video.muted;
      return updated;
    });
  };

  // 🔥 AUTO PAUSE WHEN NOT VISIBLE (SCROLL / OTHER COMPONENT)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const index = videoRefs.current.findIndex((v) => v === video);

          if (!entry.isIntersecting) {
            video.pause();

            // ✅ UI update
            setPlayingStates((prev) => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  // 🔥 AUTO PAUSE ON UNMOUNT
  useEffect(() => {
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });

      setPlayingStates(videos.map(() => false)); // UI reset
    };
  }, []);

  return (
    <div className="w-full py-10 px-3 md:px-10 overflow-hidden relative">
      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "3rem 3rem",
        }}
      />

      {/* TITLE */}
      <div className="ml-3 md:ml-10">
        <h1 className="text-3xl md:text-5xl font-bold mt-10">
          Corporate <span>Videos</span>
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-3 md:px-10 mb-20 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            {/* VIDEO */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              muted
              playsInline
              loop
              onClick={() => togglePlayPause(index)}
              className="w-full h-[260px] md:h-[400px] object-cover cursor-pointer"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 pointer-events-none" />

            {/* ▶ PLAY BUTTON */}
            {!playingStates[index] && (
              <button
                onClick={() => handlePlay(index)}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}

            {/* 🔊 MUTE */}
            <button
              onClick={() => toggleMute(index)}
              className="absolute top-3 right-3 text-white text-sm bg-black/60 px-3 py-1 rounded-full backdrop-blur z-30"
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