import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aboutus = () => {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: false,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        <section
            id="about-us"
            className="relative w-full overflow-hidden"
            style={{ background: '#FFD200', minHeight: '100vh' }}
        >
            {/* Subtle background blobs */}
            <div
                style={{
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.12)',
                    top: '-120px',
                    left: '-120px',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(0,0,0,0.06)',
                    bottom: '-100px',
                    right: '-80px',
                    filter: 'blur(50px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Content Wrapper */}
            <div
                style={{
                    maxWidth: '860px',
                    margin: '0 auto',
                    padding: '60px 20px 70px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* MEY Logo & Tagline */}
                <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <div
                        style={{
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: '900',
                            fontSize: 'clamp(72px, 15vw, 130px)',
                            color: '#1a1a1a',
                            lineHeight: '1',
                            letterSpacing: '-2px',
                        }}
                    >
                        MEY
                    </div>
                    <p
                        style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: 'clamp(14px, 3vw, 18px)',
                            fontWeight: '500',
                            color: '#1a1a1a',
                            letterSpacing: '0.1em',
                            marginTop: '6px',
                        }}
                    >
                        Truth Before Business
                    </p>
                </div>

                {/* 2x2 Card Grid with center circle */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '700px',
                    }}
                >
                    {/* Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: 'auto auto',
                            gap: '16px',
                        }}
                    >
                        {/* Top-Left: Capabilities */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            className="about-card"
                            style={{
                                background: '#1a1a1a',
                                borderRadius: '24px',
                                padding: 'clamp(20px, 4vw, 32px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '12px',
                                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                            }}
                        >
                            {/* Capabilities Icon */}
                            <div style={{ color: '#FFD200', marginBottom: '4px' }}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <circle cx="22" cy="22" r="10" stroke="#FFD200" strokeWidth="2.2" fill="none" />
                                    <circle cx="22" cy="8" r="4" stroke="#FFD200" strokeWidth="2" fill="none" />
                                    <circle cx="22" cy="36" r="4" stroke="#FFD200" strokeWidth="2" fill="none" />
                                    <circle cx="8" cy="22" r="4" stroke="#FFD200" strokeWidth="2" fill="none" />
                                    <circle cx="36" cy="22" r="4" stroke="#FFD200" strokeWidth="2" fill="none" />
                                    <line x1="22" y1="12" x2="22" y2="16" stroke="#FFD200" strokeWidth="2" />
                                    <line x1="22" y1="28" x2="22" y2="32" stroke="#FFD200" strokeWidth="2" />
                                    <line x1="12" y1="22" x2="16" y2="22" stroke="#FFD200" strokeWidth="2" />
                                    <line x1="28" y1="22" x2="32" y2="22" stroke="#FFD200" strokeWidth="2" />
                                    <circle cx="22" cy="22" r="3.5" fill="#FFD200" />
                                </svg>
                            </div>
                            <p style={{ color: '#FFD200', fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: 'clamp(13px, 2.5vw, 15px)', marginBottom: '2px' }}>
                                Capabilities include
                            </p>
                            <p style={{ color: '#d0d0d0', fontFamily: '"Inter", sans-serif', fontWeight: '400', fontSize: 'clamp(11px, 2vw, 13px)', lineHeight: '1.7' }}>
                                Business Consulting, Creatives,<br />
                                MarCom, Media Production,<br />
                                Digital Transformation
                            </p>
                        </div>

                        {/* Top-Right: 10+ Years */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="about-card"
                            style={{
                                background: '#1a1a1a',
                                borderRadius: '24px',
                                padding: 'clamp(20px, 4vw, 32px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                gap: '10px',
                                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                            }}
                        >
                            {/* Badge */}
                            <div style={{
                                background: '#FFD200',
                                borderRadius: '50%',
                                width: '52px',
                                height: '52px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '6px',
                            }}>
                                <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: '900', fontSize: '15px', color: '#1a1a1a', lineHeight: '1' }}>10</span>
                                <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: '8px', color: '#1a1a1a', lineHeight: '1', letterSpacing: '0.08em' }}>YEARS</span>
                            </div>
                            <p style={{ color: '#ffffff', fontFamily: '"Inter", sans-serif', fontWeight: '800', fontSize: 'clamp(28px, 6vw, 42px)', lineHeight: '1' }}>
                                10+
                            </p>
                            <p style={{ color: '#FFD200', fontFamily: '"Inter", sans-serif', fontWeight: '600', fontSize: 'clamp(13px, 2.5vw, 16px)' }}>
                                years
                            </p>
                            <p style={{ color: '#d0d0d0', fontFamily: '"Inter", sans-serif', fontWeight: '400', fontSize: 'clamp(11px, 2vw, 13px)' }}>
                                Experience
                            </p>
                        </div>

                        {/* Bottom-Left: Clientele */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className="about-card"
                            style={{
                                background: '#1a1a1a',
                                borderRadius: '24px',
                                padding: 'clamp(20px, 4vw, 32px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                gap: '10px',
                                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                            }}
                        >
                            {/* Client Icon */}
                            <div style={{ color: '#FFD200' }}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path d="M22 6 C20 10, 14 12, 14 17 C14 22, 18 25, 22 28 C26 25, 30 22, 30 17 C30 12, 24 10, 22 6Z" stroke="#FFD200" strokeWidth="2" fill="none" strokeLinejoin="round" />
                                    <circle cx="22" cy="17" r="3" fill="#FFD200" />
                                    <path d="M10 38 C10 32, 14 29, 18 28" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
                                    <path d="M34 38 C34 32, 30 29, 26 28" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
                                    <path d="M22 28 L22 38" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M8 38 Q22 34 36 38" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
                                </svg>
                            </div>
                            <p style={{ color: '#ffffff', fontFamily: '"Inter", sans-serif', fontWeight: '800', fontSize: 'clamp(28px, 6vw, 42px)', lineHeight: '1' }}>
                                50+
                            </p>
                            <p style={{ color: '#d0d0d0', fontFamily: '"Inter", sans-serif', fontWeight: '400', fontSize: 'clamp(11px, 2vw, 13px)' }}>
                                Clientele
                            </p>
                        </div>

                        {/* Bottom-Right: Truth First Framework */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="400"
                            className="about-card"
                            style={{
                                background: '#1a1a1a',
                                borderRadius: '24px',
                                padding: 'clamp(20px, 4vw, 32px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '12px',
                                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                            }}
                        >
                            {/* Scale / Balance Icon */}
                            <div style={{ color: '#FFD200' }}>
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <line x1="22" y1="6" x2="22" y2="38" stroke="#FFD200" strokeWidth="2.2" strokeLinecap="round" />
                                    <line x1="10" y1="12" x2="34" y2="12" stroke="#FFD200" strokeWidth="2.2" strokeLinecap="round" />
                                    <circle cx="10" cy="12" r="1.5" fill="#FFD200" />
                                    <circle cx="34" cy="12" r="1.5" fill="#FFD200" />
                                    <path d="M6 24 Q10 28 14 24" stroke="#FFD200" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <path d="M30 24 Q34 28 38 24" stroke="#FFD200" strokeWidth="2" fill="none" strokeLinecap="round" />
                                    <line x1="6" y1="24" x2="14" y2="24" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="30" y1="24" x2="38" y2="24" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="10" y1="12" x2="10" y2="24" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="34" y1="12" x2="34" y2="24" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
                                    <line x1="16" y1="38" x2="28" y2="38" stroke="#FFD200" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <p style={{ color: '#FFD200', fontFamily: '"Inter", sans-serif', fontWeight: '700', fontSize: 'clamp(13px, 2.5vw, 15px)', marginBottom: '2px' }}>
                                Truth First Framework
                            </p>
                            <p style={{ color: '#d0d0d0', fontFamily: '"Inter", sans-serif', fontWeight: '400', fontSize: 'clamp(11px, 2vw, 13px)', lineHeight: '1.9' }}>
                                Strategic Clarity<br />
                                Cultural Precision<br />
                                Measured Growth
                            </p>
                        </div>
                    </div>

                    {/* Center "About Us" Circle */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="250"
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            background: '#ffffff',
                            borderRadius: '50%',
                            width: 'clamp(100px, 15vw, 136px)',
                            height: 'clamp(100px, 15vw, 136px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
                            zIndex: 10,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: '"Inter", sans-serif',
                                fontWeight: '800',
                                fontSize: 'clamp(13px, 2.5vw, 17px)',
                                color: '#1a1a1a',
                                textAlign: 'center',
                                lineHeight: '1.25',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            About Us
                        </span>
                    </div>
                </div>
            </div>

            {/* Hover & responsive styles */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@900&display=swap');

                .about-card:hover {
                    transform: translateY(-6px) scale(1.02);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.30);
                }

                @media (max-width: 480px) {
                    #about-us .about-grid {
                        gap: 10px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Aboutus;