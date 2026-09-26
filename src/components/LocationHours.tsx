import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ShieldCheck, Calendar } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("7810 E 121st St S, Bixby, OK 74008");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-cf-alabaster border-t border-cf-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-3 font-body">
            South Tulsa &amp; Bixby Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
            Convenient care right along East 121st Street.
          </h2>
          <p className="mt-4 text-lg text-cf-slate leading-relaxed font-body">
            Ample private ground-level parking, serene wooded views, and easy access from Memorial Drive and the Creek Turnpike.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours & Visit Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-8 border border-cf-mist shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cf-mist flex items-center justify-center text-cf-forest">
                  <Clock className="w-5 h-5 text-cf-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-cf-forest">Operating Hours</h3>
                  <p className="text-xs text-cf-slate">Early morning appointments available before school and work</p>
                </div>
              </div>

              <div className="divide-y divide-cf-mist font-body">
                <div className="py-3 flex items-center justify-between">
                  <span className="font-medium text-cf-forest">Monday – Thursday</span>
                  <div className="flex items-center gap-2">
                    <span className="text-cf-forest font-semibold">7:30 AM – 6:00 PM</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cf-mist text-cf-forest font-medium">Full Service</span>
                  </div>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="font-medium text-cf-forest">Friday</span>
                  <div className="flex items-center gap-2">
                    <span className="text-cf-forest font-semibold">8:00 AM – 2:00 PM</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cf-mist text-cf-forest font-medium">Preventive & Comfort</span>
                  </div>
                </div>
                <div className="py-3 flex items-center justify-between">
                  <span className="text-cf-slate">Saturday – Sunday</span>
                  <span className="text-cf-slate text-sm">Emergency coverage on call</span>
                </div>
              </div>
            </div>

            {/* Address & Fast Travel Card */}
            <div className="bg-white rounded-2xl p-8 border border-cf-mist shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cf-mist flex items-center justify-center text-cf-forest shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-cf-forest" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-cf-forest">Practice Location</h3>
                    <p className="mt-1 text-cf-slate font-body text-base">
                      7810 E 121st St S, Bixby, OK 74008
                    </p>
                    <p className="text-xs text-cf-slate/80 mt-1">
                      Serving Bixby, South Tulsa, Jenks, Broken Arrow, and Glenpool
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="shrink-0 px-3 py-1.5 rounded-lg border border-cf-mist text-xs font-semibold text-cf-forest hover:bg-cf-mist transition-colors"
                  type="button"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-cf-mist grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-cf-alabaster border border-cf-mist/60">
                  <span className="block text-xs text-cf-slate">From South Tulsa</span>
                  <span className="font-display font-semibold text-cf-forest text-sm">8 mins via Memorial</span>
                </div>
                <div className="p-3 rounded-xl bg-cf-alabaster border border-cf-mist/60">
                  <span className="block text-xs text-cf-slate">From Jenks River</span>
                  <span className="font-display font-semibold text-cf-forest text-sm">11 mins via 121st St</span>
                </div>
                <div className="p-3 rounded-xl bg-cf-alabaster border border-cf-mist/60">
                  <span className="block text-xs text-cf-slate">From Broken Arrow</span>
                  <span className="font-display font-semibold text-cf-forest text-sm">14 mins via Creek Tpk</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=7810+E+121st+St+S,+Bixby,+OK+74008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cf-forest text-cf-alabaster font-display text-sm font-semibold hover:bg-cf-forest/90 transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-cf-gold" />
                  <span>Get Turn-by-Turn Directions</span>
                </a>
                <a
                  href="tel:9182997750"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cf-mist text-cf-forest font-display text-sm font-semibold hover:bg-cf-mist/80 transition-colors border border-cf-forest/10"
                >
                  <Phone className="w-4 h-4 text-cf-forest" />
                  <span>Call (918) 299-7750</span>
                </a>
              </div>
            </div>

            {/* Insurance & Reassurance */}
            <div className="bg-cf-mist/50 rounded-2xl p-6 border border-cf-mist flex flex-col sm:flex-row items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-cf-forest shrink-0" />
              <div className="text-sm text-cf-slate font-body">
                <strong className="text-cf-forest font-semibold block">Accepted Insurance & Flexible Options</strong>
                In-network with major PPO providers including Delta Dental, MetLife, Cigna, Guardian, and BCBS. Interest-free CareCredit options available.
              </div>
            </div>

          </div>

          {/* Right Column: Visual Map Card & Direct Reservation Action */}
          <div className="lg:col-span-5 bg-cf-forest text-cf-alabaster rounded-3xl p-8 relative overflow-hidden shadow-xl">
            {/* Ambient subtle light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cf-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-cf-gold">Direct Reservation</span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-display font-semibold text-cf-alabaster">
                Reserve your family's next visit with zero wait.
              </h3>
              <p className="mt-3 text-cf-mist/80 font-body text-sm leading-relaxed">
                Whether you need a relaxed preventive checkup, gentle pediatric cleaning, or sedation consultation, our team is ready to welcome you.
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3 font-body text-sm">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cf-gold shrink-0" />
                  <span>Individual private suites with garden views</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cf-gold shrink-0" />
                  <span>Warm blanket, warm scented towels & noise cancellation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cf-gold shrink-0" />
                  <span>Transparent upfront pricing with zero surprises</span>
                </div>
              </div>

              {/* Action Form / Button */}
              <div className="mt-8 pt-6 border-t border-cf-alabaster/10 space-y-4">
                <a
                  href="https://www.carefamilydentistrybixby.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cf-gold text-cf-forest font-display font-semibold hover:bg-cf-gold/90 transition-all shadow-md group"
                >
                  <Calendar className="w-5 h-5 text-cf-forest transition-transform group-hover:scale-110" />
                  <span>Book Online via Patient Portal</span>
                </a>

                <div className="text-center text-xs text-cf-mist/60 font-body">
                  Need immediate emergency care? Call us directly at <a href="tel:9182997750" className="text-cf-gold underline font-semibold">(918) 299-7750</a>
                </div>
              </div>

              {/* Stylized Minimal Coordinate Badge */}
              <div className="mt-8 pt-4 border-t border-cf-alabaster/10 flex items-center justify-between text-xs text-cf-mist/50 font-mono">
                <span>35.9922° N, 95.8858° W</span>
                <span>Bixby, Oklahoma</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
