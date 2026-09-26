import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Calendar, ArrowRight } from 'lucide-react';

interface HeroProps {
  totalFrames?: number;
}

export const Hero: React.FC<HeroProps> = ({ totalFrames = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  // Preload frames in non-blocking background queue
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    // Load frame 1 first for instant paint
    const firstImg = new Image();
    firstImg.src = '/frames/frame_0001.webp';
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      loadedCount++;
      // Draw first frame immediately
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(firstImg, 0, 0, canvas.width, canvas.height);
        }
      }

      // Load remaining frames asynchronously
      for (let i = 2; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(4, '0');
        img.src = `/frames/frame_${frameNum}.webp`;
        img.onload = () => {
          loadedImages[i - 1] = img;
          loadedCount++;
          if (loadedCount === totalFrames) {
            setImages(loadedImages);
          }
        };
      }
    };
  }, [totalFrames]);

  // Scrub frames on scroll
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollHeight, 0), 1);

      const frameIndex = Math.min(
        Math.floor(progress * totalFrames),
        totalFrames - 1
      );

      setCurrentFrameIndex(frameIndex);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx && images[frameIndex]) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, totalFrames]);

  // Phase calculation
  const progressRatio = currentFrameIndex / (totalFrames - 1);

  return (
    <section id="hero" ref={containerRef} className="relative h-[280vh] bg-cf-alabaster">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background Visual Canvas */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-[0.98] contrast-[1.02]"
        />

        {/* Ambient Subtle Vignette for Typographic Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-cf-alabaster/90 via-transparent to-cf-forest/20 pointer-events-none z-10" />

        {/* Top Space Reservation for Nav */}
        <div className="relative z-20 pt-28 px-6 max-w-7xl mx-auto w-full pointer-events-none" />

        {/* Pure Architectural Monograph Typography (Kinfolk / Aman Style) */}
        <div className="relative z-20 px-6 max-w-3xl mx-auto w-full text-center pb-8 flex-1 flex flex-col justify-center pointer-events-none">
          {/* Phase 1: Atrium Entrance (0% - 34%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio < 0.35
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-cf-alabaster/80 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-cf-mist/80 shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-2 font-body">
                Bixby &bull; South Tulsa Dental Sanctuary
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
                Dentistry designed to <br className="hidden sm:inline" />
                <span>dissolve dental fear.</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-cf-slate max-w-md mx-auto font-normal font-body leading-relaxed">
                Warm Scandinavian white oak, peaceful garden suites, and unhurried care from three resident women doctors in Bixby.
              </p>
            </div>
          </div>

          {/* Phase 2: Glide into Garden Suite (35% - 71%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio >= 0.35 && progressRatio < 0.72
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-cf-alabaster/80 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-cf-mist/80 shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-2 font-body">
                Sensory Sanctuary &bull; Treatment Suites
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
                Quiet comfort, heated blankets, <br className="hidden sm:inline" />
                <span>&amp; unhurried appointments.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cf-slate max-w-md mx-auto font-normal font-body leading-relaxed">
                Ergonomic leather seating overlooking peaceful wooded grounds. Slip on noise-cancelling headphones and truly unwind.
              </p>
            </div>
          </div>

          {/* Phase 3: Arrival at Founders (72% - 100%) */}
          <div
            className={`transition-all duration-700 transform ${
              progressRatio >= 0.72
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6 pointer-events-none absolute'
            }`}
          >
            <div className="bg-cf-alabaster/80 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-3xl border border-cf-mist/80 shadow-sm inline-block max-w-xl mx-auto pointer-events-auto">
              <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-2 font-body">
                Three Resident Founders
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
                Drs. Nauman, <br className="hidden sm:inline" />
                <span>Standlee &amp; Sellmeyer.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cf-slate max-w-md mx-auto font-normal font-body leading-relaxed">
                Family dentistry without judgment, gentle pediatric adaptation, and warm conscious sedation options.
              </p>
            </div>
          </div>
        </div>

        {/* Minimal Grounded Bar (Subtractive Restraint) */}
        <div className="relative z-30 pb-6 px-6 max-w-3xl mx-auto w-full">
          <div className="bg-cf-alabaster/95 backdrop-blur-md border border-cf-mist rounded-2xl p-4 sm:p-5 shadow-md flex items-center justify-between gap-4">
            <div className="text-left font-body">
              <p className="text-xs uppercase tracking-wider font-semibold text-cf-gold">
                New Patient Welcome
              </p>
              <p className="text-sm font-medium text-cf-forest font-display">
                Comprehensive exam, gentle cleaning &amp; personalized comfort plan
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://www.carefamilydentistrybixby.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cf-forest text-cf-alabaster text-xs font-semibold hover:bg-cf-forest/90 transition-all shadow-sm group"
              >
                <Calendar className="w-3.5 h-3.5 text-cf-gold" />
                <span>Schedule Visit</span>
                <ArrowRight className="w-3.5 h-3.5 text-cf-mist group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quiet Scroll Cue */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-cf-slate/60 mt-2.5 font-body">
            <span>Scroll to tour the sanctuary</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cf-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};
