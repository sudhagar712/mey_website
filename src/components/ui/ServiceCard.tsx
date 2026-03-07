import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg p-8 shadow-card",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-hover",
        className
      )}
    >
      <div className="w-12 h-12 rounded-md bg-primary-foreground/10 flex items-center justify-center mb-6">
        <Icon size={24} className="text-primary-foreground" />
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
      <p className="font-sans text-sm leading-relaxed opacity-80">{description}</p>
    </div>
  );
};

export default ServiceCard;
