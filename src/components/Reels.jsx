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

  // ▶️ Play video, track progress, and auto-next when finished
  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const activeVideo = videoRefs.current[active];
      if (activeVideo && activeVideo.duration) {
        const percent = (activeVideo.currentTime / activeVideo.duration) * 100;
        setProgress(percent || 0);
      }
      animationFrame = requestAnimationFrame(updateProgress);
    };

    setProgress(0); // Reset progress on slide change

    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      // Clear previous ended listeners
      video.onended = null;

      if (i === active) {
        video.currentTime = 0;
        video.play().catch(() => { });

        // When the video ends, automatically go to the next slide (or loop to the first)
        video.onended = () => {
          setActive((prev) => (prev === reelsData.length - 1 ? 0 : prev + 1));
        };

        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        video.pause();
      }
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
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
      setActive((prev) => (prev === reelsData.length - 1 ? 0 : prev + 1));
    } else {
      // swipe right (go prev)
      setActive((prev) => (prev === 0 ? reelsData.length - 1 : prev - 1));
    }
  };

  const nextSlide = () => setActive((prev) => (prev === reelsData.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActive((prev) => (prev === 0 ? reelsData.length - 1 : prev - 1));

  return (
    <section className="w-full bg-[#fafafa] mt-10  flex flex-col justify-center overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      <div className="max-w-[1400px] w-full mx-auto px-4 md:px-10">

        {/* Header Section styled after the reference image */}
        <div className="relative mb-16 flex items-center justify-between">
          {/* Left Arrow (Hidden on Mobile, matching reference edge alignment) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden md:flex w-14 h-14 rounded-full items-center justify-center bg-[#2d2d2d] text-white transition-all duration-300 cursor-pointer hover:bg-black shadow-lg hover:scale-105"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center flex-1 max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl  tracking-tight text-[#111]">Reels</h2>

          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden md:flex w-14 h-14 rounded-full items-center justify-center bg-[#2d2d2d] text-white transition-all duration-300 cursor-pointer hover:bg-black shadow-lg hover:scale-105"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex justify-center mb-10 gap-10 md:hidden">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full bg-[#2d2d2d] text-white flex items-center justify-center transition-opacity hover:opacity-80 active:scale-95"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full bg-[#2d2d2d] text-white flex items-center justify-center transition-opacity hover:opacity-80 active:scale-95"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div
          className="relative w-full h-[450px] sm:h-[600px] mb-10 flex justify-center items-center select-none mt-4 md:mt-10"
          style={{ perspective: "1200px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {reelsData.map((item, index) => {
            const isActive = index === active;
            const position = index - active;
            const absPos = Math.abs(position);
            const sign = Math.sign(position);

            // Premium 3D Carousel Math
            const translateX = position * (isMobile ? 180 : 380);
            const translateZ = absPos === 0 ? 50 : -200;
            const rotateY = sign * -10; // Very subtle angled rotation
            const scale = absPos === 0 ? 1 : 0.8;

            // Visibility bounds - show only immediate left and right
            const isVisible = absPos <= 1;
            const zIndex = 100 - absPos;

            return (
              <div
                key={index}
                onClick={() => !isActive && setActive(index)}
                className={`absolute top-1/2 left-1/2 w-[260px] sm:w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10 ${!isActive ? 'cursor-pointer hover:brightness-75' : 'ring-2 ring-yellow-400/50 shadow-[0_0_40px_rgba(250,204,21,0.2)]'
                  }`}
                style={{
                  transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity: isVisible ? (absPos === 1 ? 0.5 : 1) : 0,
                  filter: isActive ? "blur(0px) brightness(1.05)" : "blur(4px) brightness(0.4) grayscale(50%)",
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  muted={isMuted}
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
