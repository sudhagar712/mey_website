import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Brand Identity",
    desc: "Logo design, naming, visual systems and brand guidelines.",
    details: "Your brand is more than just a logo. It is the visual and emotional foundation of your business. Our comprehensive brand identity solutions ensure your brand communicates clearly, looks spectacular, and builds lasting trust with your ideal audience.",
    features: ["Logo & Mark Design", "Brand Guidelines", "Typography & Color", "Naming & Tone of Voice"],
    imgUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1074&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Social Media Management",
    desc: "Instagram, Facebook, LinkedIn and YouTube handled with structured monthly content.",
    details: "In today's fast-paced digital landscape, consistency and quality are paramount. We manage your presence across all major platforms with carefully curated, engaging content designed to spark conversations and build a loyal community.",
    features: ["Content Strategy", "Grid & Feed Design", "Community Management", "Analytics & Reporting"],
    imgUrl:
      "https://i0.wp.com/famesolutely.com/wp-content/uploads/2024/04/2150063164-jpg.webp?resize=1000%2C667&ssl=1",
  },
  {
    num: "03",
    title: "Website Design & Development",
    desc: "Fast, modern and conversion-focused websites.",
    details: "Your website is your ultimate 24/7 digital storefront. We build lightning-fast, fully responsive, and SEO-optimized web experiences that are meticulously designed to convert visitors into loyal customers.",
    features: ["UI/UX Design", "Custom Web Development", "E-Commerce Solutions", "SEO Optimization"],
    imgUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Video Production",
    desc: "Corporate films, product shoots and reels.",
    details: "Video is the most powerful and engaging medium available today. Our dedicated production team crafts visually stunning narratives that capture attention, evoke emotion, and drive your brand's message home.",
    features: ["Corporate Storytelling", "Reels & Short-Form", "Product Commercials", "Post-Production"],
    imgUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Performance Marketing",
    desc: "Instagram ads, Facebook ads and Google ads for lead generation.",
    details: "Turn clicks into highly qualified leads and revenue. Our performance marketing strategies are intensely data-driven, leveraging precise targeting and continuous optimization to maximize your return on ad spend.",
    features: ["Google Ads & PPC", "Meta Advertising", "Conversion Optimization", "Retargeting Campaigns"],
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    num: "06",
    title: "Outdoor Advertising",
    desc: "Hoardings, bus stop branding and exhibition stall design.",
    details: "Physical presence still carries undeniable weight. We design high-impact outdoor advertising setups that capture attention in the real world, turning public spaces into powerful branding opportunities.",
    features: ["Billboard & Hoardings", "Transit Advertising", "Exhibition Stalls", "OOH Strategy"],
    imgUrl:
      "https://images.pexels.com/photos/2881223/pexels-photo-2881223.jpeg",
  },
];

const TiltCard = ({ cap, onClick, index }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXRaw = useMotionValue(50);
  const mouseYRaw = useMotionValue(50);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const glareBackground = useMotionTemplate`radial-gradient(circle at ${mouseXRaw}% ${mouseYRaw}%, rgba(253, 224, 71, 0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    
    mouseXRaw.set((mouseX / width) * 100);
    mouseYRaw.set((mouseY / height) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseXRaw.set(50);
    mouseYRaw.set(50);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
      style={{ perspective: "1000px" }}
      className="relative w-full "
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(cap)}
        className="group relative cursor-pointer h-[320px] sm:h-[360px] lg:h-[370px] w-full rounded-[2rem]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* BASE LAYER - image, overlay, border radius */}
        <div 
          className="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#0a0a0a] ring-1 ring-black/5 shadow-lg group-hover:shadow-[0_30px_50px_rgba(0,0,0,0.2)] transition-shadow duration-500"
        >
          {/* IMAGE */}
          <img
            src={cap.imgUrl}
            alt={cap.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* OVERLAYS */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          {/* MOUSE GLARE */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen z-10"
            style={{ background: glareBackground }}
          />
        </div>

        {/* 3D CONTENT LAYER - Popped out using translateZ */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none"
          style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        >
          <span className="text-sm font-bold tracking-[0.3em] text-yellow-400 mb-3 block drop-shadow-md">
            {cap.num} /
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
            {cap.title}
          </h3>
          <p className="text-sm md:text-md text-yellow-500 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {cap.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CAPABILITIES = () => {
  const [selectedCap, setSelectedCap] = useState(null);

  const closeModal = () => setSelectedCap(null);

  return (
    <section className="bg-white py-24   px-6 md:px-12 lg:px-24 relative">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="max-w-[1100px] mx-auto">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 relative z-10"
        >
          <h4 className="text-md tracking-[0.4em] uppercase font-bold text-black/60 mb-4">
            Our Capabilities
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end border-b pb-10 border-black/10">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Complete Brand & <br /> Marketing Solutions
            </h2>

            <p className="text-lg md:text-md text-black/70">
              Everything your brand needs — structured under one direction.
            </p>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {capabilities.map((cap, i) => (
            <TiltCard 
              key={cap.num} 
              cap={cap} 
              index={i} 
              onClick={setSelectedCap} 
            />
          ))}
        </div>
      </div>

      {/* PREMIUM CAPABILITY MODAL */}
      <AnimatePresence>
        {selectedCap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-12 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-[#0a0a0a] text-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-2/5 h-[280px] md:h-auto relative">
                <img
                  src={selectedCap.imgUrl}
                  alt={selectedCap.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]"></div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-yellow-400 font-bold tracking-[0.2em] text-lg">
                    {selectedCap.num}
                  </span>
                  <div className="h-[1px] w-12 bg-yellow-400/50"></div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {selectedCap.title}
                </h2>

                <p className="text-lg text-white/90 font-medium mb-4">
                  {selectedCap.desc}
                </p>

                <p className="text-yellow-500 leading-relaxed mb-6 text-justify">
                  {selectedCap.details}
                </p>

                <div>
                  <h4 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-5 font-semibold">
                    Core Offerings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCap.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <button
                    onClick={closeModal}
                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors duration-300 rounded-none"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CAPABILITIES;