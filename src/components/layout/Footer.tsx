import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/navigation";
import AnimateIn from "@/components/ui/AnimateIn";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-3xl font-bold mb-2">MEY</h3>
              <p className="text-sm opacity-80">Truth Before Business</p>
              <p className="text-sm opacity-60 mt-4">Chennai</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-widest mb-4 opacity-60">
                Pages
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-sans text-sm font-semibold uppercase tracking-widest mb-4 opacity-60">
                Connect
              </h4>
              <ul className="space-y-2">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} MEY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
