import React from 'react';
import SEO from '../components/SEO';
// import PageBanner from '../components/PageBanner';
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
    <main className="w-full min-h-screen bg-[#fcfcfc] mt-15 ">
      <SEO
        title="Branding & Marketing Projects | MEY Chennai"
        description="Explore branding, social media, website and advertising projects delivered by MEY."
      />
      {/* <PageBanner
        title="Our Work"
        breadcrumb="Work"
        bgImage="https://www.myfitnesschat.com/wp-content/uploads/2019/03/pexels-photo-1509428.jpeg"
      /> */}


<CoperateBanner  />  

      <Printcreative />
     <VideoSlider />
      <Digitalcreative />

      <PdfPreview />

      <Motionposter />

      <div className=" bg-black  py-20 px-6 md:px-40">
        <h2 className="text-3xl md:text-6xl text-white font-bold mb-12 ">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="group relative rounded-3xl overflow-hidden bg-black border border-white/10"
            >
              {/* IMAGE */}
              <div className=" overflow-hidden">
                <img
                  src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white border border-white px-4 py-2 rounded-full">
                  View Project →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <Reels />
 
    </main>
  );
};

export default Work;