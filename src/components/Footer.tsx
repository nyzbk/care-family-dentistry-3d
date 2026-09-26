import React from 'react';
import { Heart, Phone, MapPin, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1e2220] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Practice Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c06c52] flex items-center justify-center text-white">
                <Heart className="w-5 h-5 fill-white/20" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-white">
                  CARE FAMILY DENTISTRY
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#c06c52]">
                  Bixby • South Tulsa
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              Dr. Angie Nauman, Dr. Rachel Standlee, and Dr. Meghan Sellmeyer provide gentle, comprehensive family and cosmetic dentistry in a peaceful, fear-free environment.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-[11px] text-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>100% Recommended on Facebook (580+ Reviews)</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#doctors" className="hover:text-white transition-colors">Our Three Doctors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Preventive &amp; Family Care</a></li>
              <li><a href="#smile-studio" className="hover:text-white transition-colors">Cosmetic Smile Studio</a></li>
              <li><a href="#sedation" className="hover:text-white transition-colors">Anxiety-Free Sedation</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Patient Stories (580+)</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Office Location &amp; Hours</a></li>
            </ul>
          </div>

          {/* Care Treatments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Treatments</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Porcelain Veneers &amp; Bonding</li>
              <li>Clear Aligner Orthodontics</li>
              <li>Permanent Dental Implants</li>
              <li>Oral Conscious Twilight Sedation</li>
              <li>Nitrous Oxide (Laughing Gas)</li>
              <li>Sleep Apnea Oral Appliances</li>
            </ul>
          </div>

          {/* Direct Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Visit Us</h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c06c52] shrink-0 mt-0.5" />
                <span>7810 E 121st St S, Bixby, OK 74008</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#c06c52] shrink-0 mt-0.5" />
                <a href="tel:9182997750" className="hover:text-white font-semibold text-stone-200">
                  (918) 299-7750
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#3f6652] shrink-0 mt-0.5" />
                <span>Mon – Fri: 7:30 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; 2026 Care Family Dentistry, PLLC. All rights reserved. Dr. Nauman, Dr. Standlee &amp; Dr. Sellmeyer.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
