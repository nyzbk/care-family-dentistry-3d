import React, { useState } from 'react';
import { Heart, Activity, CheckCircle2, ShieldCheck, Sparkles, Flame } from 'lucide-react';

export const InteractiveBento: React.FC = () => {
  // Interactive Comfort Configurator state
  const [sedation, setSedation] = useState<'mild' | 'moderate' | 'deep'>('mild');
  const [chairWarmth, setChairWarmth] = useState(true);
  const [soundscape, setSoundscape] = useState<'ocean' | 'forest' | 'silence'>('forest');

  return (
    <section id="capabilities" className="relative py-28 md:py-36 bg-[#FAF9F6] border-t border-[#1E3A34]/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-3">
              INTELLIGENT CLINICAL WELLNESS / 03
            </div>
            <h2 className="font-serif text-[40px] md:text-[56px] leading-[0.95] text-[#1E3A34]">
              Re-engineered for peace of mind.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] text-[#4F615D] max-w-md leading-relaxed">
            Every clinical protocol, ambient parameter, and diagnostic instrument is calibrated to eradicate anxiety.
          </p>
        </div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-12 gap-5 md:gap-6 auto-rows-[minmax(240px,auto)]">
          {/* Card 1: Main Philosophy & Philosophy (Span 8) */}
          <div className="col-span-12 md:col-span-8 rounded-[24px] bg-[#1E3A34] text-[#FAF9F6] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient Radial Gradient Glow */}
            <div
              className="absolute -right-20 -top-20 w-[420px] h-[420px] rounded-full blur-[60px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
              style={{ background: 'radial-gradient(circle, #489987 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full border border-white/20 grid place-items-center text-[11px] font-mono">
                  01
                </span>
                <span className="text-[11px] font-sans tracking-widest uppercase opacity-60">
                  PHILOSOPHY & CARE
                </span>
              </div>
              <h3 className="font-serif text-[32px] md:text-[42px] leading-tight max-w-xl">
                We believe you should leave the dentist feeling lighter than when you walked in.
              </h3>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-[13px] font-sans opacity-80">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                <span>Zero judgment for overdue appointments</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                <span>Transparent fee quotes before treatment</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#489987] shrink-0 mt-0.5" />
                <span>Paced entirely around your comfort</span>
              </div>
            </div>
          </div>

          {/* Card 2: Live Comfort Simulator (Span 4) */}
          <div className="col-span-12 md:col-span-4 rounded-[24px] bg-[#FFFFFF] border border-[#1E3A34]/10 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#1E3A34]/40">02 / SIMULATOR</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#489987]/10 text-[10px] font-sans font-medium text-[#489987]">
                  <Sparkles className="w-3 h-3" /> INTERACTIVE
                </span>
              </div>
              <h4 className="font-serif text-[24px] text-[#1E3A34]">
                Customize your chair
              </h4>
              <p className="text-[13px] text-[#4F615D] mt-2 mb-6">
                Tell us your preferences before you arrive:
              </p>

              {/* Sedation Selector */}
              <div className="space-y-4 text-[12px] font-sans">
                <div>
                  <span className="text-[#1E3A34]/60 font-medium block mb-2">Sedation Protocol:</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['mild', 'moderate', 'deep'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setSedation(lvl)}
                        className={`h-8 rounded-lg text-[11px] capitalize transition-all ${
                          sedation === lvl
                            ? 'bg-[#1E3A34] text-white font-medium'
                            : 'bg-[#1E3A34]/5 text-[#1E3A34] hover:bg-[#1E3A34]/10'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Heated Chair Toggle */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[#1E3A34]/80 flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-[#E8A87C]" /> Heated Ergonomic Neck Pillow
                  </span>
                  <button
                    onClick={() => setChairWarmth(!chairWarmth)}
                    className={`w-10 h-6 rounded-full transition-colors relative ${chairWarmth ? 'bg-[#489987]' : 'bg-[#1E3A34]/20'}`}
                  >
                    <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${chairWarmth ? 'translate-x-4' : ''}`} />
                  </button>
                </div>

                {/* Soundscape */}
                <div className="pt-2">
                  <span className="text-[#1E3A34]/60 font-medium block mb-2">Noise-Canceling Audio:</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['ocean', 'forest', 'silence'] as const).map((snd) => (
                      <button
                        key={snd}
                        onClick={() => setSoundscape(snd)}
                        className={`h-8 rounded-lg text-[11px] capitalize transition-all ${
                          soundscape === snd
                            ? 'bg-[#489987] text-white font-medium'
                            : 'bg-[#1E3A34]/5 text-[#1E3A34] hover:bg-[#1E3A34]/10'
                        }`}
                      >
                        {snd}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E3A34]/10 text-[11px] font-mono text-[#489987]">
              ✓ Protocol preset ready for check-in
            </div>
          </div>

          {/* Card 3: Clinical Technology Telemetry (Span 4) */}
          <div className="col-span-12 md:col-span-4 rounded-[24px] bg-[#FFFFFF] border border-[#1E3A34]/10 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#1E3A34]/40">03 / PRECISION</span>
                <Activity className="w-4 h-4 text-[#489987]" />
              </div>
              <h4 className="font-serif text-[24px] text-[#1E3A34]">
                Micron-level diagnostic scans
              </h4>
              <p className="text-[13px] text-[#4F615D] mt-2 mb-6">
                Ultra-low-dose digital 3D imaging reveals root anatomy without uncomfortable film bitewings.
              </p>
            </div>

            {/* Live Telemetry Code Block */}
            <div className="rounded-[14px] bg-[#1E3A34]/5 p-4 font-mono text-[11px] text-[#1E3A34]/80 space-y-1">
              <div>radiationReduction: &quot;80% vs film&quot;,</div>
              <div>scanResolution: &quot;20 microns&quot;,</div>
              <div>impressionPutty: false,</div>
              <div className="text-[#489987] font-semibold">status: &quot;CALIBRATED_OPTIMAL&quot;</div>
            </div>
          </div>

          {/* Card 4: Verified Reputation Metric (Span 4) */}
          <div className="col-span-12 md:col-span-4 rounded-[24px] bg-[#FFFFFF] border border-[#1E3A34]/10 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#1E3A34]/40">04 / PATIENTS</span>
                <ShieldCheck className="w-4 h-4 text-[#489987]" />
              </div>
              <div className="font-serif text-[48px] leading-none text-[#1E3A34]">
                580+
              </div>
              <div className="text-[12px] font-sans font-medium text-[#489987] mt-1 mb-3">
                100% Verified Community Recommendations
              </div>
              <p className="text-[13px] text-[#4F615D] leading-relaxed">
                Families throughout Bixby and Tulsa trust us with three generations of care.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-[#1E3A34]/10 overflow-hidden">
                <div className="h-full w-full bg-[#489987]" />
              </div>
              <span className="text-[11px] font-mono text-[#1E3A34]/60">5.0 / 5.0</span>
            </div>
          </div>

          {/* Card 5: Family Gentle Guarantee (Span 4) */}
          <div className="col-span-12 md:col-span-4 rounded-[24px] bg-[#489987] text-white p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-white/60">05 / PROMISE</span>
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-serif text-[24px] text-white">
                The Gentle Guarantee
              </h4>
              <p className="text-[13px] text-white/80 mt-2 leading-relaxed">
                Raise your hand at any moment and we pause immediately. You remain in complete control from start to finish.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 h-10 px-5 rounded-full bg-white text-[#1E3A34] text-[11px] font-sans font-semibold tracking-widest uppercase inline-flex items-center justify-center hover:bg-[#FAF9F6] transition-colors"
            >
              Experience The Care
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
