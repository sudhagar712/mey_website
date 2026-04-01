import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageBanner = ({ title, breadcrumb, bgImage }) => {
  return (
    <section className="relative w-full h-[200px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="MEY Office"
          className="w-full h-full object-cover grayscale opacity-70"
        />
        {/* Light yellow gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fbba00]  mix-blend-multiply"></div>
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center px-6 mt-10 ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-gray-900"
        >
          {title}
        </motion.h1>

        {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center gap-3 text-sm md:text-base font-medium tracking-widest uppercase text-black/70"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    <Link to="/" className="hover:text-black transition-colors duration-300">
                        Home
                    </Link>
                    <span className="w-1.5 h-1.5 rounded-full bg-black/30"></span>
                    <span className="text-black font-semibold">
                        {breadcrumb}
                    </span>
                </motion.div> */}
      </div>
    </section>
  );
};

export default PageBanner;
