import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  headline: string;
  subtext?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  align?: "left" | "center";
}

const SectionHeader = ({
  headline,
  subtext,
  as: Tag = "h2",
  className,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      <Tag className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-4">
        {headline}
      </Tag>
      {subtext && (
        <p className="font-sans text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
