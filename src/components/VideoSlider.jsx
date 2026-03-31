import React from "react";
import { motion } from "framer-motion";

const videoSrc =
  "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773939894/Euro_Kids_Sports_Day_Full_event_usmcln.mp4";

const VideoSlider = () => {
  return (
    <div className="w-full bg-black mt-10 flex flex-col items-center justify-center px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-6 top-0 w-2 h-full bg-black rounded-full hidden md:block" />

          <h1 className="text-3xl md:text-6xl font-bold  text-yellow-500 leading-tight">
            Event Showcase
          </h1>

          <p className="mt-6 text-gray-600 text-white md:text-lg max-w-md">
            Experience our events through immersive visuals and storytelling.
            Every frame captures energy, emotion, and unforgettable moments.
          </p>

        
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Creative cut shape */}
          <div className="absolute -inset-2 bg-black rounded-[30px] blur-xl opacity-30" />

          <div className="relative overflow-hidden rounded-[30px] clip-path-custom">
            <video
              src={videoSrc}
              controls
              className="w-full h-[250px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>
      </div>





<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-30 max-w-7xl w-full">
      

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Creative cut shape */}
          <div className="absolute -inset-2 bg-black rounded-[30px] blur-xl opacity-30" />

          <div className="relative overflow-hidden rounded-[30px] clip-path-custom">
            <video
              src={videoSrc}
              controls
              className="w-full h-[250px] md:h-[500px] object-cover"
            />
          </div>
        </motion.div>



          {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -left-6 top-0 w-2 h-full bg-black rounded-full hidden md:block" />

          <h1 className="text-3xl md:text-6xl font-bold  text-yellow-500 leading-tight">
            Event Showcase
          </h1>

          <p className="mt-6 text-gray-600 text-white md:text-lg max-w-md">
            Experience our events through immersive visuals and storytelling.
            Every frame captures energy, emotion, and unforgettable moments.
          </p>

        
        </motion.div>
      </div>
      

      {/* Custom Clip Path */}
      <style>
        {`
          .clip-path-custom {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
          }
        `}
      </style>
    </div>
  );
};

export default VideoSlider;