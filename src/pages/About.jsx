import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import AboutMey from '../components/AboutMey';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const elements = document.querySelectorAll('.on-scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="About MEY | Branding Agency in Chennai"
        description="Learn about MEY, a branding and digital marketing agency in Chennai built on the principle Truth Before Business."
      />
      <style>
        {`
                  
                    
        
                    /* Entry Animations */
                    .animate-reveal {
                        animation: revealLine 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                    }
                    .animate-fade-up {
                        animation: fadeUp 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
                    }

                    @keyframes revealLine {
                        0% { transform: translateY(110%); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes fadeUp {
                        0% { transform: translateY(30px); opacity: 0; }
                        100% { transform: translateY(0); opacity: 1; }
                    }

                    .delay-100 { animation-delay: 0.1s; }
                    .delay-200 { animation-delay: 0.2s; }
                    .delay-300 { animation-delay: 0.3s; }
                    .delay-400 { animation-delay: 0.4s; }
                    .delay-500 { animation-delay: 0.5s; }

                    /* Scroll Animations */
                    .on-scroll-reveal {
                        opacity: 0;
                        transform: translateY(40px);
                        transition: all 1.2s cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    
                    .on-scroll-reveal.is-visible {
                        opacity: 1;
                        transform: translateY(0);
                    }
                `}
      </style>

      <main className=" min-h-screen text-black w-full overflow-hidden">
        <PageBanner title="About us" breadcrumb="About us" />

        <AboutMey />

        {/* 2. Philosophy & Mission (Dark Premium Container) */}
        <section className="  bg-white lg:pt-40 pb-40 px-6 md:px-12 lg:px-24  relative">
          <div className="">
            {/* Philosophy */}
            <section className="py-28  lg:px-1">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Image */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src="https://i.pinimg.com/736x/bf/be/42/bfbe424d3b58313bdb88f632fa7c4f4e.jpg"
                    alt="MEY Philosophy"
                    className="w-full h-[420px] lg:h-[560px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Right Content */}
                <div>
                  <h2 className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold  mb-6">
                    Our Philosophy
                  </h2>

                  <h3 className=" text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]  font-bold tracking-tighter leading-none  mb-10">
                    Truth Before <br />
                    <span className="">Business.</span>
                  </h3>

                  {/* Points */}
                  <ul className="flex flex-col  gap-6 md:gap-8 text-lg md:text-xl lg:text-2xl font-light tracking-wide mb-12">
                    <li className="flex items-center gap-6  transition">
                      <span className="w-12  "></span>✅ Before campaigns.
                    </li>

                    <li className="flex items-center gap-6  transition">
                      <span className="w-12 "></span>✅ Before content.
                    </li>

                    <li className="flex items-center gap-6  transition">
                      <span className="w-12  "></span>✅ Before advertising
                      budgets.
                    </li>
                  </ul>

                  {/* Highlight block */}
                  <div className="border-l-[3px] border-[#000000] pl-6">
                    <p className="text-xl md:text-2xl lg:text-3xl  font-medium mb-4 leading-snug">
                      We understand your business first.
                    </p>

                    <p className="text-2xl md:text-4xl  font-bold  font-premium-serif">
                      Then we build your brand.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mission */}
            <section className="lg:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-3xl bg-[#fbba00] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  <div>
                    {/* Right Content */}
                    <div className="p-10 md:p-16">
                      <h2
                        className="text-[12px] md:text-lg tracking-[0.4em] uppercase font-bold mb-6"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        Mission
                      </h2>

                      <p className="font-premium-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] text-white tracking-tight">
                        <span className="text-white">
                          To help businesses
                        </span>{" "}
                        present themselves with clarity, confidence{" "}
                        <span className="text-black ">
                          and measurable impact.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;