import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "WORKS", href: "/work" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-100">
      {/* Navbar */}
      <nav
        className={`border border-white/10 transition-colors duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-sm"
            : "bg-black/90 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[80px]">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <h1
              className="text-[#ffcc01] text-[2.4rem] md:text-[2.8rem] font-bold tracking-tighter"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              MEY
            </h1>
          </Link>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-bold text-[13px] uppercase tracking-wide transition-colors ${
                    location.pathname === link.href
                      ? "text-[#ffff00]"
                      : "text-white hover:text-[#ffff00]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex">
              <Link
                to="/contact"
                className="bg-linear-to-r from-[#ffd359] to-[#df9d1b] text-black font-bold text-[13px] uppercase px-6 py-2.5 rounded-tl-[16px] rounded-br-[16px] shadow-md hover:scale-105 transition-transform"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[6px] z-50"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-7 h-[2px] bg-[#ffff00] transition-all duration-300 ${
                    menuOpen
                      ? i === 0
                        ? "rotate-45 translate-y-[8px]"
                        : i === 1
                          ? "opacity-0"
                          : "-rotate-45 -translate-y-[8px]"
                      : ""
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />

            {/* Offcanvas Menu */}
            <motion.div
              key="panel"
              className="fixed top-0 left-0 z-50 h-full w-[280px] bg-[#111] shadow-2xl"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <div className="flex flex-col h-full p-8">
                {/* Logo */}
                <Link
                  to="/"
                  className="text-[#ffcc01] text-3xl font-bold mb-10"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  MEY
                </Link>

                {/* Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -8, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <Link
                        to={link.href}
                        className={`text-[16px] font-semibold transition-all ${
                          location.pathname === link.href
                            ? "text-yellow-400"
                            : "text-white hover:text-yellow-400"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact */}
                <div className="mt-auto">
                  <Link
                    to="/contact"
                    className="block text-center bg-white text-black font-bold py-3 rounded-lg"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
