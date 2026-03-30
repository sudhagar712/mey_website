import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Think deeper",
    desc: "Those willing to go beyond the surface and examine what their brand truly represents.",
  },
  {
    title: "Move beyond imitation",
    desc: "Founders who understand that standing apart requires thinking differently, not just looking different.",
  },
  {
    title: "Invest in clarity",
    desc: "Businesses that choose lasting foundation over quick fixes — and recognise clarity as a strategic asset.",
  },
];

const WorkWithSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.4em] text-[#f1bd40]">
              WHO WE WORK WITH
            </span>
            <div className="h-[1px] w-16 bg-[#f1bd40]" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            Founders ready to build something{" "}
            <span className="text-[#f1bd40] ">lasting.</span>
          </motion.h2>

          {/* Features */}
          <div className="mt-12 space-y-10">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-6 mt-2">
                  <div className="h-[1px] w-full bg-[#f1bd40]" />
                </div>

                <div>
                  <h3 className=" font-medium text-lg">{item.title}</h3>
                  <p className=" mt-2 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT ORBIT DESIGN */}
        <div className="relative flex justify-center items-center h-[350px] md:h-[450px]">
          {/* Outermost Circle */}
          <div className="absolute w-[330px] md:w-[450px] h-[330px] md:h-[450px] border border-[#c9a14a]/10 rounded-full" />

          {/* Outer Circle */}
          <div className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] border border-[#c9a14a]/20 rounded-full" />

          {/* Middle Circle */}
          <div className="absolute w-[170px] md:w-[250px] h-[170px] md:h-[250px] border border-[#c9a14a]/20 rounded-full" />

          {/* Inner Circle */}
          <div className="absolute w-[90px] md:w-[150px] h-[90px] md:h-[150px] border border-[#f1bd40] rounded-full flex items-center justify-center">
            <span className="text-[#f1bd40] text-xl font-bold tracking-[0.2em] rotate-12">
              MEY
            </span>
          </div>

          {/* Orbit Dot for Outer Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f1bd40] rounded-full shadow-[0_0_10px_#f1bd40]" />
          </motion.div>

          {/* Orbit Dot for Middle Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-[170px] md:w-[250px] h-[170px] md:h-[250px]"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f1bd40] rounded-full shadow-[0_0_10px_#f1bd40]" />
          </motion.div>

          {/* Orbit Dot for Outermost Circle */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[330px] md:w-[450px] h-[330px] md:h-[450px]"
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-[#f1bd40] rounded-full shadow-[0_0_10px_#f1bd40]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithSection;
