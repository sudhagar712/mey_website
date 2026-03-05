import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about-us' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ].filter(link => link.name !== 'About Us' || location.pathname === '/');

  // Determine if we are on a page where the header should behave differently?
  // For now, both Home and Contact start with dark banners, so logic remains same.
  const isDarkBackground = true; // Assuming hero sections are dark

  const textColorClass = scrolled
    ? 'text-gray-800 hover:text-[#4D0013]'
    : 'text-white hover:text-[#D4AF37]';

  const logoClass = scrolled
    ? '' // Normal logo
    : 'brightness-0 invert';

  const handleNavClick = (e, link) => {
    if (link.href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        const targetId = link.href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500  ${scrolled
        ? 'bg-white shadow-lg py-3'
        : 'bg-transparent py-5 lg:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* --- Logo Section --- */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer outline-none">
            <img
              src={logo}
              alt="AJ Dento Aesthetic"
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* --- Desktop Menu (Centered/Right) --- */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group py-2 ${isActive
                      ? (scrolled ? 'text-[#4D0013]' : 'text-[#D4AF37]')
                      : textColorClass
                      }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-[#4D0013]' : 'bg-[#D4AF37]'
                      }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Vertical Divider */}
            <div className={`h-6 w-px ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`}></div>

            {/* CTA Button */}
            <a
              href="https://wa.me/918098449999?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#FFE600] to-[#FFC200] text-[#4D0013] px-7 py-3 rounded-full font-bold text-sm shadow-[0_4px_14px_rgba(255,220,0,0.4)] hover:shadow-[0_6px_20px_rgba(255,220,0,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4D0013]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book Appointment
            </a>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${scrolled ? 'text-[#4D0013] hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Drawer --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-[85%] max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#4D0013]">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AJ Dento" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-yellow-500 font-bold text-sm tracking-widest leading-none">AJ DENTO</span>
                <span className="text-[#D4AF37] font-medium text-[10px] tracking-[0.2em] leading-none mt-1">AESTHETIC CARE</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-white">

            {/* Section label */}
            <div className="px-6 pt-6 pb-2">

            </div>

            {/* Nav Links */}
            <div className="flex flex-col px-4 pb-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative flex items-center justify-between px-4 py-3.5 rounded-2xl mb-1 font-bold text-[15px] tracking-wide transition-all duration-300 group overflow-hidden
                      ${isActive
                        ? 'text-[#4D0013] bg-[#4D0013]/5 border border-[#4D0013]/10'
                        : 'text-gray-700 hover:text-[#4D0013] hover:bg-gray-50 border border-transparent'
                      }`}
                  >
                    {/* Active left accent bar */}
                    {isActive && (
                      <span className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-full bg-gradient-to-b from-[#FFE600] to-[#FFC200]" />
                    )}
                    <span className="relative z-10 pl-1">{link.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-all duration-300 ${isActive
                        ? 'text-[#FFE600]'
                        : 'text-gray-300 group-hover:text-[#4D0013] group-hover:translate-x-1'
                        }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

            {/* Address Card */}
            <div className="mx-4 my-5">
              <div className="relative rounded-2xl border border-gray-100 bg-gray-50 shadow-sm p-4 overflow-hidden">
                {/* subtle yellow corner */}
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#FFE600]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FFE600] to-[#FFC200] flex items-center justify-center flex-shrink-0 shadow-md shadow-yellow-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-[#4D0013]" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#4D0013] font-black tracking-[0.2em] uppercase mb-1">Our Location</p>
                    <p className="text-gray-800 text-sm font-semibold leading-snug">
                      AC 5, 2nd Avenue,<br />Anna Nagar, Chennai – 600040
                    </p>
                    <a
                      href="https://maps.google.com/?q=AC+5+2nd+Avenue+Anna+Nagar+Chennai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-[10px] text-[#4D0013]/60 hover:text-[#4D0013] font-black tracking-widest uppercase transition-colors duration-200"
                    >
                      Get Directions
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Row */}
            <div className="mx-4 mb-5 grid grid-cols-2 gap-3">

              {/* Phone */}
              <a
                href="tel:+918098449999"
                className="flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#4D0013]/5 hover:border-[#4D0013]/20 transition-all duration-300 group shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFE600] to-[#FFC200] flex items-center justify-center shadow-sm shadow-yellow-200 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-3.5 h-3.5 fill-[#4D0013] text-[#4D0013]" />
                </div>
                <div className="text-center">
                  <p className="text-[9px] text-gray-400 font-black tracking-[0.15em] uppercase">Call Us</p>
                  <p className="text-gray-800 text-[11px] font-bold leading-tight">8098449999</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:ajdentcare@gmail.com"
                className="flex flex-col items-center justify-center gap-1.5 py-3.5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-[#4D0013]/5 hover:border-[#4D0013]/20 transition-all duration-300 group shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FFE600] to-[#FFC200] flex items-center justify-center shadow-sm shadow-yellow-200 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-3.5 h-3.5 text-[#4D0013]" />
                </div>
                <div className="text-center">
                  <p className="text-[9px] text-gray-400 font-black tracking-[0.15em] uppercase">Email Us</p>
                  <p className="text-gray-800 text-[10px] font-bold leading-tight break-all">ajdentcare@gmail.com</p>
                </div>
              </a>

            </div>

          </div>

          <div className="p-5 bg-white border-t border-gray-100">
            <a
              href="https://wa.me/918098449999?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#FFE600] to-[#FFC200] text-[#4D0013] px-6 py-4 rounded-2xl font-extrabold text-sm tracking-wide shadow-[0_6px_20px_rgba(255,220,0,0.35)] hover:shadow-[0_10px_30px_rgba(255,220,0,0.55)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4D0013]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;