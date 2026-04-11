import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import o1 from "../assets/outdoor/1.jpeg";
import o2 from "../assets/outdoor/2.jpeg";
import o3 from "../assets/outdoor/3.jpeg";

/* ─────────────── data ─────────────────── */
const images = [
  {
    id: 1,
    src: o1,
    title: "VGP Universal Kingdom",
    subtitle: "Large-format hoarding — ECR Chennai",
 
    featured: true,
  },
  {
    id: 2,
    src: o2,
    title: "VGP Universal Kingdom",
    subtitle: "Billboard campaign — Highway stretch",

    featured: false,
  },
  {
    id: 3,
    src: o3,
    title: "Euro Kids",
    subtitle: "Bus-stop transit branding — Chennai",
   
    featured: false,
  },
];

/* ─────────────── 3D tilt hook ─────────────────── */
const useTilt = (strength = 10) => {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });
  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const nx = (e.clientX - left) / width;
    const ny = (e.clientY - top) / height;
    setT({ rx: (ny - 0.5) * -strength, ry: (nx - 0.5) * strength, gx: nx * 100, gy: ny * 100 });
  }, [strength]);
  const onLeave = useCallback(() => setT({ rx: 0, ry: 0, gx: 50, gy: 50 }), []);
  return { ref, t, onMove, onLeave };
};

/* ─────────────── Lightbox ─────────────────── */
const Lightbox = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10"
        style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)" }}
      >
        <motion.div
          key="box"
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(254,192,0,0.15)" }}
        >
          {/* Image */}
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[80vh] object-contain bg-[#0a0a0a]"
          />

          {/* Bottom info bar */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }}
          >
            <span className="inline-flex items-center gap-2 bg-[#FEC000]/15 border border-[#FEC000]/30 text-[#FEC000] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
              <span className="w-1 h-1 rounded-full bg-[#FEC000]" />
              {item.tag}
            </span>
            <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight">{item.title}</h3>
            <p className="text-white/50 text-sm mt-0.5">{item.subtitle}</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-[#FEC000] hover:text-black transition-all duration-300 backdrop-blur-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>

        {/* Hint */}
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase">
          Click outside to close
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─────────────── Featured card (large) ─────────────────── */
const FeaturedCard = ({ item, onOpen }) => {
  const { ref, t, onMove, onLeave } = useTilt(7);
  const [hov, setHov] = useState(false);
  const rx = useSpring(t.rx, { stiffness: 140, damping: 22 });
  const ry = useSpring(t.ry, { stiffness: 140, damping: 22 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { onLeave(); setHov(false); }}
      onClick={() => onOpen(item)}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: "900px" }}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full cursor-pointer"
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl"
        style={{
          boxShadow: hov
            ? "0 50px 120px rgba(0,0,0,0.22), 0 0 0 1.5px rgba(254,192,0,0.3)"
            : "0 16px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.07)",
          transition: "box-shadow 0.45s ease",
        }}
      >
        {/* Image */}
        <div className="relative h-[280px] sm:h-[360px] md:h-[480px] lg:h-[520px] overflow-hidden">
          <motion.img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: hov ? 1.06 : 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          />

          {/* Permanent bottom scrim */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 45%, transparent 75%)" }} />

          {/* Mouse spotlight */}
          <div className="absolute inset-0 pointer-events-none transition-opacity duration-400"
            style={{
              background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(254,192,0,0.12) 0%, transparent 55%)`,
              opacity: hov ? 1 : 0,
            }}
          />

          {/* Top edge shimmer */}
          <div className="absolute top-0 inset-x-0 h-[1px]"
            style={{ background: `linear-gradient(90deg, transparent, rgba(254,192,0,${hov ? 0.65 : 0.2}), transparent)`, transition: "all 0.4s" }}
          />

          {/* View icon */}
          <motion.div
            className="absolute top-5 right-5"
            animate={{ opacity: hov ? 1 : 0, scale: hov ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(24px)" }}
          >
            <div className="w-10 h-10 rounded-full bg-white/15 border border-white/25 backdrop-blur-md flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </motion.div>

          {/* Content — Z elevated */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" style={{ transform: "translateZ(18px)" }}>
            <motion.div className="h-[2px] rounded-full bg-[#FEC000] mb-3"
              animate={{ width: hov ? "56px" : "24px" }}
              transition={{ duration: 0.4 }}
            />
            <p className="text-[#FEC000]/80 text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5">{item.subtitle}</p>
            <h3 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
              {item.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────── Small card ─────────────────── */
const SmallCard = ({ item, index, onOpen }) => {
  const { ref, t, onMove, onLeave } = useTilt(12);
  const [hov, setHov] = useState(false);
  const rx = useSpring(t.rx, { stiffness: 160, damping: 22 });
  const ry = useSpring(t.ry, { stiffness: 160, damping: 22 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { onLeave(); setHov(false); }}
      onClick={() => onOpen(item)}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", perspective: "800px" }}
      initial={{ opacity: 0, x: index === 0 ? -50 : 50, rotateY: index === 0 ? -14 : 14 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, delay: 0.15 + index * 0.12, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full cursor-pointer"
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl"
        style={{
          boxShadow: hov
            ? "0 35px 90px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(254,192,0,0.28)"
            : "0 12px 50px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.45s ease",
        }}
      >
        {/* Image */}
        <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] overflow-hidden">
          <motion.img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: hov ? 1.08 : 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          />

          {/* Scrim */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.08) 50%, transparent 80%)" }} />

          {/* Mouse spotlight */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(254,192,0,0.13) 0%, transparent 60%)`,
              opacity: hov ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />

          {/* Tag */}
          <div style={{ transform: "translateZ(20px)" }} className="absolute top-4 left-4">
            <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FEC000] shadow-[0_0_5px_rgba(254,192,0,0.9)]" />
              {item.tag}
            </span>
          </div>

          {/* View icon */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ opacity: hov ? 1 : 0, scale: hov ? 1 : 0.65 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="w-9 h-9 rounded-full bg-[#FEC000] flex items-center justify-center shadow-[0_4px_20px_rgba(254,192,0,0.55)]">
              <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </motion.div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5" style={{ transform: "translateZ(16px)" }}>
            <motion.div className="h-[2px] rounded-full bg-[#FEC000] mb-2"
              animate={{ width: hov ? "44px" : "18px" }}
              transition={{ duration: 0.35 }}
            />
            <p className="text-[#FEC000]/75 text-[10px] font-bold tracking-widest uppercase mb-1">{item.subtitle}</p>
            <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{item.title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────── main section ─────────────────── */
const OutdoorBranding = () => {
  const sectionRef = useRef(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headY = useSpring(useTransform(scrollYProgress, [0, 0.45], [35, -12]), { stiffness: 55, damping: 18 });

  const featured = images.find((i) => i.featured);
  const rest = images.filter((i) => !i.featured);

  return (
    <>
      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      </AnimatePresence>

      <section
        ref={sectionRef}
        className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white overflow-hidden"
        style={{ perspective: "1400px" }}
      >
        {/* ── Subtle grid ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)", backgroundSize: "60px 60px" }}
        />

        {/* ── Ambient glow ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(254,192,0,0.09) 0%, transparent 70%)" }}
        />

        {/* ── Gold floating particles ── */}
        {[
          { t: "8%",  l: "2%",  s: 5, d: 0    },
          { t: "75%", l: "97%", s: 4, d: 1.4  },
          { t: "45%", l: "95%", s: 6, d: 0.7  },
          { t: "85%", l: "3%",  s: 3, d: 2.1  },
          { t: "20%", l: "50%", s: 3, d: 1.0  },
        ].map((p, i) => (
          <motion.div key={i}
            animate={{ y: [0, -14, 0], opacity: [0.35, 0.85, 0.35] }}
            transition={{ duration: 3.5 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: p.d }}
            className="absolute rounded-full pointer-events-none"
            style={{ top: p.t, left: p.l, width: p.s, height: p.s, background: "#FEC000", boxShadow: `0 0 ${p.s * 2.5}px rgba(254,192,0,0.7)` }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ── Heading ── */}
          <motion.div style={{ y: headY }} className="mb-12 md:mb-16">
            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                style={{ transformOrigin: "left" }}
                className="w-10 h-[3px] rounded-full bg-[#FEC000]"
              />
              <span className="text-3xl  font-bold tracking-[0.32em] uppercase text-black">Outdoor Branding</span>
            </motion.div>



         
          </motion.div>

          {/* ── Layout: Featured top + 2 below (desktop) / all stacked (mobile) ── */}
          <div className="flex flex-col gap-5 md:gap-6">

            {/* Row 1: Featured full-width */}
            {featured && (
              <FeaturedCard item={featured} onOpen={setLightboxItem} />
            )}

            {/* Row 2: Two cards side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {rest.map((item, i) => (
                <SmallCard key={item.id} item={item} index={i} onOpen={setLightboxItem} />
              ))}
            </div>
          </div>

          {/* ── Image count hint ── */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-10 flex items-center justify-center gap-3"
          >
            {images.map((_, i) => (
              <motion.div key={i}
                whileHover={{ scale: 1.4 }}
                onClick={() => setLightboxItem(images[i])}
                className="cursor-pointer rounded-full transition-all duration-300"
                style={{
                  width: i === 0 ? 28 : 8, height: 8,
                  background: i === 0 ? "#FEC000" : "rgba(0,0,0,0.15)",
                  boxShadow: i === 0 ? "0 0 10px rgba(254,192,0,0.5)" : "none",
                }}
              />
            ))}
          </motion.div>

          {/* ── CTA strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 px-6 md:px-10 py-6 md:py-7 rounded-2xl md:rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden relative"
            style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.14)" }}
          >
            {/* CTA glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(254,192,0,0.12) 0%, transparent 70%)" }}
            />

            <div className="relative z-10">
              <p className="text-white font-bold text-base md:text-lg tracking-tight">
                Need outdoor advertising for your brand?
              </p>
              <p className="text-white/35 text-sm mt-1 max-w-sm">
                We plan, design and execute — from concept to installation.
              </p>
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative z-10 shrink-0 inline-flex items-center gap-2.5 bg-[#FEC000] text-black text-sm font-black px-7 py-3.5 rounded-full tracking-wide"
              style={{ boxShadow: "0 8px 30px rgba(254,192,0,0.38)" }}
            >
              Start a Campaign
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default OutdoorBranding;