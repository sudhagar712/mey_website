import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
// import logo from "../assets/bannerright.png"
import logol from "../assets/logol2.png"

const Hero = () => {
  return (
    <div className="min-h-screen ">
      <motion.section
        className="relative bg-[#fec000] h-[350px] md:h-[70vh] lg:h-[70vh] px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        <div className="relative z-10 mt-20 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">
          {/* Giant Logo with Overlay Text */}
          <div className="relative mb-24  rounded-md p-8 md:p-10 w-full mt-10  flex flex-col items-center justify-center">
            {/* <motion.h1
                className="text-[150px] sm:text-[240px] text-black md:text-[290px] lg:text-[340px] leading-[0.75]  font-thin tracking-tighter  select-none z-0"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ fontFamily: "Cinzel, serif" }}
              >
                MEY
              </motion.h1> */}

            <img
              src={logol}
              alt=""
              className="w-[700px] h-[150px] md:h-[290px] md:mt-20"
            />

            {/* Glassmorphism Strip Overlay */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] flex justify-center items-center pointer-events-none z-10"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <div className="w-full h-[50px] md:h-[100px] bg-white/20  mt-2 md:mt-20 backdrop-blur-md flex items-center justify-center border-y border-black/10 transform shadow-2xl ">
                <p className=" text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white  tracking-wider whitespace-nowrap px-8 font-thin">
                  Truth Before Business
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes slideDown {
            0% { transform: translateY(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(200%); opacity: 0; }
          }
        `,
          }}
        />
      </motion.section>

      {/* Content Box */}
      <motion.div
        className="flex flex-col  text-center   mt-10 px-5 items-center max-w-4xl mx-auto mb-5"
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
        <p className="text-xl md:text-5xl  lg:text-2xl text-black/80    leading-[1.6]  md:mb-10 lg:mb-5">
          We build{" "}
          <span className="   border-b border-black/30 text-[#fec000] font-bold ">
            clear
          </span>
          ,{" "}
          <span className="   text-[#fec000]  border-b border-black/30 font-bold">
            powerful
          </span>{" "}
          and{" "}
          <span className="  text-[#fec000]  border-b border-black/30 font-bold">
            growth-focused
          </span>{" "}
          brands for startups and ambitious businesses.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-2"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
        >
          {/* Premium Button 1 */}
          <Link
            to="/work"
            className="group relative px-14 cursor-pointer py-6 bg-black text-white text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 rounded-none border-[1.5px]  overflow-hidden shadow-2xl shadow-black/20"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="absolute inset-0 w-full h-full bg-black  translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
            View Work
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          {/* Premium Button 2 */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="group relative px-14 py-6 bg-transparent cursor-pointer text-black text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 rounded-none border-[1.5px]  overflow-hidden"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="absolute inset-0 w-full h-full bg-black  translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
            Start a Project
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </ScrollLink>
        </motion.div>
      </motion.div>

      {/* image section */}

      {/* <motion.div
          className="flex justify-center items-center bg-white"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={logo}
            alt="banner"
            className="max-w-full"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div> */}
    </div>
  );
};

export default Hero;