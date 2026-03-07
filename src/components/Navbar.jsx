import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'SERVICES', href: '/services', hasDropdown: true },
    { label: 'PROMOTIONAL PRODUCTS', href: '/products' },
    { label: 'ABOUT', href: '/about' },
    { label: 'BLOG', href: '/blog' },
    { label: 'LOGIN', href: '/login' },
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
        <div className="md:px-10 px-2 mt-4">
            <nav className="z-50 bg-[#000] rounded-full shadow-md border-b border-[#4f4d48]">
                <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px]">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 z-50">
                        {/* Custom geometric 'M' icon mimicking the provided image */}
                        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" className="text-[#f2c75c]">
                            <path d="M6 28L12 14L20 25L28 14L34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 28L20 10L34 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex font-sans items-baseline">
                            <span className="text-[28px] font-bold text-[#f2c75c] tracking-tight">May</span>
                            <span className="font-serif italic text-[#e6cd8e] text-[26px] ml-1 lowercase tracking-wide">media</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="font-sans text-[13px] font-bold tracking-[0.03em] uppercase text-white hover:text-[#f2c75c] transition-colors flex items-center gap-1.5"
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

                        {/* CTA Button matching the image */}
                        <Link
                            to="/contact"
                            className="bg-gradient-to-r from-[#ffd359] to-[#df9d1b] text-black font-sans text-[13px] font-[800] tracking-wider uppercase px-7 py-2.5 rounded-tl-[16px] rounded-br-[16px] rounded-tr-sm rounded-bl-sm shadow-[0_4px_12px_rgba(223,157,27,0.3)] hover:scale-[1.03] transition-transform"
                        >
                            CONTACT US
                        </Link>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        className="flex lg:hidden flex-col gap-[6px] bg-transparent border-none cursor-pointer p-2 z-50"
                    >
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`block w-7 h-[2px] bg-[#f2c75c] transition-all duration-300 ${menuOpen
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
            </nav>

            {/* Mobile Full-Screen Menu */}
            <div
                className={`fixed inset-0 z-40 bg-[#403e3a] flex flex-col justify-center items-start p-8 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="w-full max-w-sm mx-auto flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="block font-sans text-[20px] font-bold uppercase tracking-wider text-white hover:text-[#f2c75c]"
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
