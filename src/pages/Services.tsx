import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import AnimateIn from "@/components/ui/AnimateIn";
import { SERVICES } from "@/data/services";

const Services = () => {
  return (
    <PageLayout
      title="Branding, Social Media & Website Design Services in Chennai | MEY"
      description="Explore MEY's branding, social media marketing, website development, video production and advertising services in Chennai."
    >
      <Section>
        <AnimateIn>
          <SectionHeader
            as="h1"
            headline="Branding & Digital Marketing Services in Chennai"
            subtext="At MEY, every service connects back to one principle — Truth Before Business."
          />
        </AnimateIn>
      </Section>

      {SERVICES.map((service, index) => {
        const Icon = service.icon;
        return (
          <Section key={service.title} variant={index % 2 === 0 ? "white" : "default"}>
            <AnimateIn variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-md bg-card flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon size={24} className="text-card-foreground" />
                  </motion.div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold">{service.title}</h2>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="font-sans text-sm flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {service.seoNote && (
                  <p className="font-sans text-sm opacity-70 leading-relaxed">{service.seoNote}</p>
                )}
              </div>
            </AnimateIn>
          </Section>
        );
      })}

      <CTASection />
    </PageLayout>
  );
};

export default Services;
