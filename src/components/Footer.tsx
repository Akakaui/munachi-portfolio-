import React from "react";
import { PortfolioSettings } from "../types";
import { MessageSquare, Linkedin, Send } from "lucide-react";

interface FooterProps {
  settings: PortfolioSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const currentYear = 2026; // Static 2026 as asked in the brief

  return (
    <footer className="bg-brand-black text-white/90 border-t-4 border-brand-accent py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        {/* Left segment */}
        <div className="flex flex-col gap-1.5 md:items-start items-center">
          <h3 className="font-display text-2xl uppercase tracking-wider text-white">
            {settings.profileName}
          </h3>
          <p className="font-mono text-xs uppercase tracking-widest text-[#7e7576] font-bold">
            Social Media Manager &bull; {currentYear}
          </p>
        </div>

        {/* Center segment: email link */}
        <div className="flex items-center gap-2 font-mono text-sm tracking-wider font-semibold hover:text-brand-accent transition-colors duration-200">
          <Send className="w-4 h-4 text-brand-accent" />
          <a href={`mailto:${settings.profileEmail}`} className="underline decoration-1 underline-offset-4 select-all">
            {settings.profileEmail}
          </a>
        </div>

        {/* Right segment: social handles placeholders */}
        <div className="flex gap-6 items-center">
          <a
            href={settings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs uppercase font-extrabold pb-1 border-b border-white hover:text-brand-accent hover:border-brand-accent transition-colors duration-200"
            aria-label="WhatsApp Chat"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={settings.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs uppercase font-extrabold pb-1 border-b border-white hover:text-brand-accent hover:border-brand-accent transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};
