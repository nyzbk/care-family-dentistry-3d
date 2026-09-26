import React, { useState } from 'react';
import { Shield, Sparkles, Wind, EyeOff, Headphones, Check, HeartHandshake } from 'lucide-react';

interface SedationProps {
  onOpenModal: () => void;
}

export const SedationSanctuarySection: React.FC<SedationProps> = ({ onOpenModal }) => {
  const [selectedSedation, setSelectedSedation] = useState('oral');

  const sedationOptions = [
    {
      id: 'oral',
      title: 'Oral Conscious Twilight Sedation',
      subtitle: 'Rest peacefully while all your dental care is completed',
      icon: EyeOff,
      badge: 'Most Popular for High Anxiety',
      description: 'A gentle prescription pill taken prior to your visit induces a state of deep, dream-like relaxation. You remain responsive but feel completely unbothered, with virtually no memory of the procedure.',
      benefits: [
        'Drift into peaceful calm before entering the treatment suite',
        'Multiple procedures can be completed in a single appointment',
        'Ideal for fearful patients, dental phobia, or extensive dental work',
        'Requires a companion to escort you home safely'
      ]
    },
    {
      id: 'nitrous',
      title: 'Nitrous Oxide (Laughing Gas)',
      subtitle: 'Gentle, fast-acting relaxation that clears in minutes',
      icon: Wind,
      badge: 'Zero Downtime',
      description: 'Inhaled through a comfortable soft mask, sweet nitrous oxide creates an immediate sense of warmth, lighthearted comfort, and wellbeing. When treatment concludes, pure oxygen reverses the effects completely.',
      benefits: [
        'Instant onset of soothing tranquility',
        'Wear-off within 5 minutes—safe to drive yourself home or back to work',
        'Wonderful for routine cleanings, fillings, or mild appointment nervousness',
        'Suitable and beloved by both children and adults'
      ]
    },
    {
      id: 'sensory',
      title: 'Sensory Comfort & Spa Touches',
      subtitle: 'Surrounding you with soothing sights, sounds, and textures',
      icon: Headphones,
      badge: 'Complimentary for Every Patient',
      description: 'We believe dental care should feel restorative for the soul. Enjoy our curated comfort amenities designed to quiet the senses and make your time with us a peaceful retreat.',
      benefits: [
        'Bose noise-canceling headphones with personalized streaming',
        'Warm lavender-infused aromatherapy face towels',
        'Plush weighted blankets for calming pressure therapy',
        'Ceiling-mounted entertainment displays with streaming shows'
      ]
    }
  ];

  const activeOption = sedationOptions.find(o => o.id === selectedSedation) || sedationOptions[0];

  return (
    <section id="sedation" className="py-24 bg-[#fbf9f6] text-[#2c2b29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e1ede6] text-[#3f6652] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c4dbcf]">
            <Shield className="w-3.5 h-3.5 text-[#3f6652]" />
            <span>Gentle Anxiety-Free Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2c2b29] mb-4">
            Sedation &amp; Comfort Sanctuary
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            If dental visits make your heart race, you have found your home. Over 60% of our patients once feared the dentist; today, they relax in complete peace.
          </p>
        </div>

        {/* Sedation Mode Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {sedationOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = opt.id === selectedSedation;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedSedation(opt.id)}
                className={`p-6 rounded-3xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#c06c52] shadow-xl ring-2 ring-[#c06c52]/20 scale-[1.02]'
                    : 'bg-white/60 hover:bg-white border-[#eee3d5] text-stone-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isSelected ? 'bg-[#c06c52] text-white shadow-md' : 'bg-[#f6f1ea] text-[#c06c52]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3f6652] bg-[#e1ede6] px-2.5 py-1 rounded-full">
                      {opt.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {opt.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Detailed Panel */}
        <div className="bg-white rounded-3xl border border-[#eee3d5] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest font-bold text-[#c06c52] mb-2 block">
              Patient Comfort Profile
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              {activeOption.title}
            </h3>
            <p className="text-stone-700 text-base leading-relaxed mb-6">
              {activeOption.description}
            </p>

            <div className="space-y-3 mb-8">
              {activeOption.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e1ede6] text-[#3f6652] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-stone-800">{b}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenModal}
              className="px-8 py-3.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white text-sm font-semibold shadow-md shadow-[#c06c52]/25 hover:shadow-lg transition-all flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Discuss Sedation Options With Our Doctors</span>
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#f6f1ea] rounded-2xl p-6 sm:p-8 border border-[#eee3d5]">
            <h4 className="font-serif font-bold text-lg text-stone-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span>The Care Family Promise</span>
            </h4>
            <div className="space-y-4 text-xs text-stone-700 leading-relaxed">
              <p>
                <strong>Zero Judgement:</strong> Whether it has been 6 months or 10 years since your last dental visit, our team greets you with empathy, kindness, and open arms.
              </p>
              <p>
                <strong>You Are In Control:</strong> You can raise your hand at any moment during your appointment to pause, ask questions, or take a breather. We move at your pace.
              </p>
              <p>
                <strong>Painless Anesthesia Protocol:</strong> Dr. Nauman, Dr. Standlee, and Dr. Sellmeyer utilize buffered local anesthetics and topical numbing gels so you never experience a sharp pinch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
