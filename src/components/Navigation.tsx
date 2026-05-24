import React, { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { PortfolioSettings } from "../types";

interface NavigationProps {
  settings: PortfolioSettings;
}

export const Navigation: React.FC<NavigationProps> = ({ settings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { id: "nav-skills-link", label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const mailLink = `mailto:${settings.profileEmail}?subject=Inquiry from Portfolio`;

  return (
    <header className="sticky top-0 z-40 bg-brand-bg/95 border-b-2 border-brand-black backdrop-blur-md select-none">
      {/* Inject custom menu animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes menu-slide-down {
          0%   { opacity: 0; transform: translateY(-16px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-menu-slide {
          animation: menu-slide-down 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes link-slide-in {
          0%   { opacity: 0; transform: translateX(-12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .menu-link-item {
          opacity: 0;
          animation: link-slide-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="font-display text-2xl sm:text-3xl tracking-tighter hover:text-brand-accent transition-colors duration-200"
            >
              {settings.profileName}
            </a>
          </div>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={link.id}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-mono text-sm tracking-wider uppercase font-medium hover:text-brand-accent transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center">
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white px-6 py-2.5 font-mono text-sm uppercase font-semibold border-2 border-brand-black brutalist-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border-2 border-brand-black bg-brand-light-gray brutalist-shadow-sm flex items-center justify-center cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-brand-black bg-brand-bg animate-menu-slide">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="menu-link-item block px-3 py-3 border-2 border-brand-black font-mono text-base uppercase font-semibold brutalist-shadow-sm hover:bg-brand-light-gray transition-all"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={settings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link-item block w-full text-center px-4 py-4 bg-brand-accent text-white border-2 border-brand-black font-mono text-lg uppercase font-bold hover:bg-brand-accent/90"
              style={{ animationDelay: `${navLinks.length * 40}ms` }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
