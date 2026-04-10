import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import { services } from "../data/servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ExpandingCards from "../components/ExpandingCards";


const Services = () => {
  return (
    <div className="">
      <SEO
        title="Branding, Social Media & Website Design Services in Chennai | MEY"
        description="MEY offers expert branding, social media marketing, website development, performance marketing, video production and outdoor advertising services in Chennai."
        keywords="branding services Chennai, social media marketing Chennai, website design Chennai, performance marketing Chennai, video production Chennai, outdoor advertising Chennai, MEY services"
      />
      <PageBanner title="Services" />
      <div className="p-3 md:px-20 md:p-10  relative">
      
        <ExpandingCards />
      </div>

      <section className="relative bg-white  py-24 px-6 lg:px-16 overflow-hidden">
        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" />
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          {/* Centered Premium Heading */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-xs font-bold  tracking-widest uppercase">
                What We Do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              Branding &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Digital Marketing
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg  leading-relaxed"
            >
              At MEY, every service connects back to one principle —
              <span className="font-semibold">
                {" "}
                Truth Before Business.
              </span>
            </motion.p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block h-full outline-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="group relative h-full bg-[#0a0a0a] rounded-[2rem] border border-white/10 overflow-hidden hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.1)] transition-all duration-500 flex flex-col"
                >
                  {/* Image Container with seamless bottom gradient */}
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle glow overlay on hover */}
                    <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10" />
                  </div>

                  {/* Content Container */}
                  <div className="relative z-20 px-8 pb-8 flex-grow flex flex-col pt-2 bg-[#0a0a0a]">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex-grow">
                      <ul className="space-y-3 mb-8">
                        {service.points.slice(0, 3).map((p, i) => (
                          <li
                            key={i}
                            className="flex items-start text-sm text-neutral-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80 mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                            <span className="line-clamp-2">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer / CTA */}
                    <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-wider uppercase text-white group-hover:text-yellow-400 transition-colors">
                        Explore Strategy
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black text-white transition-all duration-300">
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
