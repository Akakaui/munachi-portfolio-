export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  copy: string;
  iconName: string; // lucide icon name
}

export interface SkillPillar {
  title: string;
  description: string;
}

export interface ToolItem {
  name: string;
  category: "design" | "platforms" | "ads" | "analytics" | "scheduling";
  iconKey: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tag: string;
  iconName: "car" | "leaf" | "building";
  services: string[];
  headline: string;
  body: string;
  metrics: Stat[];
  imagePlaceholderText: string;
  challenge: string;
  strategy: string[];
  visualGrid: { title: string; desc: string; placeholder: string }[];
  breakdown: { label: string; details: string }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  quote: string;
  placeholderText?: string;
}

export interface PortfolioSettings {
  accentColor: string;
  bgColor: string;
  primaryColor: string;
  profileName: string;
  profileEmail: string;
  tagline: string;
  subheadline: string;
  supportingLine: string;
  aboutHeadline: string;
  aboutBodyParagraphs: string[];
  imageUrl: string; // custom profile photo URL if supplied
  instagramUrl: string;
  linkedinUrl: string;
}
