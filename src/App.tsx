import { useState, useEffect } from "react";
import {
  defaultSettings,
  defaultServices,
  defaultSkillPillars,
  defaultTools,
  defaultCaseStudies,
  defaultTestimonials
} from "./data";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { SkillsTools } from "./components/SkillsTools";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LaunchCenter } from "./components/LaunchCenter";
import { PortfolioSettings, Testimonial } from "./types";

const LOCAL_STORAGE_SETTINGS_KEY = "orji_munachi_portfolio_settings_v1";
const LOCAL_STORAGE_TESTIMONIALS_KEY = "orji_munachi_portfolio_testimonials_v1";

export default function App() {
  // Initialize portfolio states from localStorage if available, fallback to defaults
  const [settings, setSettings] = useState<PortfolioSettings>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load settings from localStorage", e);
    }
    return defaultSettings;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_TESTIMONIALS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed to load testimonials from localStorage", e);
    }
    return defaultTestimonials;
  });

  // Keep localStorage sync modern and robust
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TESTIMONIALS_KEY, JSON.stringify(testimonials));
  }, [testimonials]);

  // Bind the current accent color variable to CSS dynamically
  useEffect(() => {
    document.documentElement.style.setProperty("--color-brand-accent", settings.accentColor);
  }, [settings.accentColor]);

  const handleUpdateSettings = (newSettings: PortfolioSettings) => {
    setSettings(newSettings);
  };

  const handleUpdateTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
  };

  const handleResetDefaults = () => {
    if (window.confirm("Are you sure you want to reset all custom live-edits back to default copywriting and styling?")) {
      setSettings(defaultSettings);
      setTestimonials(defaultTestimonials);
      localStorage.removeItem(LOCAL_STORAGE_SETTINGS_KEY);
      localStorage.removeItem(LOCAL_STORAGE_TESTIMONIALS_KEY);
      // reset dynamic document accent color property
      document.documentElement.style.setProperty("--color-brand-accent", defaultSettings.accentColor);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg relative flex flex-col font-sans select-text hover:cursor-default selection:bg-brand-accent selection:text-white selection:bg-opacity-90">
      
      {/* Sticky top-level custom menu navigation */}
      <Navigation settings={settings} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Section 1 - Hero Showcase */}
        <Hero settings={settings} />

        {/* Section 2 - Core Editorial About Biography */}
        <About settings={settings} />

        {/* Section 3 - Professional SMM Services and Outcomes */}
        <Services services={defaultServices} />

        {/* Section 4 - Modular Skill Panels and Genuine Brand Logostack */}
        <SkillsTools pillars={defaultSkillPillars} tools={defaultTools} />

        {/* Section 5 - Case Studies and Metric Deliverables */}
        <CaseStudies studies={defaultCaseStudies} />

        {/* Section 6 - Verified and Customizable Client Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Section 7 - Call to Action direct-mail formless widget */}
        <Contact settings={settings} />
      </main>

      {/* Structured Minimal Contact and Social Legal Footer */}
      <Footer settings={settings} />

      {/* Interactive Floating Handoff Launch Center Controls Panel */}
      <LaunchCenter
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        testimonials={testimonials}
        onUpdateTestimonials={handleUpdateTestimonials}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
