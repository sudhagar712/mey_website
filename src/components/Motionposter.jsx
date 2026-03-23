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

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-16 px-2 md:px-12 overflow-hidden">
      
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
        Motion Posters
      </h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${active * 100}%)`,
          }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="min-w-full px-2 md:px-10 md:px-30"
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl">

                {/* Video */}
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  className="w-full h-[250px] md:h-[700px] object-cover  group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {video.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {videos.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              active === i ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Motionposter;