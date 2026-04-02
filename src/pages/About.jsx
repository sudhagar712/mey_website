import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import AboutMey from '../components/AboutMey';
import ThreePerspective from '../components/ThreePerspective';
import OutcomeSection from '../components/OutcomeSection';
import WorkWithSection from '../components/WorkWithSection';
import ProblemSection from '../components/ProblemSection';
import StandardsSection from '../components/StandardsSection';
import WeOperate from '../components/WeOperate';
import HowWeThink from '../components/HowWeThink';
import WhatMeyMeans from '../components/WhatMeyMeans';


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
        <PageBanner
          title="About us"
          breadcrumb="About us"
          bgImage="https://cdn.mos.cms.futurecdn.net/XXzWLdqVL7V6dP4UkUJ6bK.jpg"
        />

        <AboutMey />

        <ThreePerspective />
        <ProblemSection />

        <WhatMeyMeans />

        <HowWeThink />
        <WeOperate />

        <StandardsSection />
        <WorkWithSection />
        {/* Final Word Section */}
        <section className="w-full py-24 md:py-32 bg-[#fafafa] flex flex-col items-center justify-center px-4 md:px-12 border-t border-gray-200/50 relative overflow-hidden">
          {/* Subtle background decoration */}
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto text-center on-scroll-reveal z-10 w-full">
            <h4 className="text-xs md:text-sm font-bold tracking-[0.3em] text-gray-800 uppercase mb-10 md:mb-14 flex items-center justify-center w-full">
              <span className="w-8 md:w-16 h-[1px] bg-gray-300 mr-4 md:mr-6"></span>
              The Final Word
              <span className="w-8 md:w-16 h-[1px] bg-gray-300 ml-4 md:ml-6"></span>
            </h4>

            <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold leading-snug md:leading-[1.3] text-[#111] tracking-tight mb-8">
              If a brand feels unclear, inconsistent, or replaceable, the issue is rarely effort or visibility.
            </h2>

            <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-12">
              It is a lack of alignment at its core.
            </p>

            <div className="inline-block mt-4 md:mt-8">
              <p className="text-lg md:text-xl font-extrabold text-[#111] uppercase tracking-[0.2em] relative">
                That is where MEY begins
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-yellow-400"></span>
              </p>
            </div>
          </div>
        </section>
        <OutcomeSection />
      </main>
    </>
  );
};

export default About;