import React, { useState } from 'react';
import { ShieldAlert, Check, ArrowRight } from 'lucide-react';

interface ComfortLevel {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  protocolTitle: string;
  comfortFeatures: string[];
  recommendedDoctor: string;
  doctorRole: string;
  recoveryTime: string;
}

const COMFORT_LEVELS: ComfortLevel[] = [
  {
    id: 'routine',
    stepNumber: 'Tier 01',
    title: 'Routine Wellness',
    tagline: '“No immediate discomfort, seeking a gentle cleaning and thorough preventive evaluation.”',
    protocolTitle: 'Delicate Spa-Clean Protocol',
    comfortFeatures: [
      'Gentle ultrasonic AirFlow polishing with warm temperature-regulated water',
      'High-definition intraoral camera walkthrough — you see exactly what the doctor sees',
      'Natural soothing peppermint-infused organic gum hydration gels',
      'Tinted protective eyewear to soften overhead clinical lighting'
    ],
    recommendedDoctor: 'Dr. Angie Nauman, DDS',
    doctorRole: 'Preventive Care & Aesthetic Wellness',
    recoveryTime: 'Immediate — resume your normal daily routine without pause'
  },
  {
    id: 'mild-anxiety',
    stepNumber: 'Tier 02',
    title: 'Sensory Sensitivity',
    tagline: '“I feel uneasy around needles, dental sounds, or feeling vulnerable in the chair.”',
    protocolTitle: 'Sensory Shield Protocol',
    comfortFeatures: [
      'Profound topical numbing cream applied prior to any micro-injection (virtually unfelt)',
      'Bose noise-cancelling headphones tuned to your choice of calming acoustic playlists',
      'Strict “Stop-Signal” guarantee: raise your hand at any moment and we pause immediately',
      'Weighted thermal calming blanket to ease muscle and shoulder tension'
    ],
    recommendedDoctor: 'Dr. Rachel Standlee, DDS',
    doctorRole: 'Family Wellness & Gentle Technique',
    recoveryTime: 'Immediate ease — leave refreshed and comfortable'
  },
  {
    id: 'pediatric',
    stepNumber: 'Tier 03',
    title: 'Pediatric Care',
    tagline: '“My child needs an exam, and we want a completely positive, tear-free introduction.”',
    protocolTitle: 'Tell-Show-Do Playful Adaptation',
    comfortFeatures: [
      'Fun introduction to our “rocket chair” and counting teeth through interactive games',
      'No intimidating instruments in view — every gentle step is explained before touch',
      'Bravery treasure chest reward and personalized Super-Smiler certificate',
      'Parents seated comfortably right beside their child throughout the entire visit'
    ],
    recommendedDoctor: 'Dr. Rachel L. Standlee, DDS',
    doctorRole: 'Pediatric Trust Specialist',
    recoveryTime: 'Leaves smiling with a prize in hand'
  },
  {
    id: 'phobia',
    stepNumber: 'Tier 04',
    title: 'High Dental Phobia',
    tagline: '“I experience intense panic and have avoided the dentist for years or decades.”',
    protocolTitle: 'Restful Twilight Conscious Sedation',
    comfortFeatures: [
      'Inhalation nitrous oxide or gentle oral conscious sedation prescribed for your visit',
      'Dissolves fear, anxiety, and sensitive gag reflexes into a peaceful, drowsy calm',
      'While you rest comfortably, our doctors complete necessary care in one session',
      'Continuous pulse, blood pressure, and oxygen monitoring by certified clinicians'
    ],
    recommendedDoctor: 'Dr. Meghan Sellmeyer, DDS',
    doctorRole: 'Certified Sedation & Complex Reconstruction',
    recoveryTime: 'Mild drowsiness clears naturally within a few hours'
  }
];

export const AnxietyFreeCompass: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mild-anxiety');
  const currentLevel = COMFORT_LEVELS.find((l) => l.id === activeTab) || COMFORT_LEVELS[1];

  return (
    <section id="comfort-compass" className="scroll-mt-20 py-28 sm:py-36 bg-cf-mist/40 border-t border-cf-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Typographic Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-3 font-body">
            Personalized Clinical Protocol
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
            Choose your comfort level. <br />
            <span className="text-cf-slate font-normal">We tailor every minute of your visit.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-cf-slate font-body leading-relaxed max-w-xl">
            You never have to endure distress or feel judged. Select the profile that best describes your needs, and review your tailored care dossier.
          </p>
        </div>

        {/* Tactile Swatch Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mb-12">
          {COMFORT_LEVELS.map((level) => {
            const isSelected = activeTab === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setActiveTab(level.id)}
                type="button"
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-cf-forest text-cf-alabaster border-cf-forest shadow-md -translate-y-0.5'
                    : 'bg-white text-cf-forest border-cf-mist hover:border-cf-forest/30 hover:bg-cf-mist/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] uppercase font-mono tracking-widest ${
                      isSelected ? 'text-cf-gold' : 'text-cf-slate/80'
                    }`}>
                      {level.stepNumber}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cf-gold" />}
                  </div>
                  <h3 className="font-display font-semibold text-base sm:text-lg leading-tight">
                    {level.title}
                  </h3>
                </div>
                <p
                  className={`text-xs mt-3 font-body line-clamp-2 ${
                    isSelected ? 'text-cf-alabaster/75' : 'text-cf-slate'
                  }`}
                >
                  {level.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Tactile Consultation Dossier */}
        <div className="max-w-4xl bg-white border border-cf-mist rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-4 pb-8 border-b border-cf-mist">
            <div>
              <span className="text-xs font-semibold text-cf-gold uppercase tracking-widest font-body">
                Care Protocol Dossier
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-cf-forest mt-1">
                {currentLevel.protocolTitle}
              </h3>
            </div>
            <div className="text-left md:text-right font-body">
              <span className="text-xs text-cf-slate block">Supervising Clinician:</span>
              <span className="text-sm font-semibold text-cf-forest block font-display">
                {currentLevel.recommendedDoctor}
              </span>
              <span className="text-xs text-cf-gold block font-medium">
                {currentLevel.doctorRole}
              </span>
            </div>
          </div>

          <div className="py-8">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cf-forest mb-5 font-body">
              Clinical Inclusions For Complete Ease:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentLevel.comfortFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-cf-alabaster border border-cf-mist/80"
                >
                  <div className="w-5 h-5 rounded-full bg-cf-forest text-cf-gold flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-cf-forest leading-relaxed font-body">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-cf-mist flex flex-col sm:flex-row items-center justify-between gap-4 font-body">
            <div className="flex items-center gap-2 text-xs text-cf-slate">
              <ShieldAlert className="w-4 h-4 text-cf-gold shrink-0" />
              <span>Recovery Expectation: <strong className="text-cf-forest font-semibold">{currentLevel.recoveryTime}</strong></span>
            </div>

            <a
              href="https://www.carefamilydentistrybixby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cf-forest hover:bg-cf-forest/90 text-cf-alabaster text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Schedule With This Protocol</span>
              <ArrowRight className="w-4 h-4 text-cf-gold" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
