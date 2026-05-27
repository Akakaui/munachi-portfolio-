import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PortfolioSettings } from "../types";

// Animated counter — counts from 0 to the numeric portion of a string
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    const numStr = value.replace(/[^0-9]/g, "");
    const target = parseInt(numStr, 10);
    if (isNaN(target)) { setDisplayVal(value); return; }
    const suffix = value.replace(/[0-9,]/g, "");
    const hasCommas = value.includes(",");
    const startTime = performance.now();
    const duration = 1400;
    let frameId: number;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress);
      const current = Math.floor(eased * target);
      const formatted = hasCommas ? current.toLocaleString("en-US") : current.toString();
      setDisplayVal(`${formatted}${suffix}`);
      if (progress < 1) frameId = requestAnimationFrame(animate);
      else setDisplayVal(value);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <span>{displayVal}</span>;
};

interface HeroProps {
  settings: PortfolioSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const mailLink = `mailto:${settings.profileEmail}?subject=Freelance Social Media Inquiry`;

  const stats = [
    { value: "10,000+", label: "Views Generated" },
    { value: "3", label: "Industries Served" },
    { value: "3", label: "Paying Clients" }
  ];

  const handleSeeWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 bg-brand-bg md:py-24 border-b-4 border-brand-black overflow-hidden grain-overlay"
    >
      {/* 3D Wireframe / Abstract SVG decor backdrops */}
      <div className="absolute top-10 right-10 w-48 h-48 md:w-80 md:h-80 opacity-15 select-none pointer-events-none animate-spin" style={{ animationDuration: "120s" }}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-black">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
          <polygon points="50,5 95,75 5,75" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="5" x2="50" y2="75" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute bottom-10 left-[-40px] w-48 h-48 opacity-10 select-none pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-accent">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
          <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          {/* Name Display */}
          <h2 className="font-mono text-lg font-bold tracking-widest text-brand-accent uppercase mt-2">
            {settings.profileName}
          </h2>

          {/* Main Huge Tagline */}
          <h1 className="font-display text-[10vw] sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase max-w-4xl font-normal text-brand-black mt-1">
            {settings.tagline}
          </h1>

          {/* Subheadline description */}
          <p className="font-sans text-xl sm:text-2xl text-brand-black font-semibold max-w-3xl leading-snug mt-2">
            {settings.subheadline}
          </p>

          {/* Supporting targeted industries filter segment */}
          <div className="border-l-4 border-brand-accent pl-4 sm:pl-6 max-w-2xl mt-2">
            <p className="font-sans text-base sm:text-lg text-brand-muted font-medium leading-relaxed">
              {settings.supportingLine}
            </p>
          </div>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 w-full sm:w-auto">
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-mono text-base uppercase font-bold border-4 border-brand-black brutalist-shadow-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-center"
            >
              Hire Me
            </a>
            <a
              href="#work"
              onClick={handleSeeWork}
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black font-mono text-base uppercase font-bold border-4 border-brand-black brutalist-shadow-lg hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_var(--color-brand-accent)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_var(--color-brand-accent)] transition-all duration-200 flex items-center justify-center gap-2 text-center"
            >
              See My Work <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>
        </motion.div>

        {/* Highlight Stats Panels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 sm:mt-24 w-full"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-4 border-brand-black p-6 bg-white brutalist-shadow flex flex-col justify-between group hover:translate-y-[-4px] transition-transform duration-200"
            >
              <div className="font-display text-4xl sm:text-5xl text-brand-accent tracking-tight select-all">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider font-bold text-brand-black mt-3 border-t border-brand-black/20 pt-2 flex items-center justify-between">
                <span>{stat.label}</span>
                <span className="text-brand-accent group-hover:scale-125 transition-transform">✦</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
