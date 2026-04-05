import React from "react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";

const images = [p1, p2, p3, p4];

const Printcreative = () => {
  return (
    <div className="relative py-20 px-4 md:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Grid BG */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-[#fec000] font-bold mb-16 tracking-tight">
          Print Creatives
        </h2>

        {/* 🔥 CLEAN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Frame */}
              <div className="relative w-full bg-white p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition duration-500 group-hover:-translate-y-3">
                {/* Image (FULL VIEW) */}
                <img
                  src={img}
                  alt="creative"
                  className="w-full h-auto object-contain"
                />

                {/* Bottom strip (like print label) */}
                <div className="mt-4 flex justify-between items-center text-xs text-black/70">
                  <span>Creative {index + 1}</span>
                  <span>Print</span>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#fec000] transition-all duration-500"></div>
              </div>

              {/* Floating Shadow Glow */}
              <div className="absolute -bottom-4 w-3/4 h-6 bg-[#fec000]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Printcreative;
