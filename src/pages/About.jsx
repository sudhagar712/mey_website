import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import AboutMey from '../components/AboutMey';
import ThreePerspective from '../components/ThreePerspective';
import OutcomeSection from '../components/OutcomeSection';
import WorkWithSection from '../components/WorkWithSection';
// import ProblemSection from '../components/ProblemSection';
import WhatDrivesUs from "../components/StandardsSection";
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
        title="About MEY | Branding & Digital Marketing Agency in Chennai"
        description="Learn about MEY — Chennai's trusted branding and digital marketing agency built on the principle 'Truth Before Business'. Know our story, team and approach."
        keywords="about MEY, MEY agency Chennai, branding company Chennai, digital marketing team Chennai, MEY story, MEY digital"
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
          bgImage="https://assets.everspringpartners.com/2e/73/1d7a831b4814b8f9e7c86f743cd5/pl-what-is-international-business-1600x500.jpg"
        />

        <AboutMey />

        <ThreePerspective />
        {/* <ProblemSection /> */}

      

       
      

 <WeOperate />
   <WhatMeyMeans />
        <WhatDrivesUs />
         <HowWeThink />
        <WorkWithSection />
       
        <OutcomeSection />
      </main>
    </>
  );
};

export default About;