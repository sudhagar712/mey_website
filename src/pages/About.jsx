import React, { useEffect } from 'react';
import PageBanner from '../components/PageBanner';

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
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                    
                    .font-premium-serif {
                        font-family: 'Playfair Display', Georgia, serif;
                    }
                    
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

      <main className="bg-[#ffff00] min-h-screen text-black w-full overflow-hidden">

        {/* 1. Banner Section */}
        <PageBanner title="About Us" breadcrumb="About" />

        {/* 2. Philosophy & Mission (Dark Premium Container) */}
        <section className="bg-[#0f0f0f] text-white pt-32 lg:pt-40 pb-40 px-6 md:px-12 lg:px-24 rounded-t-[2.5rem] md:rounded-t-[4.5rem] relative">
          <div className="max-w-[1500px] mx-auto">

            {/* Philosophy */}
            <div className="mb-32 lg:mb-48">
              <div className="mb-16 md:mb-24 on-scroll-reveal">
                <h2 className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-[#ffff00]/70 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Our Philosophy
                </h2>
                <h3 className="font-premium-serif text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9.5rem] italic font-light tracking-tighter leading-none m-0 text-[#ffff00]">
                  Truth Before <br />
                  <span className="text-white">Business.</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                <ul className="flex flex-col gap-6 md:gap-10 text-xl sm:text-2xl md:text-[2.2rem] lg:text-[2.5rem] font-light text-white/50 tracking-wide on-scroll-reveal" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <li className="flex items-center gap-6 transition-colors duration-300 hover:text-white">
                    <span className="w-8 md:w-16 h-[1px] bg-white/30"></span>
                    Before campaigns.
                  </li>
                  <li className="flex items-center gap-6 transition-colors duration-300 hover:text-white">
                    <span className="w-8 md:w-16 h-[1px] bg-white/30"></span>
                    Before content.
                  </li>
                  <li className="flex items-center gap-6 transition-colors duration-300 hover:text-white">
                    <span className="w-8 md:w-16 h-[1px] bg-white/30"></span>
                    Before advertising budgets.
                  </li>
                </ul>

                <div className="flex flex-col justify-center on-scroll-reveal" style={{ transitionDelay: '0.2s' }}>
                  <div className="border-l-[3px] border-[#ffff00] pl-6 md:pl-10 py-2">
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-4xl text-white font-medium mb-6 leading-[1.3] tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      We understand your business first.
                    </p>
                    <p className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-[#ffff00] font-bold italic font-premium-serif tracking-tight leading-tight">
                      Then we build your brand.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Mission */}
            <div className="border-t border-white/10 pt-20 md:pt-32 on-scroll-reveal">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_3.5fr] gap-10 md:gap-16 items-start">

                <div>
                  <h2 className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-[#ffff00]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Mission
                  </h2>
                </div>

                <div>
                  <p className="font-premium-serif text-2xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-light leading-[1.25] text-white tracking-tight">
                    <span className="text-white/30">To help businesses</span> present themselves with clarity, confidence <span className="text-[#ffff00] italic">and measurable impact.</span>
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default About;