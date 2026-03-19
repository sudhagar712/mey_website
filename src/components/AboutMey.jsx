import React from 'react';
import { motion } from 'framer-motion';
import about from "../assets/aboutt.png"

const AboutMey = () => {
    return (
      <section className="relative bg-white w-full flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
        {/* Left Side: Content (Black Background) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-10 py-24 md:p-16 lg:p-24  relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl w-full flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-8 mt-10">
              <div className="w-12 h-[2px] bg-[#000000f1]"></div>
              <h2
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] "
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                About Section
              </h2>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-bold tracking-tighter mb-10">
              About <br className="hidden md:block" />
              <span className="font-extrabold ">MEY</span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl font-medium leading-[1.6] mb-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              MEY is a branding and digital marketing agency in Chennai focused
              on building{" "}
              <span className=" border-b border-white/30 ">clear</span>,{" "}
              <span className="text-[#fbba00] font-extrabold border-b border-white/30 ">
                premium
              </span>{" "}
              and{" "}
              <span className="text-[#fbba00] border-b border-[#ffff00]/30 font-bold ">
                growth-oriented
              </span>{" "}
              brands.
            </p>

            <p
              className="text-base md:text-lg  font-medium leading-[1.6]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              We combine strategy, creativity and execution under one structured
              direction . Every project starts with deep understanding — your
              business, your audience, and your goals. From there, we build a
              strong foundation that aligns branding with business growth.
            </p>

            <p
              className="text-base md:text-lg  font-medium leading-[1.6]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            ></p>
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
              className="w-full h-full object-cover filter grayscale-[20%] group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] origin-center"
            />
          </motion.div>
        </div>
      </section>
    );
};

export default AboutMey;
