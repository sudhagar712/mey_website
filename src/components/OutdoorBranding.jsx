import React from "react";
import { motion } from "framer-motion";
import o1 from "../assets/outdoor/1.jpeg"
import o2 from "../assets/outdoor/2.jpeg"    
import o3 from "../assets/outdoor/3.jpeg"

const images = [
  {
    id: 1,
    src: o1,
    title: "VGP universal Kingdom",
  },
  {
    id: 2,
    src: o2,
    title: "VGP universal Kingdom",
  },
  {
    id: 3,
    src: o3,
    title: "Euro Kids bus stop banner",
  },
];

const OutdoorBranding = () => {
  return (
    <section className="w-full py-16 md:py-24 md:px-30 ">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Outdoor Branding
        </h2>
       
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16">
        {images.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl shadow-lg"
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="text-xl md:text-2xl text-white font-semibold">
                {item.title}
              </h3>

              {/* Animated Line */}
              <div className="w-0 group-hover:w-16 h-[2px] bg-white mt-2 transition-all duration-500"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OutdoorBranding;