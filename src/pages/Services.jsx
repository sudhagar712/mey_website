import React from "react";
import SEO from "../components/SEO";
import PageBanner from "../components/PageBanner";
import { services } from "../data/servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Services = () => {
  return (
    <div className="bg-white">
      <SEO
        title="Branding, Social Media & Website Design Services in Chennai | MEY"
        description="Explore MEY’s branding, social media marketing, website development, video production and advertising services in Chennai."
      />
      <PageBanner title="Our Services" breadcrumb="services" />
      <section className="  py-20 px-6 lg:px-16">
        <div className="max-w-7xl  mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 mt-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Branding & Digital Marketing Services
            </h2>
            <p className=" max-w-3xl mx-auto text-lg">
              At MEY, every service connects back to one principle —
              <span className=" font-semibold"> Truth Before Business.</span>
            </p>
          </div>

          {/*  */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                    <p className="text-gray-600 mb-5 text-sm">
                      {service.description}
                    </p>

                    <ul className="text-sm text-gray-500 space-y-1 mb-6">
                      {service.points.slice(0, 3).map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>

                    <span className="text-sm font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read More →
                    </span>
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
