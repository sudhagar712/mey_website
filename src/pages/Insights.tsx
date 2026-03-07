import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateIn, { staggerContainer, staggerItem } from "@/components/ui/AnimateIn";

const ARTICLES = [
  {
    slug: "branding-agency-vs-marketing-agency",
    title: "Branding Agency vs Marketing Agency",
    excerpt: "Understanding the difference and why it matters for your business growth.",
  },
  {
    slug: "brand-identity-for-startups",
    title: "How to Build a Strong Brand Identity for Startups",
    excerpt: "A step-by-step guide to creating a brand that stands out from day one.",
  },
  {
    slug: "social-media-strategy",
    title: "Why Social Media Strategy Matters",
    excerpt: "Going beyond posting — building a structured social media presence.",
  },
  {
    slug: "website-design-mistakes",
    title: "Website Design Mistakes Businesses Make",
    excerpt: "Common pitfalls and how to avoid them for better conversions.",
  },
  {
    slug: "performance-marketing-leads",
    title: "How Performance Marketing Generates Leads",
    excerpt: "Structured targeting, measurable results and scalable campaigns.",
  },
];

const Insights = () => {
  return (
    <PageLayout
      title="Branding & Digital Marketing Insights | MEY Chennai"
      description="Read branding, social media and digital marketing insights from MEY Chennai."
    >
      <Section>
        <AnimateIn>
          <SectionHeader
            as="h1"
            headline="Insights"
            subtext="Thoughts on branding, marketing and building businesses with clarity."
          />
        </AnimateIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {ARTICLES.map((article) => (
            <motion.article
              key={article.slug}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="bg-card text-card-foreground rounded-lg p-8 shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <h2 className="font-serif text-xl font-semibold mb-3">{article.title}</h2>
              <p className="font-sans text-sm opacity-80 leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <span className="font-sans text-xs uppercase tracking-widest opacity-50">
                Coming Soon
              </span>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default Insights;
