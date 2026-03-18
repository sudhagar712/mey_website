import React from 'react';
import { motion } from 'framer-motion';
import brandVideo from '../assets/brandvideo1.mp4';

const SmartConversations = () => {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1300px] mx-auto">
        <motion.h2
          className="text-center text-[22px] sm:text-2xl md:text-3xl lg:text-[32px] font-semibold text-gray-900 mb-8 md:mb-10"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Engage Your Customers with Smart Conversations
        </motion.h2>

        {/* Card + Stats combined */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* Video Card with real video */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <video
              src={brandVideo}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center justify-center"></div>

            {/* Play button visual (video already autoplaying) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/25 blur-lg" />
                <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fbb80039] text-white shadow-lg shadow-black/40 flex items-center justify-center">
                  <span className="ml-0.5 inline-block w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-15 border-l-white" />
                </span>
              </span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="bg-[#fbba00] py-8 sm:py-10 px-5 sm:px-6 md:px-10">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-20 text-center"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  8500+
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Happy
                  <br />
                  Customer
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  1 Billion+
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Billion
                  <br />
                  Message
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  99%
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  API
                  <br />
                  Delivery
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  70%
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Reducing
                  <br />
                  Manual work
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  85%
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Increasing
                  <br />
                  Customer Engagement
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SmartConversations;

