import React from "react";
import { Instagram } from "lucide-react";
import { PortfolioSettings } from "../types";

interface ContactProps {
  settings: PortfolioSettings;
}

export const Contact: React.FC<ContactProps> = ({ settings }) => {
  return (
    <section
      id="contact"
      className="px-4 sm:px-6 lg:px-8 py-24 bg-brand-black text-white border-b-4 border-brand-black relative overflow-hidden select-none"
    >
      {/* Decorative brutalist background elements */}
      <div className="absolute right-[-60px] top-[-60px] w-40 h-40 border-4 border-brand-accent/20 rotate-45 pointer-events-none select-none" />
      <div className="absolute left-[-20px] bottom-[-20px] w-64 h-64 border-4 border-brand-accent/10 rounded-full pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        {/* Label */}
        <div className="bg-brand-accent text-white px-4 py-1 font-mono text-xs uppercase font-extrabold w-fit border border-brand-black brutalist-shadow-sm">
          Let's Work
        </div>

        {/* Big Bold Headline */}
        <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight leading-none text-white max-w-3xl">
          You've seen the work. You know what I do. Let's talk about what I can do for you.
        </h2>

        {/* Body Paragraph copy */}
        <p className="font-sans text-lg sm:text-xl text-white/80 font-medium max-w-2xl leading-relaxed">
          I take on a limited number of clients at a time so every brand I work with gets my full attention. If you are a physical business that is serious about social media, I want to hear from you.
        </p>

        {/* Redirection Direct CTA */}
        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-5 bg-brand-accent text-white font-mono text-lg uppercase font-bold border-4 border-white brutalist-shadow-lg hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 flex items-center justify-center gap-3"
          >
            Hire Me <Instagram className="w-5 h-5" />
          </a>

          {/* Subtitle direct email string label link */}
          <a
            href={`mailto:${settings.profileEmail}?subject=Project Inquiry`}
            className="font-mono text-sm font-semibold tracking-wider text-white/60 hover:text-brand-accent transition-colors underline decoration-brand-accent decoration-2 underline-offset-4 mt-2 select-all"
          >
            or email me directly at {settings.profileEmail}
          </a>
        </div>
      </div>
    </section>
  );
};
