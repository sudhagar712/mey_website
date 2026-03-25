import React from "react";
import m1 from "../assets/social1.png";
import m2 from "../assets/social2.png";
import m3 from "../assets/social3.png";
import m4 from "../assets/social4.png";
import m5 from "../assets/social5.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const images = [m1, m2, m3, m4, m5];

const Mobileui = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      
      <div className="w-[260px] md:w-[300px] h-[520px] rounded-[30px] overflow-hidden shadow-xl border">
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt="slide"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Mobileui;