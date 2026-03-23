import React, { useEffect, useRef } from 'react';

const capabilities = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Logo design, naming, visual systems and brand guidelines.",
    imgUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Branding abstract
  },
  {
    num: "02",
    title: "Social Media Management",
    desc: "Instagram, Facebook, LinkedIn and YouTube handled with structured monthly content.",
    imgUrl:
      "https://i0.wp.com/famesolutely.com/wp-content/uploads/2024/04/2150063164-jpg.webp?resize=1000%2C667&ssl=1", // Social Media icons
  },
  {
    num: "03",
    title: "Website Design & Development",
    desc: "Fast, modern and conversion-focused websites.",
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop", // Code/Laptop
  },
  {
    num: "04",
    title: "Video Production",
    desc: "Corporate films, product shoots and reels.",
    imgUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop", // Camera/Film
  },
  {
    num: "05",
    title: "Performance Marketing",
    desc: "Instagram ads, Facebook ads and Google ads for lead generation.",
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", // Charts/Analytics
  },
  {
    num: "06",
    title: "Outdoor Advertising",
    desc: "Hoardings, bus stop branding and exhibition stall design.",
    imgUrl:
      "https://images.pexels.com/photos/2881223/pexels-photo-2881223.jpeg", // Billboard/Outdoor
  },
];

const CAPABILITIES = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
      <section
        ref={sectionRef}
        className="bg-white py-32 px-2 md:px-12 lg:px-24"
      >
        <style>
          {`
          .scroll-reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
          }
          .scroll-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
        </style>

        <div className="max-w-[1500px] mx-auto">
          {/* Header Section */}
          <div className="mb-20 scroll-reveal">
            <h4
              className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-black/60 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Capabilities
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 items-end border-b-2 border-black pb-12">
              <h2 className="font-premium-serif text-5xl sm:text-6xl md:text-[5.5rem] font-bold text-black tracking-tighter leading-[1.05]">
                Complete Brand & <br className="hidden md:block" /> Marketing
                Solutions
              </h2>

              <p
                className="text-xl md:text-2xl text-black/70 font-medium leading-relaxed"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Everything your brand needs — structured under one direction.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <div
                key={cap.num}
                className="scroll-reveal relative overflow-hidden bg-[#0f0f0f] text-white rounded-[2rem] p-10 md:p-12 flex flex-col justify-between group hover:-translate-y-3 transition-transform duration-500 ease-out shadow-2xl shadow-black/10 min-h-[320px]"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Background Image (Absolute positioned behind content) */}
                <div className="absolute inset-0 z-0 opacity-50">
                  <img
                    src={cap.imgUrl}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient Overlay to ensure text remains readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
                </div>

                {/* Card Content (Relative positioned above image) */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-[0.2em] text-[#ffff00] block mb-12 drop-shadow-md"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {cap.num} /
                    </span>

                    <h3
                      className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-4 text-white drop-shadow-lg"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {cap.title}.
                    </h3>
                  </div>

                  <p
                    className="text-base md:text-lg text-white/90 leading-relaxed font-light mt-12 drop-shadow-md"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
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