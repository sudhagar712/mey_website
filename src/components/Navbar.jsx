import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "HOME", path: "/" },
  { name: "SERVICES", path: "/services" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-4">
        <div className="w-full max-w-[1400px] flex items-center justify-between bg-[#1b1b1b]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4">
          {/* LOGO */}
          <Link
            to="/"
            className="text-white text-lg md:text-2xl font-semibold tracking-wider"
          >
            MEY
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 text-white text-sm tracking-widest">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-gray-300 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-6 flex flex-col justify-between md:ml-6"
          >
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0d0d0d] flex flex-col md:flex-row"
          >
            {/* LEFT MENU */}
            <div className="flex-1 flex flex-col justify-center items-start p-6 md:pl-32 gap-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="text-white text-[36px] md:text-[60px] font-semibold tracking-wide hover:text-gray-400 transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* RIGHT INFO PANEL */}
            <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center px-10 md:px-24 py-16 md:py-0 space-y-10 text-gray-300">
              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-3">
                  HEADQUARTERS
                </p>
                <p className="text-sm md:text-lg">
                  Address Line
                  <br />
                  Chennai, Tamil Nadu
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest text-gray-500 mb-3">
                  CONTACT
                </p>
                <p className="hover:text-white cursor-pointer">info@mey.com</p>
                <p className="hover:text-white cursor-pointer">
                  +91 7018888888
                </p>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white text-xl hover:bg-white/10 transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
