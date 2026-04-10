import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import m1 from "../assets/social1.png";
import m2 from "../assets/social2.png";
import m3 from "../assets/social3.png";
import m4 from "../assets/social4.png";
import m5 from "../assets/social5.png";

const slides = [
  { img: m1, label: "Social Media", tag: "Instagram" },
  { img: m2, label: "Brand Identity", tag: "Visual Design" },
  { img: m3, label: "Performance", tag: "Marketing" },
  { img: m4, label: "Content Strategy", tag: "Growth" },
  { img: m5, label: "Digital Creative", tag: "Campaigns" },
];

/* ─── Mouse-tracking 3D tilt for the active card ─── */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 220, damping: 26 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 220, damping: 26 });
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onReset = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onReset} style={{ perspective: "900px" }} className="w-full h-full">
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className={`relative w-full h-full ${className}`}
      >
        {children}
        {/* Glare */}
        <motion.div
          className="absolute inset-0 rounded-[28px] pointer-events-none z-20"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.14) 0%, transparent 55%)`,
          }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Shadow "ghost" cards behind active card ─── */
const GhostCard = ({ offset, zIndex, color, rotate }) => (
  <motion.div
    className="absolute inset-0 rounded-[28px] pointer-events-none"
    style={{
      background: color,
      zIndex,
      transform: `translateY(${offset}px) translateX(${offset * 0.5}px) rotate(${rotate}deg) translateZ(-${zIndex * 10}px)`,
    }}
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 4 + zIndex * 0.5, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── Main Component ─── */
const Mobileui = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((idx, dir) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3000);
    return () => clearInterval(timerRef.current);
  }, [next, paused]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.88,
      rotateY: dir > 0 ? 25 : -25,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.88,
      rotateY: dir > 0 ? -25 : 25,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="relative w-full bg-white py-20 md:py-28 overflow-hidden">
      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* ── Ambient orbs ── */}
      {[
        { size: "450px", top: "-15%", left: "-12%", color: "rgba(254,192,0,0.08)", blur: "90px" },
        { size: "300px", top: "60%",  left: "80%",  color: "rgba(254,192,0,0.06)", blur: "70px" },
      ].map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ width: o.size, height: o.size, top: o.top, left: o.left, background: o.color, filter: `blur(${o.blur})` }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="max-w-[1300px] mx-auto px-4 md:px-10 lg:px-20">

        {/* ── LAYOUT: text left + slider right ── */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── LEFT: Section copy ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold tracking-[0.28em] uppercase text-black/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fec000] animate-pulse" />
              Creative Work
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Social Media{" "}
              <span className="relative">
                <span className="text-[#fec000]">Magic</span>
                <motion.span
                  className="absolute left-0 bottom-0 h-[3px] bg-[#fec000]/40 rounded-full w-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
              </span>
              {" "}That Converts
            </h2>

            <p className="text-base md:text-lg text-black/60 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              We craft scroll-stopping content designed to build brand identity, grow your audience, and drive real results every month.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { num: "500+", desc: "Posts Created" },
                { num: "50+", desc: "Brands Managed" },
                { num: "3M+", desc: "Reach Generated" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="text-2xl font-bold text-gray-900">{s.num}</span>
                  <span className="text-xs text-black/45 uppercase tracking-wider mt-0.5">{s.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: 3D Slider ── */}
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Tag above */}
            <div className="mb-4 flex items-center gap-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block px-3 py-1 bg-[#fec000]/15 border border-[#fec000]/30 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-[#b38900]"
                >
                  {slides[current].tag}
                </motion.span>
              </AnimatePresence>
              <span className="text-xs text-black/30 font-medium">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            {/* ─── 3D CARD CONTAINER ─── */}
            <div
              className="relative"
              style={{
                width: "clamp(240px, 55vw, 320px)",
                height: "clamp(420px, 65vw, 560px)",
              }}
            >
              {/* Ghost stacked cards (depth effect) */}
              <GhostCard offset={18} zIndex={1} color="rgba(254,192,0,0.12)" rotate={3}  />
              <GhostCard offset={10} zIndex={2} color="rgba(254,192,0,0.20)" rotate={1.5}/>

              {/* Drop shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-12 rounded-full bg-black/20 blur-xl pointer-events-none" />

              {/* Active slide */}
              <div className="absolute inset-0 z-10 rounded-[28px] overflow-hidden">
                <TiltCard>
                  <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="absolute inset-0"
                      style={{ perspective: "900px" }}
                    >
                      <img
                        src={slides[current].img}
                        alt={slides[current].label}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Label at bottom */}
                      <motion.div
                        className="absolute bottom-5 left-5 right-5"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.4 }}
                      >
                        <p className="text-white font-bold text-lg leading-tight drop-shadow-md">
                          {slides[current].label}
                        </p>
                        <p className="text-white/60 text-xs tracking-widest uppercase mt-0.5">
                          {slides[current].tag}
                        </p>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </TiltCard>
              </div>
            </div>

            {/* ─── Controls ─── */}
            <div className="mt-10 flex items-center gap-6">
              {/* Prev */}
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black/50 hover:border-[#fec000] hover:text-[#fec000] transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    className="relative overflow-hidden rounded-full transition-colors duration-300"
                    animate={{
                      width: i === current ? 28 : 8,
                      height: 8,
                      backgroundColor: i === current ? "#fec000" : "rgba(0,0,0,0.15)",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {i === current && (
                      <motion.span
                        className="absolute inset-0 bg-white/30 rounded-full"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Next */}
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-black/50 hover:border-[#fec000] hover:text-[#fec000] transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mobileui;