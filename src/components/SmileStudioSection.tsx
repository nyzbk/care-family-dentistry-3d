import React, { useState } from 'react';
import { Sparkles, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';

interface SmileStudioProps {
  onOpenModal: () => void;
}

export const SmileStudioSection: React.FC<SmileStudioProps> = ({ onOpenModal }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeShade, setActiveShade] = useState('A1');
  const [selectedTreatment, setSelectedTreatment] = useState('veneers');

  const shades = [
    { code: 'OM1', name: 'Ultra Hollywood Radiant', desc: 'Vibrant, high-luster camera brilliance', hex: '#fafafa' },
    { code: 'A1', name: 'Translucent Natural Pearl', desc: 'The gold standard in youthful natural enamel', hex: '#f6f2e9' },
    { code: 'B1', name: 'Sunlit Ivory Warmth', desc: 'Subtle warm luminescence with natural gradations', hex: '#ede6d8' },
    { code: 'A2', name: 'Classic Harmonic Tone', desc: 'Warm natural tooth restoration tone', hex: '#e4dccb' },
  ];

  return (
    <section id="smile-studio" className="py-24 bg-[#f6f1ea] text-[#2c2b29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#eee3d5] text-[#c06c52] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#c06c52]" />
            <span>Interactive Aesthetic Suite</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2c2b29] mb-4">
            Cosmetic Smile Studio
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            See how conservative porcelain artistry and digital smile simulation deliver symmetry, warmth, and lifelong confidence without looking artificial.
          </p>
        </div>

        {/* Interactive Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Before/After Split Viewer */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-3xl border border-[#eee3d5] shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-stone-500">
                Interactive Before / After Simulation
              </span>
              <span className="text-xs text-[#c06c52] font-semibold flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" />
                Drag to Compare
              </span>
            </div>

            {/* Split Image Canvas Area */}
            <div
              className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize group"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
                setSliderPos((x / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                if (e.touches.length > 0) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(rect.width, e.touches[0].clientX - rect.left));
                  setSliderPos((x / rect.width) * 100);
                }
              }}
            >
              {/* After Image (Full background) */}
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
                alt="After Smile Transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-[#3f6652]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                After: Porcelain Artistry
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                  alt="Before Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Before: Misaligned &amp; Discolored
                </div>
              </div>

              {/* Vertical Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#c06c52] shadow-lg flex items-center justify-center font-bold text-xs border border-[#eee3d5]">
                  ↔
                </div>
              </div>
            </div>

            {/* Slider Range Input for Accessibility */}
            <div className="mt-4 px-2">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="w-full h-2 bg-[#eee3d5] rounded-lg appearance-none cursor-pointer accent-[#c06c52]"
                aria-label="Before and After Smile Slider"
              />
            </div>
          </div>

          {/* Controls: Shade Selection & Treatment Specs */}
          <div className="lg:col-span-5 space-y-6">
            {/* Shade Selection Palette */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#eee3d5] shadow-lg">
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-1 flex items-center justify-between">
                <span>Porcelain Shade Customizer</span>
                <span className="text-xs font-sans font-bold text-[#c06c52] bg-[#f6f1ea] px-2.5 py-1 rounded-full">
                  Shade: {activeShade}
                </span>
              </h3>
              <p className="text-xs text-stone-500 mb-5">
                Every smile is hand-shaded in layered ceramic to match natural translucency and facial tones.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {shades.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => setActiveShade(s.code)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      activeShade === s.code
                        ? 'border-[#c06c52] ring-2 ring-[#c06c52]/20 bg-[#fbf9f6]'
                        : 'border-[#eee3d5] hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-5 h-5 rounded-full border border-stone-300 shadow-inner"
                        style={{ backgroundColor: s.hex }}
                      ></span>
                      <span className="font-bold text-xs text-stone-900">{s.code}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-stone-700 leading-tight">{s.name}</div>
                  </button>
                ))}
              </div>

              {/* Treatment Options */}
              <div className="space-y-3 pt-4 border-t border-[#eee3d5]">
                <span className="block text-xs uppercase font-bold text-stone-500 mb-2">Available Restorations</span>
                {[
                  { id: 'veneers', title: 'Minimal-Prep Porcelain Veneers', time: '2 Visits' },
                  { id: 'invisalign', title: 'Clear Aligner Orthodontics', time: '6–12 Mo' },
                  { id: 'whitening', title: 'In-Office Deep Laser Whitening', time: '60 Mins' }
                ].map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                      selectedTreatment === item.id ? 'bg-[#fbf9f6] border-[#c06c52]' : 'border-[#eee3d5] hover:bg-stone-50'
                    }`}
                    onClick={() => setSelectedTreatment(item.id)}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${selectedTreatment === item.id ? 'text-[#c06c52]' : 'text-stone-300'}`} />
                      <span className="text-xs font-semibold text-stone-800">{item.title}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-stone-500 bg-[#f6f1ea] px-2 py-0.5 rounded">
                      {item.time}
                    </span>
                  </label>
                ))}
              </div>

              {/* Consultation CTA */}
              <button
                onClick={onOpenModal}
                className="w-full mt-6 py-3.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white text-sm font-semibold shadow-md shadow-[#c06c52]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book Smile Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
