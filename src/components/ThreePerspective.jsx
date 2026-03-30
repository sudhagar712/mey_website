import  {React, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const perspectives = [
  {
    id: "01",
    title: "STRATEGY",
    desc: `One approached brands through strategy, constantly analysing positioning, market gaps, and the invisible forces that influence choice. `,
  },
  {
    id: "02",
    title: "CREATIVITY",
    desc: `Another saw brands through creativity, understanding how design, storytelling, and visual memory shape perception.`,
  },
  {
    id: "03",
    title: "BUSINESS",
    desc: `The third came from a business lens, recognising that a brand is not just identity, but a system that either drives growth or silently limits it.`,
  },
];

const ThreePerspective = () => {


 useEffect(() => {
   AOS.init({
     duration: 1000, // animation speed
     once: true, // scroll panna once dha run agum
   });
 }, []);



  return (
    <section className=" py-16 md:py-24  md:px-12 lg:px-20">
      {/* Top Small Label */}
      <div className="flex items-center gap-4 px-3 mb-8">
        <span className="text-xs tracking-[0.4em] font-bold">
          WHERE IT BEGAN
        </span>
        <div className="h-[1px] w-16 bg-[#f1bd40]" />
      </div>

      {/* Heading */}
      <div className="text-center mb-14">
       

        <h2 className="text-md md:text-xl    mt-5">
          MEY began with three friends from completely different worlds, brought
          together by a shared discomfort they couldn’t ignore.
        </h2>
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border border-[#ffffff10]">
        {perspectives.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
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