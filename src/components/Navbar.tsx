import React, { useState, useEffect } from 'react';
import { Heart, Phone, Calendar, Clock, MapPin, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#fbf9f6]/95 backdrop-blur-md shadow-sm border-b border-[#eee3d5]' : 'bg-transparent'
    }`}>
      {/* Top Banner Notice */}
      <div className="bg-[#c06c52] text-white py-1.5 px-4 text-xs font-medium tracking-wide flex justify-between items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
            <span>Welcoming New Patients & Gentle Emergency Care in Bixby & South Tulsa</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-200" />
              <span>Mon – Fri: 7:30 AM – 6:00 PM</span>
            </div>
            <a href="tel:9182997750" className="hover:text-amber-200 flex items-center gap-1.5 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-200" />
              <span>Direct Concierge: (918) 299-7750</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#c06c52] to-[#ab593f] flex items-center justify-center text-white shadow-md shadow-[#c06c52]/20 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2c2b29]">
                CARE FAMILY
              </span>
              <span className="block text-[11px] tracking-[0.2em] uppercase font-semibold text-[#c06c52]">
                Dentistry • Bixby
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2c2b29]">
            <a href="#doctors" className="hover:text-[#c06c52] transition-colors">Our Doctors</a>
            <a href="#services" className="hover:text-[#c06c52] transition-colors">Gentle Care</a>
            <a href="#smile-studio" className="hover:text-[#c06c52] transition-colors flex items-center gap-1.5 text-[#c06c52]">
              <Sparkles className="w-4 h-4" />
              Smile Studio
            </a>
            <a href="#sedation" className="hover:text-[#c06c52] transition-colors">Anxiety Relief</a>
            <a href="#reviews" className="hover:text-[#c06c52] transition-colors">580+ Stories</a>
            <a href="#location" className="hover:text-[#c06c52] transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#3f6652]" />
              Bixby Office
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:9182997750"
              className="px-4 py-2 text-sm font-semibold text-[#2c2b29] hover:text-[#c06c52] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c06c52]" />
              (918) 299-7750
            </a>
            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white text-sm font-semibold tracking-wide shadow-md shadow-[#c06c52]/25 hover:shadow-lg transition-all duration-200 flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenModal}
              className="px-3.5 py-1.5 rounded-full bg-[#c06c52] text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2c2b29] hover:bg-[#eee3d5] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f6] border-b border-[#eee3d5] px-6 py-6 space-y-4 shadow-xl">
          <a
            href="#doctors"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2c2b29] hover:text-[#c06c52]"
          >
            Our Doctors
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2c2b29] hover:text-[#c06c52]"
          >
            Gentle Care & Family Dentistry
          </a>
          <a
            href="#smile-studio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#c06c52] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Cosmetic Smile Studio
          </a>
          <a
            href="#sedation"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2c2b29] hover:text-[#c06c52]"
          >
            Anxiety-Free Sedation Sanctuary
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2c2b29] hover:text-[#c06c52]"
          >
            100% Patient Recommendations (580+)
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#2c2b29] hover:text-[#c06c52]"
          >
            Bixby Office: 7810 E 121st St
          </a>
          <div className="pt-4 border-t border-[#eee3d5] flex flex-col gap-3">
            <a
              href="tel:9182997750"
              className="py-2.5 text-center font-semibold text-[#2c2b29] bg-[#f6f1ea] rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c06c52]" />
              Call (918) 299-7750
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="py-3 text-center font-semibold text-white bg-[#c06c52] rounded-xl shadow-md"
            >
              Request Appointment Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
