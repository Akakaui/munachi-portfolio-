import React from "react";
import { Car, Leaf, Building, Sparkles } from "lucide-react";
import { CaseStudy } from "../types";

const IconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  car: Car,
  leaf: Leaf,
  building: Building
};

interface CaseStudiesProps {
  studies: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ studies }) => {
  return (
    <section
      id="work"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-bg border-b-4 border-brand-black"
    >
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
            Every brand I have worked with sells something physical. Here is what happened when they trusted me with their social media.
          </p>
        </div>

        {/* Case Studies Container: 3 Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {studies.map((study) => {
            const IconComp = IconMap[study.iconName] || SparklingCaseIcon;

            return (
              <div
                key={study.id}
                className="bg-white border-4 border-brand-black brutalist-shadow flex flex-col justify-between overflow-hidden hover:translate-y-[-4px] transition-transform duration-300"
              >
                {/* Industry Accent Frame Header */}
                <div className="border-b-4 border-brand-black p-6 bg-brand-light-gray flex items-center justify-between relative overflow-hidden select-none">
                  <div className="flex items-center gap-3 z-10">
                    <div className="w-10 h-10 bg-white border-2 border-brand-black flex items-center justify-center text-brand-accent">
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

                  {/* Clean design flair */}
                  <span className="font-mono text-xs font-bold text-brand-muted z-10">
                    SMM Case 0{study.id[1] || 1}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-5">
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
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-black leading-snug">
                    "{study.headline}"
                  </h3>

                  {/* Body Text */}
                  <p className="font-sans text-sm text-brand-black/80 font-medium leading-relaxed whitespace-pre-line border-l-2 border-brand-accent pl-3">
                    {study.body}
                  </p>
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
                      <span className="font-display text-2xl sm:text-3xl text-brand-accent select-all">
                        {metric.value}
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
    </section>
  );
};

// Fallback visual icon
const SparklingCaseIcon = () => (
  <div className="text-brand-accent">
    <Sparkles className="w-5 h-5" />
  </div>
);
