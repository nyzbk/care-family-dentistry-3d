import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const FRAME_COUNT = 240;

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);

  // Magnetic button refs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonInnerRef = useRef<HTMLSpanElement>(null);

  // Preload images: frame 1 first, rest in batches of 10
  useEffect(() => {
    const imageArray: HTMLImageElement[] = new Array(FRAME_COUNT);

    const loadImage = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNum = String(i + 1).padStart(4, '0');
        img.src = `/frames/frame_${frameNum}.webp`;
        img.onload = () => {
          imageArray[i] = img;
          if (i === 0) {
            imagesRef.current = imageArray;
            setFirstFrameReady(true);
          }
          resolve();
        };
        img.onerror = () => {
          resolve();
        };
      });
    };

    const loadAll = async () => {
      await loadImage(0);
      const batchSize = 10;
      for (let batch = 1; batch < FRAME_COUNT; batch += batchSize) {
        const promises: Promise<void>[] = [];
        for (let i = batch; i < Math.min(batch + batchSize, FRAME_COUNT); i++) {
          promises.push(loadImage(i));
        }
        await Promise.all(promises);
        imagesRef.current = [...imageArray];
      }
    };

    loadAll();
  }, []);

  // Resize canvas to window dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Render loop with spring smoothing (stiffness: 100, damping: 30)
  useEffect(() => {
    if (!firstFrameReady) return;

    let animId: number;
    let targetProgress = 0;
    let smoothProgress = 0;
    let lastRenderedIndex = -1;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      targetProgress = p;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const render = () => {
      // Spring lerp interpolation
      smoothProgress += (targetProgress - smoothProgress) * 0.085;
      setCurrentProgress(smoothProgress);

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const rawIndex = smoothProgress * (FRAME_COUNT - 1);
          const index = Math.min(Math.max(Math.round(rawIndex), 0), FRAME_COUNT - 1);

          if (index !== lastRenderedIndex) {
            let img = imagesRef.current[index];
            if (!img) {
              // Nearest loaded frame fallback
              for (let offset = 1; offset < FRAME_COUNT; offset++) {
                if (imagesRef.current[index - offset]) {
                  img = imagesRef.current[index - offset];
                  break;
                }
                if (imagesRef.current[index + offset]) {
                  img = imagesRef.current[index + offset];
                  break;
                }
              }
            }

            if (img) {
              const cw = canvas.width;
              const ch = canvas.height;
              const iw = img.width;
              const ih = img.height;

              // COVER algorithm: fills entire viewport seamlessly
              const scale = Math.max(cw / iw, ch / ih);
              const dw = iw * scale;
              const dh = ih * scale;
              const ox = (cw - dw) / 2;
              const oy = (ch - dh) / 2;

              ctx.clearRect(0, 0, cw, ch);
              ctx.drawImage(img, ox, oy, dw, dh);
              lastRenderedIndex = index;
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [firstFrameReady]);

  // Magnetic button physics
  useEffect(() => {
    const btn = buttonRef.current;
    const inner = buttonInnerRef.current;
    if (!btn || !inner) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate3d(${dx * 0.32}px, ${dy * 0.45}px, 0)`;
      inner.style.transform = `translate3d(${dx * 0.15}px, ${dy * 0.20}px, 0)`;
    };

    const onMouseLeave = () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
      inner.style.transform = 'translate3d(0, 0, 0)';
    };

    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Opacity helper for 4 text stages
  const getStageOpacity = (start: number, end: number) => {
    if (currentProgress < start || currentProgress > end) return 0;
    const midStart = start + 0.05;
    const midEnd = end - 0.05;
    if (currentProgress < midStart) return (currentProgress - start) / 0.05;
    if (currentProgress > midEnd) return (end - currentProgress) / 0.05;
    return 1;
  };

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#FAF9F6] selection:bg-[#489987]/20">
      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Fullscreen Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* 12-Column Architectural Hairline Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 hidden md:block opacity-[0.04]">
          <div className="mx-auto max-w-[1440px] h-full px-10 grid grid-cols-12 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-[#1E3A34] last:border-r h-full" />
            ))}
          </div>
        </div>

        {/* Gradient Vignette for Readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-[#FAF9F6]/40" />

        {/* Top Bar Telemetry */}
        <div className="relative z-20 mx-auto max-w-[1440px] w-full px-6 md:px-10 pt-24 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A34]/5 backdrop-blur-md border border-[#1E3A34]/10 text-[11px] font-sans font-medium text-[#1E3A34]">
            <span className="w-2 h-2 rounded-full bg-[#489987] animate-pulse" />
            <span>CLINICAL WELLNESS SANCTUARY — 240 FPS SCENE</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[12px] font-sans text-[#1E3A34]/60">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#489987]" /> 580+ Verified 5-Star Reviews</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#489987]" /> Mon-Fri: 7:30am - 6:00pm</span>
          </div>
        </div>

        {/* Dynamic Text Stages */}
        <div className="relative z-20 mx-auto max-w-[1440px] w-full px-6 md:px-10 my-auto pointer-events-none">
          {/* Stage 1: 0.0 - 0.22 */}
          <div
            style={{ opacity: getStageOpacity(0.0, 0.22) }}
            className="transition-opacity duration-300 max-w-2xl"
          >
            <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-3">
              BIXBY & SOUTH TULSA, OK
            </div>
            <h1 className="font-serif text-[42px] md:text-[68px] lg:text-[76px] leading-[0.92] tracking-[-0.03em] text-[#1E3A34]">
              Where dental care feels like sanctuary.
            </h1>
            <p className="mt-4 text-[16px] md:text-[19px] text-[#4F615D] font-light max-w-lg leading-relaxed">
              No cold clinic stress. Pure Scandinavian calm, warm sedation wellness, and gentle care for all generations.
            </p>
          </div>

          {/* Stage 2: 0.25 - 0.48 */}
          <div
            style={{ opacity: getStageOpacity(0.25, 0.48) }}
            className="transition-opacity duration-300 max-w-2xl ml-auto text-right"
          >
            <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-3">
              THREE DOCTORS • ONE FAMILY
            </div>
            <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[72px] leading-[0.92] tracking-[-0.03em] text-[#1E3A34]">
              Gentle hands.<br />
              <span className="italic font-light opacity-80">Absolute precision.</span>
            </h2>
            <p className="mt-4 text-[16px] md:text-[19px] text-[#4F615D] font-light max-w-lg ml-auto leading-relaxed">
              Dr. Angie Nauman, Dr. Rachel Standlee, and Dr. Meghan Sellmeyer — dedicated to restoring your smile with gentle care.
            </p>
          </div>

          {/* Stage 3: 0.51 - 0.74 */}
          <div
            style={{ opacity: getStageOpacity(0.51, 0.74) }}
            className="transition-opacity duration-300 max-w-2xl"
          >
            <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-3">
              ZERO-ANXIETY SEDATION
            </div>
            <h2 className="font-serif text-[40px] md:text-[64px] lg:text-[72px] leading-[0.92] tracking-[-0.03em] text-[#1E3A34]">
              Relax completely while we work.
            </h2>
            <p className="mt-4 text-[16px] md:text-[19px] text-[#4F615D] font-light max-w-lg leading-relaxed">
              Heated contour chairs, noise-canceling headsets, and customizable sedation protocols that make appointments a breeze.
            </p>
          </div>

          {/* Stage 4: 0.77 - 0.98 */}
          <div
            style={{ opacity: getStageOpacity(0.77, 0.98) }}
            className="transition-opacity duration-300 max-w-2xl mx-auto text-center pointer-events-auto"
          >
            <div className="text-[12px] font-sans tracking-[0.2em] uppercase text-[#489987] font-semibold mb-3">
              WELCOME TO CAREFREE HEALTH
            </div>
            <h2 className="font-serif text-[44px] md:text-[68px] lg:text-[76px] leading-[0.92] tracking-[-0.03em] text-[#1E3A34]">
              Your smile starts here.
            </h2>
            <p className="mt-4 text-[16px] md:text-[19px] text-[#4F615D] font-light max-w-lg mx-auto leading-relaxed">
              Accepting new family and cosmetic patients across Bixby, Broken Arrow, and South Tulsa.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                ref={buttonRef}
                onClick={() => {
                  const cta = document.getElementById('contact');
                  cta?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center gap-4 bg-[#1E3A34] text-[#FAF9F6] rounded-full pl-8 pr-3 h-[58px] font-sans text-[13px] tracking-[0.14em] uppercase transition-colors hover:bg-[#142723]"
              >
                <span ref={buttonInnerRef} className="inline-flex items-center gap-4">
                  Schedule Your Visit
                  <span className="w-10 h-10 rounded-full bg-[#489987] text-[#FAF9F6] grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar Indicator */}
        <div className="relative z-20 mx-auto max-w-[1440px] w-full px-6 md:px-10 pb-8 flex items-center justify-between pointer-events-none">
          <div className="text-[11px] font-sans tracking-widest uppercase text-[#1E3A34]/50">
            Scroll to explore sanctuary
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#1E3A34]/40">
              FRAME {Math.min(Math.round(currentProgress * 239) + 1, 240)} / 240
            </span>
            <div className="w-24 h-1 bg-[#1E3A34]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#489987] transition-all duration-75"
                style={{ width: `${Math.round(currentProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
