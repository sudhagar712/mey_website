import React from "react";
import { motion } from "framer-motion";
import mobile from "../assets/mobile.png"

const BeliefSection = () => {
  return (
    <section className="bg-white py-20   md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT CONTENT */}

        <div className="order-2 lg:order-1">
          <img src={mobile} alt="" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative pl-6 md:pl-10 border-l border-[#c9a14a]/40"
          >
            <p className=" font-bold text-lg md:text-2xl leading-relaxed">
              "A brand built on truth doesn’t need to chase attention. It earns
              it."
            </p>

            <p className="text-[#f1bd40] font-bold mt-6 text-sm tracking-[0.2em]">
              — THE MEY PRINCIPLE
            </p>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 px-5">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 px-5"
          >
            <span className="text-xs tracking-[0.4em] font-bold">
              OUR BELIEF
            </span>
            <div className="h-[1px] w-16  bg-[#f1bd40]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl  leading-tight"
          >
            When built on <span className="text-[#f1bd40] font-bold ">truth</span>, a
            brand earns attention.
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className=" mt-8 leading-relaxed text-sm md:text-base"
          >
            They look right. They sound right. But over time, they become
            forgettable, replaceable, and dependent on constant marketing to
            survive.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            className=" mt-6 leading-relaxed text-sm md:text-base"
          >
            We are a branding firm that believes when a brand is built on truth,
            it doesn’t need to chase attention. It earns it. It holds it. And it
            scales with clarity instead of confusion.
          </motion.p>
        </div>

        {/* RIGHT QUOTE */}
      </div>
    </section>
  );
};

export default BeliefSection;
