import React from 'react';
import SEO from '../components/SEO';
import PageBanner from '../components/PageBanner';
import { motion } from "framer-motion";
import Reels from '../components/Reels';
import screen1 from "../assets/sreen.png"
import Digitalcreative from '../components/Digitalcreative';
import PdfPreview from '../components/PdfPreview';
import Motionposter from '../components/Motionposter';
import Printcreative from '../components/Printcreative';
import CoperateBanner from '../components/CoperateBanner';
import VideoSlider from '../components/VideoSlider';
import OutdoorBranding from '../components/OutdoorBranding';



const projects = [
  {
    title: "ajdentoaestheticcare",
    description: "Website for Our Client Project",
    image: screen1,
    link: "https://www.ajdentoaestheticcare.com/",
  },
];




const Work = () => {

  return (
    <main className="w-full min-h-screen  ">
      <SEO
        title="Branding & Marketing Work | Portfolio Projects | MEY Chennai"
        description="Browse MEY's portfolio — branding, social media, website and advertising projects delivered for clients across Chennai and India. Real work. Real results."
        keywords="MEY work, MEY portfolio, branding projects Chennai, digital marketing portfolio, website design portfolio MEY, social media campaigns Chennai"
      />
      <PageBanner
        title="Our Work"
        bgImage="https://i.pinimg.com/1200x/ef/d6/2a/efd62afb5d06985893371345c2c5a368.jpg"
      />

      <Reels />

      <Printcreative />
      <Digitalcreative />

      <OutdoorBranding />

      <VideoSlider />

      <Motionposter />




      <div className="bg-black py-12 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* GRID BACKGROUND SOFT */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />

        {/* WARM GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#fec000]/15 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
          {/* TITLE */}
          <div className="mb-8 md:mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Projects that <span className="text-white"> define </span> <span className="text-yellow-500"> Websites</span>
            </h2>
          </div>

          {/* DYNAMIC CENTERED FLEX CONTAINER */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-white border border-gray-200 hover:border-yellow-400/50 transition-all duration-500 shadow-lg sm:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(250,204,21,0.15)] cursor-pointer w-full lg:w-[calc(50%-1rem)] max-w-[700px]"
              >
                {/* IMAGE CONTAINER (Native Height, No Cropping) */}
                <div className="relative w-full overflow-hidden bg-gray-100 min-h-[200px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block opacity-95 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-[1.02] transform origin-top"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500 pointer-events-none" />

                  {/* BOTTOM GRADIENT FOR TEXT (Takes up bottom half of image) */}
                  <div className="absolute bottom-0 left-0 w-full h-[70%] sm:h-[60%] bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                </div>

                {/* CONTENT FLOAT (GLASS STYLE OVER IMAGE) */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-0 z-10 transition-transform duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5 shadow-2xl">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white drop-shadow-md truncate">
                      {project.title}
                    </h3>

                    <p className="text-[11px] sm:text-sm text-gray-200 mt-1 sm:mt-2 font-medium line-clamp-2 drop-shadow-md leading-relaxed">
                      {project.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-2 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 text-yellow-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest pl-1">
                      View Project
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <PdfPreview />
      <CoperateBanner />
    </main>
  );
};

export default Work;