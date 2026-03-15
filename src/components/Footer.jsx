import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#FBBA00]">
      {/* Glow Background */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-yellow-400 opacity-10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-20 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tight">
              MEY
            </h2>

            <p className="text-lg">Truth Before Business.</p>

            <p className="text-sm uppercase tracking-[0.3em] ">
              Chennai, India
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase font-bold mb-8">
              Navigation
            </h4>

            <div className="grid grid-cols-2 gap-y-5 gap-x-10">
              {["Home", "Services", "Work", "About", "Insights", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="group  transition duration-300 relative w-fit"
                  >
                    {item}

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.35em] uppercase mb-8">
              Connect
            </h4>

            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:text-black hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-sm  mt-8 max-w-xs">
              Follow us on social media for updates, insights, and digital
              innovations.
            </p>
          </div>
        </div>

        <hr className="text-gray-200" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">
          <p className="text-sm ">
            © {new Date().getFullYear()} MEY. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm ">
            <Link to="#" className=" transition">
              Privacy Policy
            </Link>

            <Link to="#" className=" transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;