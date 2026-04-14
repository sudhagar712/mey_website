import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import brandVideo from "../assets/brandvideo.mp4";

/* 🔥 CountUp Component (RE-TRIGGER VERSION) */
const CountUp = ({ value, suffix = "", duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const ref = useRef(null);

  // ❗ every time visible → trigger
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      // 🔁 reset each time
      count.set(0);

      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const SmartConversations = () => {
  return (
    <motion.section
      className="py-20 bg-white relative px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.25 }} // ❗ removed once:true
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

      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <motion.h2
          className="text-center text-xl sm:text-2xl md:text-md lg:text-2xl  text-gray-900 mb-8 md:mb-10"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.6 }} // ❗ re-trigger
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Engage Your Customers with Smart Conversations
        </motion.h2>

        {/* Card */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.3 }} // ❗ re-trigger
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          {/* 🎥 Video */}
          <div className="relative w-full pt-[56.25%] bg-black">
            <video
              src={brandVideo}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="relative flex items-center justify-center">
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/25 blur-lg" />
                <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#fbb80039] text-white shadow-lg shadow-black/40 flex items-center justify-center">
                  <span className="ml-0.5 inline-block w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[15px] border-l-white" />
                </span>
              </span>
            </div>
          </div>

          {/* 📊 Stats */}
          <div className="bg-black text-white py-8 sm:py-10 px-5 sm:px-6 md:px-10">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center"
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.4 }} // ❗ re-trigger
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {/* Stat 1 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={3000} suffix="+" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Happy <br /> Customer
                </div>
              </motion.div>

              {/* Stat 1.5 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={50} suffix="+" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Courses
                  <br />
                  Offered
                </div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={100} suffix="+" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Billion <br /> Message
                </div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={99} suffix="%" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  API <br /> Delivery
                </div>
              </motion.div>

              {/* Stat 4 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={70} suffix="%" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Reducing <br /> Manual Work
                </div>
              </motion.div>

              {/* Stat 5 */}
              <motion.div
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
              >
                <div className="text-2xl md:text-4xl font-semibold mb-1">
                  <CountUp value={85} suffix="%" />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
                  Increasing <br /> Engagement
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