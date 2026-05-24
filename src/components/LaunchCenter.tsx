import React, { useState } from "react";
import { Sliders, CheckSquare, Palette, Edit3, Settings2, RefreshCw, ChevronRight, ChevronLeft, Check, Sparkles, ExternalLink } from "lucide-react";
import { PortfolioSettings, Testimonial } from "../types";

interface LaunchCenterProps {
  settings: PortfolioSettings;
  onUpdateSettings: (s: PortfolioSettings) => void;
  testimonials: Testimonial[];
  onUpdateTestimonials: (t: Testimonial[]) => void;
  onResetDefaults: () => void;
}

export const LaunchCenter: React.FC<LaunchCenterProps> = ({
  settings,
  onUpdateSettings,
  testimonials,
  onUpdateTestimonials,
  onResetDefaults,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"checklist" | "brand" | "about" | "testimonials">("checklist");

  // Local Checklist State
  const [completedItems, setCompletedItems] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true // Confirm email tested
  });

  const toggleChecklistItem = (id: number) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistItems = [
    { id: 1, text: "Supply brand visuals — colors, fonts, logo — from Google Stitch", task: "Stitch Theme Assets" },
    { id: 2, text: "Set professional photo URL in the About Me section below", task: "Munachi's Portrait Photo" },
    { id: 3, text: "Input client testimonials (quotes & client names) for the 3 businesses", task: "Quotes & Client Reviews" },
    { id: 4, text: "Verify Opara Motors, Omereugu Farms, and Zext Ventures metrics look accurate", task: "Review Case Studies" },
    { id: 5, text: "Update Instagram and LinkedIn profile URLs in the Footer", task: "Configure Social Media Linkage" },
    { id: 6, text: "Test the Hire Me buttons correctly open orjimunachi5@gmail.com on click", task: "Verify Mailto Integration" }
  ];

  const handleAccentChange = (color: string) => {
    // Dynamically change index.css --color-brand-accent theme variable in document element!
    document.documentElement.style.setProperty("--color-brand-accent", color);
    onUpdateSettings({ ...settings, accentColor: color });
  };

  // Testimonial helper updates
  const handleTestimonialChange = (index: number, field: keyof Testimonial, value: string) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateTestimonials(updated);
  };

  const currentProgress = Object.values(completedItems).filter(Boolean).length;
  const isFullyComplete = currentProgress === checklistItems.length;

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-brand-accent text-white font-mono text-xs uppercase font-extrabold px-5 py-3.5 border-4 border-brand-black brutalist-shadow hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center gap-2 select-none"
      >
        <Sliders className="w-4 h-4" />
        {isOpen ? "Close Launch Center" : "Munachi's Launch Center"}
        <span className="bg-white text-brand-black px-1.5 py-0.5 border border-brand-black text-[10px] tracking-tight">
          {currentProgress}/{checklistItems.length}
        </span>
      </button>

      {/* Sliding Control Drawer Panel */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-40 w-full sm:w-[460px] bg-white border-l-4 border-brand-black shadow-2xl flex flex-col justify-between select-none">
          {/* Drawer Header */}
          <div className="p-6 border-b-4 border-brand-black bg-brand-light-gray flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1.5 text-brand-accent font-mono text-xs uppercase font-extrabold">
                <Sparkles className="w-4 h-4 fill-brand-accent" /> Handoff control
              </div>
              <h2 className="font-display text-2xl uppercase tracking-tight text-brand-black mt-1">
                LAUNCH MONITOR
              </h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 px-2.5 border-2 border-brand-black font-bold font-mono text-sm bg-white hover:bg-brand-light-gray cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Quick-select Tabs Menu */}
          <div className="grid grid-cols-4 border-b-2 border-brand-black font-mono text-[10px] uppercase font-bold text-center">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`py-3 border-r-2 border-brand-black cursor-pointer ${
                activeTab === "checklist" ? "bg-brand-accent text-white" : "bg-white hover:bg-brand-light-gray"
              }`}
            >
              Checklist
            </button>
            <button
              onClick={() => setActiveTab("brand")}
              className={`py-3 border-r-2 border-brand-black cursor-pointer ${
                activeTab === "brand" ? "bg-brand-accent text-white" : "bg-white hover:bg-brand-light-gray"
              }`}
            >
              Branding
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`py-3 border-r-2 border-brand-black cursor-pointer ${
                activeTab === "about" ? "bg-brand-accent text-white" : "bg-white hover:bg-brand-light-gray"
              }`}
            >
              Bio & Info
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`py-3 cursor-pointer ${
                activeTab === "testimonials" ? "bg-brand-accent text-white" : "bg-white hover:bg-brand-light-gray"
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Drawer Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* TAB 1: PRE-LAUNCH CHECKLIST */}
            {activeTab === "checklist" && (
              <div className="space-y-4">
                <div className="bg-brand-light-gray p-4 border-2 border-brand-black">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs font-bold text-brand-black uppercase">
                      Handoff Progress
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-accent">
                      {Math.round((currentProgress / checklistItems.length) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 h-3 border border-brand-black p-[1px]">
                    <div
                      className="bg-brand-accent h-full transition-all duration-300"
                      style={{ width: `${(currentProgress / checklistItems.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-brand-muted font-bold">
                    Pre-Launch Actions Required
                  </h3>

                  {checklistItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`flex items-start gap-3 p-3 border-2 border-brand-black cursor-pointer transition-all ${
                        completedItems[item.id] ? "bg-green-50 border-green-600/60" : "bg-white hover:bg-brand-light-gray"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 border-2 border-brand-black flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          completedItems[item.id] ? "bg-green-600 border-green-700 text-white" : "bg-white"
                        }`}
                      >
                        {completedItems[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase font-semibold text-brand-accent block">
                          {item.task}
                        </span>
                        <p className={`font-sans text-xs font-semibold leading-normal mt-0.5 ${
                          completedItems[item.id] ? "line-through text-neutral-500" : "text-brand-black"
                        }`}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: BRAND STYLING & PALETTE */}
            {activeTab === "brand" && (
              <div className="space-y-5">
                <div>
                  <label className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider block mb-2">
                    1. Accent Brand Color
                  </label>
                  <p className="font-sans text-xs text-brand-muted leading-relaxed font-semibold mb-3">
                    Stitch visuals pending? Choose a classic editorial palette or sample any hex color:
                  </p>
                  
                  {/* Palette Presets list */}
                  <div className="grid grid-cols-5 gap-2.5 mb-4">
                    {[
                      { hex: "#a33800", name: "Terracotta" }, // Terracotta
                      { hex: "#d10074", name: "Crimson" }, // Crimson pink
                      { hex: "#003df5", name: "Cobalt" }, // Cobalt blue
                      { hex: "#008060", name: "Emerald" }, // Poison leaf green
                      { hex: "#6300a8", name: "Imperial" }, // Deep Purple
                    ].map((pal) => (
                      <button
                        key={pal.hex}
                        onClick={() => handleAccentChange(pal.hex)}
                        title={pal.name}
                        className={`aspect-square border-2 border-brand-black relative ${
                          settings.accentColor === pal.hex ? "scale-105 brutalist-shadow-sm ring-2 ring-offset-2 ring-brand-black" : "hover:scale-102"
                        } cursor-pointer`}
                        style={{ backgroundColor: pal.hex }}
                      >
                        {settings.accentColor === pal.hex && (
                          <span className="absolute inset-x-0 inset-y-0 m-auto text-white flex items-center justify-center font-bold text-xs font-sans">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Manual hex selection input */}
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={settings.accentColor}
                      onChange={(e) => handleAccentChange(e.target.value)}
                      className="w-12 h-10 border-2 border-brand-black cursor-pointer shrink-0"
                    />
                    <input
                      type="text"
                      value={settings.accentColor}
                      onChange={(e) => handleAccentChange(e.target.value)}
                      placeholder="#a33800"
                      className="flex-1 border-2 border-brand-black px-3 font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                <div className="border-t border-brand-black/10 pt-4 space-y-4">
                  <div>
                    <label className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider block mb-1">
                      2. Real email address (Hire Me Links)
                    </label>
                    <input
                      type="email"
                      value={settings.profileEmail}
                      onChange={(e) => onUpdateSettings({ ...settings, profileEmail: e.target.value })}
                      className="w-full border-2 border-brand-black p-2.5 font-sans text-xs font-bold bg-white"
                      placeholder="e.g. orjimunachi5@gmail.com"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider block mb-1">
                      3. Display Handoff Name
                    </label>
                    <input
                      type="text"
                      value={settings.profileName}
                      onChange={(e) => onUpdateSettings({ ...settings, profileName: e.target.value })}
                      className="w-full border-2 border-brand-black p-2.5 font-sans text-xs font-bold bg-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: BIO, LINKS, PROFILE PHOTO */}
            {activeTab === "about" && (
              <div className="space-y-4">
                <div>
                  <label className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider block mb-1">
                    Profile Photo URL
                  </label>
                  <p className="font-sans text-[11px] text-brand-muted font-semibold leading-relaxed mb-1.5">
                    Paste any direct image URL (e.g. Imgur, Cloudinary) to replace the "OM" geometric initials mesh.
                  </p>
                  <input
                    type="url"
                    value={settings.imageUrl}
                    onChange={(e) => onUpdateSettings({ ...settings, imageUrl: e.target.value })}
                    placeholder="e.g. https://i.imgur.com/your-photo.png"
                    className="w-full border-2 border-brand-black p-2.5 font-sans text-xs font-semibold bg-white"
                  />
                  {settings.imageUrl && (
                    <button
                      onClick={() => onUpdateSettings({ ...settings, imageUrl: "" })}
                      className="font-mono text-[10px] font-bold text-brand-accent mt-1.5 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      ✕ Clear image and reset to geom initials
                    </button>
                  )}
                </div>

                <div className="border-t border-brand-black/10 pt-4 space-y-4">
                  <h4 className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider">
                    Hero Section Copy
                  </h4>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-brand-muted font-bold block mb-1">
                      Main Tagline
                    </label>
                    <input
                      type="text"
                      value={settings.tagline}
                      onChange={(e) => onUpdateSettings({ ...settings, tagline: e.target.value })}
                      className="w-full border-2 border-brand-black p-2 bg-white font-sans text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-brand-muted font-bold block mb-1">
                      Sub-headline
                    </label>
                    <textarea
                      rows={2}
                      value={settings.subheadline}
                      onChange={(e) => onUpdateSettings({ ...settings, subheadline: e.target.value })}
                      className="w-full border-2 border-brand-black p-2 bg-white font-sans text-xs font-semibold leading-normal"
                    />
                  </div>
                </div>

                <div className="border-t border-brand-black/10 pt-4 space-y-4">
                  <h4 className="font-mono text-xs font-extrabold uppercase text-brand-muted tracking-wider">
                    Social Account Configuration (Footer)
                  </h4>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-brand-muted font-bold block mb-1">
                      Instagram Profile Link
                    </label>
                    <input
                      type="url"
                      value={settings.instagramUrl}
                      onChange={(e) => onUpdateSettings({ ...settings, instagramUrl: e.target.value })}
                      className="w-full border-2 border-brand-black p-2 bg-white font-mono text-xs"
                      placeholder="https://instagram.com/orji_munachi"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase text-brand-muted font-bold block mb-1">
                      LinkedIn Profile Link
                    </label>
                    <input
                      type="url"
                      value={settings.linkedinUrl}
                      onChange={(e) => onUpdateSettings({ ...settings, linkedinUrl: e.target.value })}
                      className="w-full border-2 border-brand-black p-2 bg-white font-mono text-xs"
                      placeholder="https://linkedin.com/in/orjimunachi"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CLIENTS & TESTIMONIALS */}
            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <p className="font-sans text-xs text-brand-muted leading-relaxed font-semibold">
                  Testimonial quotes and client names must be replaced before launching. Update each brand review block here:
                </p>

                {[
                  { brand: "Opara Motors", color: "text-blue-600" },
                  { brand: "Omereugu Farms", color: "text-green-600" },
                  { brand: "Zext Ventures", color: "text-purple-600" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-brand-light-gray p-4 border-2 border-brand-black space-y-3">
                    <span className="font-mono text-[10px] uppercase font-black text-brand-accent tracking-wider block">
                      Card 0{idx + 1} - {item.brand}
                    </span>

                    <div>
                      <label className="font-mono text-[9px] uppercase font-bold text-neutral-600 block mb-0.5">
                        Client Reviewer Name
                      </label>
                      <input
                        type="text"
                        value={testimonials[idx]?.clientName || ""}
                        onChange={(e) => handleTestimonialChange(idx, "clientName", e.target.value)}
                        placeholder="e.g. Chief Opara Kingsley"
                        className="w-full border-2 border-brand-black p-1.5 font-sans text-xs font-semibold bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase font-bold text-neutral-600 block mb-0.5">
                        Reviewer Position / Role
                      </label>
                      <input
                        type="text"
                        value={testimonials[idx]?.role || ""}
                        onChange={(e) => handleTestimonialChange(idx, "role", e.target.value)}
                        placeholder="e.g. Founder & CEO, Opara Group"
                        className="w-full border-2 border-brand-black p-1.5 font-sans text-xs font-medium bg-white"
                      />
                    </div>

                    <div>
                      <label className="font-mono text-[9px] uppercase font-bold text-neutral-600 block mb-0.5">
                        Testimonial Statement Quote
                      </label>
                      <textarea
                        rows={2}
                        value={testimonials[idx]?.quote || ""}
                        onChange={(e) => handleTestimonialChange(idx, "quote", e.target.value)}
                        placeholder="Paste client testimonial quote text..."
                        className="w-full border-2 border-brand-black p-1.5 font-sans text-xs font-medium bg-white leading-normal"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-6 border-t-4 border-brand-black bg-brand-light-gray space-y-3 select-none">
            <button
              onClick={onResetDefaults}
              className="w-full py-3 bg-white hover:bg-neutral-100 text-brand-black border-2 border-brand-black font-mono text-xs uppercase font-extrabold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Reset launch setup
            </button>
            <p className="font-sans text-[10px] text-brand-muted font-bold text-center">
              Made with Google AI Studio &bull; Handoff Version 1.0.0
            </p>
          </div>
        </div>
      )}
    </>
  );
};
