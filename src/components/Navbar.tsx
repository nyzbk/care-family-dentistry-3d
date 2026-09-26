import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Heart, Menu, X, Clock } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cf-alabaster shadow-sm border-b border-cf-mist py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-cf-forest flex items-center justify-center text-cf-gold group-hover:scale-105 transition-transform duration-300">
            <Heart className="w-5 h-5 fill-cf-gold" />
          </div>
          <div>
            <span className="block font-display font-extrabold text-lg sm:text-xl tracking-tight text-cf-forest">
              CARE FAMILY
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-cf-slate -mt-1">
              Dentistry &bull; Bixby, OK
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#doctors"
            className="text-sm font-medium text-cf-slate hover:text-cf-forest transition-colors font-body"
          >
            Resident Doctors
          </a>
          <a
            href="#comfort-compass"
            className="text-sm font-medium text-cf-slate hover:text-cf-forest transition-colors font-body"
          >
            Anxiety-Free Compass
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-cf-slate hover:text-cf-forest transition-colors font-body"
          >
            581 Verified Reviews
          </a>
          <a
            href="#location"
            className="text-sm font-medium text-cf-slate hover:text-cf-forest transition-colors font-body"
          >
            Hours &amp; Location
          </a>
        </nav>

        {/* Contact and Booking */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:9182997750"
            className="flex items-center gap-1.5 text-xs font-semibold text-cf-forest hover:text-cf-gold transition-colors py-2 px-3.5 rounded-full bg-cf-mist/80 border border-cf-forest/10"
          >
            <Phone className="w-3.5 h-3.5 text-cf-gold" />
            <span>(918) 299-7750</span>
          </a>
          <a
            href="https://www.carefamilydentistrybixby.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cf-forest hover:bg-cf-forest/90 text-cf-alabaster text-xs font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            <Calendar className="w-3.5 h-3.5 text-cf-gold" />
            <span>Schedule Online</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-cf-forest hover:bg-cf-mist/50 transition-colors"
          aria-label="Toggle menu"
          type="button"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cf-alabaster border-b border-cf-mist px-6 py-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-xs text-cf-slate pb-2 border-b border-cf-mist">
            <Clock className="w-3.5 h-3.5 text-cf-gold" />
            <span>Mon–Thu: 7:30 AM – 6:00 PM &bull; 7810 E 121st St S, Bixby</span>
          </div>
          <nav className="flex flex-col gap-3 font-body">
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-cf-forest hover:text-cf-gold"
            >
              Resident Doctors (Dr. Nauman, Standlee, Sellmeyer)
            </a>
            <a
              href="#comfort-compass"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-cf-forest hover:text-cf-gold"
            >
              Anxiety-Free Compass &amp; Sedation
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-cf-forest hover:text-cf-gold"
            >
              581 Patient Reviews (100% Recommend)
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-cf-forest hover:text-cf-gold"
            >
              Hours, Map &amp; Parking
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:9182997750"
              className="w-full py-2.5 rounded-full border border-cf-forest/20 text-cf-forest text-center font-semibold text-sm flex items-center justify-center gap-2 bg-cf-mist/60"
            >
              <Phone className="w-4 h-4 text-cf-gold" />
              <span>Call Practice (918) 299-7750</span>
            </a>
            <a
              href="https://www.carefamilydentistrybixby.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-cf-forest text-cf-alabaster text-center font-semibold text-sm flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4 text-cf-gold" />
              <span>Online Patient Portal</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
