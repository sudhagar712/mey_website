import React from "react";
import { motion } from "framer-motion";
import p1 from "../assets/p1.jpg";
import p2  from "../assets/p2.jpg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/newprint.png";


const images = [p1,  p3, p4,p5, p2];

const Printcreative = () => {

  return (
    <section className="w-full py-16 md:py-30 md:px-5 md:p-10  overflow-hidden relative">
         {/* GRID BACKGROUND SOFT */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 2px, transparent 1px), linear-gradient(90deg, #000 2px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />
      <div className="flex items-center justify-center gap-4 text-black text-center mb-6">
        <div className="w-10 h-[2px] bg-yellow-500"></div>
        <h2 className="text-xl font-bold tracking-[0.4em] mb-2 uppercase">
          Print Creative
        </h2>
       
      </div>
     
      <div
        className="flex gap-6 md:gap-10 px-6 md:px-20 overflow-x-scroll no-scrollbar py-4"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <div className="relative w-[260px] md:w-[340px] h-[380px] md:h-[500px]  overflow-hidden shadow-xl">
              {/* IMAGE */}
              <img
                src={img}
                alt="creative"
                className="w-full h-full object-cover"
              />

              {/* 🔥 PREMIUM OVERLAY (APPLE STYLE DEPTH) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 rounded-[28px] border border-white/10 opacity-0 hover:opacity-100 transition duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Printcreative;
