import React from 'react';

const MARQUEE_ITEMS = [
  "CARE FAMILY DENTISTRY",
  "GENTLE CLINICAL MASTERY",
  "BIXBY OKLAHOMA",
  "580+ FIVE-STAR RECOMMENDATIONS",
  "ANXIETY-FREE SEDATION",
  "DR. ANGIE NAUMAN",
  "DR. RACHEL STANDLEE",
  "DR. MEGHAN SELLMEYER",
  "SAME-DAY RESTORATIONS"
];

export const KineticMarquee: React.FC = () => {
  return (
    <div className="relative py-6 md:py-8 bg-[#1E3A34] text-[#FAF9F6] border-y border-[#1E3A34]/20 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }).flatMap((_, loopIdx) =>
          MARQUEE_ITEMS.map((item, idx) => (
            <div key={`${loopIdx}-${idx}`} className="flex items-center gap-8 px-4 shrink-0">
              <span className="font-serif text-[20px] md:text-[28px] tracking-tight uppercase">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#489987] shadow-[0_0_12px_#489987] shrink-0" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
