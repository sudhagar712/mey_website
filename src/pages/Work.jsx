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
    <main className="w-full min-h-screen bg-[#fcfcfc] ">
      <SEO
        title="Branding & Marketing Projects | MEY Chennai"
        description="Explore branding, social media, website and advertising projects delivered by MEY."
      />
      <PageBanner
        title="Our Work"
        bgImage="https://i.pinimg.com/1200x/ef/d6/2a/efd62afb5d06985893371345c2c5a368.jpg"
      />

      <Reels />

      <Printcreative />

      <Digitalcreative />
      <VideoSlider />

      <Motionposter />

      <div className="bg-black py-20 md:py-32 px-6 md:px-20 relative overflow-hidden">
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fec000]/10 blur-[120px]" />

        {/* TITLE */}
        <div className="max-w-7xl mx-auto mb-16 md:mb-24">
         

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Projects that <span className="text-[#fec000]">define Website</span>
          </h2>
        </div>

        {/* GRID */}
        <div className=" grid sm:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[280px] sm:h-[350px] md:h-[420px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fit transition duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* CONTENT FLOAT (GLASS STYLE) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:bg-white/20">
                  <h3 className="text-lg md:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-300 mt-2">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center gap-2 text-[#fec000] text-sm">
                    View Project
                    <span className="group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#fec000]/40 transition duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>

      <PdfPreview />
      <CoperateBanner />
    </main>
  );
};

export default Work;