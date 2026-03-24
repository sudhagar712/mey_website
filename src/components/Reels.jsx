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
    <section className="w-full py-12 md:py-16 px-4 md:px-16 bg-[#fafafa]">

      {/* GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8">

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Reels Showcase
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-lg">
              Explore our latest video creations.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible">

            {reelsData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 lg:w-full text-left px-5 py-4 rounded-xl transition-all duration-300 border ${
                  activeIndex === index
                    ? "bg-black text-white shadow-md"
                    : "bg-white hover:bg-gray-100 border-gray-200"
                }`}
              >
                <p className="font-semibold">{item.title}</p>
              </button>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE - VIDEO */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-2xl">

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

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Reels;