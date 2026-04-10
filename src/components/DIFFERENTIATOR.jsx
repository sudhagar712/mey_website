import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import client1 from "../assets/clientnew/AJ Dento Aesthetic care.png";
import client2 from "../assets/clientnew/Aspire.png";
import client3 from "../assets/clientnew/Budanta-logo-color.png";
import client4 from "../assets/clientnew/CURI Hospital.png";
import client5 from "../assets/clientnew/DMK sport wing.png";
import client6 from "../assets/clientnew/EA.png";
import client7 from "../assets/clientnew/Forge Innovation and ventures.png";
import client8 from "../assets/clientnew/Group 2.png";
import client9 from "../assets/clientnew/Group 3.png";
import client10 from "../assets/clientnew/MGM Healthcare.png";
import client11 from "../assets/clientnew/Mahindra Rise.png";
import client12 from "../assets/clientnew/Nam Nadu.png";
import client13 from "../assets/clientnew/Saravana Furnishing.png";
import client14 from "../assets/clientnew/THE RISE LOGO.png";
import client15 from "../assets/clientnew/Tamil Nadu Police.png";
import client16 from "../assets/clientnew/Tamil Nadu Traffic Police.png";
import client17 from "../assets/clientnew/W Fitness womens only gym.png";
import client18 from "../assets/clientnew/deceler.png";
import client19 from "../assets/clientnew/salem corporation logo.png";
import client20 from "../assets/clientnew/trichy corporation logo.png";
import AOS from "aos";
import "aos/dist/aos.css";







const differentiators = [
  {
    title: "Truth-First Strategy",
    desc: "We understand the real problem before designing the solution.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="9" strokeWidth="1" />
        <circle cx="12" cy="12" r="3" strokeWidth="1" fill="currentColor" />
      </svg>
    ),
    image:
      "https://cdn.prod.website-files.com/5a25950a9058c30001ce33a9/5d5d34f1da86c317ffff370d_jeshoots-com-fzOITuS1DIQ-unsplash.jpg",
  },
  {
    title: "Clarity Over Clutter",
    desc: "Every design decision must earn its place.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M4 4h16v16H4z"
        />
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M10 10h4v4h-4z"
        />
      </svg>
    ),
    image:
      "https://www.shutterstock.com/image-vector/messy-clean-computer-desks-top-600nw-2726301651.jpg",
  },
  {
    title: "First-Principles Thinking",
    desc: "No templates. Every project is built from scratch.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M12 2L2 12h3v8h14v-8h3L12 2z"
        />
      </svg>
    ),
    image:
      "https://i0.wp.com/muratbicak.com/wp-content/uploads/2019/10/muratbicak.com-First-Principles.jpg?fit=1200%2C675&ssl=1",
  },
  {
    title: "Built For Growth",
    desc: "We create brands that scale without losing identity.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M3 21h18"
        />
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M5 21v-8M12 21V9M19 21V4"
        />
        <path
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M5 13l7-4 7-5"
        />
      </svg>
    ),
    image:
      "https://m.economictimes.com/thumb/msid-57589484,width-1600,height-900,resizemode-4,imgsize-4240684/only-8-of-companies-manage-to-scale-heres-their-secret.jpg",
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
  { name: "Client 16", logos: [client16, client17] },
  { name: "Client 17", logos: [client17, client18] },
  { name: "Client 18", logos: [client18, client19] },
  { name: "Client 19", logos: [client19, client20] },
  { name: "Client 20", logos: [client2, client3] },
];

/* 🔥 COIN FLIP CARD */
const ClientCard = ({ logos, delay }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex items-center justify-center p-6 md:p-10 border-b border-r border-[#ffffff10] perspective group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center p-10"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex items-center justify-center backface-hidden ">
          <img
            src={logos[0]}
            alt="client"
            className="h-12 md:h-20 object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
          <img
            src={logos[1]}
            alt="client"
            className="h-12 md:h-16 object-contain transition duration-500 group-hover:scale-110"
          />
        </div>
      </motion.div>
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


                  .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* checkerboard */
        .client-grid-container > div {
          background-color: white;
          color: black;
        }

        @media (min-width: 1024px) {
          .client-grid-container > div:nth-child(8n + 2),
          .client-grid-container > div:nth-child(8n + 4),
          .client-grid-container > div:nth-child(8n + 5),
          .client-grid-container > div:nth-child(8n + 7) {
            background-color: #050505;
            color: white;
          }
        }

        @media (max-width: 1023px) {
          .client-grid-container > div:nth-child(4n + 2),
          .client-grid-container > div:nth-child(4n + 3) {
            background-color: #050505;
            color: white;
          }
        }
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
      <section className="bg-black py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden ">
        {/* Background subtle lines */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1250px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN - STICKY HEADINGS */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div
                className="inline-flex items-center gap-4 mb-6"
                data-aos="fade-up"
              >
                <span className="w-8 h-[2px] bg-[#f7d83c]"></span>
                <h4 className="text-md tracking-[0.3em] uppercase font-bold text-white">
                  Our Approach
                </h4>
              </div>

              <h2
                className="text-4xl md:text-6xl lg:text-[4.5rem] text-[#fec000] font-extrabold tracking-tight mb-6 x leading-[1.1]"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Why MEY
              </h2>

              <p
                className="text-white text-sm md:text-base font-medium leading-relaxed max-w-[22rem] mb-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                We don't rely on templates or safe choices. We engineer bespoke,
                scalable solutions built on solid first principles.
              </p>

              {/* Animated Scroll Indicator */}
              <div
                className="hidden lg:flex flex-col gap-3 items-start opacity-70"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="w-7 h-11 rounded-full border border-gray-300 flex justify-center p-1.5 relative">
                  <span className="w-1 h-2.5 bg-black rounded-full animate-bounce absolute top-1.5"></span>
                </div>
                <span className="text-[9px] tracking-[0.2em] font-bold text-gray-400 uppercase ml-0.5">
                  Explore
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN - SCROLLING CARDS */}
            <div className="lg:col-span-7 space-y-6">
              {differentiators.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative rounded-[1.5rem] overflow-hidden transition-all duration-500"
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Yellow Overlay */}
                  <div className="absolute inset-0 bg-[#fec000]/70 group-hover:bg-[#fec000]/80 transition-all duration-500"></div>

                  {/* Gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition duration-700 pointer-events-none"></div>

                    {/* Large Number */}
                    <div className="absolute bottom-2 right-6 text-[4rem] md:text-[6rem] font-bold text-black/20 group-hover:text-black/30 transition duration-500 pointer-events-none select-none">
                      0{i + 1}
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-white/90 backdrop-blur border border-white/40 flex items-center justify-center text-black group-hover:-translate-y-1 transition duration-500 shadow-md">
                        <div className="scale-75">{item.icon}</div>
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                          {item.title}
                        </h3>
                        <p className="text-black/90 text-[14px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SELECT CLIENTS Section */}
      {/* 🔥 SELECT CLIENTS */}
      <section className=" py-32 md:py-40 px-2 md:px-12 lg:px-24 relative">
        {/* background */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:60px_60px]" />

        <div className=" max-w-[1500px] mx-auto text-center">
          {/* Heading */}
           <div
                className="inline-flex items-center  gap-4 mb-6 md:mb-20"
                data-aos="fade-up"
              >
                <span className="w-10 h-[3px] bg-[#f7d83c]"></span>
                <h4 className="text-md md:text-3xl tracking-[0.3em] uppercase font-bold text-black">
                  Trusted By
                </h4>
              </div>

          {/* GRID */}
          <div className="grid client-grid-container md:px-20 grid-cols-2 md:grid-cols-4  overflow-hidden">
            {clients.map((client, index) => (
              <ClientCard
                key={client.name}
                logos={client.logos}
                delay={index * 150}
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
          <div className="absolute inset-0 bg-[#fec000]/90 mix-blend-multiply"></div>
        </div>

        <div
          className="relative z-10 max-w-5xl  mx-auto scroll-fade-up"
          ref={addToRefs}
        >
          <h2 className=" text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-bold text-black tracking-tighter leading-[1.05] mb-6">
            Ready to build <br />
            <span className=" font-light opacity-90">with clarity?</span>
          </h2>

          <p
            className="text-xl md:text-2xl font-bold text-black/50 mb-16 tracking-wide uppercase"
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