import { Palette, Share2, Globe, Video, TrendingUp, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  details: string[];
  seoNote?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    shortDescription: "Logo design, naming, visual systems and brand guidelines.",
    details: [
      "Professional logo design",
      "Brand naming",
      "Colour and typography systems",
      "Brand guidelines",
      "Business stationery",
    ],
    seoNote: "We create structured brand identities that build trust and credibility.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    shortDescription: "Instagram, Facebook, LinkedIn and YouTube handled with structured monthly content.",
    details: [
      "Instagram marketing",
      "Facebook management",
      "LinkedIn content",
      "YouTube support",
      "Monthly content calendars",
      "Static creatives & Reels production",
      "Caption writing & Profile optimisation",
    ],
    seoNote: "As a social media marketing agency in Chennai, we help businesses grow visibility and engagement.",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    shortDescription: "Fast, modern and conversion-focused websites.",
    details: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "SEO setup",
      "Maintenance support",
    ],
    seoNote: "We build fast, mobile-friendly websites designed to convert visitors into enquiries.",
  },
  {
    icon: Video,
    title: "Video Production",
    shortDescription: "Corporate films, product shoots and reels.",
    details: [
      "Corporate videos",
      "Brand introduction films",
      "Product shoots",
      "Short-form reels",
      "Event coverage",
    ],
    seoNote: "Professional production that enhances brand perception.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    shortDescription: "Instagram ads, Facebook ads and Google ads for lead generation.",
    details: [
      "Instagram ads",
      "Facebook ads",
      "Google ads",
      "Lead generation campaigns",
    ],
    seoNote: "Campaigns built with structured targeting and measurable growth.",
  },
  {
    icon: MapPin,
    title: "Outdoor Advertising",
    shortDescription: "Hoardings, bus stop branding and exhibition stall design.",
    details: [
      "Hoarding design",
      "Bus stop branding",
      "Exhibition stall design",
      "Print advertisements",
    ],
    seoNote: "Impactful offline visibility solutions.",
  },
];
