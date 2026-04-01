import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const cards = [
  {
    title: "Social Media Marketing",
    image:
      "https://landingi.com/wp-content/uploads/2025/02/What-Is-Social-Media-Marketing-post-cover-optimized.webp",
  },
  {
    title: "Video Editing",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Events",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Website Design & Dev",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing",
    image:
      "https://ad2brand.com/wp-content/uploads/2025/10/digital-marketing.png",
  },
  {
    title: "Outdoor Advertising",
    image:
      "https://acmeadvertiser.com/wp-content/uploads/2025/02/eb8199203681641.669b5f5801f02-1024x614.jpg",
  },
];

const ExpandingCards = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Slider for Desktop
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full md:px-20">

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">Our Services</h1>
        <p className="text-white">We offer a range of services to help businesses grow and succeed.</p>
      </div>
      {/* Desktop Layout */}
      <div
        className="hidden  md:flex w-full h-[500px] lg:h-[650px] gap-3 lg:gap-4 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

       



        {cards.map((card, index) => {
          const isActive = active === index;
          return (
            <motion.div
              layout
              key={index}
              onClick={() => setActive(index)}
              className={`relative group cursor-pointer rounded-2xl lg:rounded-[2rem] overflow-hidden flex items-end transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]
              ${isActive ? "flex-[10] shadow-2xl" : "flex-[1]"}`}
              style={{ minWidth: isActive ? "0%" : "80px" }}
            >
              <motion.img
                layout
                src={card.image}
                alt={card.title}
                className="absolute w-full h-full object-cover origin-center"
                initial={false}
                animate={{
                  scale: isActive ? 1.05 : 1.2,
                  filter: isActive ? 'brightness(1)' : 'brightness(0.5)'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Premium Gradient Overlays */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-black/95 via-black/30 to-black/10 
                ${isActive ? "opacity-100" : "opacity-0"}`}
              ></div>
              <div
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none bg-black/40 group-hover:bg-black/20
                ${isActive ? "opacity-0" : "opacity-100"}`}
              ></div>

              {/* Number indicator for collapsed cards */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap transition-all duration-500 ease-in-out font-bold tracking-[0.2em] text-xs lg:text-sm text-white/50
                ${isActive ? "opacity-0 invisible scale-50" : "opacity-100 visible scale-100 group-hover:text-white"}`}
              >
                0{index + 1}
              </div>

              {/* Expanded Content */}
              <div className="relative z-10 text-white p-8 lg:p-12 w-full h-full flex flex-col justify-end pointer-events-none">
                <div
                  className={`transition-all duration-700 delay-100 transform ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 absolute bottom-8 lg:bottom-12"
                    }`}
                >
                  <div className="flex items-center gap-4 mb-3 lg:mb-4">
                    <span className="text-yellow-400 font-bold tracking-[0.2em] text-[10px] lg:text-xs uppercase drop-shadow-md">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-[1px] bg-yellow-400/50"></span>
                    <span className="text-white/80 font-medium tracking-[0.1em] text-[10px] lg:text-xs uppercase">
                      Services
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-black tracking-tight mb-5 lg:mb-6 leading-[1.1] drop-shadow-2xl">
                    {card.title}
                  </h3>

                  {/* Linear Progress Bar */}
                  <div className="w-full max-w-md h-[2px] bg-white/20 rounded-full overflow-hidden flex relative mt-2">
                    {isActive && !isPaused && (
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                      />
                    )}
                    {isActive && isPaused && (
                      <div className="absolute top-0 left-0 h-full bg-yellow-400 w-full opacity-50 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Premium Slider */}
      <div className="md:hidden w-full overflow-visible py-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={20}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="w-full !pb-12"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="transition-transform duration-500">
              {({ isActive }) => (
                <div className={`w-full aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl transition-all duration-500 border border-white/10 ${isActive ? 'scale-100' : 'scale-[0.9] opacity-60'}`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 w-full p-6 text-white text-left z-10 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-yellow-400 font-bold tracking-widest text-[10px] uppercase">
                        0{index + 1}
                      </span>
                      <span className="w-6 h-[1px] bg-yellow-400/50"></span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-2 leading-tight drop-shadow-lg">
                      {card.title}
                    </h3>
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

export default ExpandingCards;

