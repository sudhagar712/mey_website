import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import AnimateIn, { staggerContainer, staggerItem } from "@/components/ui/AnimateIn";

const PROJECTS = [
  { title: "Brand Identity — Startup X", category: "Branding" },
  { title: "Social Media — Restaurant Y", category: "Social Media" },
  { title: "Website — Tech Company Z", category: "Website" },
  { title: "Campaign — Retail Brand A", category: "Performance Marketing" },
  { title: "Video — Corporate Film B", category: "Video Production" },
  { title: "Outdoor — Exhibition C", category: "Outdoor Advertising" },
];

const Work = () => {
  return (
    <PageLayout
      title="Branding & Marketing Projects | MEY Chennai"
      description="Explore branding, social media, website and advertising projects delivered by MEY."
    >
      <Section>
        <AnimateIn>
          <SectionHeader
            as="h1"
            headline="Selected Projects"
            subtext="Every project begins with clarity and ends with measurable execution."
          />
        </AnimateIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-primary-foreground/10" />
              <div className="p-6">
                <span className="font-sans text-xs uppercase tracking-widest opacity-50 mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
      <CTASection />
    </PageLayout>
  );
};

export default Work;
