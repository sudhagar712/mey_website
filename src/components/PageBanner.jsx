import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ─── Inline styles (no extra CSS file needed) ─── */
const keyframes = `
@keyframes waveFlow1 {
  0%   { transform: translateX(0)   scaleY(1); }
  50%  { transform: translateX(-6%) scaleY(1.08); }
  100% { transform: translateX(0)   scaleY(1); }
}
@keyframes waveFlow2 {
  0%   { transform: translateX(0)   scaleY(1); }
  50%  { transform: translateX(5%)  scaleY(0.94); }
  100% { transform: translateX(0)   scaleY(1); }
}
@keyframes waveFlow3 {
  0%   { transform: translateX(0)   scaleY(1); }
  50%  { transform: translateX(-4%) scaleY(1.12); }
  100% { transform: translateX(0)   scaleY(1); }
}
@keyframes floatOrb {
  0%, 100% { transform: translateY(0px)   scale(1); }
  50%       { transform: translateY(-20px) scale(1.05); }
}
@keyframes pulseGlow {
  0%, 100% { opacity: 0.55; }
  50%       { opacity: 0.85; }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes particleDrift {
  0%   { transform: translateY(0)   translateX(0)   opacity(0.6); }
  50%  { transform: translateY(-30px) translateX(10px) opacity(1); }
  100% { transform: translateY(0)   translateX(0)   opacity(0.6); }
}
`;

/* ─── Floating particle dots ─── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 5.4) % 92}%`,
  top:  `${10 + (i * 7.3) % 75}%`,
  size: `${3 + (i % 4)}px`,
  delay: `${(i * 0.37).toFixed(2)}s`,
  duration: `${3 + (i % 3)}s`,
}));

const PageBanner = ({ title, breadcrumb, bgImage }) => {
  const styleRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('style');
    tag.textContent = keyframes;
    document.head.appendChild(tag);
    styleRef.current = tag;
    return () => { tag.remove(); };
  }, []);

  /* Split title into chars for stagger */
  const chars = (title || '').split('');

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(370px, 38vw, 560px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #000000ff 0%, #111010 40%, #1a1200 100%)',
      }}
    >
      {/* ── Ambient golden orbs ── */}
      {[
        { w:'520px', h:'520px', left:'-12%', top:'-30%', delay:'0s',   dur:'7s'  },
        { w:'400px', h:'400px', right:'-8%', bottom:'-25%', delay:'1s',   dur:'9s'  },
        { w:'300px', h:'300px', left:'38%',  top:'10%',    delay:'2.5s', dur:'6s'  },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.w, height: orb.h,
          left: orb.left, right: orb.right,
          top: orb.top, bottom: orb.bottom,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251, 184, 0, 0.46) 0%, rgba(251, 184, 0, 0.13) 55%, transparent 75%)',
          animation: `floatOrb ${orb.dur} ease-in-out ${orb.delay} infinite, pulseGlow 4s ease-in-out ${orb.delay} infinite`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      ))}

      {/* ── Particle dots ── */}
      {PARTICLES.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: 'rgba(251,186,0,0.65)',
          boxShadow: '0 0 6px rgba(251,186,0,0.8)',
          animation: `particleDrift ${p.duration} ease-in-out ${p.delay} infinite`,
          pointerEvents: 'none',
          zIndex: 2,
        }} />
      ))}

      {/* ── 3D Wave SVG stack ── */}
      <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none' }}>

        {/* Wave layer 1 – deep gold */}
        <svg
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px', left:0,
            width:'110%', height:'65%',
            animation: 'waveFlow1 8s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -12px 30px rgba(251,186,0,0.25))',
          }}
        >
          <defs>
            <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.18"/>
              <stop offset="50%"  stopColor="#fcd34d" stopOpacity="0.30"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.18"/>
            </linearGradient>
          </defs>
          <path
            d="M0,200 C180,120 360,280 540,200 C720,120 900,280 1080,200 C1260,120 1380,200 1440,180 L1440,340 L0,340 Z"
            fill="url(#wg1)"
          />
        </svg>

        {/* Wave layer 2 – bright gold crest */}
        <svg
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px', left:'-5%',
            width:'115%', height:'58%',
            animation: 'waveFlow2 11s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -8px 24px rgba(251,186,0,0.35))',
          }}
        >
          <defs>
            <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fcd34d" stopOpacity="0.25"/>
              <stop offset="50%"  stopColor="#fbba00" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
          <path
            d="M0,250 C240,160 480,310 720,220 C960,130 1200,290 1440,230 L1440,340 L0,340 Z"
            fill="url(#wg2)"
          />
        </svg>

        {/* Wave layer 3 – foreground glowing edge */}
        <svg
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px', left:'2%',
            width:'108%', height:'48%',
            animation: 'waveFlow3 6.5s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -4px 18px rgba(251,186,0,0.6))',
          }}
        >
          <defs>
            <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.5"/>
              <stop offset="35%"  stopColor="#fff7d4" stopOpacity="0.6"/>
              <stop offset="65%"  stopColor="#fbba00" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.5"/>
            </linearGradient>
            {/* Glowing stroke gradient */}
            <linearGradient id="wg3s" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.0"/>
              <stop offset="30%"  stopColor="#fff7d4" stopOpacity="0.9"/>
              <stop offset="70%"  stopColor="#fbba00" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.0"/>
            </linearGradient>
          </defs>
          <path
            d="M0,280 C200,210 400,320 720,260 C1000,190 1220,310 1440,270 L1440,340 L0,340 Z"
            fill="url(#wg3)"
          />
          {/* Glowing crest line */}
          <path
            d="M0,280 C200,210 400,320 720,260 C1000,190 1220,310 1440,270"
            fill="none"
            stroke="url(#wg3s)"
            strokeWidth="2.5"
          />
        </svg>

        {/* Top decorative thin wave line */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{
            position:'absolute', top:'18%', left:0,
            width:'100%', height:'80px',
            opacity: 0.35,
            animation: 'waveFlow2 14s ease-in-out infinite',
          }}
        >
          <defs>
            <linearGradient id="wgtop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="transparent"/>
              <stop offset="30%"  stopColor="#fbba00"/>
              <stop offset="70%"  stopColor="#fcd34d"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <path
            d="M0,40 C200,15 400,65 720,35 C1000,5 1220,55 1440,40"
            fill="none"
            stroke="url(#wgtop)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Gold horizontal grid lines (depth illusion) ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:2,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(251,186,0,0.04) 60px)',
        pointerEvents:'none',
      }}/>

      {/* ── Content ── */}
      <div style={{
        position:'relative', zIndex:10,
        textAlign:'center',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding: '0 1.5rem',
        paddingTop: '3rem',
      }}>

        {/* Shimmer badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 18px',
            borderRadius: '999px',
            border: '1px solid rgba(251,186,0,0.35)',
            background: 'rgba(251,186,0,0.08)',
            backdropFilter: 'blur(8px)',
            marginBottom: '20px',
          }}
        >
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#fbba00', boxShadow:'0 0 8px #fbba00', display:'inline-block' }}/>
          <span style={{ fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(251,186,0,0.9)', fontFamily:'Poppins, sans-serif', fontWeight:600 }}>
            MEY
          </span>
        </motion.div>

        {/* Title — char-by-char stagger */}
        <div style={{ overflow:'hidden' }}>
          <motion.h1
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 6.5rem)',
              fontWeight: 800,
              fontFamily: 'Poppins, sans-serif',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0 2px',
            }}
          >
            {chars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.045, ease: [0.25, 1, 0.5, 1] }}
                style={{
                  display: 'inline-block',
                  background: char === ' ' ? 'none' : 'linear-gradient(160deg, #ffffff 10%, #fbba00 55%, #fff7d4 100%)',
                  WebkitBackgroundClip: char === ' ' ? 'initial' : 'text',
                  WebkitTextFillColor: char === ' ' ? 'transparent' : 'transparent',
                  backgroundClip: char === ' ' ? 'initial': 'text',
                  color: char === ' ' ? 'transparent' : undefined,
                  minWidth: char === ' ' ? '0.35em' : undefined,
                  textShadow: char === ' ' ? 'none' : undefined,
                  filter: char === ' ' ? 'none' : 'drop-shadow(0 2px 18px rgba(251,186,0,0.45))',
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Glowing underline bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{
            marginTop: '18px',
            width: 'clamp(60px, 20%, 140px)',
            height: '3px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, transparent, #fbba00, #fff7d4, #fbba00, transparent)',
            boxShadow: '0 0 18px rgba(251,186,0,0.7)',
            transformOrigin: 'center',
          }}
        />
      </div>
    </section>
  );
};

export default PageBanner;
