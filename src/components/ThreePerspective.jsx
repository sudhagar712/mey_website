import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import three from "../assets/ff.png";
import geoBg from "../assets/geo_grid_bg.png";

/* ── Mouse-tracking 3D tilt hook ── */
const use3DTilt = () => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 18;
    const y = ((e.clientY - top) / height - 0.5) * -14;
    setTilt({ x, y });
  };
  const onMouseLeave = () => setTilt({ x: 0, y: 0 });

  return { ref, tilt, onMouseMove, onMouseLeave };
};

const ThreePerspective = () => {
  /* scroll-driven parallax for image */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawImgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgY = useSpring(rawImgY, { stiffness: 80, damping: 20 });

  const rawLabelX = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const labelX = useSpring(rawLabelX, { stiffness: 60, damping: 18 });

  /* 3D tilt for image card */
  const imgTilt = use3DTilt();
  /* 3D tilt for content card */
  const cardTilt = use3DTilt();
  /* 3D tilt for banner */
  const bannerTilt = use3DTilt();

  /* spring-smoothed tilt values */
  const imgRotX = useSpring(imgTilt.tilt.y, { stiffness: 150, damping: 20 });
  const imgRotY = useSpring(imgTilt.tilt.x, { stiffness: 150, damping: 20 });
  const cardRotX = useSpring(cardTilt.tilt.y, { stiffness: 150, damping: 20 });
  const cardRotY = useSpring(cardTilt.tilt.x, { stiffness: 150, damping: 20 });
  const bannerRotX = useSpring(bannerTilt.tilt.y, { stiffness: 120, damping: 22 });
  const bannerRotY = useSpring(bannerTilt.tilt.x, { stiffness: 120, damping: 22 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-[#fafafa] overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* ── Ambient radial glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(254,192,0,0.12),transparent_60%)]" />

      {/* ── Subtle grid ── */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── Floating decorative orbs ── */}
      <motion.div
        animate={{ y: [0, -22, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#FEC000]/8 blur-[80px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-[#FEC000]/6 blur-[100px] pointer-events-none"
      />

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 relative z-10">

        {/* ── Label — slide in from left ── */}
        <motion.div
          style={{ x: labelX }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            style={{ transformOrigin: "left" }}
            className="w-16 h-[3px] bg-[#FEC000]"
          />
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md tracking-[0.4em] font-semibold uppercase text-gray-600"
          >
            Where It Began
          </motion.h2>
        </motion.div>

        {/* ── Main heading — 3D word-by-word reveal ── */}
        <div className="mb-12 md:mb-16 overflow-hidden" style={{ perspective: "800px" }}>
          {["MEY", "began", "with", "three", "friends", "from", "completely", "different", "worlds,", "brought", "together", "by", "a", "shared", "discomfort", "they", "couldn't", "ignore."].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, rotateX: -90, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.045,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`inline-block mr-[0.3em] ${
                i === 0
                  ? "text-2xl md:text-5xl font-bold text-gray-900"
                  : "text-xl md:text-3xl font-semibold text-gray-900"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* ── Main 2-col layout ── */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ── IMAGE — 3D tilt card ── */}
          <motion.div
            ref={imgTilt.ref}
            onMouseMove={imgTilt.onMouseMove}
            onMouseLeave={imgTilt.onMouseLeave}
            initial={{ opacity: 0, rotateY: -15, x: -60 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            style={{
              rotateX: imgRotX,
              rotateY: imgRotY,
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
            className="relative w-full h-[350px] sm:h-[370px] md:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.18)] cursor-pointer"
          >
            {/* Parallax image inner */}
            <motion.div
              style={{ y: imgY }}
              className="absolute inset-0 scale-110"
            >
              <img
                src={three}
                alt="three friends"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

            {/* 3D floating gold badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotateZ: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ translateZ: 30 }}
              className="absolute bottom-5 left-5 bg-[#FEC000] text-black text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-[0_8px_30px_rgba(254,192,0,0.5)]"
            >
              Origin Story
            </motion.div>

            {/* hover glow ring */}
            <div className="absolute inset-0 rounded-3xl ring-0 hover:ring-2 hover:ring-[#FEC000]/40 transition-all duration-500" />
          </motion.div>

          {/* ── CONTENT CARD — 3D tilt ── */}
          <motion.div
            ref={cardTilt.ref}
            onMouseMove={cardTilt.onMouseMove}
            onMouseLeave={cardTilt.onMouseLeave}
            initial={{ opacity: 0, rotateY: 15, x: 60 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            style={{
              rotateX: cardRotX,
              rotateY: cardRotY,
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            <div className="relative bg-black backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* Depth inner glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FEC000]/8 blur-[60px] rounded-full pointer-events-none" />

              {/* Accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ transformOrigin: "left" }}
                className="h-[3px] w-12 bg-[#FEC000] mb-6 rounded-full"
              />

              {/* Quote icon */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.5, rotateZ: -20 }}
                whileInView={{ opacity: 0.3, scale: 1, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-12 h-12 text-yellow-500 mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </motion.svg>

              {/* Story paragraphs — stagger fade-up */}
              <div className="space-y-6 text-white leading-relaxed text-[15px] md:text-lg">
                {[
                  { keyword: "strategy", text: "constantly analysing positioning, market gaps, and the invisible forces that influence choice.", prefix: "One approached brands through" },
                  { keyword: "creativity", text: "understanding how design, storytelling, and visual memory shape perception.", prefix: "Another saw brands through" },
                  { keyword: "execution", text: "ensuring that ideas are not just imagined, but built with clarity, consistency, and impact.", prefix: "And another focused on" },
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: 30, rotateY: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.25, 1, 0.5, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {item.prefix}{" "}
                    <span className="font-semibold text-[#FEC000]">{item.keyword}</span>
                    {" "}— {item.text}
                  </motion.p>
                ))}
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-3xl border border-transparent hover:border-[#FEC000]/30 transition duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* ── FINAL BANNER — 3D tilt + parallax bg ── */}
        <motion.div
          ref={bannerTilt.ref}
          onMouseMove={bannerTilt.onMouseMove}
          onMouseLeave={bannerTilt.onMouseLeave}
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          style={{
            rotateX: bannerRotX,
            rotateY: bannerRotY,
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          className="mt-16 md:mt-20 relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[180px] md:min-h-[220px] flex items-center shadow-[0_40px_100px_rgba(0,0,0,0.2)] cursor-pointer"
        >
          {/* Background image — moves slightly on 3D tilt */}
          <motion.img
            src={geoBg}
            alt=""
            aria-hidden="true"
            style={{
              rotateX: bannerRotX,
              rotateY: bannerRotY,
              scale: 1.08,
            }}
            className="absolute inset-0 w-full h-full object-cover object-right"
          />

          {/* Left-to-right gradient — text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-transparent" />

          {/* Content — elevated in Z */}
          <div
            className="relative z-10 px-7 md:px-12 py-10 md:py-12 max-w-[72%] md:max-w-[65%]"
            style={{ transform: "translateZ(30px)" }}
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[10px] md:text-xs font-bold tracking-[0.28em] uppercase text-[#FEC000]/80 mb-4 md:mb-5"
            >
              Our Realisation
            </motion.p>

            {/* Headline — 3D flip-in words */}
            <div style={{ perspective: "600px" }}>
              {["Despite", "their", "differences,", "they", "kept", "arriving", "at", "the", "same", "realisation."].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, rotateX: -80, y: 20 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                  className="inline-block mr-[0.28em] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.3] tracking-tight"
                  style={{ transformOrigin: "top center" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Secondary text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
              className="mt-4 md:mt-5 text-sm md:text-base text-white/55 leading-relaxed"
            >
              Across industries, businesses were investing more into branding and
              marketing than ever before, yet becoming increasingly
              indistinguishable.
            </motion.p>
          </div>

          {/* Corner glow — appears on hover */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEC000]/10 blur-[40px] rounded-full pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default ThreePerspective;
