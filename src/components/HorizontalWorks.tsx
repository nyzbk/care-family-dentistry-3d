import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CLINIC_EXPERIENCES = [
  {
    id: "01",
    title: "THE WELLNESS ATELIER",
    cat: "Private Operatory Suites",
    desc: "Acoustically isolated rooms featuring natural ash wood finishes, panoramic forest light, and ambient aromatherapy.",
    img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
    metric: "0% White Coat Stress"
  },
  {
    id: "02",
    title: "ZERO-ANXIETY SUITE",
    cat: "Gentle Sedation & Relaxation",
    desc: "Heated ergonomic memory-foam chairs, noise-canceling headsets, and customized oral or nitrous conscious sedation.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80&auto=format&fit=crop",
    metric: "100% Gentle Rating"
  },
  {
    id: "03",
    title: "DIGITAL 3D SCAN LAB",
    cat: "Impression-Free Technology",
    desc: "High-definition intraoral 3D scanning eliminates gag-inducing putty impressions, mapping your teeth with micron precision.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80&auto=format&fit=crop",
    metric: "Micron Accuracy"
  },
  {
    id: "04",
    title: "PEDIATRIC HARBOR",
    cat: "Gentle Children's Dentistry",
    desc: "Fun, patient-led appointments where kids learn dental health through curiosity, prizes, and zero fear.",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80&auto=format&fit=crop",
    metric: "Kids Love Visiting"
  }
];

export const HorizontalWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      const progressLine = progressLineRef.current;
      if (!container || !track) return;

      const rect = container.getBoundingClientRect();
      const scrollDist = container.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);

      const maxScroll = track.scrollWidth - window.innerWidth + 80;
      track.style.transform = `translate3d(${-progress * maxScroll}px, 0, 0)`;

      if (progressLine) {
        progressLine.style.width = `${progress * 100}%`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#FAF9F6] border-t border-[#1E3A34]/10">
      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between py-12">
        {/* Header */}
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-[12px] font-sans tracking-widest uppercase">
            <span className="text-[#489987] font-semibold">SANCTUARY ENVIRONMENTS / 02</span>
            <span className="w-12 h-px bg-[#1E3A34]/20 hidden md:block" />
            <span className="text-[#1E3A34]/60 hidden md:inline">Scroll to glide through clinic spaces</span>
          </div>
          <div className="text-[12px] font-mono text-[#1E3A34]/40">
            [ 01 — 04 SUITES ]
          </div>
        </div>

        {/* Horizontal Scrub Track */}
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 md:px-10 will-change-transform py-6"
          style={{ transform: 'translate3d(0,0,0)' }}
        >
          {CLINIC_EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="group relative shrink-0 w-[85vw] md:w-[62vw] lg:w-[48vw] rounded-[24px] bg-[#FFFFFF] border border-[#1E3A34]/10 p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#489987]/30"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#1E3A34]/5 mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-medium text-[#1E3A34]">
                    SUITE {item.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1E3A34]/80 backdrop-blur-md text-[11px] font-sans font-medium text-white">
                    {item.metric}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-sans tracking-widest uppercase text-[#489987] font-semibold">
                    {item.cat}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#1E3A34]/20 grid place-items-center group-hover:bg-[#1E3A34] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-[28px] md:text-[34px] leading-tight text-[#1E3A34]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-[#4F615D] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Invitation Card */}
          <div className="shrink-0 w-[85vw] md:w-[32vw] rounded-[24px] border border-dashed border-[#1E3A34]/20 p-8 md:p-10 flex flex-col justify-between bg-[#FAF9F6]">
            <div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#489987] font-semibold">
                NEW PATIENT EXPERIENCE
              </span>
              <h3 className="font-serif text-[32px] leading-tight text-[#1E3A34] mt-6">
                Tour our sanctuary before your visit.
              </h3>
              <p className="mt-4 text-[14px] text-[#4F615D] leading-relaxed">
                We invite new families to stop by, meet Dr. Nauman and the team, and see why our patients never feel anxious again.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-between w-full h-[52px] px-6 rounded-full bg-[#1E3A34] text-white text-[12px] font-sans tracking-widest uppercase hover:bg-[#142723] transition-colors mt-8"
            >
              <span>Book Family Visit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer Progress Scrub Bar */}
        <div className="mx-auto max-w-[1440px] w-full px-6 md:px-10 shrink-0">
          <div className="h-1 bg-[#1E3A34]/10 w-full rounded-full overflow-hidden relative">
            <div
              ref={progressLineRef}
              className="absolute inset-y-0 left-0 bg-[#489987] rounded-full transition-all duration-75"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
