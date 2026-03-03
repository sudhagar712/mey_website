import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import illustration from '../assets/banner_illustration.png'
import bannerBg from '../assets/banner_bg.png'
import './Banner.css'

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
        ),
        label: 'Brand Strategy',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
        ),
        label: 'SEO & Advertising',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        label: 'Creative Design',
    },
]

const Banner = () => {
    const bannerRef = useRef(null)

    // Subtle parallax on image
    useEffect(() => {
        const handleScroll = () => {
            if (!bannerRef.current) return
            const scrollY = window.scrollY
            const img = bannerRef.current.querySelector('.banner__illus')
            if (img) img.style.transform = `translateY(${scrollY * 0.06}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section
            className="banner"
            ref={bannerRef}
            id="home"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >

            {/* Background gradient blobs */}
            <div className="banner__bg-circle banner__bg-circle--1" aria-hidden="true" />
            <div className="banner__bg-circle banner__bg-circle--2" aria-hidden="true" />

            <div className="banner__container">

                {/* ── LEFT: Text Content ── */}
                <div className="banner__left">

                    <p className="banner__tag animate-up" style={{ '--d': '0s' }}>
                        <span className="banner__tag-dot" />
                        Chennai's #1 Branding Agency
                    </p>

                    <h1 className="banner__headline animate-up" style={{ '--d': '0.1s' }}>
                        Branding &amp; Digital
                        <br />
                        Marketing Agency
                    </h1>

                    <p className="banner__sub animate-up" style={{ '--d': '0.22s' }}>
                        We help businesses grow through innovative branding and
                        powerful digital marketing solutions.
                    </p>

                    <div className="banner__btns animate-up" style={{ '--d': '0.34s' }}>
                        <Link to="/contact" className="banner__btn banner__btn--dark">
                            Get Started
                        </Link>
                        <Link to="/" className="banner__btn banner__btn--outline">
                            Our Services
                        </Link>
                    </div>

                </div>

                {/* ── RIGHT: Illustration ── */}
                <div className="banner__right animate-scale" style={{ '--d': '0.15s' }}>
                    <img
                        src={illustration}
                        alt="Branding and Digital Marketing Illustration"
                        className="banner__illus"
                    />
                </div>

            </div>

            {/* ── Bottom Service Strip ── */}
            <div className="banner__services">
                <div className="banner__services-inner">
                    {services.map((s, i) => (
                        <div
                            className="banner__service animate-up"
                            key={s.label}
                            style={{ '--d': `${0.5 + i * 0.1}s` }}
                        >
                            <span className="banner__service-icon">{s.icon}</span>
                            <span className="banner__service-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Banner