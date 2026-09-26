import React, { useState } from 'react';
import { Sparkles, Heart, Shield, CheckCircle, Clock, Calendar } from 'lucide-react';

interface ComfortEstimatorWidgetProps {
  onOpenBooking: () => void;
}

export const ComfortEstimatorWidget: React.FC<ComfortEstimatorWidgetProps> = ({ onOpenBooking }) => {
  const [patientType, setPatientType] = useState<'child' | 'adult' | 'senior'>('adult');
  const [anxietyLevel, setAnxietyLevel] = useState<number>(2);
  const [careGoal, setCareGoal] = useState<'routine' | 'restoration' | 'cosmetic' | 'sedation'>('routine');

  const anxietyLabels = ['Completely Relaxed', 'Mildly Hesitant', 'Sensitive / Moderate Stress', 'High Dental Anxiety'];
  const doctors = {
    child: 'Dr. Meghan Sellmeyer DDS (Pediatric & Gentle Growth)',
    adult: 'Dr. Angie Nauman DDS (Comprehensive & Aesthetic Health)',
    senior: 'Dr. Rachel Standlee DDS (Restorative & Implants)'
  };

  return (
    <section id="comfort-planner" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] text-[#1E3A34] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E3A34]/5 border border-[#1E3A34]/10 text-xs font-semibold uppercase tracking-wider text-[#1E3A34] mb-3">
            <Heart className="w-3.5 h-3.5 text-[#E8A87C]" />
            <span>Personal Comfort Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Fraunces'] font-normal tracking-tight text-[#1E3A34]">
            Gentle Care Comfort & Visit Estimator
          </h2>
          <p className="mt-4 text-[#4F615D] text-base sm:text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans'] font-light">
            Tailor every sensory aspect of your Bixby visit before you arrive. Zero pressure, zero pain, 100% focused on your wellbeing.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#1E3A34]/10">
          <div className="space-y-8">
            {/* Step 1: Patient Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A34] mb-3 font-['Plus_Jakarta_Sans']">
                1. Who is visiting our clinic?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'child', label: 'Pediatric (Ages 1-17)' },
                  { id: 'adult', label: 'Adult Care' },
                  { id: 'senior', label: 'Senior / Restorative' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPatientType(t.id as any)}
                    className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                      patientType === t.id
                        ? 'bg-[#1E3A34] text-white shadow-md'
                        : 'bg-[#FAF9F6] text-[#4F615D] hover:bg-[#1E3A34]/10'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Anxiety Level Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#1E3A34] font-['Plus_Jakarta_Sans']">
                  2. Sensory Comfort & Anxiety Level
                </label>
                <span className="text-xs font-medium text-[#489987] bg-[#489987]/10 px-2.5 py-1 rounded-full">
                  {anxietyLabels[anxietyLevel]}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                value={anxietyLevel}
                onChange={(e) => setAnxietyLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-[#FAF9F6] rounded-lg appearance-none cursor-pointer accent-[#489987]"
              />
              <div className="flex justify-between text-[11px] text-[#4F615D] mt-2">
                <span>Relaxed</span>
                <span>Mild</span>
                <span>Moderate</span>
                <span>High Anxiety</span>
              </div>
            </div>

            {/* Step 3: Care Objective */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#1E3A34] mb-3 font-['Plus_Jakarta_Sans']">
                3. Primary Care Focus
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'routine', label: 'Routine Check & Cleaning' },
                  { id: 'restoration', label: 'Gentle Restoration' },
                  { id: 'cosmetic', label: 'Smile Whitening' },
                  { id: 'sedation', label: 'Conscious Sedation' }
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setCareGoal(g.id as any)}
                    className={`py-3 px-3 rounded-2xl text-xs font-medium transition-all ${
                      careGoal === g.id
                        ? 'bg-[#1E3A34] text-white shadow-md'
                        : 'bg-[#FAF9F6] text-[#4F615D] hover:bg-[#1E3A34]/10'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tailored Plan Output */}
            <div className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#1E3A34]/10 mt-6">
              <h3 className="font-['Fraunces'] text-lg font-normal text-[#1E3A34] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E8A87C]" />
                Your Tailored Care Protocol:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#4F615D]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Doctor:</strong> {doctors[patientType]}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                  <span><strong>Comfort Protocol:</strong> {anxietyLevel >= 2 ? 'Warm aromatherapy blankets, noise-canceling headsets & nitrous oxide option' : 'Gentle ultrasonic scaling & relaxed pacing'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                  <span><strong>Estimated Duration:</strong> 45–60 minutes in private sunlit operatory</span>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                  <span><strong>Next Opening:</strong> Today / Tomorrow available via Weave online sync</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E3A34]/10">
                <span className="text-xs text-[#4F615D]">
                  Location: 7810 East 121st St S, Bixby OK
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1E3A34] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#489987] transition-all btn-spring"
                >
                  Reserve Priority Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SignatureWidget = ComfortEstimatorWidget;
