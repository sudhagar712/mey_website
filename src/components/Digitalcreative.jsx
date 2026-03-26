import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/DigitalCreative/01 trauma.jpg";
import img2 from "../assets/DigitalCreative/1.jpg";
import img3 from "../assets/DigitalCreative/Luxus Camp.jpeg";
import img4 from "../assets/DigitalCreative/3M car care.jpg";
import img5 from "../assets/DigitalCreative/Alain Dehaze.jpg";
import img6 from "../assets/DigitalCreative/Boosting Exports & Imports.jpg";
import img7 from "../assets/DigitalCreative/bull show 2.jpg";
import img8 from "../assets/DigitalCreative/Davos Series 8.jpg";
import img9 from "../assets/DigitalCreative/cp 1.jpg";
import img10 from "../assets/DigitalCreative/cultural fest 2.jpg";
import img11 from "../assets/DigitalCreative/Davos Series 12.jpg";
import img12 from "../assets/DigitalCreative/Davos Series 5.jpg";
import img13 from "../assets/DigitalCreative/Vision and Ideas.jpg";
import img14 from "../assets/DigitalCreative/Meet Successful IT Entrepreneurs.jpg";

const gallery = [
  { img: img1, title: "Trauma Care Campaign" },
  { img: img2, title: "Brand Social Post" },
  { img: img3, title: "Luxury Camp Branding" },
  { img: img4, title: "3M Car Care Creative" },
  { img: img5, title: "Corporate Leader Series" },
  { img: img6, title: "Exports & Imports Campaign" },
  { img: img7, title: "Event Promotion" },
  { img: img8, title: "Davos Series Creative" },
  { img: img9, title: "Corporate Post" },
  { img: img10, title: "Cultural Fest Poster" },
  { img: img11, title: "Davos Campaign" },
  { img: img12, title: "Brand Identity Visual" },
  { img: img13, title: "Vision Campaign" },
  { img: img14, title: "Entrepreneurs Event" },
];

const DigitalCreativeGrid = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white">
      {/* 🔥 Title */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Digital Gallery
        </h1>
        <p className="text-gray-500 mt-3">
          A curated collection of our digital creative works
        </p>
      </div>

      {/* 🔥 Masonry Grid */}
      <div className="columns-2 md:columns-3 gap-6 space-y-6">
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded-3xl transition duration-700 group-hover:scale-110"
            />

            {/* 🔥 Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* 🔥 Content */}
            <div className="absolute bottom-0 left-0 p-5 translate-y-10 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>
            </div>

            {/* 🔥 Glow border */}
            <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-white/40 transition duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalCreativeGrid;