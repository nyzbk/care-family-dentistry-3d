import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Calendar, ChevronDown, Heart, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStoryPhase, setActiveStoryPhase] = useState(0);

  const totalFrames = 60;
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(1);

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(totalFrames);

    // 1. Immediately load Frame 1 for instant paint (<100ms)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      images[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Smooth non-blocking progressive preload for remaining frames in background
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= totalFrames; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          images[idx - 1] = img;
        }
        if (nextIdx <= totalFrames) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    images[0] = firstImg;
    imagesRef.current = images;
  }, []);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Warm cinematic ambient glow overlay
    const gradient = ctx.createRadialGradient(
      canvasWidth * 0.5, canvasHeight * 0.4, 100,
      canvasWidth * 0.5, canvasHeight * 0.5, canvasWidth * 0.8
    );
    gradient.addColorStop(0, 'rgba(251, 249, 246, 0.08)');
    gradient.addColorStop(0.7, 'rgba(30, 34, 32, 0.35)');
    gradient.addColorStop(1, 'rgba(20, 24, 22, 0.7)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      renderFrame(frameNumber);

      if (progress < 0.35) {
        setActiveStoryPhase(0);
      } else if (progress < 0.72) {
        setActiveStoryPhase(1);
      } else {
        setActiveStoryPhase(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[450vh] bg-[#1e2220]">
      {/* Sticky Cinematic Screen */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Instant Non-blocking Load */}

        {/* Narrative Text Layer synchronized with scroll progress */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pointer-events-none">
          {/* Phase 0: 0% - 35% */}
          <div className={`transition-all duration-700 transform ${
            activeStoryPhase === 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95 pointer-events-none absolute inset-0 flex flex-col items-center justify-center'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-lg">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>Bixby & South Tulsa’s 100% Recommended Practice</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
              <span>580+ Verified Stories</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              Gentle Family Dentistry <br />
              <span className="italic font-normal text-amber-200">Reimagined Without Fear</span>
            </h1>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow">
              Welcome to a sunlit, peaceful sanctuary where Dr. Angie Nauman, Dr. Rachel Standlee, and Dr. Meghan Sellmeyer protect smiles with warmth, mastery, and soothing comfort.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white font-semibold text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                Schedule Family Consultation
              </button>
              <a
                href="#doctors"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-base border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Meet Your Doctors
              </a>
            </div>
          </div>

          {/* Phase 1: 35% - 72% */}
          <div className={`transition-all duration-700 transform ${
            activeStoryPhase === 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none absolute inset-0 flex flex-col items-center justify-center'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3f6652]/80 backdrop-blur-md border border-[#3f6652] text-emerald-100 text-xs sm:text-sm font-medium tracking-wide mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Three Doctors • One United Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              Dr. Nauman • Dr. Standlee <br />
              <span className="italic font-normal text-amber-200">&amp; Dr. Meghan Sellmeyer</span>
            </h2>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow">
              From pediatric preventive visits that children genuinely love, to master-crafted porcelain veneers and soothing twilight sedation—you are in compassionate hands.
            </p>

            <div className="pointer-events-auto">
              <a
                href="#doctors"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white font-semibold text-base shadow-xl transition-all duration-300"
              >
                <Heart className="w-4 h-4 fill-white" />
                View Doctor Credentials &amp; Philosophy
              </a>
            </div>
          </div>

          {/* Phase 2: 72% - 100% */}
          <div className={`transition-all duration-700 transform ${
            activeStoryPhase === 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none absolute inset-0 flex flex-col items-center justify-center'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Aesthetic Mastery &amp; Gentle Comfort</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md">
              A Lifetime of Healthy, <br />
              <span className="italic font-normal text-amber-200">Radiant Confidence</span>
            </h2>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow">
              Explore our interactive Smile Transformation Studio or discover how our Anxiety-Free Sedation protocol makes dental dread a distant memory.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <a
                href="#smile-studio"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-[#c06c52] hover:opacity-95 text-stone-900 font-semibold text-base shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-stone-900" />
                Explore Cosmetic Smile Studio
              </a>
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold text-base border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Reserve Bixby Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 pointer-events-none">
          <span className="text-xs uppercase tracking-[0.2em] font-medium drop-shadow">Scroll to Explore Sanctuary</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-amber-300" />
        </div>
      </div>
    </div>
  );
};
