import React from "react";

const perspectives = [
  {
    id: "01",
    title: "STRATEGY",
    desc: `Constantly analysing positioning, market gaps, and the invisible forces that influence choice. Understanding the architecture of why brands get chosen.`,
  },
  {
    id: "02",
    title: "CREATIVITY",
    desc: `Understanding how design, storytelling, and visual memory shape perception. The language between a brand and the people who encounter it.`,
  },
  {
    id: "03",
    title: "BUSINESS",
    desc: `Recognising that a brand is not just identity, but a system that either drives growth or silently limits it. Brand as an engine, not ornament.`,
  },
];

const ThreePerspective = () => {
  return (
    <section className=" py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Top Small Label */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs tracking-[0.4em] text-[#f1bd40]">
          WHERE IT BEGAN
        </span>
        <div className="h-[1px] w-16 bg-[#f1bd40]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-serif">Three perspectives.</h2>
        <p className="text-[#f1bd40] text-xl md:text-3xl  mt-2">
          One realisation.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border border-[#ffffff10]">
        {perspectives.map((item, index) => (
          <div
            key={index}
            className={`group p-8 md:p-10 border-[#ffffff10] 
      ${index !== 2 ? "lg:border-r" : ""}
      ${index === 0 ? "md:border-r" : ""}
      ${index < 2 ? "border-b lg:border-b-0" : ""}
      bg-black
      hover:bg-[#f1bd40] transition duration-300`}
          >
            {/* Number */}
            <h3 className="text-5xl text-white mb-6 transition duration-300 group-hover:text-black">
              {item.id}
            </h3>

            {/* Title */}
            <p className="text-xs tracking-[0.3em] text-[#f1bd40] mb-4 transition duration-300 group-hover:text-black">
              {item.title}
            </p>

            {/* Description */}
            <p className="leading-relaxed text-sm md:text-base text-white transition duration-300 group-hover:text-black">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePerspective;