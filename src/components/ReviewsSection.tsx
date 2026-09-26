import React from 'react';
import { REVIEWS } from '../data/careData';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#fbf9f6] text-[#2c2b29] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with 580+ recommendations badge */}
        <div className="bg-gradient-to-r from-[#c06c52] to-[#ab593f] rounded-3xl p-8 sm:p-12 text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-3">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>Verified Facebook &amp; Google Community Rating</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
                100% Recommended by 580+ Families
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl">
                In an era of corporate dental chains, Bixby and Tulsa families choose our independent practice for genuine relationships and gentle care.
              </p>
            </div>

            <div className="flex items-center gap-6 shrink-0 bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20">
              <div className="text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-amber-200">5.0</span>
                <div className="flex items-center justify-center gap-1 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <span className="text-xs text-white/80 font-medium">581+ Reviews</span>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <span className="block font-serif text-4xl sm:text-5xl font-bold text-amber-200">100%</span>
                <span className="text-xs text-white/80 font-medium mt-1 block">Recommendation Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-[#eee3d5] shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#3f6652] bg-[#e1ede6] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    {rev.badge}
                  </span>
                </div>

                <p className="font-serif italic text-base sm:text-lg text-stone-800 leading-snug mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#eee3d5] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">{rev.author}</span>
                  <span className="text-stone-500">{rev.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#c06c52] font-semibold block">{rev.doctor}</span>
                  <span className="text-stone-400 text-[10px]">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
