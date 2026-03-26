import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";

const images = [p1, p2, p3, p4];

const Printcreative = () => {
  return (
    <div className="relative py-16 px-4 md:px-20 overflow-hidden bg-[#fbba00]/10">
      {/* 🔶 Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-60 
        [background-image:radial-gradient(#fbbf24_1px,transparent_1px)] 
        [background-size:20px_20px]"
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Print Creatives
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:px-20 ">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group   overflow-hidden    transition duration-500"
            >
              {/* Image */}
              <img
                src={img}
                alt="creative"
                className="w-full h-full  object-cover transition duration-500 group-hover:scale-110"
              />

             

              {/* Glow border */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-yellow-400/60 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Printcreative;
