import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Mey Logo.png';



const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/services' },
    { label: 'ABOUT', href: '/about' },
    { label: 'WORKS', href: '/work' },

];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="fixed top-0 left-0 w-full z-[100] md:px-10 px-2 mt-4">
            <nav className="z-[100] bg-black rounded-full shadow-lg border border-white/10 relative">
                <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px] relative">

                    {/* Left: Navigation (Desktop) & Hamburger (Mobile) */}
                    <div className="flex-1 flex justify-start items-center">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="font-sans text-[13px] font-bold tracking-[0.03em] uppercase text-white hover:text-[#ffff00] transition-colors flex items-center gap-1.5"
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <svg className="w-4 h-4 stroke-[2.5] mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Hamburger Icon */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="flex lg:hidden flex-col gap-[6px] bg-transparent border-none cursor-pointer py-2 z-50 hover:opacity-80 transition-opacity"
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className={`block w-7 h-[2px] bg-[#ffff00] transition-all duration-300 ${menuOpen
                                        ? i === 0
                                            ? 'rotate-45 translate-y-[8px]'
                                            : i === 1
                                                ? 'opacity-0'
                                                : '-rotate-45 -translate-y-[8px]'
                                        : ''
                                        }`}
                                />
                            ))}
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <Link to="/" className="flex items-center group">
                            <h1 className="text-[#ffcc01] text-[3rem] md:text-[4rem] font-bold tracking-tighter group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                                MEY
                            </h1>
                        </Link>
                    </div>

                    {/* Right: CTA Button */}
                    <div className="flex-1 hidden lg:flex justify-end items-center">
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-[#ffd359] to-[#df9d1b] text-black font-sans text-[12px] md:text-[13px] font-[800] tracking-wider uppercase px-6 py-2.5 rounded-tl-[16px] rounded-br-[16px] rounded-tr-sm rounded-bl-sm shadow-[0_4px_12px_rgba(223,157,27,0.3)] hover:scale-[1.03] transition-transform"
                        >
                            CONTACT US
                        </Link>
                    </div>

                </div>
            </nav>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed inset-0 z-40 bg-[#ffff00] flex flex-col justify-center items-start p-8 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="block font-sans text-[20px] font-bold  uppercase tracking-wider text-black hover:text-[#403e3a]"
                        >
                            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                                {link.label}
                                {link.hasDropdown && (
                                    <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </div>
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="inline-block mt-4 bg-gradient-to-r from-[#ffd359] to-[#df9d1b] text-black text-center font-sans text-[16px] font-[800] tracking-wider uppercase px-8 py-4 rounded-tl-[16px] rounded-br-[16px] rounded-tr-sm rounded-bl-sm"
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
