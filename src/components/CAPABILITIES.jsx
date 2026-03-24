import React, { useEffect, useRef } from "react";

const capabilities = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Logo design, naming, visual systems and brand guidelines.",
    imgUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Social Media Management",
    desc: "Instagram, Facebook, LinkedIn and YouTube handled with structured monthly content.",
    imgUrl:
      "https://i0.wp.com/famesolutely.com/wp-content/uploads/2024/04/2150063164-jpg.webp?resize=1000%2C667&ssl=1",
  },
  {
    num: "03",
    title: "Website Design & Development",
    desc: "Fast, modern and conversion-focused websites.",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Video Production",
    desc: "Corporate films, product shoots and reels.",
    imgUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Performance Marketing",
    desc: "Instagram ads, Facebook ads and Google ads for lead generation.",
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "Outdoor Advertising",
    desc: "Hoardings, bus stop branding and exhibition stall design.",
    imgUrl:
      "https://images.pexels.com/photos/2881223/pexels-photo-2881223.jpeg",
  },
];

const CAPABILITIES = () => {
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-4 md:px-12 lg:px-24"
    >
      {/* Scroll animation styles */}
      <style>
        {`
          .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .scroll-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="mb-16 scroll-reveal">
          <h4 className="text-xs tracking-[0.4em] uppercase font-bold text-black/60 mb-4">
            Our Capabilities
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end border-b pb-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Complete Brand & <br /> Marketing Solutions
            </h2>

            <p className="text-lg md:text-xl text-black/70">
              Everything your brand needs — structured under one direction.
            </p>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {capabilities.map((cap, i) => (
            <div
              key={cap.num}
              className="scroll-reveal group relative overflow-hidden rounded-[2rem] min-h-[340px] cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* IMAGE */}
              <img
                src={cap.imgUrl}
                alt={cap.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-500"></div>

              {/* GRADIENT GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent"></div>

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">

                {/* NUMBER */}
                <span className="text-xs tracking-[0.3em] text-yellow-400 mb-3">
                  {cap.num} /
                </span>

                {/* TITLE */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {cap.title}
                </h3>

                {/* DESCRIPTION (HOVER REVEAL) */}
                <p className="text-sm md:text-base text-white/80 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {cap.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CAPABILITIES;