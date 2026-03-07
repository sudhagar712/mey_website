import { Link } from "react-router-dom";
import Section from "@/components/layout/Section";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  variant?: "default" | "dark" | "white";
}

const CTASection = ({
  headline = "Ready to build with clarity?",
  subtext = "Start with MEY.",
  variant = "dark",
}: CTASectionProps) => {
  return (
    <Section variant={variant} className="text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
      <p className="font-sans text-lg opacity-80 mb-8">{subtext}</p>
      <Link
        to="/contact"
        className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-sm px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        Start a Project
      </Link>
    </Section>
  );
};

export default CTASection;
