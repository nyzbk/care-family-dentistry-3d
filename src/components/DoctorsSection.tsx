import React, { useState } from 'react';
import { DOCTORS } from '../data/careData';
import { GraduationCap, Award, Heart, CheckCircle2, Calendar } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(DOCTORS[0].id);
  const activeDoctor = DOCTORS.find(d => d.id === selectedDoctorId) || DOCTORS[0];

  return (
    <section id="doctors" className="py-24 bg-[#fbf9f6] text-[#2c2b29] relative overflow-hidden">
      {/* Decorative Warm Ambient Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c06c52]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3f6652]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6f1ea] border border-[#eee3d5] text-[#c06c52] text-xs font-semibold uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#c06c52]" />
            <span>Dedicated Partners in Health</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2c2b29] mb-4">
            Meet Your Family Dentists
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Our three doctors bring combined decades of clinical excellence, gentle artistry, and profound empathy. You never feel like a number—you are treated like cherished family.
          </p>
        </div>

        {/* Doctor Selector Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
          {DOCTORS.map((doc) => {
            const isSelected = doc.id === selectedDoctorId;
            return (
              <button
                key={doc.id}
                onClick={() => setSelectedDoctorId(doc.id)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-3 shadow-sm ${
                  isSelected
                    ? 'bg-[#c06c52] text-white shadow-[#c06c52]/30 shadow-md scale-105'
                    : 'bg-white hover:bg-[#f6f1ea] text-stone-700 border border-[#eee3d5]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-300' : 'bg-stone-300'}`}></span>
                <span>{doc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Doctor Featured Card */}
        <div className="bg-white rounded-3xl border border-[#eee3d5] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-300">
          {/* Doctor Portrait Column */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[500px] overflow-hidden bg-stone-100">
            <img
              src={activeDoctor.avatarUrl}
              alt={activeDoctor.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold mb-1">
                {activeDoctor.specialty}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {activeDoctor.name}
              </h3>
              <p className="text-sm text-stone-200 mt-1">
                {activeDoctor.title}
              </p>
            </div>
          </div>

          {/* Doctor Clinical Philosophy & Credentials */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-white to-[#fbf9f6]">
            <div>
              {/* Quote Banner */}
              <div className="bg-[#f6f1ea] border-l-4 border-[#c06c52] p-5 rounded-r-2xl mb-8">
                <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug">
                  {activeDoctor.philosophy}
                </p>
              </div>

              {/* Biography */}
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#c06c52] mb-3">
                Clinical Focus &amp; Background
              </h4>
              <p className="text-stone-700 text-base leading-relaxed mb-8">
                {activeDoctor.bio}
              </p>

              {/* Education & Accolades */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#eee3d5]">
                  <GraduationCap className="w-5 h-5 text-[#3f6652] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-stone-500">Education</span>
                    <span className="text-sm font-semibold text-stone-800">{activeDoctor.education}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#eee3d5]">
                  <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase font-bold text-stone-500">Distinction</span>
                    <span className="text-sm font-semibold text-stone-800">100% Patient Recommend Score</span>
                  </div>
                </div>
              </div>

              {/* Highlights Chips */}
              <div className="space-y-2 mb-8">
                <span className="block text-xs uppercase font-bold text-stone-500 mb-2">Signature Focus Areas</span>
                <div className="flex flex-wrap gap-2">
                  {activeDoctor.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eee3d5]/50 border border-[#e1d0bc] text-xs font-medium text-stone-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3f6652]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Booking with Doctor */}
            <div className="pt-6 border-t border-[#eee3d5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="block text-xs text-stone-500 font-medium">Bixby Office Primary</span>
                <span className="text-sm font-bold text-stone-800">Accepting New &amp; Continuing Patients</span>
              </div>
              <button
                onClick={() => onSelectDoctor(activeDoctor.name)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white text-sm font-semibold shadow-md shadow-[#c06c52]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Request Consult with {activeDoctor.name.split(',')[0]}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
