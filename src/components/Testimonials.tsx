import React from "react";
import { Quote, AlertCircle, Edit, Info } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  // We can maps default initials for each testimonial card based on its index
  const initialsMap = ["OM", "OF", "ZV"];
  const brandTags = ["Opara Motors", "Omereugu Farms", "Zext Ventures"];

  return (
    <section
      id="testimonials"
      className="px-4 sm:px-6 lg:px-8 py-20 bg-brand-light-gray border-b-4 border-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="bg-brand-accent text-white px-3 py-1 font-mono text-xs uppercase font-bold w-fit border border-brand-black brutalist-shadow-sm select-none">
            What Clients Say
          </div>
          <h2 className="font-display text-4xl sm:text-5xl uppercase text-brand-black font-normal">
            Don't take my word for it.
          </h2>
          <p className="font-sans text-lg text-brand-muted font-semibold mt-1">
            Feedback from real physical brand owners who trust my work and see the results.
          </p>
        </div>

        {/* Testimonials 3 columns grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => {
            const hasQuote = test.quote && test.quote.trim().length > 0;
            const hasClientName = test.clientName && test.clientName.trim().length > 0;
            const hasRole = test.role && test.role.trim().length > 0;

            const initials = hasClientName
              ? test.clientName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)
              : initialsMap[idx];

            return (
              <div
                key={test.id}
                className="bg-white border-4 border-brand-black p-8 brutalist-shadow relative flex flex-col justify-between min-h-[340px]"
              >
                {/* Huge quotation mark background accent */}
                <Quote className="absolute right-6 top-6 w-16 h-16 text-brand-accent/5 fill-brand-accent/5 rotate-180 pointer-events-none select-none" />

                <div>
                  {/* Indicator badging */}
                  <div className="flex items-center justify-between border-b pb-4 mb-6 border-brand-black/10 select-none">
                    <span className="font-mono text-xs font-bold text-brand-muted uppercase">
                      Client Review
                    </span>
                    <span className="font-mono text-[10px] uppercase font-black text-brand-accent px-2 py-0.5 bg-brand-light-gray border border-brand-black/30">
                      {brandTags[idx]}
                    </span>
                  </div>

                  {/* Quote text display */}
                  {hasQuote ? (
                    <p className="font-sans text-base sm:text-lg italic font-medium text-brand-black/90 leading-relaxed mb-8">
                      "{test.quote}"
                    </p>
                  ) : (
                    // Outstanding placeholder indicator to help client know it's a editable slot!
                    <div className="bg-brand-accent/5 border-2 border-dashed border-brand-accent/30 p-6 rounded-md mb-8">
                      <div className="flex items-start gap-2.5 text-brand-accent">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-mono text-xs font-extrabold uppercase tracking-wider">
                            Testimonial Placeholder
                          </h4>
                          <p className="font-sans text-xs font-medium text-brand-muted mt-1 leading-normal">
                            No quote entered yet. Munachi can update client feedback for {brandTags[idx]} directly in the codebase.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Client info footer row */}
                <div className="flex items-center gap-4 pt-4 border-t border-brand-black/10">
                  {/* Avatar bubble with fallback initials */}
                  <div className="w-12 h-12 rounded-full border-2 border-brand-black flex items-center justify-center font-display bg-brand-light-gray text-base text-brand-black select-none font-normal shrink-0">
                    {initials}
                  </div>

                  <div className="overflow-hidden">
                    {hasClientName ? (
                      <div className="font-mono text-sm font-bold text-brand-black uppercase truncate">
                        {test.clientName}
                      </div>
                    ) : (
                      <div className="font-mono text-xs font-black text-brand-accent flex items-center gap-1">
                        <Edit className="w-3.5 h-3.5" /> Pending Client Name
                      </div>
                    )}

                    {hasRole ? (
                      <div className="font-sans text-xs font-semibold text-brand-muted truncate">
                        {test.role}
                      </div>
                    ) : (
                      <div className="font-sans text-[10px] font-medium text-brand-muted italic uppercase select-none">
                        Owner / Manager, {brandTags[idx]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
