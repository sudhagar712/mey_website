import React, { useState, useRef } from "react";

const videos = [
  "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773939894/Euro_Kids_Sports_Day_Full_event_usmcln.mp4",
  "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773939894/Euro_Kids_Sports_Day_Full_event_usmcln.mp4",
  "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773939894/Euro_Kids_Sports_Day_Full_event_usmcln.mp4",
];

const VideoSlider = () => {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  const handleSlide = (direction) => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });

    let newIndex = current + direction;

    if (newIndex >= videos.length) newIndex = 0;
    if (newIndex < 0) newIndex = videos.length - 1;

    setCurrent(newIndex);
  };

  return (
    <div className="relative max-w-5xl mx-auto mb-[15px]">
      {/* Video */}
      <div className="w-full h-[300px] md:h-[600px] overflow-hidden rounded-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Events</h1>
        <video
          ref={(el) => (videoRefs.current[current] = el)}
          key={current}
          src={videos[current]}
          controls
          autoPlay
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Button */}
      <button
        onClick={() => handleSlide(-1)}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-4xl md:text-6xl opacity-70 hover:opacity-100 transition"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={() => handleSlide(1)}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-4xl md:text-6xl opacity-70 hover:opacity-100 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default VideoSlider;