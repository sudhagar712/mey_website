import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* ─── SVG Icons ─────────────────────────────────────────── */
const IconMarcom = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="10" width="18" height="13" rx="2" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M22 14l8-5v16l-8-5" stroke="#FFD200" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <circle cx="10" cy="28" r="3" stroke="#FFD200" strokeWidth="2" fill="none" />
        <line x1="13" y1="28" x2="28" y2="28" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const IconBranding = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="13" stroke="#FFD200" strokeWidth="2" fill="none" />
        <circle cx="19" cy="19" r="6" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M19 6 L19 13 M19 25 L19 32 M6 19 L13 19 M25 19 L32 19" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="19" r="2" fill="#FFD200" />
    </svg>
);

const IconDesign = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <path d="M8 30 L18 8 L28 30" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="11" y1="22" x2="27" y2="22" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="8" r="3" fill="#FFD200" />
    </svg>
);

const IconVideo = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="10" width="22" height="18" rx="3" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M26 16l8-4v14l-8-4" stroke="#FFD200" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <circle cx="13" cy="19" r="3" fill="#FFD200" />
    </svg>
);

const IconTV = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="10" width="30" height="20" rx="3" stroke="#FFD200" strokeWidth="2" fill="none" />
        <line x1="13" y1="34" x2="25" y2="34" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="30" x2="19" y2="34" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6 L19 12 L26 6" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="10" y="15" width="18" height="10" rx="1" stroke="#FFD200" strokeWidth="1.5" fill="none" />
    </svg>
);

const IconCampaign = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="13" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M19 6 C19 6 26 11 26 19 C26 27 19 32 19 32 C19 32 12 27 12 19 C12 11 19 6 19 6Z" stroke="#FFD200" strokeWidth="2" fill="none" />
        <line x1="6" y1="19" x2="32" y2="19" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="10" r="4" fill="#FFD200" />
        <line x1="28" y1="7" x2="28" y2="13" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="25" y1="10" x2="31" y2="10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconPodcast = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <rect x="14" y="4" width="10" height="18" rx="5" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M8 20 C8 27 30 27 30 20" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
        <line x1="19" y1="27" x2="19" y2="34" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="34" x2="24" y2="34" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const IconPR = () => (
    <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
        <circle cx="13" cy="13" r="6" stroke="#FFD200" strokeWidth="2" fill="none" />
        <circle cx="28" cy="13" r="4" stroke="#FFD200" strokeWidth="2" fill="none" />
        <path d="M4 32 C4 26 8 22 13 22 C18 22 22 26 22 32" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M24 22 C27 22 34 24 34 32" stroke="#FFD200" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
);

/* ─── Services Data ─────────────────────────────────────── */
const services = [
    {
        rank: 'A', suit: '♠',
        icon: <IconMarcom />,
        title: 'Brand & Marcom Consulting',
        points: [
            'Tailored strategic advice to enhance brand presence and market positioning.',
            'Expert guidance on marketing communications strategies for maximum impact and engagement.',
        ],
    },
    {
        rank: 'K', suit: '♦',
        icon: <IconBranding />,
        title: '360 Branding',
        points: [
            'Comprehensive branding solutions covering every aspect from ideation to execution.',
            'Holistic approach ensuring consistency across all touchpoints for a seamless brand experience.',
        ],
    },
    {
        rank: 'Q', suit: '♠',
        icon: <IconDesign />,
        title: 'Creative Designs',
        points: [
            'Innovative design solutions crafted to captivate and resonate with target audiences.',
            'Customized designs that convey brand identity and messaging effectively.',
        ],
    },
    {
        rank: 'J', suit: '♣',
        icon: <IconVideo />,
        title: 'Corporate Videos',
        points: [
            'High-quality video production services tailored to corporate needs.',
            'Engaging visual storytelling to convey brand narrative and showcase products/services.',
        ],
    },
    {
        rank: 'A', suit: '♥',
        icon: <IconTV />,
        title: 'TV, Radio & Digital Commercials',
        points: [
            'Expertise in crafting compelling commercials for television, radio, and digital platforms.',
            'Tailored strategies to maximize reach and engagement across diverse media channels.',
        ],
    },
    {
        rank: 'K', suit: '♦',
        icon: <IconCampaign />,
        title: 'Campaign Management',
        points: [
            'End-to-end campaign management services to drive results and achieve marketing objectives.',
            'Strategic planning, execution, and optimization for effective campaign performance.',
        ],
    },
    {
        rank: 'Q', suit: '♠',
        icon: <IconPodcast />,
        title: 'Podcasts',
        points: [
            'Professional podcast production services to amplify brand voice and engage target audiences.',
            'Tailored content creation and distribution strategies for podcast platforms.',
        ],
    },
    {
        rank: 'A', suit: '♣',
        icon: <IconPR />,
        title: 'Public Relations',
        points: [
            'Strategic PR campaigns to enhance brand reputation and foster positive media relations.',
            'Proactive media outreach and crisis management strategies for effective brand communication.',
        ],
    },
];

/* ─── Single Playing Card ───────────────────────────────── */
const PlayingCard = ({ service, aosAnim, aosDelay }) => (
    <div
        data-aos={aosAnim}
        data-aos-delay={aosDelay}
        className="mey-cap-card"
    >
        {/* Card top row: rank+suit badge | icon */}
        <div className="mey-card-top">
            {/* Rank + Suit top-left */}
            <div className="mey-rank-badge">
                <span className="mey-rank">{service.rank}</span>
                <span className="mey-suit">{service.suit}</span>
            </div>
            {/* Icon centred/right */}
            <div className="mey-icon">{service.icon}</div>
        </div>

        {/* Title */}
        <h3 className="mey-card-title">{service.title}</h3>

        {/* Description points */}
        <div className="mey-card-body">
            {service.points.map((pt, i) => (
                <p key={i} className="mey-card-point">{pt}</p>
            ))}
        </div>

        {/* Bottom-right rotated rank+suit */}
        <div className="mey-rank-badge-br">
            <span className="mey-rank">{service.rank}</span>
            <span className="mey-suit">{service.suit}</span>
        </div>
    </div>
);

/* ─── Main Component ────────────────────────────────────── */
const OurValues = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false, easing: 'ease-out-cubic' });
    }, []);

    return (
        <section id="our-values" className="mey-capabilities-section">

            {/* Subtle bg blob */}
            <div className="mey-blob" />

            <div className="mey-cap-container">

                {/* ── Header ── */}
                <div className="mey-cap-header" data-aos="fade-down">
                    <h2 className="mey-cap-title">CAPABILITIES</h2>
                    <span className="mey-cap-brand">MEY</span>
                </div>

                {/* ── Card Grid ── */}
                <div className="mey-cap-grid">
                    {services.map((svc, i) => (
                        <PlayingCard
                            key={i}
                            service={svc}
                            aosAnim={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                            aosDelay={i * 80}
                        />
                    ))}
                </div>
            </div>

            {/* ── All Styles ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@900&display=swap');

                /* Section */
                .mey-capabilities-section {
                    background: #FFD200;
                    width: 100%;
                    padding: 64px 0 80px;
                    position: relative;
                    overflow: hidden;
                }

                /* Blob */
                .mey-blob {
                    position: absolute;
                    width: 420px;
                    height: 420px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.12);
                    top: -160px;
                    right: -120px;
                    filter: blur(70px);
                    pointer-events: none;
                }

                /* Container */
                .mey-cap-container {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 0 24px;
                    position: relative;
                    z-index: 1;
                }

                /* Header row */
                .mey-cap-header {
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin-bottom: 40px;
                }

                .mey-cap-title {
                    font-family: 'Inter', sans-serif;
                    font-weight: 900;
                    font-size: clamp(28px, 6vw, 54px);
                    color: #1a1a1a;
                    line-height: 1;
                    letter-spacing: -1px;
                    margin: 0;
                }

                .mey-cap-brand {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(22px, 5vw, 40px);
                    color: #1a1a1a;
                    letter-spacing: -1px;
                }

                /* Grid — 2 columns desktop */
                .mey-cap-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }

                /* Card base */
                .mey-cap-card {
                    background: #1a1a1a;
                    border-radius: 20px;
                    padding: 22px 20px 44px 20px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    overflow: hidden;
                    border: 1px solid rgba(255,210,0,0.08);
                    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
                    cursor: default;
                    min-height: 260px;
                }

                .mey-cap-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 24px 60px rgba(0,0,0,0.38);
                    border-color: rgba(255,210,0,0.3);
                }

                /* Top row: rank badge + icon side by side */
                .mey-card-top {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                }

                /* Rank badge (top-left) */
                .mey-rank-badge {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .mey-rank {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: 22px;
                    color: #FFD200;
                    line-height: 1;
                }

                .mey-suit {
                    font-size: 14px;
                    color: #FFD200;
                    line-height: 1;
                    margin-top: 2px;
                }

                /* Icon */
                .mey-icon {
                    flex-shrink: 0;
                }

                /* Title */
                .mey-card-title {
                    font-family: 'Inter', sans-serif;
                    font-weight: 700;
                    font-size: 15px;
                    color: #FFD200;
                    line-height: 1.35;
                    margin: 0;
                }

                /* Body points */
                .mey-card-body {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .mey-card-point {
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    color: #c8c8c8;
                    line-height: 1.65;
                    margin: 0;
                }

                /* Bottom-right rotated rank badge */
                .mey-rank-badge-br {
                    position: absolute;
                    bottom: 14px;
                    right: 14px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    transform: rotate(180deg);
                    line-height: 1;
                }

                /* ── TABLET: 601px – 900px ── */
                @media (max-width: 900px) {
                    .mey-cap-card {
                        padding: 20px 18px 42px 18px;
                        min-height: 240px;
                    }

                    .mey-card-title {
                        font-size: 14px;
                    }

                    .mey-card-point {
                        font-size: 11.5px;
                    }
                }

                /* ── MOBILE: ≤ 600px → single column ── */
                @media (max-width: 600px) {
                    .mey-capabilities-section {
                        padding: 48px 0 60px;
                    }

                    .mey-cap-container {
                        padding: 0 16px;
                    }

                    .mey-cap-header {
                        margin-bottom: 28px;
                    }

                    /* Single column */
                    .mey-cap-grid {
                        grid-template-columns: 1fr;
                        gap: 14px;
                    }

                    .mey-cap-card {
                        padding: 20px 18px 46px 18px;
                        min-height: unset;
                        border-radius: 18px;
                    }

                    .mey-cap-card:hover {
                        transform: translateY(-4px);
                    }

                    .mey-rank {
                        font-size: 20px;
                    }

                    .mey-suit {
                        font-size: 13px;
                    }

                    .mey-card-title {
                        font-size: 15px;
                        line-height: 1.3;
                    }

                    .mey-card-point {
                        font-size: 13px;
                        line-height: 1.6;
                    }

                    .mey-card-body {
                        gap: 10px;
                    }
                }

                /* ── VERY SMALL: ≤ 380px ── */
                @media (max-width: 380px) {
                    .mey-cap-container {
                        padding: 0 12px;
                    }

                    .mey-cap-title {
                        font-size: 26px;
                    }

                    .mey-cap-brand {
                        font-size: 20px;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurValues;
