import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Header.css'

const navLinks = [
  { label: 'Work', href: '/', index: '01' },
  { label: 'About', href: '/about', index: '02' },
  { label: 'Team', href: '/team', index: '03' },
  { label: 'Ideas', href: '/blog', index: '04' },
  { label: 'Careers', href: '/careers', index: '05' },
  { label: 'Contact', href: '/contact', index: '06' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [animateLinks, setAnimateLinks] = useState(false)
  const location = useLocation()

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Stagger animation trigger after canvas opens
  useEffect(() => {
    if (menuOpen) {
      const t = setTimeout(() => setAnimateLinks(true), 80)
      return () => clearTimeout(t)
    } else {
      setAnimateLinks(false)
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── HEADER BAR ── */}
      <header
        className={`ogilvy-header
          ${scrolled ? 'ogilvy-header--scrolled' : ''}
          ${menuOpen ? 'ogilvy-header--menu-open' : ''}`}
      >
        <div className="ogilvy-header__inner">

          {/* HAMBURGER — left side on mobile */}
          <button
            className={`ogilvy-hamburger ${menuOpen ? 'ogilvy-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="ogilvy-hamburger__bar" />
            <span className="ogilvy-hamburger__bar" />
            <span className="ogilvy-hamburger__bar" />
          </button>

          {/* LEFT — Nav Links (desktop only) */}
          <nav className="ogilvy-nav ogilvy-nav--left" aria-label="Primary navigation">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`ogilvy-nav__link ${isActive ? 'ogilvy-nav__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CENTER — Logo */}
          <Link to="/" className="ogilvy-logo" aria-label="Go to homepage">
            <img src={logo} alt="Brand Logo" className="ogilvy-logo__img" />
          </Link>

          {/* RIGHT — Contact (desktop only) */}
          <nav className="ogilvy-nav ogilvy-nav--right" aria-label="Secondary navigation">
            <Link
              to="/contact"
              className={`ogilvy-nav__link ${location.pathname === '/contact' ? 'ogilvy-nav__link--active' : ''}`}
            >
              Contact
            </Link>
          </nav>

        </div>
      </header>

      {/* ── FULL-SCREEN CANVAS MENU ── */}
      <div
        className={`nav-canvas ${menuOpen ? 'nav-canvas--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >


        {/* Nav Links */}
        <nav className="nav-canvas__nav " aria-label="Full navigation">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-canvas__link
                  ${isActive ? 'nav-canvas__link--active' : ''}
                  ${animateLinks ? 'nav-canvas__link--visible' : ''}`}
                style={{ '--i': i }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="nav-canvas__link-label">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Footer row inside canvas */}
        <div className="nav-canvas__footer">
          <p className="nav-canvas__tagline">Truth Before Business</p>
          <div className="nav-canvas__socials">
            <a href="#" aria-label="Instagram" className="nav-canvas__social">IG</a>
            <a href="#" aria-label="LinkedIn" className="nav-canvas__social">LI</a>
            <a href="#" aria-label="Twitter" className="nav-canvas__social">TW</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header