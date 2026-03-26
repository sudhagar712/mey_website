import React from 'react';
import { motion } from 'framer-motion';
import about from "../assets/meyabout.png"

const AboutMey = () => {
    return (
      <section className="relative bg-white w-full flex flex-col lg:flex-row min-h-[80vh] mt-20  overflow-hidden">
        {/* Left Side: Content (Black Background) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center   relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl w-full flex flex-col items-start px-5"
          >
            <div className="flex items-center gap-4 mb-8 mt-10">
              <div className="w-12 h-[2px] bg-[#000000f1]"></div>
              <h2
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] "
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ABOUT MEY
              </h2>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-6xl leading-[1.1] font-bold   tracking-tighter mb-10">
              The Truth Behind
              <span className=" text-yellow-500 mx-3 bg-black ">Brands</span>
            </h1>

            <p
              className="text-lg md:text-md lg:text-xl  leading-[1.6] mb-8"
            
            >
              Most brands don't fail because of poor design. They fail because they are built on assumptions, imitation, and noise. MEY exists to change that.
             
            </p>

            

           
          </motion.div>
        </div>

        {/* Right Side: Image spanning full height/width of its half */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-[80vh] overflow-hidden group">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={about}
              alt="About MEY Agency"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] origin-center"
            />
          </motion.div>
        </div>
      </section>
    );
};

export default AboutMey;
