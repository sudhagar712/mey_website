import React, { useState, useEffect, useRef } from "react";

const reelsData = [
  {
    title: "Reel 01",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776251996/reelnew_xqqaaf.mp4",
  },
  {
    title: "Reel 02",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776252001/reelnew2_r8s8rv.mp4",
  },
  {
    title: "Reel 03",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776251995/reelnew7_wiovzx.mp4",
  },
  {
    title: "Reel 04",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776251993/reelnew3_rv8yqs.mp4",
  },

  {
    title: "Reel 05",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776251988/reelnew6_dndlb6.mp4",
  },
  {
    title: "Reel 06",
    video:
      "https://res.cloudinary.com/drnmkhg5o/video/upload/v1776251992/reelnew5_xqp4zi.mp4",
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
  const componentRef = useRef(null);



  // Responsive
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👉 INTERSECTION OBSERVER FOR MUTING WHEN SCROLLING AWAY
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the component is less than 30% visible, mute the video
          if (!entry.isIntersecting) {
            setIsMuted(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when less than 30% is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // 👉 AUTO SLIDE (5 sec)
  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setActive((prev) =>
        prev === reelsData.length - 1 ? 0 : prev + 1
      );
      // Keep muted state as-is; only user click should unmute
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
        video.play().catch(() => { });
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
    // Do NOT auto-unmute — only user click should unmute
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? reelsData.length - 1 : prev - 1
    );
    // Do NOT auto-unmute — only user click should unmute
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
      ref={componentRef}
      className="w-full bg-black  py-20 pb-32 flex flex-col  justify-center overflow-hidden relative"
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

        <div className="flex gap-4 ">
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
        className="relative w-full h-[550px] md:h-[650px]  flex justify-center items-center z-20"
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
              className={`absolute aspect-[9/16] rounded-[2rem]  overflow-hidden bg-zinc-900 
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
                opacity: abs === 2 ? 0 : (abs === 1 ? 0.35 : 1),
                filter: isActive ? 'brightness(1)' : `brightness(${abs === 1 ? 0.43 : 0.2}) blur(${abs === 1 ? 0 : 3}px)`,
                transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover scale-105"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

              {isActive && (
                <>
                  {/* ─── CENTER MUTE/UNMUTE BUTTON ─── */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted((m) => !m);
                      }}
                      className="pointer-events-auto group relative flex items-center justify-center"
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: isMuted
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(250,204,21,0.15)",
                        border: isMuted
                          ? "1.5px solid rgba(255,255,255,0.18)"
                          : "1.5px solid rgba(250,204,21,0.5)",
                        backdropFilter: "blur(12px)",
                        boxShadow: isMuted
                          ? "0 4px 32px rgba(0,0,0,0.4)"
                          : "0 4px 32px rgba(250,204,21,0.25), 0 0 0 8px rgba(250,204,21,0.07)",
                        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                    >
                      {/* Pulse ring when muted */}
                      {isMuted && (
                        <span
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            background: "rgba(255,255,255,0.07)",
                            animationDuration: "1.8s",
                          }}
                        />
                      )}
                      {isMuted ? (
                        // Muted icon
                        <svg
                          className="w-7 h-7"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        // Unmuted icon
                        <svg
                          className="w-7 h-7"
                          style={{ color: "#facc15" }}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* ─── BOTTOM CONTROLS ─── */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-700">
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
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Reels;