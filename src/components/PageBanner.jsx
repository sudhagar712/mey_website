import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ─── Keyframes ─── */
const keyframes = `
@keyframes waveL {
  0%   { transform: translateX(0%)   scaleY(1); }
  50%  { transform: translateX(-8%)  scaleY(1.07); }
  100% { transform: translateX(0%)   scaleY(1); }
}
@keyframes waveR {
  0%   { transform: translateX(0%)   scaleY(1); }
  50%  { transform: translateX(7%)   scaleY(0.95); }
  100% { transform: translateX(0%)   scaleY(1); }
}
@keyframes waveBreath {
  0%,100% { transform: scaleY(1)   scaleX(1); }
  40%      { transform: scaleY(1.1) scaleX(1.005); }
  70%      { transform: scaleY(0.95) scaleX(0.998); }
}
@keyframes floatOrb {
  0%, 100% { transform: translateY(0px)   scale(1); }
  50%       { transform: translateY(-22px) scale(1.06); }
}
@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 0.85; }
}
@keyframes particleDrift {
  0%   { transform: translateY(0)    translateX(0);  opacity: 0.55; }
  50%  { transform: translateY(-28px) translateX(8px); opacity: 1; }
  100% { transform: translateY(0)    translateX(0);  opacity: 0.55; }
}
@keyframes scanline {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
`;

/* ─── Floating particles ─── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 4.3) % 92}%`,
  top:  `${8  + (i * 6.9) % 78}%`,
  size: `${2.5 + (i % 4)}px`,
  delay: `${(i * 0.31).toFixed(2)}s`,
  duration: `${2.8 + (i % 3) * 0.8}s`,
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
        background: 'linear-gradient(135deg, #000000 0%, #0d0d00 45%, #1a1200 100%)',
      }}
    >
      {/* ── Ambient golden orbs ── */}
      {[
        { w:'560px', h:'560px', left:'-10%', top:'-35%', delay:'0s',   dur:'7s'  },
        { w:'420px', h:'420px', right:'-6%', bottom:'-22%', delay:'1.2s', dur:'9s' },
        { w:'280px', h:'280px', left:'40%',  top:'5%',    delay:'2.8s', dur:'6s'  },
      ].map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.w, height: orb.h,
          left: orb.left, right: orb.right,
          top: orb.top, bottom: orb.bottom,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,184,0,0.42) 0%, rgba(251,184,0,0.1) 55%, transparent 75%)',
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
          background: 'rgba(251,186,0,0.7)',
          boxShadow: '0 0 7px rgba(251,186,0,0.9)',
          animation: `particleDrift ${p.duration} ease-in-out ${p.delay} infinite`,
          pointerEvents: 'none',
          zIndex: 2,
        }} />
      ))}

      {/* ── Wave SVG stack — overflow hidden so translateX never clips ── */}
      <div style={{ position:'absolute', inset:0, zIndex:3, pointerEvents:'none', overflow:'hidden' }}>

        {/* Wave 1 — deep base, moves LEFT */}
        <svg
          viewBox="0 0 1600 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px',
            left:'-15%', width:'130%', height:'68%',
            animation: 'waveL 9s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -14px 32px rgba(251,186,0,0.2))',
          }}
        >
          <defs>
            <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.15"/>
              <stop offset="50%"  stopColor="#fcd34d" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.15"/>
            </linearGradient>
          </defs>
          <path d="M0,200 C200,120 400,280 600,200 C800,120 1000,280 1200,200 C1400,120 1520,200 1600,180 L1600,340 L0,340 Z" fill="url(#wg1)" />
        </svg>

        {/* Wave 2 — mid layer, moves RIGHT */}
        <svg
          viewBox="0 0 1600 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px',
            left:'-15%', width:'130%', height:'60%',
            animation: 'waveR 12s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -10px 26px rgba(251,186,0,0.32))',
          }}
        >
          <defs>
            <linearGradient id="wg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fcd34d" stopOpacity="0.22"/>
              <stop offset="50%"  stopColor="#fbba00" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.22"/>
            </linearGradient>
          </defs>
          <path d="M0,250 C270,160 540,310 800,220 C1060,130 1340,290 1600,230 L1600,340 L0,340 Z" fill="url(#wg2)" />
        </svg>

        {/* Wave 3 — foreground glowing crest, gentle breathe */}
        <svg
          viewBox="0 0 1600 340"
          preserveAspectRatio="none"
          style={{
            position:'absolute', bottom:'-2px',
            left:'-15%', width:'130%', height:'50%',
            animation: 'waveBreath 6.5s ease-in-out infinite',
            transformOrigin: 'bottom center',
            filter: 'drop-shadow(0 -5px 20px rgba(251,186,0,0.65))',
          }}
        >
          <defs>
            <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.45"/>
              <stop offset="35%"  stopColor="#fff7d4" stopOpacity="0.65"/>
              <stop offset="65%"  stopColor="#fbba00" stopOpacity="0.55"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.45"/>
            </linearGradient>
            <linearGradient id="wg3s" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#fbba00" stopOpacity="0.0"/>
              <stop offset="28%"  stopColor="#fff7d4" stopOpacity="1.0"/>
              <stop offset="72%"  stopColor="#fbba00" stopOpacity="0.85"/>
              <stop offset="100%" stopColor="#fbba00" stopOpacity="0.0"/>
            </linearGradient>
          </defs>
          <path d="M0,280 C220,210 440,320 800,258 C1060,190 1360,310 1600,268 L1600,340 L0,340 Z" fill="url(#wg3)" />
          {/* Glowing crest line */}
          <path d="M0,280 C220,210 440,320 800,258 C1060,190 1360,310 1600,268"
            fill="none" stroke="url(#wg3s)" strokeWidth="2.5" />
        </svg>

        {/* Wave 4 — ultra-thin sparkle line on top, moves LEFT slow */}
        <svg
          viewBox="0 0 1600 80"
          preserveAspectRatio="none"
          style={{
            position:'absolute', top:'16%',
            left:'-15%', width:'130%', height:'80px',
            opacity: 0.4,
            animation: 'waveL 16s ease-in-out infinite',
          }}
        >
          <defs>
            <linearGradient id="wgtop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="transparent"/>
              <stop offset="25%"  stopColor="#fbba00"/>
              <stop offset="55%"  stopColor="#fff7d4"/>
              <stop offset="80%"  stopColor="#fbba00"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <path d="M0,40 C230,12 460,68 800,34 C1100,4 1380,56 1600,38"
            fill="none" stroke="url(#wgtop)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* ── Gold horizontal scan lines (depth illusion) ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:2,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(251,186,0,0.03) 60px)',
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
                  backgroundClip: char === ' ' ? 'initial' : 'text',
                  color: char === ' ' ? 'transparent' : undefined,
                  minWidth: char === ' ' ? '0.35em' : undefined,
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
