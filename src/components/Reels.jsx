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
];

const Reels = () => {
  const [active, setActive] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const videoRefs = useRef([]);
  const progressInterval = useRef(null);
  const touchStartX = useRef(0);

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ▶️ Play video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === active) {
        video.currentTime = 0;
        video.play().catch(() => { });
      } else {
        video.pause();
      }
    });
  }, [active]);

  // ⏳ Progress auto next
  useEffect(() => {
    clearInterval(progressInterval.current);
    setProgress(0);

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          setActive((a) => Math.min(a + 1, reelsData.length - 1));
          return 0;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(progressInterval.current);
  }, [active]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
      // swipe left (go next)
      setActive((prev) => Math.min(prev + 1, reelsData.length - 1));
    } else {
      // swipe right (go prev)
      setActive((prev) => Math.max(prev - 1, 0));
    }
  };

  const nextSlide = () => setActive((prev) => Math.min(prev + 1, reelsData.length - 1));
  const prevSlide = () => setActive((prev) => Math.max(prev - 1, 0));

  return (
    <section className="w-full bg-[#fafafa]  mt-10 flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-10">

        {/* Header Section styled after the reference image */}
        <div className="relative mb-16 flex items-center justify-between">
          {/* Left Arrow (Hidden on Mobile, matching reference edge alignment) */}
          <button
            onClick={prevSlide}
            disabled={active === 0}
            aria-label="Previous Slide"
            className={`hidden md:flex w-14 h-14 rounded-full items-center justify-center bg-[#2d2d2d] text-white transition-all duration-300 ${active === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-black shadow-lg hover:scale-105"
              }`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center flex-1 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl  font-extrabold tracking-tight text-[#111]">Reels</h2>

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={active === reelsData.length - 1}
            aria-label="Next Slide"
            className={`hidden md:flex w-14 h-14 rounded-full items-center justify-center bg-[#2d2d2d] text-white transition-all duration-300 ${active === reelsData.length - 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-black shadow-lg hover:scale-105"
              }`}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center gap-10 md:hidden">
          <button
            onClick={prevSlide}
            disabled={active === 0}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full bg-[#2d2d2d] text-white flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={active === reelsData.length - 1}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full bg-[#2d2d2d] text-white flex items-center justify-center disabled:opacity-30 transition-opacity"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div
          className="relative w-full h-[450px] sm:h-[600px] flex justify-center items-center select-none mt-4 md:mt-10"
          style={{ perspective: "1200px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {reelsData.map((item, index) => {
            const isActive = index === active;
            const position = index - active;
            const absPos = Math.abs(position);
            const sign = Math.sign(position);

            // Responsive 3D Math Coordinates
            const rotateY = sign * -45;
            const translateZ = absPos === 0 ? 0 : -350;
            const translateX = position * (isMobile ? 160 : 350);

            // Visibility bounds
            const isVisible = absPos <= 2;
            const zIndex = 100 - absPos;

            return (
              <div
                key={index}
                onClick={() => !isActive && setActive(index)}
                className={`absolute top-1/2 left-1/2 w-[240px] sm:w-[320px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-2xl transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${!isActive ? 'cursor-pointer' : ''
                  }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity: isVisible ? (absPos === 2 ? 0.3 : 1) : 0,
                  filter: isActive ? "blur(0px) brightness(1.1)" : "blur(5px) brightness(0.6)",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-[2rem] transform scale-105" // scale prevents edge lines
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none rounded-[2rem]"></div>

                <div className="absolute bottom-8 left-6 right-6 text-white pointer-events-none">
                  <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">{item.title}</h3>
                </div>

                {isActive && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                    className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md px-3 py-3 rounded-full text-white transition-all duration-300 shadow-lg z-50 text-sm"
                  >
                    {isMuted ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    )}
                  </button>
                )}

                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-white/30 rounded-b-[2rem]">
                    <div
                      className="h-full bg-yellow-400 rounded-bl-[2rem] transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* Play icon overlay for inactive slides to hint clicking */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-[2rem]">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Reels;
