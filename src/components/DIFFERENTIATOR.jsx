import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import imgg from "../assets/whymey.png"
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
  { name: "Client 1", logo: client1 },
  { name: "Client 2", logo: client2 },
  { name: "Client 3", logo: client3 },
  { name: "Client 4", logo: client4 },
  { name: "Client 5", logo: client5 },
  { name: "Client 6", logo: client6 },

  { name: "Client 7", logo: client7 },
  { name: "Client 8", logo: client8 },
  { name: "Client 9", logo: client9 },

  { name: "Client 10", logo: client10 },
  { name: "Client 11", logo: client11 },
  { name: "Client 12", logo: client12 },
  { name: "Client 13", logo: client13 },
  { name: "Client 14", logo: client14 },
  { name: "Client 15", logo: client15 },
  { name: "Client 16", logo: client16 },

];
















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

        {/* 1. WHY MEY Section */}
        <section className="bg-[#fcfcfc] py-24 md:py-32 px-2 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            {/* Heading */}
            <div className="mb-16">
              <h4 className="text-xs tracking-[0.4em] uppercase font-bold text-black/50 mb-4">
                Our Approach
              </h4>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Why MEY
              </h2>
            </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
  
  {/* LEFT SIDE */}
  <div className="space-y-10">
    {differentiators.map((item, i) => (
      <div
        key={i}
        data-aos="fade-right"
        data-aos-delay={i * 150}
        className="flex items-start gap-6 group"
      >
        {/* Icon */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#f7d83c] flex items-center justify-center text-black group-hover:scale-110 transition">
          {item.icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* RIGHT SIDE */}
  <div
    className="relative flex justify-center"
    data-aos="zoom-in"
    data-aos-delay="300"
  >
    <img
      src={imgg}
      alt="Strategy"
      className="drop-shadow-2xl"
    />
  </div>

</div>
          </div>
        </section>

        {/* 2. SELECT CLIENTS Section */}
        <section className="bg-black py-32 md:py-40 px-2 md:px-12 lg:px-24">
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-24 text-center scroll-fade-up" ref={addToRefs}>
              <h4
                className="text-[10px] text-white md:text-xs tracking-[0.4em] uppercase font-bold mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Select Clients
              </h4>
              <h2 className="font-premium-serif text-5xl text-white md:text-7xl font-bold tracking-tighter">
                Trusted By
              </h2>
            </div>

            <div
              className="client-grid-container grid grid-cols-2 lg:grid-cols-4 border-3 border-black rounded-4xl overflow-hidden scroll-fade-up"
              ref={addToRefs}
            >
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                  className="relative flex items-center justify-center p-12 md:p-16 border-b border-r border-[#ffffff10] last:border-r-0 lg:[&:nth-child(4n)]:border-r-0 hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src={client.logo}
                    alt={`Branding clients in Chennai and India - ${client.name}`}
                    className="max-h-40 object-contain transition duration-500 hover:scale-110"
                  />
                </div>
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
            <div className="absolute inset-0 bg-[#ffcc01] mix-blend-multiply"></div>
          </div>

          <div
            className="relative z-10 max-w-4xl mx-auto scroll-fade-up"
            ref={addToRefs}
          >
            <h2 className="font-premium-serif text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tighter leading-[1.05] mb-6">
              Ready to build <br />
              <span className="italic font-light opacity-90">
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