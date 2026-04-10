import React, { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  animate,
} from "framer-motion";
import brandVideo from "../assets/brandvideo.mp4";

/* ─── CountUp with re-trigger ─── */
const CountUp = ({ value, suffix = "", duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      count.set(0);
      const controls = animate(count, value, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

/* ─── Mouse-tracking 3D tilt card ─── */
const TiltCard = ({ children, className = "", depth = 12 }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [depth, -depth]), {
    stiffness: 200, damping: 24,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-depth, depth]), {
    stiffness: 200, damping: 24,
  });

  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const onMouseMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onReset = () => { mx.set(0); my.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onReset}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 z-30 mix-blend-screen"
          style={{
            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.10) 0%, transparent 60%)`,
            transition: "opacity 0.3s",
          }}
        />
      </motion.div>
    </div>
  );
};

/* ─── Floating ambient orb ─── */
const Orb = ({ size, top, left, color, blur, dur = 8 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ width: size, height: size, top, left, background: color, filter: `blur(${blur})` }}
    animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.07, 1] }}
    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── Stat Item with a 3D "pop" effect ─── */
const StatItem = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { y: 18, opacity: 0, scale: 0.9 },
        show:   { y: 0,  opacity: 1, scale: 1 },
      }}
      className="flex flex-col items-center gap-2 relative"
    >
      {/* Glowing circle behind number */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#fec000]/10 pointer-events-none"
        animate={isInView ? { scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="text-3xl md:text-4xl xl:text-5xl font-bold text-white tracking-tight"
        style={{ textShadow: "0 0 30px rgba(254,192,0,0.35)" }}
      >
        <CountUp value={value} suffix={suffix} />
      </div>

      <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/55 text-center leading-relaxed">
        {label}
      </div>

      {/* Separator (hidden on last) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/10 hidden lg:block last:hidden" />
    </motion.div>
  );
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
const SmartConversations = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // title drifts slightly on scroll for depth
  const titleY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const stats = [
    { value: 3000, suffix: "+", label: "Happy\nCustomer"       },
    { value: 50,   suffix: "+", label: "Courses\nOffered"      },
    { value: 100,  suffix: "+", label: "Billion\nMessage"      },
    { value: 99,   suffix: "%", label: "API\nDelivery"         },
    { value: 70,   suffix: "%", label: "Reducing\nManual Work" },
    { value: 85,   suffix: "%", label: "Increasing\nEngagement"},
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
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
      <Orb size="500px" top="-15%" left="-12%"  color="rgba(254,192,0,0.07)" blur="90px" dur={10} />
      <Orb size="300px" top="60%"  left="80%"   color="rgba(254,192,0,0.05)" blur="70px" dur={7}  />
      <Orb size="200px" top="5%"   left="85%"   color="rgba(0,0,0,0.04)"     blur="60px" dur={9}  />

      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

     

        {/* ── TITLE with parallax ── */}
        <motion.h2
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 md:mb-16 leading-tight"
        >
          Engage Your Customers with{" "}
          <span
            className="relative inline-block"
           
          >
            Smart Conversations
            {/* Underline accent */}
            <motion.span
              className="absolute left-0 bottom-0 h-[3px] bg-[#fec000]/40 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{ originX: 0, width: "100%" }}
            />
          </span>
        </motion.h2>

        {/* ── 3D TILT CARD (video + stats) ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard
            depth={6}
            className="group relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-black/5"
          >
            {/* ─── VIDEO ─── */}
            <div className="relative w-full pt-[52%] bg-black">
              <video
                src={brandVideo}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay muted loop playsInline
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

              {/* Corner accents — 3D depth elements */}
              {[
                "top-4 left-4 border-t border-l",
                "top-4 right-4 border-t border-r",
                "bottom-4 left-4 border-b border-l",
                "bottom-4 right-4 border-b border-r",
              ].map((cls, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-6 h-6 border-white/30 ${cls}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                />
              ))}

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transform: "translateZ(40px)" }}
              >
                <motion.span
                  className="relative flex items-center justify-center"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="absolute w-24 h-24 rounded-full bg-white/15 blur-xl" />
                  <span className="relative w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(254,192,0,0.4)]">
                    <span className="ml-1 inline-block w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[17px] border-l-white" />
                  </span>
                </motion.span>
              </div>

              {/* Floating label on video */}
              <motion.div
                className="absolute top-5 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="px-3 py-1 bg-[#fec000]/20 border border-[#fec000]/30 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                  MEY Brand Film
                </span>
              </motion.div>
            </div>

            {/* ─── STATS BAR ─── */}
            <div className="relative bg-[#0a0a0a] text-white py-10 px-6 md:px-10 overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 100%, rgba(254,192,0,0.08) 0%, transparent 70%)",
                }}
              />

              {/* Animated top border */}
              <motion.div
                className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#fec000]/50 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ width: "100%", originX: 0.5 }}
              />

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.4 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
                }}
              >
                {stats.map((s, i) => (
                  <StatItem key={i} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartConversations;