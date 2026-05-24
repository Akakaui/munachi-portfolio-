import React from "react";
import { motion } from "motion/react";
import { PortfolioSettings } from "../types";

interface AboutProps {
  settings: PortfolioSettings;
}

export const About: React.FC<AboutProps> = ({ settings }) => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-light-gray border-b-4 border-brand-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Body copy and text content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-brand-accent text-white px-3 py-1 font-mono text-xs uppercase font-bold w-fit border border-brand-black brutalist-shadow-sm select-none">
            About Me
          </div>

          <h2 className="font-display text-4xl sm:text-5xl uppercase leading-tight text-brand-black font-normal">
            {settings.aboutHeadline}
          </h2>

          <div className="space-y-4 font-sans text-lg text-brand-black/90 leading-relaxed font-medium">
            {settings.aboutBodyParagraphs.map((para, idx) => (
              <p key={idx} className={idx === settings.aboutBodyParagraphs.length - 1 ? "font-bold text-xl text-brand-accent border-t-2 border-brand-black/10 pt-4 mt-2" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-10 py-4 bg-brand-black text-white hover:bg-brand-accent transition-all duration-300 font-mono text-sm uppercase font-bold text-center border-2 border-brand-black brutalist-shadow-accent hover:text-white"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="px-10 py-4 bg-transparent text-brand-black font-mono text-sm uppercase font-bold text-center border-2 border-brand-black brutalist-shadow-hover"
            >
              How I Can Help
            </a>
          </div>
        </div>

        {/* Right Side: Visual placeholder or profile image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] bg-white border-4 border-brand-black brutalist-shadow-lg overflow-hidden group">
            {settings.imageUrl ? (
              <img
                src={settings.imageUrl}
                alt={settings.profileName}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            ) : (
              // Pristine creative brutalist visual layout placeholder
              <div className="w-full h-full flex flex-col justify-between p-8 bg-brand-accent/5 select-none relative grain-overlay">
                {/* Vintage wireframe lines */}
                <div className="absolute inset-0 border-2 border-dashed border-brand-black/10 m-4 pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest border border-brand-black/30 px-2 py-0.5">
                    Handoff Slot
                  </span>
                  <span className="font-mono text-xs text-brand-muted font-bold">4:5 Aspect Ratio</span>
                </div>

                <div className="flex flex-col items-center justify-center py-12 z-10">
                  <h3 className="font-display text-8xl text-brand-black/10 group-hover:text-brand-accent/20 transition-colors tracking-tight select-none">
                    OM
                  </h3>
                  <div className="font-mono text-sm font-bold text-brand-black mt-2 text-center max-w-[200px]">
                    Munachi's Portrait Placeholder
                  </div>
                </div>

                <div className="z-10 text-center font-mono text-xs font-semibold text-brand-muted leading-tight border-t-2 border-dashed border-brand-black/20 pt-4 bg-white/50 backdrop-blur-sm p-3">
                  Upload custom photo URL in Munachi's Launch Center below
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
