import React, { useEffect, useState } from "react";

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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#fff8e6] overflow-hidden">

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Motion Posters
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative flex justify-center items-center">

        <div className="relative w-full max-w-6xl h-[260px] md:h-[450px]">

          {videos.map((video, index) => {
            const offset = index - active;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 220}px)
                    scale(${offset === 0 ? 1 : 0.7})
                  `,
                  opacity: offset === 0 ? 1 : 0.4,
                  zIndex: offset === 0 ? 20 : 10,
                }}
              >
                {/* Circle */}
                <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px]  overflow-hidden shadow-2xl border-4 border-white">

                  <video
                    src={video.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Glow */}
                {offset === 0 && (
                  <div className="absolute inset-0 rounded-full blur-3xl bg-yellow-300/40 -z-10"></div>
                )}
              </div>
            );
          })}

        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-3">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              active === i
                ? "bg-yellow-500 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Motionposter;