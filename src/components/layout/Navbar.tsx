import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 bg-primary text-primary-foreground"
    >
      <div className="container flex items-center justify-between py-0">
        {/* Logo */}
        <Link to="/" className="relative py-5">
          <motion.span
            className="font-serif text-2xl font-bold tracking-[0.2em]"
            whileHover={{ letterSpacing: "0.3em" }}
            transition={{ duration: 0.3 }}
          >
            MEY
          </motion.span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  className="relative block px-5 py-5 text-xs font-sans font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-primary-foreground/10"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* CTA */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden p-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-primary-foreground/10"
          >
            <ul className="container flex flex-col py-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 font-sans text-sm font-medium rounded-md transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary-foreground/10"
                        : "hover:bg-primary-foreground/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-primary-foreground text-primary font-sans font-semibold text-sm py-3 rounded-md"
                >
                  Start a Project
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
