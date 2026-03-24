import React from "react";

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
  { img: img1, span: "col-span-2 row-span-2" },
  { img: img2, span: "col-span-1 row-span-1" },
  { img: img3, span: "col-span-1 row-span-2" },
  { img: img4, span: "col-span-2 row-span-1" },

  { img: img5, span: "col-span-1 row-span-1" },
  { img: img6, span: "col-span-2 row-span-2" },
  { img: img7, span: "col-span-1 row-span-1" },

  { img: img8, span: "col-span-2 row-span-1" },
  { img: img9, span: "col-span-1 row-span-2" },
  { img: img10, span: "col-span-1 row-span-1" },

  { img: img11, span: "col-span-2 row-span-2" },
  { img: img12, span: "col-span-1 row-span-1" },
  { img: img13, span: "col-span-1 row-span-1" },

  { img: img14, span: "col-span-2 row-span-2" },
];

const DigitalCreativeGrid = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-20 ">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Digital Gallery
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[120px] md:auto-rows-[260px] gap-5">

        {gallery.map((item, index) => (
          <div
            key={index}
            className={`group relative  transition-all duration-500 overflow-hidden ${item.span}`}
          >
            {/* Image */}
            <div className="w-full h-full p-4 flex items-center justify-center">
              <img
                src={item.img}
                alt=""
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Premium overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Glow border */}
            <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-yellow-400/60 transition-all duration-500"></div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default DigitalCreativeGrid;