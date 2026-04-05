import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import client1 from "../assets/client/Aspire.png";
import client2 from "../assets/client/BCG.png";
import client3 from "../assets/client/Budanta.png";
import client4 from "../assets/client/DIPR.png";
import client5 from "../assets/client/Sweep.png";
import client6 from "../assets/client/TNPC.png";
import client7 from "../assets/client/TNP.png";
import client8 from "../assets/client/Gaja.png";
import client9 from "../assets/client/EXOplain.png";
import client10 from "../assets/client/Forge.png";
import client11 from "../assets/client/Group 2.png";
import client12 from "../assets/client/Group 3.png";
import client13 from "../assets/client/Group 4.png";
import client14 from "../assets/client/Leela.jpg";
import client15 from "../assets/client/TUTR.png";
import client16 from "../assets/client/TN Seivangai.png";
import AOS from "aos";
import "aos/dist/aos.css";







const differentiators = [
  {
    title: 'Truth-First Strategy',
    desc: 'We understand the real problem before designing the solution.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1" />
        <circle cx="12" cy="12" r="3" strokeWidth="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Clarity Over Clutter',
    desc: 'Every design decision must earn its place.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 4h16v16H4z" />
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10 10h4v4h-4z" />
      </svg>
    ),
  },
  {
    title: 'First-Principles Thinking',
    desc: 'No templates. Every project is built from scratch.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 2L2 12h3v8h14v-8h3L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Built For Growth',
    desc: 'We create brands that scale without losing identity.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M3 21h18" />
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M5 21v-8M12 21V9M19 21V4" />
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M5 13l7-4 7-5" />
      </svg>
    ),
  },
];



const clients = [
  { name: "Client 1", logos: [client1, client2] },
  { name: "Client 2", logos: [client2, client3] },
  { name: "Client 3", logos: [client3, client4] },
  { name: "Client 4", logos: [client4, client5] },
  { name: "Client 5", logos: [client5, client6] },
  { name: "Client 6", logos: [client6, client7] },
  { name: "Client 7", logos: [client7, client8] },
  { name: "Client 8", logos: [client8, client9] },
  { name: "Client 9", logos: [client9, client10] },
  { name: "Client 10", logos: [client10, client11] },
  { name: "Client 11", logos: [client11, client12] },
  { name: "Client 12", logos: [client12, client13] },
  { name: "Client 13", logos: [client13, client14] },
  { name: "Client 14", logos: [client14, client15] },
  { name: "Client 15", logos: [client15, client16] },
  { name: "Client 16", logos: [client16, client1] },
];

/* 🔥 Card Component */
const ClientCard = ({ logos, delay }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [logos]);

  return (
    <div
      className="relative flex items-center justify-center p-5 md:p-10 border-b border-r border-[#ffffff10] transition-all duration-500"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        key={index}
        src={logos[index]}
        alt="client"
        className="h-full object-contain transition-all duration-700 ease-in-out"
      />
    </div>
  );
};









const DIFFERENTIATOR = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };



  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
    });
  }, []);




  return (
    <>
      <style>
        {`
                .scroll-fade-up {
                    opacity: 0;
                    transform: translateY(40px);
                    transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .scroll-fade-up.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                /* Responsive Checkerboard for Client Grid */
                .client-grid-container > div {
                    background-color: white;
                    color: black;
                }
                
                /* Large Screens (4 columns) - Checkerboard logic */
                @media (min-width: 1024px) {
                    .client-grid-container > div:nth-child(8n + 2),
                    .client-grid-container > div:nth-child(8n + 4),
                    .client-grid-container > div:nth-child(8n + 5),
                    .client-grid-container > div:nth-child(8n + 7) {
                        background-color: #050505;
                        color: white;
                    }
                }
                
                /* Medium Screens (2 columns) - Checkerboard logic */
                @media (max-width: 1023px) {
                    .client-grid-container > div:nth-child(4n + 2),
                    .client-grid-container > div:nth-child(4n + 3) {
                        background-color: #050505;
                        color: white;
                    }
                }
                `}
      </style>

      {/* 1. WHY MEY Section - Refined Proportions */}
      <section className="bg-black py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1250px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN - STICKY HEADINGS */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-4 mb-6" data-aos="fade-up">
                <span className="w-8 h-[2px] bg-[#f7d83c]"></span>
                <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-white">
                  Our Approach
                </h4>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] text-[#fec000] font-extrabold tracking-tight mb-6 x leading-[1.1]" data-aos="fade-up" data-aos-delay="100">
              Why MEY
               
              </h2>

              <p className="text-white text-sm md:text-base font-medium leading-relaxed max-w-[22rem] mb-10" data-aos="fade-up" data-aos-delay="200">
                We don't rely on templates or safe choices. We engineer bespoke, scalable solutions built on solid first principles.
              </p>

              {/* Animated Scroll Indicator */}
              <div className="hidden lg:flex flex-col gap-3 items-start opacity-70" data-aos="fade-up" data-aos-delay="300">
                <div className="w-7 h-11 rounded-full border border-gray-300 flex justify-center p-1.5 relative">
                  <span className="w-1 h-2.5 bg-black rounded-full animate-bounce absolute top-1.5"></span>
                </div>
                <span className="text-[9px] tracking-[0.2em] font-bold text-gray-400 uppercase ml-0.5">Explore</span>
              </div>
            </div>

            {/* RIGHT COLUMN - SCROLLING CARDS */}
            <div className="lg:col-span-7 space-y-6">
              {differentiators.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative bg-[#fec000] border border-gray-100 rounded-[1.5rem] p-8 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#f7d83c]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#f7d83c]/15 transition-colors duration-700 pointer-events-none"></div>

                  {/* Large Background Number */}
                  <div className="absolute bottom-35 right-6 md:-bottom-1 md:-right-0 text-[4rem] md:text-[7rem] font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-700 pointer-events-none select-none leading-none">
                    0{i + 1}
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-[1rem] bg-gray-50 border border-gray-100 flex items-center justify-center text-black  group-hover:border-black group-hover:-translate-y-1 transition-all duration-500 shadow-sm">
                      <div className="scale-75">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 group-hover:text-black transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SELECT CLIENTS Section */}
      <section className="bg-black py-32 md:py-40 px-2 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-[1500px] mx-auto">
          {/* Heading */}
          <div className="mb-24 text-center">
            <h4 className="text-[10px] text-white md:text-xs tracking-[0.4em] uppercase font-bold mb-6">
              Select Clients
            </h4>

            <h2 className="text-5xl text-[#fec000] md:text-7xl font-bold">
              Trusted By
            </h2>
          </div>

          {/* 🔥 GRID */}
          <div className="grid client-grid-container md:px-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 overflow-hidden ">
            {clients.map((client, index) => (
              <ClientCard
                key={client.name}
                logos={client.logos}
                delay={index * 200} // 🔥 wave delay
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA Section */}
      <section className="relative py-32 lg:py-56 px-6 md:px-12 text-center flex flex-col items-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg"
            alt="CTA Background"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[#fec000]/80 mix-blend-multiply"></div>
        </div>

        <div
          className="relative z-10 max-w-4xl mx-auto scroll-fade-up"
          ref={addToRefs}
        >
          <h2 className=" text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tighter leading-[1.05] mb-6">
            Ready to build <br />
            <span className=" font-light opacity-90">
              with clarity?
            </span>
          </h2>

          <p
            className="text-2xl md:text-3xl font-bold text-black/70 mb-16 tracking-wide uppercase"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Start with MEY.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <Link
              to="/contact"
              className="group relative px-14 py-6 bg-black text-white text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 border-[1.5px] border-black overflow-hidden shadow-2xl shadow-black/20"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div className="absolute inset-0 w-full h-full bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
              Start a Project
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <Link
              to="/work"
              className="group relative px-14 py-6 bg-transparent cursor-pointer text-black text-[11px] md:text-xs font-bold tracking-[0.25em] uppercase w-full sm:w-auto transition-all duration-500 hover:text-white flex items-center justify-center gap-4 rounded-none border-[1.5px]  overflow-hidden"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <div className="absolute inset-0 w-full h-full bg-black  translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10 ease-out"></div>
              View Work
              <svg
                className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DIFFERENTIATOR;