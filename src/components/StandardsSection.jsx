import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

/* ─────────────────── data ─────────────────── */
const drives = [
  {
    number: "01",
    title: "Clarity",
    body: "Clarity is non-negotiable. Complexity is often a sign of something unresolved.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Truth",
    body: "Truth creates longevity. Trends create dependency.",
    icon: "◉",
  },
  {
    number: "03",
    title: "Design",
    body: "Design is powerful only when it is guided by clear decisions.",
    icon: "⬡",
  },
  {
    number: "04",
    title: "Consistency",
    body: "Consistency builds recognition, trust, and recall over time.",
    icon: "◎",
  },
  {
    number: "05",
    title: "Performance",
    body: "A brand must ultimately perform. If it does not contribute to growth, it does not work.",
    icon: "◆",
  },
];

/* ─────────────── mouse-tilt hook ─────────────────── */
const useMagneticTilt = (strength = 16) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = (e.clientX - left) / width;
    const ny = (e.clientY - top) / height;
    setTilt({
      x: (ny - 0.5) * -strength,
      y: (nx - 0.5) * strength,
      gx: nx * 100,
      gy: ny * 100,
    });
  };
  const onLeave = () => setTilt({ x: 0, y: 0, gx: 50, gy: 50 });

  return { ref, tilt, onMove, onLeave };
};

/* ─────────────── single tilt card ─────────────────── */
const PrincipleCard = ({ item, index, isLeft }) => {
  const { ref, tilt, onMove, onLeave } = useMagneticTilt(14);
  const rx = useSpring(tilt.x, { stiffness: 180, damping: 22 });
  const ry = useSpring(tilt.y, { stiffness: 180, damping: 22 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { onLeave(); setHovered(false); }}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
        perspective: "800px",
      }}
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
        rotateY: isLeft ? -25 : 25,
      }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="relative cursor-default"
    >
      {/* Card body */}
      <div
        className="relative rounded-2xl md:rounded-3xl p-7 md:p-9 overflow-hidden border border-white/8 bg-[#0d0d0d]"
        style={{
          boxShadow: hovered
            ? "0 30px 90px rgba(0,0,0,0.55), 0 0 40px rgba(254,192,0,0.12)"
            : "0 15px 50px rgba(0,0,0,0.35)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Dynamic spotlight gradient following mouse */}
        <div
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(254,192,0,0.10) 0%, transparent 65%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Top edge gold shimmer */}
        <div
          className="absolute top-0 left-0 w-full h-[1px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(254,192,0,${hovered ? 0.7 : 0.2}), transparent)`,
            transition: "all 0.4s ease",
          }}
        />

        {/* Number — floats forward in Z */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="flex items-start justify-between mb-5"
        >
          <span
            className="text-5xl md:text-6xl font-black leading-none"
            style={{
              color: "transparent",
              WebkitTextStroke: `1px rgba(254,192,0,${hovered ? 0.8 : 0.35})`,
              transition: "all 0.35s ease",
            }}
          >
            {item.number}
          </span>
          <span
            className="text-3xl"
            style={{
              color: hovered ? "rgba(254,192,0,0.85)" : "rgba(254,192,0,0.25)",
              transition: "all 0.35s ease",
              filter: hovered ? "drop-shadow(0 0 8px rgba(254,192,0,0.5))" : "none",
            }}
          >
            {item.icon}
          </span>
        </div>

        {/* Title */}
        <motion.h3
          style={{ transform: "translateZ(14px)" }}
          className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight"
        >
          {item.title}
          <span
            className="block h-[2px] mt-2 rounded-full bg-[#FEC000] transition-all duration-500"
            style={{ width: hovered ? "100%" : "28px" }}
          />
        </motion.h3>

        {/* Body */}
        <p
          style={{
            transform: "translateZ(8px)",
            color: hovered ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
            transition: "color 0.35s ease",
          }}
          className="text-sm md:text-base leading-relaxed"
        >
          {item.body}
        </p>
      </div>
    </motion.div>
  );
};

/* ─────────────── main component ─────────────────── */
const WhatDrivesUs = () => {
  const sectionRef = useRef(null);

  /* Scroll-linked line draw */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);
  const lineHSpring = useSpring(lineH, { stiffness: 40, damping: 18 });

  /* Heading parallax */
  const headY = useTransform(scrollYProgress, [0, 0.4], [40, -10]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 px-4 md:px-12 bg-black overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── Ambient orbs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(254,192,0,0.08) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(254,192,0,0.06) 0%, transparent 70%)" }}
      />

      {/* ── Floating particles ── */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -(20 + (i % 5) * 8), 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${6 + (i * 6.5) % 88}%`,
            top: `${8 + (i * 7.2) % 78}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            background: "rgba(254,192,0,0.55)",
            boxShadow: "0 0 6px rgba(254,192,0,0.6)",
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          style={{ y: headY }}
          className="text-center mb-20 md:mb-28"
        >
         

          {/* Title — 3D word flip */}
          <div className="overflow-hidden" style={{ perspective: "900px" }}>
            {["What", "Drives", "Us"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, rotateX: -90, y: 40 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                className="inline-block mr-4 text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight"
                style={{ transformOrigin: "top center" }}
              >
                {i === 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEC000] to-[#f59e0b]">
                    {word}
                  </span>
                ) : word}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/40 mt-5 max-w-xl mx-auto text-base md:text-lg"
          >
            The principles behind everything we create.
          </motion.p>
        </motion.div>

        {/* ── DESKTOP — alternating timeline ── */}
        <div className="hidden md:block relative">
          {/* Animated timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full overflow-hidden">
            <div className="w-full h-full bg-white/5" />
            <motion.div
              style={{ height: lineHSpring }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#FEC000] to-[#FEC000]/30"
            />
          </div>

          {drives.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center mb-20">
                {/* Pulsing dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="absolute left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="block w-5 h-5 rounded-full bg-[#FEC000] shadow-[0_0_20px_rgba(254,192,0,0.8)]" />
                  <span className="absolute inset-0 rounded-full animate-ping bg-[#FEC000]/40" />
                </motion.div>

                {/* Card */}
                <div className={`w-[47%] ${isLeft ? "pr-14" : "pl-14 ml-auto"}`}>
                  <PrincipleCard item={item} index={index} isLeft={isLeft} />
                </div>

                {/* Counter on opposite side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 + 0.2 }}
                  className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "right-[4%]" : "left-[4%]"}`}
                >
                  <span
                    className="text-6xl font-black"
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(254,192,0,0.15)",
                    }}
                  >
                    {item.number}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ── MOBILE — vertical stack with 3D cards ── */}
        <div className="md:hidden relative">
          {/* Glowing vertical line */}
          <div className="absolute left-4 top-0 w-[2px] h-full overflow-hidden">
            <div className="w-full h-full bg-white/5" />
            <motion.div
              style={{ height: lineHSpring }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#FEC000] to-[#FEC000]/20"
            />
          </div>

          {drives.map((item, index) => (
            <div key={index} className="relative flex gap-6 mb-10 pl-12">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="absolute left-[9px] top-6 z-10"
              >
                <span className="block w-3 h-3 rounded-full bg-[#FEC000] shadow-[0_0_12px_rgba(254,192,0,0.9)]" />
                <span className="absolute inset-0 rounded-full animate-ping bg-[#FEC000]/40" />
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 40, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className="flex-1 relative rounded-2xl p-5 border border-white/8 bg-[#0d0d0d] overflow-hidden"
                style={{
                  boxShadow: "0 15px 50px rgba(0,0,0,0.4)",
                }}
              >
                {/* Top edge */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FEC000]/30 to-transparent" />

                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-3xl font-black"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(254,192,0,0.4)" }}
                  >
                    {item.number}
                  </span>
                  <span className="text-xl text-[#FEC000]/40">{item.icon}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                  <span className="block h-[2px] w-7 mt-1.5 rounded-full bg-[#FEC000]" />
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-white/50 mt-2">{item.body}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatDrivesUs;
