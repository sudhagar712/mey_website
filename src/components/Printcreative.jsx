import React from "react";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";



const images = [p1, p2, p3, p4];

const Printcreative = () => {
  return (
    <div className=" bg-black/10 py-16 px-4 md:px-30">

      <h2 className="text-3xl md:text-7xl font-bold mb-10 ">
        Print Creatives
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden  shadow-xl"
          >
            {/* Image */}
            <img
              src={img}
              alt="creative"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

          
          </div>
        ))}

      </div>
    </div>
  );
};

export default Printcreative;