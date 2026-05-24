import React, { useState } from "react";
import { Compass, Instagram, PenTool, Megaphone, TrendingUp, MessageSquare, ChevronDown } from "lucide-react";
import { Service } from "../types";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Instagram,
  PenTool,
  Megaphone,
  TrendingUp,
  MessageCircle: MessageSquare
};

const DeliverablesMap: Record<string, string[]> = {
  s1: ["Competitor Audits", "Audience Profiling", "Content Calendars", "Brand Voice Definition"],
  s2: ["Short-Form Video", "Carousel Design", "High-End Graphics", "Caption Writing"],
  s3: ["Video Scripts", "Ad Copywriting", "High-Converting Captions", "Campaign Messaging"],
  s4: ["Campaign Architecture", "Audience Targeting", "Budget Optimization", "A/B Testing"],
  s5: ["Monthly Performance Reports", "ROI Tracking", "Competitor Benchmarking", "Conversion Insights"],
  s6: ["Comment Monitoring", "DM Engagement", "Community Building", "Reputation Management"]
};

interface ServicesProps {
  services: Service[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section
      id="services"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-bg border-b-4 border-brand-black"
    >
      {/* Staggered deliverable animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes deliverable-in {
          0%   { opacity: 0; transform: translateX(-12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .deliverable-item {
          opacity: 0;
          animation: deliverable-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes panel-open {
          0%   { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .panel-open {
          animation: panel-open 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="bg-brand-accent text-white px-3 py-1 font-mono text-xs uppercase font-bold w-fit border border-brand-black brutalist-shadow-sm select-none">
            What I Do
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-black font-normal">
            Everything your brand needs to win on social media. Nothing you don't.
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-muted font-semibold mt-1">
            I offer six core services. Click any card to see what's included — most clients start with two or three and add the rest once they see results.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = IconMap[service.iconName] || MessageSquare;
            const isOpen = openId === service.id;
            const deliverables = DeliverablesMap[service.id] || [];

            return (
              <div
                key={service.id}
                onClick={() => toggle(service.id)}
                className={`relative bg-white border-4 cursor-pointer select-none transition-all duration-300 group ${
                  isOpen
                    ? "border-brand-accent shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                    : "border-brand-black brutalist-shadow hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {/* Card Header — always visible */}
                <div className="p-6 sm:p-8 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Icon box */}
                    <div
                      className={`w-12 h-12 border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-accent border-brand-black text-white"
                          : "bg-brand-light-gray border-brand-black text-brand-accent group-hover:bg-brand-accent group-hover:text-white"
                      }`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-display text-xl uppercase tracking-tight leading-tight transition-colors duration-200 ${
                          isOpen ? "text-brand-accent" : "text-brand-black"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`font-sans text-sm text-brand-black/75 font-medium leading-relaxed mt-2 transition-all duration-300 ${
                          isOpen ? "line-clamp-2" : "line-clamp-3"
                        }`}
                      >
                        {service.copy}
                      </p>
                    </div>
                  </div>

                  {/* Chevron toggle indicator */}
                  <div
                    className={`w-8 h-8 border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-1 ${
                      isOpen
                        ? "bg-brand-accent border-brand-black text-white rotate-180"
                        : "bg-white border-brand-black/30 text-brand-black/40 group-hover:border-brand-accent group-hover:text-brand-accent"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Expandable Deliverables Panel */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 panel-open border-t-2 border-brand-accent/20">
                    <p className="font-mono text-[9px] uppercase font-extrabold text-brand-accent tracking-[0.2em] pt-4 pb-3">
                      Core Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="deliverable-item flex items-center gap-3"
                          style={{ animationDelay: `${idx * 60}ms` }}
                        >
                          <span className="w-5 h-5 bg-brand-accent text-white flex items-center justify-center text-[10px] font-black border border-brand-black flex-shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-sans text-sm font-semibold text-brand-black">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-4 border-t border-brand-black/10 font-mono text-[9px] uppercase tracking-widest font-extrabold text-brand-muted flex items-center justify-between">
                      <span>Tactile Workflows</span>
                      <span className="text-brand-accent">✦</span>
                    </div>
                  </div>
                )}

                {/* Bottom hint strip — visible when closed */}
                {!isOpen && (
                  <div className="px-6 sm:px-8 py-3 border-t-2 border-brand-black/10 flex items-center justify-between font-mono text-[9px] uppercase font-extrabold text-brand-black/40 group-hover:text-brand-accent group-hover:border-brand-accent/30 transition-colors duration-200">
                    <span>Click to see deliverables</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
