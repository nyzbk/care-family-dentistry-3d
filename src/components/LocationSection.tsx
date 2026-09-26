import React from 'react';
import { MapPin, Phone, Clock, ShieldCheck, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#f6f1ea] text-[#2c2b29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Practice Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#eee3d5] text-[#c06c52] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bixby &amp; South Tulsa Headquarters</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              A Warm Welcome <br />
              <span className="italic font-normal text-[#c06c52]">at 121st &amp; Memorial</span>
            </h2>

            <p className="text-stone-600 text-base leading-relaxed">
              Conveniently positioned on East 121st Street with private, ground-level parking right outside our front entrance. Zero stairs, easy accessibility for strollers and wheelchairs, and sunlit treatment suites.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#eee3d5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f6f1ea] text-[#c06c52] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-stone-500 block">Physical Address</span>
                  <p className="text-sm font-semibold text-stone-800">
                    7810 East 121st St S, Bixby, OK 74008
                  </p>
                  <span className="text-xs text-stone-500">Serving Bixby, South Tulsa, Broken Arrow &amp; Jenks</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#eee3d5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#e1ede6] text-[#3f6652] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-stone-500 block">Patient Care Hours</span>
                  <div className="text-sm font-semibold text-stone-800 space-y-0.5">
                    <p>Monday – Friday: 7:30 AM – 6:00 PM</p>
                    <p className="text-xs text-[#3f6652]">Early morning &amp; evening slots for busy working families</p>
                  </div>
                </div>
              </div>

              {/* Phone Concierge */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#eee3d5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#f6f1ea] text-[#c06c52] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-stone-500 block">Direct Concierge &amp; Emergencies</span>
                  <a href="tel:9182997750" className="text-sm font-bold text-[#c06c52] hover:underline">
                    (918) 299-7750
                  </a>
                  <p className="text-xs text-stone-500">Same-day relief for dental emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Visual Map & Directions */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#eee3d5] shadow-xl">
            <div className="rounded-2xl overflow-hidden relative border border-[#eee3d5] bg-stone-100 h-[340px] flex flex-col justify-between p-6">
              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow text-xs font-semibold text-stone-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Bixby Sanctuary Live Navigation</span>
                </div>
                <span className="text-xs font-bold text-[#c06c52] bg-white/95 px-3 py-1 rounded-full shadow">
                  7810 E 121st St S
                </span>
              </div>

              {/* Graphical Map Representation */}
              <div className="my-auto text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-[#c06c52] text-white flex items-center justify-center mx-auto shadow-xl ring-8 ring-[#c06c52]/20">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-stone-900">
                  Care Family Dentistry
                </h4>
                <p className="text-xs text-stone-600 max-w-xs mx-auto">
                  Intersection of E 121st St S &amp; S Memorial Dr, Bixby OK
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">Easy ground floor parking</span>
                <a
                  href="https://maps.google.com/?q=7810+East+121st+St+S,+Bixby,+OK+74008"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c06c52] hover:bg-[#ab593f] text-white text-xs font-semibold shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Insurance & Financial Peace of Mind */}
            <div className="mt-6 pt-6 border-t border-[#eee3d5] grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <ShieldCheck className="w-4 h-4 text-[#3f6652]" />
                <span>Most PPO Insurances Accepted</span>
              </div>
              <div className="flex items-center gap-2 text-stone-700">
                <ShieldCheck className="w-4 h-4 text-[#3f6652]" />
                <span>Flexible 0% In-House Financing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
