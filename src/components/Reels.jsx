import React, { useState, useEffect, useRef } from "react";

const reelsData = [
  {
    title: "Reel 01",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929312/vv4_eptaeq.mp4",
  },
  {
    title: "Reel 02",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929318/vv1_acjmxd.mp4",
  },
  {
    title: "Reel 03",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929324/vv3_sczozq.mp4",
  },
  {
    title: "Reel 04",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1773929363/vv2_kad9ol.mp4",
  },


    {
    title: "Reel 05",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1775836079/Euro_Kids_uabzfv.mp4",
  },

     {
    title: "Reel 06",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1775836398/Bake___arts_REEL_2_FINAL_2_1_mypnwf.mp4",
  },

     {
    title: "Reel 07",
    video:
      "https://res.cloudinary.com/dgphjgzgt/video/upload/v1775836416/Kalour_FINAL_Reels_2_1_kbxriz.mp4",
  },





];

const Reels = () => {
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const videoRefs = useRef([]);
  const touchStartX = useRef(0);
  const autoSlideRef = useRef(null);

  // Responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👉 AUTO SLIDE (5 sec)
  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setActive((prev) =>
        prev === reelsData.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(autoSlideRef.current);
  }, [active, isPaused]);

  // 👉 VIDEO + PROGRESS
  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const activeVideo = videoRefs.current[active];
      if (activeVideo && activeVideo.duration && !isNaN(activeVideo.duration)) {
        const percent =
          (activeVideo.currentTime / activeVideo.duration) * 100;
        setProgress(percent || 0);
      }
      animationFrame = requestAnimationFrame(updateProgress);
    };

    setProgress(0);

    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        video.pause();
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [active]);

  // 👉 Controls
  const nextSlide = () => {
    setActive((prev) =>
      prev === reelsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? reelsData.length - 1 : prev - 1
    );
  };

  // 👉 Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? nextSlide() : prevSlide();
  };

  const cardWidth = isMobile ? 260 : 360;
  const gap = isMobile ? 200 : 320;

  return (
    <section
      className="w-full bg-black  py-20 pb-32 flex flex-col justify-center overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
    {/* GRID BACKGROUND SOFT */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />

      
      

      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-20 mb-16 relative z-20 flex flex-row justify-between items-center md:items-center gap-8">
        <div className="flex-1">
           <div className="flex  gap-4 text-yellow-500 text-center mb-6">
 
        <h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] mb-2 uppercase">
          Reels
        </h2>
       
      </div>
     
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide} 
            className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500 border border-white/10 hover:bg-white/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-md group"
          >
            <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500 border border-white/10 hover:bg-white/20 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-md group"
          >
            <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative w-full h-[550px] md:h-[650px] flex justify-center items-center z-20"
        style={{ perspective: "1500px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {reelsData.map((item, index) => {
          let position = index - active;

          if (position > reelsData.length / 2) {
            position -= reelsData.length;
          }
          if (position < -reelsData.length / 2) {
            position += reelsData.length;
          }

          const abs = Math.abs(position);
          if (abs > 2) return null; // Only render immediate neighbors to save performance

          const isActive = position === 0;

          return (
            <div
              key={index}
              onClick={() => { if (!isActive) setActive(index); }}
              className={`absolute aspect-[9/16] rounded-[2rem] overflow-hidden bg-zinc-900 
                ${isActive ? 'border border-yellow-400/50 shadow-[0_0_50px_rgba(250,204,21,0.15)] cursor-default' : 'border border-white/5 cursor-pointer hover:border-white/20'}
              `}
              style={{
                width: cardWidth,
                transform: `
                  translate(-50%, -50%)
                  translateX(${position * gap}px)
                  translateZ(${abs === 0 ? 50 : abs === 1 ? -100 : -200}px)
                  rotateY(${position * -15}deg)
                  rotateZ(${position * -2}deg)
                  scale(${isActive ? 1 : 0.85})
                `,
                top: "50%",
                left: "50%",
                zIndex: 20 - abs,
                opacity: abs === 2 ? 0 : (abs === 1 ? 0.4 : 1),
                filter: isActive ? 'brightness(1)' : 'brightness(0.3) blur(2px)',
                transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover scale-105" // Avoid transparent edges when transforming
              />

              {/* Gradient Overlay for Text Readability */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

              {isActive && (
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-end gap-4 mb-5 pointer-events-auto">
                    <div className="flex flex-col gap-2">
                      <span className="inline-block w-fit px-3 py-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                        Latest Reel
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all shadow-lg shrink-0"
                    >
                      {isMuted ? (
                         <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                      ) : (
                         <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                      )}
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reels;