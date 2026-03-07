import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import AnimateIn from "@/components/ui/AnimateIn";

const About = () => {
  return (
    <PageLayout
      title="About MEY | Branding Agency in Chennai"
      description="Learn about MEY, a branding and digital marketing agency in Chennai built on the principle Truth Before Business."
    >
      <Section>
        <AnimateIn>
          <SectionHeader
            as="h1"
            headline="About MEY"
            subtext="MEY is a branding and digital marketing agency in Chennai focused on building clear, premium and growth-oriented brands."
          />
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="font-sans text-center text-base opacity-70 max-w-2xl mx-auto leading-relaxed">
            We combine strategy, creativity and execution under one structured direction.
          </p>
        </AnimateIn>
      </Section>

      <Section variant="white">
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Our Philosophy</h2>
            <p className="font-serif text-2xl font-semibold mb-8 opacity-90">
              Truth Before Business
            </p>
            <div className="font-sans text-base opacity-70 leading-relaxed space-y-2">
              <p>Before campaigns.</p>
              <p>Before content.</p>
              <p>Before advertising budgets.</p>
              <p className="mt-6">We understand your business first.</p>
              <p>Then we build your brand.</p>
            </div>
          </div>
        </AnimateIn>
      </Section>

      <Section>
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Mission</h2>
            <p className="font-sans text-base md:text-lg opacity-70 leading-relaxed">
              To help businesses present themselves with clarity, confidence and measurable impact.
            </p>
          </div>
        </AnimateIn>
      </Section>

      <CTASection />
    </PageLayout>
  );
};

export default About;
