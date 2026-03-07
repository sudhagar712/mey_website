import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";
import DifferentiatorCard from "@/components/ui/DifferentiatorCard";
import CTASection from "@/components/ui/CTASection";
import AnimateIn, { staggerContainer, staggerItem } from "@/components/ui/AnimateIn";
import HeroSlider from "@/components/ui/HeroSlider";
import { SERVICES } from "@/data/services";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const DIFFERENTIATORS = [
  {
    title: "Truth-First Strategy",
    description: "We understand the real problem before designing the solution.",
  },
  {
    title: "Clarity Over Clutter",
    description: "Every design decision must earn its place.",
  },
  {
    title: "First-Principles Thinking",
    description: "No templates. Every project is built from scratch.",
  },
  {
    title: "Built For Growth",
    description: "We create brands that scale without losing identity.",
  },
];

const Home = () => {
  return (
    <PageLayout
      title="MEY | Branding & Digital Marketing Agency in Chennai"
      description="MEY is a premium branding and digital marketing agency in Chennai offering brand identity, social media management, website development, performance marketing and outdoor advertising."
    >
      {/* Hero */}
      <Section className="py-20 md:py-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.p
              className="font-sans text-xs uppercase tracking-[0.3em] mb-4 opacity-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Truth Before Business
            </motion.p>

            <motion.p
              className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              MEY
            </motion.p>

            <motion.h1
              className="font-serif text-2xl md:text-3xl font-semibold leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Branding & Digital Marketing Agency in Chennai
            </motion.h1>

            <motion.p
              className="font-sans text-base opacity-70 max-w-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              We build clear, powerful and growth-focused brands for startups and ambitious businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/work"
                className="bg-primary text-primary-foreground font-sans font-semibold text-sm px-8 py-4 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] text-center"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground font-sans font-semibold text-sm px-8 py-4 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] text-center"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>

          {/* Right: Image Slider */}
          <motion.div
            className="aspect-[4/3] lg:aspect-square"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroSlider images={heroImages} />
          </motion.div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section>
        <AnimateIn>
          <SectionHeader
            headline="Complete Brand & Marketing Solutions"
            subtext="Everything your brand needs — structured under one direction."
          />
        </AnimateIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why MEY */}
      <Section variant="white">
        <AnimateIn>
          <SectionHeader headline="Why MEY" />
        </AnimateIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {DIFFERENTIATORS.map((d) => (
            <motion.div key={d.title} variants={staggerItem}>
              <DifferentiatorCard title={d.title} description={d.description} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Trusted By */}
      <Section>
        <AnimateIn>
          <SectionHeader headline="Trusted By" />
        </AnimateIn>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`rounded-lg h-24 flex items-center justify-center font-sans text-sm font-medium ${
                i % 2 === 0
                  ? "bg-card text-card-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              Client {i + 1}
            </motion.div>
          ))}
        </motion.div>
        <p className="sr-only">Branding clients in Chennai and India</p>
      </Section>

      {/* Final CTA */}
      <CTASection />
    </PageLayout>
  );
};

export default Home;
