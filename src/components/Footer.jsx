import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 lg:px-24  relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ffff00] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none animate-pulse"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-20 border-b border-white/10 pb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl text-[#ffcc01] font-bold tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              MEY
            </h2>
            <p className="text-lg md:text-xl font-medium text-white/70 italic tracking-wide">
              Truth Before Business.
            </p>
            <p className="text-sm text-white/50 tracking-widest uppercase font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Chennai, India
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-[#ffcc01] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {['Home', 'Services', 'Work', 'About', 'Insights', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-base font-medium text-white/80 hover:text-[#ffff00] hover:translate-x-2 transition-all duration-300 w-fit"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-xs tracking-[0.3em] uppercase font-bold text-[#ffcc01] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaLinkedinIn />, href: '#' },
                { icon: <FaTwitter />, href: '#' },
                { icon: <FaFacebookF />, href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-[#ffff00] hover:text-black hover:border-transparent hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/40 tracking-wider font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
            © {new Date().getFullYear()} MEY. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;