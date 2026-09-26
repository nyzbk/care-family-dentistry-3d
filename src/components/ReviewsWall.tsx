import { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface Review {
  author: string;
  location: string;
  doctor: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

const REVIEWS: Review[] = [
  {
    author: "Carmela H.",
    location: "Bixby, OK",
    doctor: "Dr. Rachel Standlee",
    rating: 5,
    date: "August 2026",
    text: "“I cannot say enough positive things about the incredible care my daughter received! She had a baby tooth extracted and sealants placed without a single tear. We transferred our entire family to Care Family Dentistry. It’s the first dental practice my kids actually look forward to visiting.”",
    tag: "Pediatric Care"
  },
  {
    author: "Brenda M.",
    location: "South Tulsa, OK",
    doctor: "Dr. Meghan Sellmeyer",
    rating: 5,
    date: "July 2026",
    text: "“I suffered from overwhelming dental phobia for over 15 years—even smelling a clinical office made my heart race. Dr. Sellmeyer recommended mild conscious sedation. I rested peacefully under a warm blanket, and woke up with my crowns completely finished! Thank you for giving me my smile back.”",
    tag: "Conscious Sedation"
  },
  {
    author: "David S.",
    location: "Broken Arrow, OK",
    doctor: "Dr. Angie Nauman",
    rating: 5,
    date: "September 2026",
    text: "“Had two front teeth restored following a sports injury. Dr. Nauman is a true artist. The shading and contouring match my natural teeth so seamlessly that not even my family can tell. No rush, no pressure, just perfectionism.”",
    tag: "Restorative Aesthetics"
  },
  {
    author: "Jennifer & Mark W.",
    location: "Bixby, OK",
    doctor: "Full Clinical Team",
    rating: 5,
    date: "June 2026",
    text: "“We bring our family of five—ourselves and three energetic kids ages 4, 8, and 12. The front desk staff greets the kids by name, and the rooms look out over calm green trees. It feels like a peaceful wellness retreat. 100% recommend to all our neighbors.”",
    tag: "Family Wellness"
  }
];

export const ReviewsWall: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredReviews =
    filter === 'all'
      ? REVIEWS
      : REVIEWS.filter((r) => r.tag.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-cf-alabaster border-t border-cf-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-3 font-body">
              Verified Patient Recommendations
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
              Community stories from <br />
              <span className="text-cf-slate font-normal">Bixby &amp; South Tulsa families.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 font-body">
            {[
              { id: 'all', label: 'All Stories' },
              { id: 'pediatric', label: 'Pediatric Care' },
              { id: 'sedation', label: 'Conscious Sedation' },
              { id: 'restorative', label: 'Restorative Care' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                type="button"
                className={`text-xs font-semibold py-2 px-4 rounded-full transition-all ${
                  filter === tab.id
                    ? 'bg-cf-forest text-cf-alabaster shadow-sm'
                    : 'bg-white text-cf-slate border border-cf-mist hover:bg-cf-mist/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-cf-mist rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-cf-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cf-gold text-cf-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cf-forest bg-cf-mist px-3 py-1 rounded-full font-body">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-normal text-cf-forest/90 leading-relaxed mb-6 italic font-body">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-cf-mist flex items-center justify-between font-body">
                <div>
                  <h4 className="text-sm font-bold text-cf-forest font-display flex items-center gap-1.5">
                    <span>{rev.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-cf-gold" />
                  </h4>
                  <p className="text-xs text-cf-slate mt-0.5">
                    {rev.location} &bull; {rev.doctor}
                  </p>
                </div>
                <span className="text-[11px] text-cf-slate/60">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
