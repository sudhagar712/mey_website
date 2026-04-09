import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../data/servicesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdArrowBackIos } from "react-icons/md";
import { motion } from "framer-motion";

const placeholderImages = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop", // Agency / creative
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", // Strategy / planning
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" // Team collaboration
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white text-2xl font-bold">
      Service not found
    </div>
  );

  const images = service.gallery || placeholderImages;

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden relative">
      <Navbar />

      {/* Dynamic Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[100vh] flex items-center justify-center pt-24">
        {/* Background Image with Parallax effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Colorful Gradient Overlays for visually appealing look */}
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 via-transparent to-purple-600/20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-start mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-500 hover:text-black hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 group mb-8"
            >
              <MdArrowBackIos className="transform translate-x-1 group-hover:translate-x-0 transition-transform text-sm" />
              <span className="font-bold text-sm tracking-widest uppercase">
                Back to Services
              </span>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-2xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-500">
              {service.title}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto">
        {/* Decorative Blurred Glows for Mobile & Desktop */}
        <div className="absolute top-20 left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div
              variants={fadeIn}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors duration-500"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white border-l-4 border-yellow-500 pl-4 tracking-tight">
                Overview
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-300 font-light">
                {service.description}
              </p>
            </motion.div>

            <div className="lg:col-span-5 hidden md:block relative h-[600px] lg:h-[750px] mt-10 lg:mt-0 lg:sticky lg:top-32">
              {/* Image 1: Main Large Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="absolute top-0 right-0 lg:right-4 w-3/4 h-[400px] lg:h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 group"
              >
                <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src={images[0]}
                  alt="Creative Process 1"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>

              {/* Image 2: Overlapping Bottom Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02, zIndex: 40 }}
                className="absolute bottom-20 left-0 w-2/3 h-[300px] lg:h-[350px] rounded-[2rem] overflow-hidden border-4 border-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 group"
              >
                <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                <img
                  src={images[1]}
                  alt="Creative Process 2"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>

              {/* Image 3: Small Floating Accent Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute bottom-0 lg:bottom-10 right-10 w-2/5 h-[200px] lg:h-[240px] rounded-[1.5rem] z-30 group"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full rounded-[1.5rem] overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(234,179,8,0.3)] relative"
                >
                  <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    src={images[2]}
                    alt="Creative Process 3"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Mobile Only: Horizontal Carousel for colorful mobile design */}
            <div
              className="md:hidden flex overflow-x-auto gap-5 pb-10 snap-x -mx-6 px-6 relative w-[calc(100%+3rem)] mt-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`
               div::-webkit-scrollbar {
                 display: none;
               }
             `}</style>

              {images.map((img, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={idx}
                  className="shrink-0 w-[85vw] h-80 snap-center overflow-hidden rounded-[2.5rem] border border-white/10 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] group"
                >
                  {/* Vibrant Gradient Backgrounds for Mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br mix-blend-overlay z-10 opacity-60 ${
                      idx === 0
                        ? "from-yellow-500 to-orange-500"
                        : idx === 1
                          ? "from-purple-500 to-blue-500"
                          : "from-red-500 to-yellow-500"
                    }`}
                  />
                  <img
                    src={img}
                    alt={`process-mobile-${idx}`}
                    className="w-full h-full object-cover relative z-0"
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeIn}
              className="bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] group-hover:bg-yellow-500/10 transition-colors duration-700" />

              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-500 relative z-10">
                Key Offerings
              </h3>
              <ul className="space-y-6 relative z-10">
                {service.points.map((p, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover/item:border-yellow-500 group-hover/item:bg-yellow-500/10 transition-all duration-300 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 group-hover/item:shadow-[0_0_10px_#eab308] transition-shadow duration-300" />
                    </div>
                    <span className="text-lg text-neutral-300 group-hover/item:text-white transition-colors duration-300 pt-1">
                      {p}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="pt-6 pb-10 flex text-center md:text-left justify-center md:justify-start"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 w-full sm:w-auto text-base font-bold text-black uppercase tracking-widest bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start a Project
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
