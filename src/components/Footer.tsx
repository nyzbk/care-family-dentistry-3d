import React from 'react';
import { Heart, Phone, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cf-forest text-cf-alabaster pt-20 pb-12 border-t border-cf-mist/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cf-alabaster/10">
          
          {/* Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cf-gold/20 flex items-center justify-center border border-cf-gold/30">
                <Heart className="w-5 h-5 text-cf-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-cf-alabaster">Care Family Dentistry</span>
                <span className="text-xs text-cf-gold tracking-widest uppercase font-semibold">Bixby, Oklahoma</span>
              </div>
            </div>

            <p className="text-sm text-cf-mist/80 font-body leading-relaxed max-w-md">
              A restorative sanctuary designed for multi-generational oral wellness. Rooted in patient autonomy, compassionate clinical mastery, and gentle sedation protocols that remove anxiety from the very first hello.
            </p>

            <div className="flex items-center gap-3 text-xs text-cf-mist/60 font-body">
              <ShieldCheck className="w-4 h-4 text-cf-gold shrink-0" />
              <span>Accredited Oklahoma State Board of Dentistry • ADA & OKDA Member</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-semibold text-cf-alabaster uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-sm font-body text-cf-mist/75">
              <li>
                <a href="#hero" className="hover:text-cf-gold transition-colors">Our Practice Tour</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-cf-gold transition-colors">Resident Doctors</a>
              </li>
              <li>
                <a href="#anxiety-free" className="hover:text-cf-gold transition-colors">Anxiety-Free Compass</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cf-gold transition-colors">Patient Stories (581+)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-cf-gold transition-colors">Directions & Hours</a>
              </li>
            </ul>
          </div>

          {/* Care Focus (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-semibold text-cf-alabaster uppercase tracking-wider">Care Focus</h4>
            <ul className="space-y-2.5 text-sm font-body text-cf-mist/75">
              <li>Preventive Wellness</li>
              <li>Pediatric Dentistry</li>
              <li>Gentle Sedation Care</li>
              <li>Restorative Ceramics</li>
              <li>Dental Implants</li>
              <li>Emergency Relief</li>
            </ul>
          </div>

          {/* Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-semibold text-cf-alabaster uppercase tracking-wider">Contact & Inquiries</h4>
            <div className="space-y-3 text-sm font-body text-cf-mist/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cf-gold shrink-0 mt-0.5" />
                <span>7810 E 121st St S<br />Bixby, OK 74008</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cf-gold shrink-0" />
                <a href="tel:9182997750" className="hover:text-cf-gold transition-colors font-medium">
                  (918) 299-7750
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cf-gold shrink-0 mt-0.5" />
                <span>Mon–Thu: 7:30 AM – 6:00 PM<br />Fri: 8:00 AM – 2:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.carefamilydentistrybixby.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-cf-gold text-cf-forest font-display text-xs font-semibold hover:bg-cf-gold/90 transition-colors shadow-sm"
              >
                Patient Portal Login
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cf-mist/60 font-body">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Care Family Dentistry. All rights reserved.</span>
            <span>Bixby, Oklahoma</span>
            <span className="text-cf-mist/40">•</span>
            <span>HIPAA Compliant & Confidential</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cf-mist/10 hover:bg-cf-mist/20 text-cf-alabaster text-xs transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cf-gold" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
