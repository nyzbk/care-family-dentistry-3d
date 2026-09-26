import React, { useState } from 'react';
import { SERVICES } from '../data/careData';
import { ArrowRight, ShieldCheck, Clock, Smile } from 'lucide-react';

interface ServicesSectionProps {
  onOpenModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Foundational Care', 'Aesthetic Dentistry', 'Anxiety Relief', 'Restorative Arts', 'Whole-Body Health'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white text-[#2c2b29] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6f1ea] border border-[#eee3d5] text-[#c06c52] text-xs font-semibold uppercase tracking-wider mb-4">
            <Smile className="w-3.5 h-3.5" />
            <span>Gentle Solutions for Every Stage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2c2b29] mb-4">
            Comprehensive Family Dental Care
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            From your child’s very first tooth to complete smile restorations and sleep apnea airway wellness, everything under one welcoming roof.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#c06c52] text-white shadow-md'
                  : 'bg-[#f6f1ea] text-stone-700 hover:bg-[#eee3d5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-[#fbf9f6] rounded-3xl border border-[#eee3d5] p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#c06c52] bg-white px-3 py-1 rounded-full border border-[#eee3d5]">
                    {svc.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{svc.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 group-hover:text-[#c06c52] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3f6652]"></span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#eee3d5]">
                <div className="text-[11px] text-[#3f6652] font-semibold mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{svc.comfortLevel}</span>
                </div>
                <button
                  onClick={onOpenModal}
                  className="w-full py-2.5 rounded-full bg-white hover:bg-[#c06c52] text-stone-800 hover:text-white text-xs font-semibold border border-[#eee3d5] hover:border-transparent transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request Care Consult</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
