import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "dark" | "white";
  id?: string;
}

const variantStyles = {
  default: "bg-background text-foreground",
  dark: "bg-primary text-primary-foreground",
  white: "bg-accent text-accent-foreground",
};

const Section = ({ children, className, variant = "default", id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-28", variantStyles[variant], className)}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
