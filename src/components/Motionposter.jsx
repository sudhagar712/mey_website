import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const cards = [
  {
    title: "Brand Film",
    video: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259141/compressed-video_1_n99kv8.mp4",
  },
  {
    title: "Ad Campaign",
   video: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259179/Gulf_RENDER_COMP_Final_2_vigp9h.mp4",
  },
  {
    title: "Product Shoot",
    video: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1774259142/b0cd6816-c64a-42cb-8776-2e38fbbab640_kuiyfs.mp4",
  },
];

const Motionposter = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full md:px-30 px-5  py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Motion Poster
        </h1>
       
      </div>

      {/* Desktop */}
      <div
        className="hidden md:flex w-full h-[500px] lg:h-[650px] gap-3 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cards.map((card, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              layout
              onClick={() => setActive(index)}
              className={`relative cursor-pointer rounded-2xl overflow-hidden flex items-end transition-all duration-[800ms]
              ${isActive ? "flex-[10]" : "flex-[1]"}`}
            >
              {/* 🎥 VIDEO */}
              <motion.video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
                initial={false}
                animate={{
                  scale: isActive ? 1.05 : 1.2,
                  filter: isActive ? "brightness(1)" : "brightness(0.5)",
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white">
                {isActive && (
                  <>
                    <h3 className="text-3xl lg:text-5xl font-bold">
                      {card.title}
                    </h3>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full py-4">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative rounded-3xl overflow-hidden ${
                    isActive ? "scale-100" : "scale-90 opacity-60"
                  }`}
                >
                  {/* 🎥 VIDEO */}
                  <video
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Motionposter;