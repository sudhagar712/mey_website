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

  const isScrolling = useRef(false);
  const videoRefs = useRef([]);
  const progressInterval = useRef(null);

  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // 👁️ Detect if reels section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 🎯 Scroll control ONLY when visible
  useEffect(() => {
    const handleScroll = (e) => {
      if (!isInView) return;

      e.preventDefault();

      if (isScrolling.current) return;
      isScrolling.current = true;

      if (e.deltaY > 0) {
        setActive((prev) => Math.min(prev + 1, reelsData.length - 1));
      } else {
        setActive((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isInView]);

  // 📱 Mobile swipe
  useEffect(() => {
    let startY = 0;

    const start = (e) => (startY = e.touches[0].clientY);

    const end = (e) => {
      if (!isInView) return;

      const endY = e.changedTouches[0].clientY;
      if (Math.abs(startY - endY) < 50) return;

      if (startY > endY) {
        setActive((prev) => Math.min(prev + 1, reelsData.length - 1));
      } else {
        setActive((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("touchstart", start);
    window.addEventListener("touchend", end);

    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [isInView]);

  // ▶️ Play video
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === active) {
        video.currentTime = 0;
        video.play().catch(() => {});
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

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden relative"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 z-0">
        <video
          src={reelsData[active].video}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover blur-3xl scale-110 opacity-30"
        />
      </div>

      {/* Cards */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {reelsData.map((item, index) => {
          const isActive = index === active;
          const position = index - active;

          return (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${position * 360}px) scale(${
                  isActive ? 1 : 0.75
                })`,
                opacity: Math.abs(position) > 2 ? 0 : 1,
                filter: isActive ? "blur(0px)" : "blur(6px)",
                zIndex: isActive ? 10 : 1,
              }}
            >
              <div className="relative w-[300px] md:w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  muted={isMuted}
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-6 left-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {isActive && (
                  <>
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="absolute top-4 right-4 bg-white/10 px-3 py-2 rounded-full"
                    >
                      {isMuted ? "🔇" : "🔊"}
                    </button>

                    <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20">
                      <div
                        className="h-full bg-white"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 text-gray-400 text-sm">
        Scroll / Swipe ↓
      </div>
    </section>
  );
};

export default Reels;