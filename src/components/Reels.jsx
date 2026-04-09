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
    }, 3000);

    return () => clearInterval(autoSlideRef.current);
  }, [active, isPaused]);

  // 👉 VIDEO + PROGRESS
  useEffect(() => {
    let animationFrame;

    const updateProgress = () => {
      const activeVideo = videoRefs.current[active];
      if (activeVideo && activeVideo.duration) {
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
    const diff =
      touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) < 50) return;

    diff > 0 ? nextSlide() : prevSlide();
  };

  return (
    <section
      className="w-full bg-[#fafafa]  flex flex-col justify-center overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

     



      {/* HEADER */}
      <div className="flex justify-between mt-10  items-center px-6 mb-10">
        <button onClick={prevSlide} className="text-xl">←</button>
        <h2 className=" text-3xl md:text-6xl font-bold">Reels</h2>
        <button onClick={nextSlide} className="text-xl ">→</button>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative w-full h-[500px] flex justify-center items-center"
        style={{ perspective: "1200px" }}
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
          if (abs > 1) return null;

          const isActive = position === 0;

          return (
            <div
              key={index}
              className="absolute w-[300px] aspect-[9/16] border-2 border-yellow-500 rounded-3xl overflow-hidden"
              style={{
                transform: `
                  translate(-50%, -50%)
                  translateX(${position * 350}px)
                  rotateY(${position * -15}deg)
                  scale(${isActive ? 1 : 0.75})
                `,
                top: "50%",
                left: "50%",
                zIndex: 10 - abs,
                opacity: abs === 1 ? 0.5 : 1,
                transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                muted={isMuted}
                className="w-full h-full object-cover"
              />

              {isActive && (
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-3 right-3 bg-white/20 px-2 py-1 rounded"
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>
              )}

              {/* Progress */}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                  <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${progress}%` }}
                  />
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