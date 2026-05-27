import React, { useState, useEffect } from "react";
import { Car, Leaf, Building, Sparkles, X, ChevronRight, Check } from "lucide-react";
import { CaseStudy, PortfolioSettings } from "../types";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  car: Car,
  leaf: Leaf,
  building: Building
};

// Custom animated counter hook / component to count numbers from 0
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    // Extract digit characters
    const numStr = value.replace(/[^0-9]/g, "");
    const target = parseInt(numStr, 10);

    if (isNaN(target)) {
      setDisplayVal(value);
      return;
    }

    // Capture suffix (like '+' or '%') and check if original had commas
    const suffix = value.replace(/[0-9,]/g, "");
    const hasCommas = value.includes(",");
    
    const startTime = performance.now();
    const duration = 1000; // 1 second animation duration

    let frameId: number;
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic curve
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * target);

      const formatted = hasCommas 
        ? current.toLocaleString("en-US") 
        : current.toString();

      setDisplayVal(`${formatted}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayVal(value);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <span>{displayVal}</span>;
};

interface CaseStudiesProps {
  studies: CaseStudy[];
  settings: PortfolioSettings;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ studies, settings }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  // Disable body scroll when drawer is open
  useEffect(() => {
    if (selectedStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedStudy]);

  const SelectedIcon = selectedStudy ? IconMap[selectedStudy.iconName] || SparklingCaseIcon : null;

  return (
    <section
      id="work"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-bg border-b-4 border-brand-black"
    >
      {/* Full-screen magazine split animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mag-rise {
          0%   { transform: translateY(100vh); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes mag-left-in {
          0%   { opacity: 0; transform: translateX(-32px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes mag-right-in {
          0%   { opacity: 0; transform: translateX(32px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .mag-overlay {
          animation: mag-rise 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .mag-left-panel {
          animation: mag-left-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
        }
        .mag-right-panel {
          animation: mag-right-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .mag-ticker {
          display: flex;
          white-space: nowrap;
          animation: marquee-ticker 18s linear infinite;
        }
        @keyframes marquee-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}} />
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="bg-brand-accent text-white px-3 py-1 font-mono text-xs uppercase font-bold w-fit border border-brand-black brutalist-shadow-sm select-none">
            My Work
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-black font-normal">
            Real businesses. Real results.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-muted font-semibold mt-1">
            Every brand I have worked with sells something physical. Click on any case study card below to inspect the deep-dive strategy and proof of work.
          </p>
        </div>

        {/* Case Studies Container: 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {studies.map((study) => {
            const IconComp = IconMap[study.iconName] || SparklingCaseIcon;

            return (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="bg-white border-4 border-brand-black brutalist-shadow flex flex-col justify-between overflow-hidden hover:translate-y-[-6px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer group"
              >
                {/* Industry Accent Frame Header */}
                <div className="border-b-4 border-brand-black p-6 bg-brand-light-gray flex items-center justify-between relative overflow-hidden select-none">
                  <div className="flex items-center gap-3 z-10">
                    <div className="w-10 h-10 bg-white border-2 border-brand-black flex items-center justify-center text-brand-accent transition-colors duration-200 group-hover:bg-brand-accent group-hover:text-white">
                      <IconComp className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase font-extrabold text-brand-accent">
                        {study.tag}
                      </span>
                      <h4 className="font-display text-lg uppercase text-brand-black leading-tight">
                        {study.title}
                      </h4>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-brand-muted z-10">
                    SMM Case 0{study.id[1] || 1}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-5 flex-grow">
                  {/* Services Delivered Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.services.map((srv) => (
                      <span
                        key={srv}
                        className="font-mono text-[10px] uppercase font-bold text-brand-black bg-brand-gray-card px-2 py-0.5 border border-brand-black/30"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  {/* Headline */}
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-black leading-snug group-hover:text-brand-accent transition-colors duration-200">
                    "{study.headline}"
                  </h3>

                  {/* Short excerpt description */}
                  <p className="font-sans text-sm text-brand-black/80 font-medium leading-relaxed line-clamp-4 border-l-2 border-brand-accent pl-3">
                    {study.body.split('\n')[0]}
                  </p>
                </div>

                {/* Inspect Strategy Banner Callout */}
                <div className="px-6 py-3 bg-brand-light-gray border-t-2 border-brand-black flex items-center justify-between font-mono text-xs uppercase font-extrabold text-brand-black group-hover:bg-brand-accent group-hover:text-white transition-colors duration-200">
                  <span>Inspect deep strategy</span>
                  <ChevronRight className="w-4 h-4" />
                </div>

                {/* Stat Metric Grid (2x2 Box) */}
                <div className="border-t-4 border-brand-black grid grid-cols-2 bg-brand-black">
                  {study.metrics.map((metric, metricIdx) => (
                    <div
                      key={metric.label}
                      className={`p-4 text-center bg-white border-brand-black flex flex-col justify-center items-center ${
                        metricIdx % 2 === 0 ? "border-r-2" : ""
                      } ${metricIdx < 2 ? "border-b-2" : ""}`}
                    >
                      <span className="font-display text-2xl sm:text-3xl text-brand-accent font-bold">
                        <AnimatedCounter value={metric.value} />
                      </span>
                      <span className="font-mono text-[10px] uppercase font-extrabold text-brand-black mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          FULL-SCREEN MAGAZINE SPLIT TAKEOVER
      ═══════════════════════════════════════════════════════ */}
      {selectedStudy && (
        <div className="fixed inset-0 z-[100] mag-overlay flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-brand-bg select-text">

          {/* Mobile-only high-visibility floating close button */}
          <button
            onClick={() => setSelectedStudy(null)}
            aria-label="Close"
            className="md:hidden fixed top-4 right-4 z-[110] w-10 h-10 bg-brand-black border-2 border-brand-black flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-200 cursor-pointer brutalist-shadow-sm"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* ── LEFT PANEL: Accent-coloured hero identity ── */}
          <div
            className="mag-left-panel relative flex flex-col justify-between overflow-hidden w-full md:w-[42%] h-auto md:h-full flex-shrink-0 border-b-4 md:border-b-0 border-brand-black"
            style={{ background: "var(--color-brand-accent, #a33800)" }}
          >
            {/* Diagonal stripe texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* Top bar: tag + close button */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-4 border-b-4 border-black/20">
              <span className="font-mono text-[10px] uppercase font-extrabold text-white/60 tracking-[0.18em]">
                {selectedStudy.tag} · Deep Strategy
              </span>
              {/* Desktop close button */}
              <button
                onClick={() => setSelectedStudy(null)}
                aria-label="Close"
                className="hidden md:flex w-10 h-10 bg-white/10 border-2 border-white/30 items-center justify-center text-white hover:bg-white hover:text-brand-accent transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Hero body */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 py-10 sm:py-8 gap-6 select-none">
              {/* Icon */}
              {SelectedIcon && (
                <div className="w-16 h-16 bg-white/10 border-2 border-white/30 flex items-center justify-center text-white">
                  <SelectedIcon className="w-8 h-8 stroke-[2]" />
                </div>
              )}

              {/* Company title */}
              <div>
                <p className="font-mono text-xs uppercase font-bold text-white/50 mb-1 tracking-widest">
                  {selectedStudy.tag}
                </p>
                <h2 className="font-display text-4xl sm:text-5xl uppercase text-white leading-[0.95] tracking-tight">
                  {selectedStudy.title}
                </h2>
              </div>

              {/* Pull-quote headline */}
              <blockquote className="font-sans text-base sm:text-lg text-white/80 font-semibold leading-snug border-l-4 border-white/30 pl-4 italic">
                "{selectedStudy.headline}"
              </blockquote>

              {/* Hero metric — top metric only, massive */}
              {selectedStudy.metrics[0] && (
                <div className="mt-2">
                  <div className="font-display text-6xl sm:text-7xl text-white font-black leading-none tracking-tight">
                    <AnimatedCounter value={selectedStudy.metrics[0].value} />
                  </div>
                  <div className="font-mono text-[10px] uppercase font-extrabold text-white/50 mt-1 tracking-widest">
                    {selectedStudy.metrics[0].label}
                  </div>
                </div>
              )}
            </div>

            {/* Scrolling ticker at bottom */}
            <div className="relative z-10 border-t-2 border-white/20 py-2 overflow-hidden select-none">
              <div className="mag-ticker">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="font-mono text-[10px] font-extrabold uppercase text-white/40 tracking-[0.2em] pr-8">
                    {selectedStudy.services.join(" ✦ ")} ✦ &nbsp;
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL: Scrollable deep-dive content ── */}
          <div className="mag-right-panel w-full md:flex-1 bg-brand-bg flex flex-col md:overflow-hidden border-t-4 md:border-t-0 md:border-l-4 border-brand-black">

            {/* Right sticky header */}
            <div className="border-b-4 border-brand-black bg-brand-light-gray px-6 py-4 flex items-center justify-between select-none flex-shrink-0">
              <span className="font-mono text-xs uppercase font-extrabold text-brand-black tracking-widest">
                Case Study Breakdown
              </span>
              <div className="flex gap-1.5 flex-wrap">
                {selectedStudy.services.map((srv) => (
                  <span
                    key={srv}
                    className="font-mono text-[9px] uppercase font-bold text-brand-black bg-white px-2 py-0.5 border border-brand-black/40"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 md:overflow-y-auto overflow-visible selection:bg-brand-accent selection:text-white">
              <div className="px-6 sm:px-10 py-10 space-y-10 max-w-2xl">

                {/* Challenge */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] uppercase font-extrabold text-brand-accent tracking-widest">
                    01 — The Business Challenge
                  </h4>
                  <p className="font-sans text-base text-brand-black/90 leading-relaxed font-medium">
                    {selectedStudy.challenge}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-brand-black/10" />

                {/* Strategy */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase font-extrabold text-brand-accent tracking-widest">
                    02 — The Custom Content Strategy
                  </h4>
                  <div className="space-y-4">
                    {selectedStudy.strategy.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className="font-mono text-xs font-extrabold text-white bg-brand-black px-2 py-0.5 select-none flex-shrink-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <p className="font-sans text-sm text-brand-black/90 font-semibold leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-brand-black/10" />

                {/* Remaining metrics grid */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase font-extrabold text-brand-accent tracking-widest">
                    03 — Performance Results
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="border-2 border-brand-black bg-white p-4 text-center">
                        <div className="font-display text-3xl text-brand-accent font-black tracking-tight">
                          <AnimatedCounter value={metric.value} />
                        </div>
                        <div className="font-mono text-[9px] uppercase font-extrabold text-brand-black mt-1">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-brand-black/10" />

                {/* Proof of work */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase font-extrabold text-brand-accent tracking-widest">
                    04 — Proof of Work
                  </h4>
                  <div className="bg-white border-2 border-brand-black divide-y-2 divide-brand-black/10">
                    {selectedStudy.breakdown.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4">
                        <div className="w-4 h-4 bg-brand-accent text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-extrabold text-brand-black block uppercase">
                            {item.label}
                          </span>
                          <span className="font-sans text-xs text-brand-muted font-semibold leading-relaxed">
                            {item.details}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right sticky CTA footer */}
            <div className="border-t-4 border-brand-black bg-brand-light-gray px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 flex-shrink-0 select-none">
              <div>
                <p className="font-display text-xs uppercase text-brand-black font-extrabold">
                  Want results like these?
                </p>
                <p className="font-sans text-xs text-brand-muted font-medium mt-0.5">
                  Let's replicate this for your business.
                </p>
              </div>
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedStudy(null)}
                className="px-6 py-3 bg-brand-accent text-white font-mono text-xs uppercase font-extrabold border-2 border-brand-black brutalist-shadow-sm hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer text-center w-full sm:w-auto"
              >
                Hire Me →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Fallback visual icon
const SparklingCaseIcon = () => (
  <div className="text-brand-accent">
    <Sparkles className="w-5 h-5" />
  </div>
);
