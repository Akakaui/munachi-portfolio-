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
  // Helper to get the correct SVG component for a tool key
  const renderToolLogo = (key: string, isHovered: boolean) => {
    const sizeClass = "w-8 h-8 transition-transform duration-300 group-hover:scale-110";
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

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-light-gray border-b-4 border-brand-black overflow-hidden"
    >
      {/* Injecting infinite marquee keyframe animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-container:hover .animate-marquee-scroll {
          animation-play-state: paused;
        }
      `}} />

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

        {/* Full-width scrolling ticker banner */}
        <div className="w-full bg-brand-black py-3 mb-16 border-2 border-brand-black overflow-hidden select-none">
          <div className="animate-marquee-scroll gap-0 px-0" style={{ animationDuration: '28s' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-mono text-[10px] sm:text-xs font-extrabold text-white tracking-[0.18em] uppercase pr-10 flex-shrink-0">
                ORGANIC REACH STRATEGIES
                <span className="text-brand-accent mx-4">✦</span>
                REVENUE-DRIVEN CONTENT
                <span className="text-brand-accent mx-4">✦</span>
                PHYSICAL BRAND EXPERTS
                <span className="text-brand-accent mx-4">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Half: Infinitely Scrolling Software Stack Marquee */}
        <div className="flex flex-col gap-6">
          <h3 className="font-display text-2xl uppercase text-brand-black px-1">
            Software Stack
          </h3>

          {/* Marquee Ticker Track */}
          <div className="w-full border-4 border-brand-black bg-white overflow-hidden py-5 select-none marquee-container brutalist-shadow">
            <div className="animate-marquee-scroll gap-6 px-3">
              
              {/* Buffer Copy 1 */}
              {tools.map((tool, idx) => (
                <MarqueeItem
                  key={`marq-1-${tool.name}-${idx}`}
                  tool={tool}
                  renderToolLogo={renderToolLogo}
                />
              ))}

              {/* Buffer Copy 2 (Enables perfect seamless loop reset) */}
              {tools.map((tool, idx) => (
                <MarqueeItem
                  key={`marq-2-${tool.name}-${idx}`}
                  tool={tool}
                  renderToolLogo={renderToolLogo}
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Isolated interactive marquee item to manage its own hover color toggle
interface MarqueeItemProps {
  tool: ToolItem;
  renderToolLogo: (key: string, isHovered: boolean) => React.ReactNode;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ tool, renderToolLogo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border-2 border-brand-black bg-white brutalist-shadow-sm hover:translate-y-[-2px] transition-transform duration-200 select-none cursor-pointer group"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {renderToolLogo(tool.iconKey, hovered)}
      </div>
      <span className="font-mono text-xs font-extrabold text-brand-black uppercase">
        {tool.name}
      </span>
    </div>
  );
};
