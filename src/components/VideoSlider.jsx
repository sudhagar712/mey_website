import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const videosData = [
  {
    id: 1,
    title: "Euro Kids Sports Day",
    category: "Event Highlight",
    description: "Experience our events through immersive visuals and storytelling. Every frame captures energy, emotion, and unforgettable moments.",
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773939894/Euro_Kids_Sports_Day_Full_event_usmcln.mp4",
  },
  {
    id: 2,
    title: "Corporate Excellence",
    category: "Brand Story",
    description: "High-end corporate event coverage reflecting brand identity, premium aesthetics, and professional excellence.",
    src: "https://res.cloudinary.com/dgphjgzgt/video/upload/v1775734423/MINISTER_FAISAL_AL_RAWAS_1_qdcaeu.mp4",
  }
];



const VideoSlider = () => {




useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const index = videoRefs.current.findIndex((v) => v === video);

        // ❌ visible illa na pause
        if (!entry.isIntersecting) {
          video.pause();

          // ✅ UI update (play button thirumba varum)
          setPlayingStates((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
          });
        }
      });
    },
    {
      threshold: 0.4, // 40% visible iruntha dhaan play state maintain
    }
  );

  // observe all videos
  videoRefs.current.forEach((video) => {
    if (video) observer.observe(video);
  });

  return () => {
    videoRefs.current.forEach((video) => {
      if (video) observer.unobserve(video);
    });
  };
}, []);












  const videoRefs = useRef([]);

  const [playingStates, setPlayingStates] = useState(
    videosData.map(() => false)
  );

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // one video only play
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setPlayingStates(videosData.map((_, i) => i === index && !video.paused));
  };



  return (
    <section className="w-full bg-black text-white py-24 md:py-36 relative border-y border-white/5 overflow-hidden">
      
      {/* Dynamic Background Noise/Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "6rem 6rem",
        }}
      />
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10 flex flex-col gap-24 md:gap-40 lg:gap-48">
        
        {/* Intro Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-4 md:mb-0"
        >
        
           <div
                className="inline-flex items-center gap-4 mb-6"
              >
                <span className="w-10 h-[2px] bg-[#f7d83c]"></span>
                <h4 className="text-3xl md:text-4xl tracking-[0.3em] uppercase font-bold text-white">
                  Events
                </h4>
              </div>
        </motion.div>

        {/* Videos List (One by One) */}
        {videosData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              
              {/* Text Block */}
              <div className="w-full lg:w-5/12 flex flex-col justify-center relative">
                
                {/* Big Background Number */}
                <div className={`absolute top-[-10%] ${isEven ? 'left-[-10%]' : 'right-[-10%]'} text-[15rem] leading-none font-black text-white/[0.02] pointer-events-none select-none z-0`}>
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-white/30 font-black text-5xl md:text-7xl tracking-tighter leading-none">
                      0{index + 1}
                    </span>
                    <div className="h-12 w-[1px] bg-white/20 shadow-lg hidden md:block mx-2"></div>
                    <div className="flex flex-col">
                      <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                      <span className="text-gray-500 text-[10px] uppercase tracking-widest">MEY Studios</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-[1.2] text-white/90 drop-shadow-sm">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-4 text-sm font-semibold tracking-wider text-white uppercase group cursor-pointer hover:text-yellow-400 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10 transition-all duration-300">
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    Watch Full Video
                  </div>
                </div>
              </div>

             {/* Video Block */}
<div className="w-full lg:w-7/12 relative group mt-8 lg:mt-0">
  {/* Decorative Glow behind video */}
  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

  {/* Main Video Wrapper */}
  <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-white/20 transition-all duration-700">
    
    <video
      ref={(el) => (videoRefs.current[index] = el)}
      src={item.src}
      className="w-full h-full object-cover scale-[1.02] opacity-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1.5s] ease-out"
    />

    {/* Glassmorphism Inner Frame */}
    <div className="absolute inset-0 border-[2px] border-white/5 rounded-[2.5rem] pointer-events-none mix-blend-overlay"></div>
  </div>

  {/* Corner Decorative Element (UPDATED) */}
  <div
    className={`absolute ${
      isEven ? "-left-6 md:-left-12" : "-right-6 md:-right-12"
    } -bottom-6 md:-bottom-10 w-24 h-24 md:w-32 md:h-32 
    bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 
    hidden sm:flex items-center justify-center z-10 shadow-2xl`}
  >
    {/* spinning ring */}
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite]"></div>

    {/* ▶ PLAY / PAUSE BUTTON */}
    <button
      onClick={() => togglePlayPause(index)}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
        
        {playingStates[index] ? (
          // ⏸ PAUSE
          <svg
            className="w-4 h-4 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
          </svg>
        ) : (
          // ▶ PLAY
          <svg
            className="w-4 h-4 text-black ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}

      </div>
    </button>
  </div>
</div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoSlider;