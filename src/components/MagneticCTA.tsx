import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

export const MagneticCTA: React.FC = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0,0,0)';
      inner.style.transform = 'translate3d(0,0,0)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <footer id="contact" className="relative py-28 md:py-36 bg-[#FAF9F6] border-t border-[#1E3A34]/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Giant Fluid Heading */}
        <div className="mb-16">
          <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-4">
            RESERVE YOUR APPOINTMENT / 05
          </div>
          <h2 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] tracking-[-0.03em] text-[#1E3A34]">
            Your smile&apos;s<br />
            <span className="italic font-light opacity-80">sanctuary.</span>
          </h2>
        </div>

        {/* Action Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-16 border-b border-[#1E3A34]/10">
          <div className="flex flex-wrap items-center gap-4">
            <a
              ref={buttonRef}
              href="tel:+19182997750"
              className="group relative inline-flex items-center gap-4 bg-[#1E3A34] text-[#FAF9F6] rounded-full pl-8 pr-3 h-[60px] font-sans text-[13px] tracking-widest uppercase transition-colors hover:bg-[#142723]"
            >
              <span ref={buttonInnerRef} className="inline-flex items-center gap-4">
                Call (918) 299-7750
                <span className="w-10 h-10 rounded-full bg-[#489987] text-[#FAF9F6] grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </span>
            </a>

            <a
              href="mailto:info@carefamilydentistry.com"
              className="inline-flex items-center gap-2 h-[60px] px-8 rounded-full border border-[#1E3A34]/20 font-sans text-[13px] tracking-widest uppercase text-[#1E3A34] hover:border-[#1E3A34] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#489987]" />
              Email Reception
            </a>
          </div>

          <div className="text-[13px] font-sans text-[#4F615D] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#489987]" />
            <span>Accepting all major dental plans & new family appointments</span>
          </div>
        </div>

        {/* Multi-Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 text-[13px] font-sans">
          {/* Clinic Location */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#1E3A34]/50 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#489987]" /> CLINIC LOCATION
            </div>
            <p className="font-medium text-[#1E3A34]">Care Family Dentistry</p>
            <p className="text-[#4F615D] mt-1">7810 East 121st St. S</p>
            <p className="text-[#4F615D]">Bixby, OK 74008</p>
            <p className="text-[#4F615D] text-[12px] mt-2 text-[#489987]">Serving Bixby, Broken Arrow & South Tulsa</p>
          </div>

          {/* Operating Hours */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#1E3A34]/50 mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#489987]" /> HOURS OF CARE
            </div>
            <p className="text-[#1E3A34] font-medium">Mon — Thu: 7:30 AM – 6:00 PM</p>
            <p className="text-[#1E3A34] font-medium mt-1">Friday: 7:30 AM – 5:30 PM</p>
            <p className="text-[#4F615D] mt-1">Saturday — Sunday: Closed</p>
          </div>

          {/* Direct Lines */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#1E3A34]/50 mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#489987]" /> DIRECT CONTACTS
            </div>
            <p className="text-[#1E3A34] font-medium">Primary: (918) 299-7750</p>
            <p className="text-[#4F615D] mt-1">Affiliated: (918) 254-8686</p>
            <p className="text-[#4F615D] mt-1">Email: info@carefamilydentistry.com</p>
          </div>

          {/* Clinical Leadership */}
          <div>
            <div className="text-[11px] font-mono tracking-widest uppercase text-[#1E3A34]/50 mb-3">
              DOCTORS IN PRACTICE
            </div>
            <p className="text-[#1E3A34] font-medium">Dr. Angie Nauman, DDS</p>
            <p className="text-[#1E3A34] font-medium mt-1">Dr. Rachel Standlee, DDS</p>
            <p className="text-[#1E3A34] font-medium mt-1">Dr. Meghan Sellmeyer, DDS</p>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-20 pt-8 border-t border-[#1E3A34]/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#4F615D] gap-4">
          <p>© {new Date().getFullYear()} Care Family Dentistry. All rights reserved.</p>
          <p className="font-mono text-[#1E3A34]/40">BESPOKE ARCHITECTURE — 240 NEURAL FRAMES / META SOTA</p>
        </div>
      </div>
    </footer>
  );
};
