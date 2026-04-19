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
    video: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776255999/Regs_yieq96.mp4",
  },
  {
    title: "Ad Campaign",
    video: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776625852/TNPDCL_LAUNCH_TOMOrROW_2_givbgl.mp4",
  },
  {
    title: "Product Shoot",
    video: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776625838/Medway_Gif_qn4nrd.mp4",
  },
  {
    title: "Product Shoot",
    video: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776625834/Medway_Neubon_szttqo.mp4",
  },

 


  {
    title: "Product Shoot",
    video: "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776625827/Medway_Gif_2_fz78gn.mp4",
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
    <div className="w-full px-4 md:px-10 lg:px-20 py-10 md:py-30 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Motion Poster
        </motion.h1>
      </div>

      {/* Mobile - Swiper Coverflow */}
      <div className="block md:hidden w-full h-[60vh] min-h-[400px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full h-full pb-14"
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="w-[85%] max-w-[350px] h-[90%] rounded-3xl overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.3)] mt-2"
            >
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none"></div>


            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop - Expanding Cards */}
      <div
        className="hidden md:flex w-full h-[500px] lg:h-[650px] gap-4 overflow-hidden rounded-4xl"
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
              className={`relative cursor-pointer rounded-4xl overflow-hidden flex items-end transition-all duration-[800ms] ease-[0.25,1,0.5,1] shadow-2xl
              ${isActive ? "flex-[10]" : "flex-[1]"}`}
            >
              {/* 🎥 VIDEO */}
              <motion.video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{
                  scale: isActive ? 1.05 : 1.25,
                  filter: isActive ? "brightness(1) saturate(1.1)" : "brightness(0.3) saturate(0)",
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Motionposter;