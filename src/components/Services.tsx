import React from "react";
import { Compass, Instagram, PenTool, Megaphone, TrendingUp, MessageSquare } from "lucide-react";
import { Service } from "../types";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Instagram,
  PenTool,
  Megaphone,
  TrendingUp,
  MessageCircle: MessageSquare
};

interface ServicesProps {
  services: Service[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section
      id="services"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-bg border-b-4 border-brand-black"
    >
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
            I offer six core services. Most clients start with two or three and add the rest once they see results.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = IconMap[service.iconName] || MessageSquare;

            return (
              <div
                key={service.id}
                className="bg-white p-8 border-4 border-brand-black brutalist-shadow-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-light-gray border-2 border-brand-black flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-2xl uppercase text-brand-black tracking-tight mb-4 group-hover:text-brand-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base text-brand-black/80 font-medium leading-relaxed">
                    {service.copy}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t-2 border-dashed border-brand-black/10 flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-brand-accent uppercase tracking-wider">
                    Full Deliverables
                  </span>
                  <span className="text-xl font-bold group-hover:translate-x-1 duration-200 transition-transform">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
