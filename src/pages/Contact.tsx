import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/ui/ContactForm";
import AnimateIn from "@/components/ui/AnimateIn";

const Contact = () => {
  return (
    <PageLayout
      title="Contact MEY | Branding & Marketing Agency Chennai"
      description="Get in touch with MEY for branding, social media, website design and marketing services in Chennai."
    >
      <Section>
        <AnimateIn>
          <SectionHeader
            as="h1"
            headline="Start Your Project"
            subtext="Tell us about your business and goals."
          />
        </AnimateIn>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <AnimateIn className="lg:col-span-3" variant="fadeLeft" delay={0.2}>
            <ContactForm />
          </AnimateIn>
          <AnimateIn className="lg:col-span-2" variant="fadeRight" delay={0.3}>
            <div className="bg-card text-card-foreground rounded-lg p-8">
              <h3 className="font-serif text-xl font-semibold mb-6">Direct Contact</h3>
              <div className="space-y-4 font-sans text-sm">
                <div>
                  <p className="opacity-50 uppercase tracking-widest text-xs mb-1">Phone</p>
                  <p>+91 XXXXX XXXXX</p>
                </div>
                <div>
                  <p className="opacity-50 uppercase tracking-widest text-xs mb-1">Email</p>
                  <p>hello@mey.agency</p>
                </div>
                <div>
                  <p className="opacity-50 uppercase tracking-widest text-xs mb-1">Office</p>
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
