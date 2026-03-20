import React, { useState } from "react";

const reelsData = [
  {
    title: "Reel 01",
    videos:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929312/vv4_eptaeq.mp4",
  },
  {
    title: "Reel 02",
    videos:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929318/vv1_acjmxd.mp4",
  },
  {
    title: "Reel 03",
    videos:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929324/vv3_sczozq.mp4",
  },
  {
    title: "Reel 04",
    videos:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929363/vv2_kad9ol.mp4",
  },
];

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-black px-4 md:px-16 py-16">
      <div className="md:px-10 p-4 mb-5">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Reels Showcase
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-lg">
          Explore our latest video creations.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* LEFT SIDE - TABS */}
        <div className="w-full lg:w-1/3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2">
          {reelsData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`min-w-[140px] lg:w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 backdrop-blur-md border ${
                activeIndex === index
                  ? "bg-black text-white shadow-lg scale-[1.03]"
                  : "bg-white/60 hover:bg-white border-gray-200"
              }`}
            >
              <p className="font-semibold tracking-wide">{item.title}</p>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="w-full lg:w-2/3 flex justify-center ">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-2xl">
            {/* VIDEO */}
            <video
              key={activeIndex}
              src={reelsData[activeIndex].videos}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reels;
