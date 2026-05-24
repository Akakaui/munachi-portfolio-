import React, { useState } from "react";
import { SkillPillar, ToolItem } from "../types";
import {
  CanvaLogo,
  CapCutLogo,
  MetaLogo,
  TikTokLogo,
  GoogleAdsLogo,
  MetaBusinessSuiteLogo,
  GoogleAnalyticsLogo,
  BufferLogo,
  HootsuiteLogo,
  InstagramLogo,
  FacebookLogo,
  LinkedInLogo,
  XLogo,
  YouTubeLogo
} from "./Logos";

interface SkillsToolsProps {
  pillars: SkillPillar[];
  tools: ToolItem[];
}

export const SkillsTools: React.FC<SkillsToolsProps> = ({ pillars, tools }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Tools" },
    { key: "design", label: "Design & Video" },
    { key: "platforms", label: "Social Platforms" },
    { key: "ads", label: "Paid Ads" },
    { key: "analytics", label: "Analytics" },
    { key: "scheduling", label: "Scheduling" }
  ];

  // Helper to get the correct SVG component for a tool key
  const renderToolLogo = (key: string, isHovered: boolean) => {
    const sizeClass = "w-12 h-12 transition-transform duration-300 group-hover:scale-110";
    // brand colors if hovered, otherwise clean high contrast black
    switch (key) {
      case "canva":
        return <CanvaLogo className={sizeClass} color={isHovered ? "#00C4CC" : "currentColor"} />;
      case "capcut":
        return <CapCutLogo className={sizeClass} color={isHovered ? "#221F20" : "currentColor"} />;
      case "meta":
      case "metabusiness":
        return <MetaLogo className={sizeClass} color={isHovered ? "#0668E1" : "currentColor"} />;
      case "instagram":
        return <InstagramLogo className={sizeClass} color={isHovered ? "#E1306C" : "currentColor"} />;
      case "facebook":
        return <FacebookLogo className={sizeClass} color={isHovered ? "#1877F2" : "currentColor"} />;
      case "tiktok":
        return <TikTokLogo className={sizeClass} color={isHovered ? "#000000" : "currentColor"} />;
      case "linkedin":
        return <LinkedInLogo className={sizeClass} color={isHovered ? "#0077B5" : "currentColor"} />;
      case "x":
        return <XLogo className={sizeClass} color={isHovered ? "#1DA1F2" : "currentColor"} />;
      case "youtube":
        return <YouTubeLogo className={sizeClass} color={isHovered ? "#FF0000" : "currentColor"} />;
      case "googleads":
        return <GoogleAdsLogo className={sizeClass} />;
      case "googleanalytics":
        return <GoogleAnalyticsLogo className={sizeClass} />;
      case "buffer":
        return <BufferLogo className={sizeClass} color={isHovered ? "#2C4BFF" : "currentColor"} />;
      case "hootsuite":
        return <HootsuiteLogo className={sizeClass} color={isHovered ? "#353D42" : "currentColor"} />;
      default:
        return <div className="font-mono text-xs font-bold">{key}</div>;
    }
  };

  const filteredTools =
    activeCategory === "all" ? tools : tools.filter((t) => t.category === activeCategory);

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-light-gray border-b-4 border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Segment */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="bg-brand-accent text-white px-3 py-1 font-mono text-xs uppercase font-bold w-fit border border-brand-black brutalist-shadow-sm select-none">
            Skills and Tools
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-black font-normal">
            I come equipped. No learning on the job.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-muted font-semibold mt-1">
            Every tool I use, I use properly. Every skill I list, I can prove.
          </p>
        </div>

        {/* Top Half: 4 Skill Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-white border-4 border-brand-black p-6 brutalist-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-brand-accent border border-brand-black px-2 py-0.5 uppercase">
                  Pillar 0{index + 1}
                </span>
                <h3 className="font-display text-xl uppercase mt-4 mb-2 text-brand-black">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-brand-muted font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="border-t border-brand-black/20 mt-6 pt-3 font-mono text-xs text-brand-accent uppercase font-bold tracking-wider">
                Full Competency
              </div>
            </div>
          ))}
        </div>

        {/* Divider text brand strip banner */}
        <div className="w-full bg-brand-black py-3 mb-16 border-2 border-brand-black text-center flex justify-around select-none">
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            Meta Partner Certified
          </span>
          <span className="font-mono text-xs font-semibold text-brand-accent">✦</span>
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            Data-Backed Workflows
          </span>
          <span className="font-mono text-xs font-semibold text-brand-accent">✦</span>
          <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
            Physical Product Specialists
          </span>
        </div>

        {/* Bottom Half: Categorized Tool Grid */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <h3 className="font-display text-2xl uppercase text-brand-black">
              Software Stack
            </h3>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-1.5 font-mono text-xs uppercase font-bold border-2 border-brand-black transition-all ${
                    activeCategory === cat.key
                      ? "bg-brand-accent text-white"
                      : "bg-white text-brand-black hover:bg-brand-light-gray"
                  } brutalist-shadow-sm cursor-pointer`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid displaying genuine SVG brand logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredTools.map((tool) => {
              const [hovered, setHovered] = useState(false);
              return (
                <div
                  key={tool.name}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="bg-white border-2 border-brand-black p-6 flex flex-col items-center justify-center text-center brutalist-shadow-hover transition-transform group"
                >
                  <div className="mb-4 text-brand-black flex items-center justify-center h-14">
                    {renderToolLogo(tool.iconKey, hovered)}
                  </div>
                  <div className="font-mono text-xs font-bold text-brand-black uppercase select-none">
                    {tool.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
