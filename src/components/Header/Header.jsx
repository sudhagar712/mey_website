import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/meylogo.png'

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
        className={[
          'fixed top-0 left-0 right-0 z-[900] ',
          ,
          'transition-[box-shadow,background] duration-300 ease-in-out',
          'font-[DM_Sans,Poppins,sans-serif]',
          scrolled
            ? 'shadow-[0_2px_24px_rgba(0,0,0,0.12)] bg-[#FFD71D] backdrop-blur-[10px]'
            : '',
          menuOpen
            ? '!z-[1100] !bg-transparent !border-b-transparent !shadow-none'
            : '',
        ].join(' ')}
      >
        <div
          className={[
            'grid items-center h-[68px] px-10 max-w-[1400px] mx-auto w-full box-border',
            'grid-cols-[1fr_auto_1fr]',
            // tablet
            'md:px-6',
            // mobile: flex row
            'max-[680px]:flex max-[680px]:flex-row max-[680px]:h-[60px] max-[680px]:px-5 max-[680px]:gap-0',
            // large screen
            'xl:px-16',
          ].join(' ')}
        >

          {/* HAMBURGER — hidden on desktop, visible on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className={[
              'hidden flex-col justify-center items-end gap-[6px]',
              'w-11 h-11 bg-transparent border-none cursor-pointer p-0',
              'z-[1200] shrink-0 [-webkit-tap-highlight-color:transparent]',
              'max-[680px]:flex max-[680px]:order-1',
            ].join(' ')}
          >
            {/* Bar 1 */}
            <span
              className="block h-[1.5px] rounded-[2px] transition-[transform,opacity,width,background] duration-[400ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] origin-right"
              style={{
                width: '24px',
                background: menuOpen ? '#ffffff' : '#1a1a1a',
                transform: menuOpen ? 'translateY(7.5px) rotate(-45deg)' : 'none',
              }}
            />
            {/* Bar 2 */}
            <span
              className="block h-[1.5px] rounded-[2px] transition-[transform,opacity,width,background] duration-[400ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] origin-right"
              style={{
                width: '16px',
                background: menuOpen ? '#ffffff' : '#1a1a1a',
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'none',
              }}
            />
            {/* Bar 3 */}
            <span
              className="block h-[1.5px] rounded-[2px] transition-[transform,opacity,width,background] duration-[400ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] origin-right"
              style={{
                width: menuOpen ? '24px' : '20px',
                background: menuOpen ? '#ffffff' : '#1a1a1a',
                transform: menuOpen ? 'translateY(-7.5px) rotate(45deg)' : 'none',
              }}
            />
          </button>

          {/* LEFT — Nav Links (desktop only) */}
          <nav
            className="flex items-center justify-start gap-[0.1rem] max-[680px]:hidden"
            aria-label="Primary navigation"
          >
            {navLinks.slice(0, 5).map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={[
                    'relative inline-block px-[0.85rem] py-[0.45rem]',
                    'text-[0.85rem] font-medium tracking-[0.03em] no-underline',
                    'text-[#1a1a1a] transition-colors duration-[250ms] ease-in-out whitespace-nowrap',
                    'xl:text-[0.88rem] xl:px-4 xl:py-2',
                    'md:text-[0.78rem] md:px-[0.6rem] md:py-[0.4rem]',
                    // underline via after pseudo — black
                    'after:content-[""] after:absolute after:bottom-[2px] after:left-[0.85rem] after:right-[0.85rem]',
                    'after:h-[1.5px] after:bg-black after:scale-x-0 after:origin-left',
                    'after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.76,0,0.24,1)]',
                    'hover:text-red-600 hover:after:scale-x-100',
                    isActive ? 'text-red-600 italic after:scale-x-100' : '',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CENTER — Logo */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className={[
              'flex items-center justify-center no-underline px-6',
              'transition-[opacity,transform] duration-[250ms] ease-in-out',
              'hover:opacity-80 hover:scale-[1.04]',
              'max-[680px]:order-2 max-[680px]:flex-1 max-[680px]:justify-center max-[680px]:px-0',
              menuOpen ? 'opacity-0 pointer-events-none transition-opacity duration-200' : '',
            ].join(' ')}
          >
            <img
              src={logo}
              alt="Brand Logo"
              className="h-[38px] w-auto object-contain block md:h-8 max-[680px]:h-[30px] xl:h-[42px]"
            />
          </Link>

          {/* RIGHT — Contact (desktop only) */}
          <nav
            className="flex items-center justify-end max-[680px]:hidden"
            aria-label="Secondary navigation"
          >
            <Link
              to="/contact"
              className={[
                'relative inline-block px-[0.85rem] py-[0.45rem]',
                'text-[0.85rem] font-medium tracking-[0.03em] no-underline',
                'text-[#1a1a1a] transition-colors duration-[250ms] ease-in-out whitespace-nowrap',
                'xl:text-[0.88rem] xl:px-4 xl:py-2',
                'after:content-[""] after:absolute after:bottom-[2px] after:left-[0.85rem] after:right-[0.85rem]',
                'after:h-[1.5px] after:bg-black after:scale-x-0 after:origin-left',
                'after:transition-transform after:duration-300 after:[transition-timing-function:cubic-bezier(0.76,0,0.24,1)]',
                'hover:text-red-600 hover:after:scale-x-100',
                location.pathname === '/contact' ? 'text-red-600 italic after:scale-x-100' : '',
              ].join(' ')}
            >
              Contact
            </Link>
          </nav>

        </div>
      </header>

      {/* ── FULL-SCREEN CANVAS MENU ── */}
      <div
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed inset-0 z-[1050] bg-[#0a0a0a] flex flex-col overflow-hidden',
          'transition-[clip-path] duration-700 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]',
          menuOpen ? '[clip-path:inset(0_0_0%_0)]' : '[clip-path:inset(0_0_100%_0)]',
        ].join(' ')}
      >

        {/* Nav Links */}
        <nav
          className={[
            'flex flex-col flex-1 justify-center overflow-hidden',
            'pt-16 pb-4 px-10',
            'max-[680px]:pt-16 max-[680px]:pb-2 max-[680px]:px-6 max-[680px]:justify-start',
            'xl:px-16 xl:pt-8 xl:pb-6',
          ].join(' ')}
          aria-label="Full navigation"
        >
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  transitionDelay: `${i * 0.06}s`,
                }}
                className={[
                  'flex items-center gap-5 py-4 no-underline',
                  'border-b border-white/[0.06] last:border-b-0',
                  'relative overflow-hidden',
                  // stagger slide-up
                  'transition-[opacity,transform,color] duration-[550ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]',
                  animateLinks
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8',
                  // hover line sweep via before pseudo
                  'before:content-[""] before:absolute before:left-0 before:bottom-0',
                  'before:h-[1px] before:bg-[#f7e006] before:w-0',
                  'before:transition-[width] before:duration-[350ms] before:[transition-timing-function:cubic-bezier(0.76,0,0.24,1)]',
                  'hover:before:w-full',
                  // mobile
                  'max-[680px]:py-[0.85rem] max-[680px]:gap-4',
                ].join(' ')}
              >
                <span
                  className={[
                    'text-[clamp(1.6rem,5vw,2.6rem)] font-bold tracking-[-0.02em] leading-none',
                    'transition-[color,letter-spacing] duration-[250ms] ease-in-out',
                    'group-hover:tracking-[0.01em]',
                    'max-[680px]:text-[clamp(1.4rem,9vw,2rem)]',
                    isActive ? 'text-[#f7e006]' : 'text-white',
                    // label color on link hover
                    'peer-hover:text-[#f7e006]',
                  ].join(' ')}
                  style={{
                    color: isActive ? '#f7e006' : undefined,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Footer row inside canvas */}
        <div
          className={[
            'flex items-center justify-between shrink-0',
            'px-10 py-5 border-t border-white/[0.07]',
            'max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3 max-[680px]:px-6 max-[680px]:py-4',
            'xl:px-16',
          ].join(' ')}
        >
          <p className="text-[0.78rem] text-white/30 tracking-[0.12em] uppercase m-0">
            Truth Before Business
          </p>
          <div className="flex gap-4">
            {[['IG', '#'], ['LI', '#'], ['TW', '#']].map(([label, href]) => (
              <a
                key={label}
                href={href}
                aria-label={label === 'IG' ? 'Instagram' : label === 'LI' ? 'LinkedIn' : 'Twitter'}
                className="text-[0.72rem] tracking-[0.08em] font-semibold text-white/35 no-underline transition-colors duration-[250ms] ease-in-out hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header