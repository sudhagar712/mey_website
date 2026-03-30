import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const icons = {
  Clarity: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  Truth: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  Design: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>
  ),
  Consistency: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  Performance: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  )
};

const data = [
  {
    title: "Clarity is non-negotiable",
    desc: "Complexity is often a sign of something unresolved. We strip it away until only truth remains.",
    icon: icons.Clarity,
  },
  {
    title: "Truth creates longevity",
    desc: "Trends create dependency. A brand anchored in truth stands through every market shift.",
    icon: icons.Truth,
  },
  {
    title: "Design follows decisions",
    desc: "Design is powerful only when it is guided by clear decisions. Aesthetics without strategy is decoration.",
    icon: icons.Design,
  },
  {
    title: "Consistency builds trust",
    desc: "Recognition, trust, and recall are built through consistent identity over time — not campaigns.",
    icon: icons.Consistency,
  },
  {
    title: "A brand must ultimately perform",
    desc: "If it does not contribute to growth, it does not work. Every branding decision must serve a business outcome.",
    icon: icons.Performance,
  },
];

const StandardsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-white text-black py-24 md:py-32 overflow-hidden selection:bg-[#f1bd40] selection:text-white">
      {/* Decorative background gradients for premium feel */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-gray-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#f1bd40]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Left Col: Sticky Header */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs tracking-[0.3em] font-bold uppercase text-gray-500">
                  What Drives Us
                </span>
                <div className="w-12 h-[1px] bg-gray-300"></div>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 tracking-tight">
                The standards we hold <br className="hidden lg:block" />
                <span className="italic text-gray-400 relative inline-block mt-2 lg:mt-4">
                  non-negotiable.
                  {/* Subtle highlight line under the italic text */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#f1bd40] origin-left"
                  ></motion.div>
                </span>
              </h2>

              <p className="text-gray-500 max-w-md text-base sm:text-lg mt-10 leading-relaxed">
                We believe in uncompromising quality. These principles guide every strategy we build and every pixel we push, ensuring lasting impact.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Col: Premium Accordion Items */}
        <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
          <div className="border-t border-gray-200">
            {data.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                  className={`group relative border-b border-gray-200 overflow-hidden transition-all duration-500 ease-out ${isOpen ? "bg-gray-50/60" : "hover:bg-gray-50/30"
                    }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left py-8 sm:py-10 px-4 sm:px-8 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      {/* Premium Icon Container */}
                      <div
                        className={`p-3 sm:p-4 rounded-xl transition-all duration-500 ease-out ${isOpen
                          ? "bg-[#f1bd40] text-white shadow-lg shadow-[#f1bd40]/30 scale-110"
                          : "bg-gray-100/80 text-gray-400 group-hover:bg-white group-hover:text-[#f1bd40] group-hover:shadow-md"
                          }`}
                      >
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-all duration-500 ease-out ${isOpen
                          ? "text-gray-900 translate-x-1 sm:translate-x-2"
                          : "text-gray-500 group-hover:text-gray-900 group-hover:translate-x-1"
                          }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Plus/Cross Icon */}
                    <div className="flex-shrink-0 ml-4 hidden sm:block">
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-all duration-500 ease-out ${isOpen
                          ? "border-[#f1bd40] text-[#f1bd40] bg-[#f1bd40]/10"
                          : "border-gray-200 text-gray-300 group-hover:border-[#f1bd40] group-hover:text-[#f1bd40]"
                          }`}
                      >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <div className="pl-[5.5rem] sm:pl-[7.5rem] pr-8 pb-10">
                          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;

