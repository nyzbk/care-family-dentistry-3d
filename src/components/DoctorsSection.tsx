import React from 'react';
import { Award, CheckCircle2, Calendar } from 'lucide-react';

interface Doctor {
  name: string;
  role: string;
  credentials: string;
  image: string;
  quote: string;
  focus: string[];
  bio: string;
}

const DOCTORS: Doctor[] = [
  {
    name: "Dr. Angie Nauman",
    role: "Lead Dentist & Founder",
    credentials: "DDS &bull; University of Oklahoma College of Dentistry",
    image: "/doctors/dr-nauman.webp",
    quote: "“We founded our practice for families who put off dental care out of fear. From the moment you walk through our doors, you are listened to, respected, and safe.”",
    focus: ["Preventive Family Wellness", "Aesthetic Ceramic Restorations", "Comprehensive Treatment Planning"],
    bio: "With over 15 years of clinical practice in Oklahoma, Dr. Nauman specializes in gentle, restorative dentistry that restores function and natural self-confidence."
  },
  {
    name: "Dr. Rachel L. Standlee",
    role: "Pediatric & Family Dentist",
    credentials: "DDS &bull; American Dental Association (ADA) & OkDA Member",
    image: "/doctors/dr-standlee.webp",
    quote: "“Children should never fear the dentist. Our approach is grounded in play, patience, and eliminating scary sounds or intimidating instruments.”",
    focus: ["Gentle Pediatric Care", "Tell-Show-Do Fearless Adaptation", "Early Preventive Guidance"],
    bio: "Loved by young families across Bixby and Jenks. Dr. Standlee turns first visits into enjoyable adventures using patient, child-led pacing and positive reinforcement."
  },
  {
    name: "Dr. Meghan Sellmeyer",
    role: "Sedation & Restorative Specialist",
    credentials: "DDS &bull; Advanced Nitrous & Oral Conscious Sedation Certified",
    image: "/doctors/dr-sellmeyer.webp",
    quote: "“If severe dental anxiety has kept you away for years, our sedation options let you comfortably rest while we take complete care of your smile.”",
    focus: ["Conscious Sedation Protocols", "Gentle Extractions & Implants", "High-Anxiety Patient Relief"],
    bio: "Specializes in supporting patients with sensitive gag reflexes or traumatic past dental experiences. Hundreds of complex smiles comfortably renewed."
  }
];

export const DoctorsSection: React.FC = () => {
  return (
    <section id="doctors" className="scroll-mt-20 py-28 sm:py-36 bg-cf-alabaster border-t border-cf-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Pure Typographic Scale, No Pill Badges */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="block text-xs uppercase tracking-[0.25em] font-semibold text-cf-gold mb-3 font-body">
            Three Resident Clinicians
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-semibold text-cf-forest tracking-tight leading-[1.15]">
            Trusted by three generations <br />
            <span className="text-cf-slate font-normal">of Bixby &amp; South Tulsa families.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-cf-slate font-normal leading-relaxed font-body">
            At Care Family Dentistry, every procedure is performed by licensed resident doctors who prioritize emotional ease as much as clinical precision. We never rush appointments, never lecture, and always keep you in full control.
          </p>
        </div>

        {/* Doctors Editorial Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {DOCTORS.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-cf-mist rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Doctor Portrait */}
                <div className="relative aspect-square w-full overflow-hidden bg-cf-mist/30">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Doctor Details */}
                <div className="p-8">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-display font-semibold text-cf-forest tracking-tight">
                      {doc.name}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-cf-gold mt-1 uppercase tracking-wider font-body">
                    {doc.role}
                  </p>
                  <p
                    className="text-xs text-cf-slate/80 mt-1 pb-4 border-b border-cf-mist font-body"
                    dangerouslySetInnerHTML={{ __html: doc.credentials }}
                  />

                  <blockquote className="my-5 text-sm italic font-medium text-cf-forest/90 leading-relaxed bg-cf-alabaster p-4 rounded-2xl border-l-2 border-cf-gold font-body">
                    {doc.quote}
                  </blockquote>

                  <p className="text-xs sm:text-sm text-cf-slate font-normal leading-relaxed mb-6 font-body">
                    {doc.bio}
                  </p>

                  <div className="pt-4 border-t border-cf-mist">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cf-forest mb-3 font-body">
                      Clinical Focus:
                    </p>
                    <ul className="space-y-2 font-body">
                      {doc.focus.map((item, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-cf-slate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cf-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0">
                <a
                  href="https://www.carefamilydentistrybixby.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-cf-forest/20 text-cf-forest hover:bg-cf-forest hover:text-cf-alabaster text-xs font-semibold transition-all text-center flex items-center justify-center gap-2 font-body"
                >
                  <Calendar className="w-3.5 h-3.5 text-cf-gold" />
                  <span>Schedule Consultation</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Trust Banner */}
        <div className="mt-20 bg-cf-forest text-cf-alabaster rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-cf-gold/20 flex items-center justify-center text-cf-gold shrink-0 border border-cf-gold/30">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-display font-semibold">
                100% Patient Recommendation Rate
              </h4>
              <p className="text-xs sm:text-sm text-cf-alabaster/80 mt-1 font-body">
                Verified across 581 independent patient recommendations and 5-star community reviews.
              </p>
            </div>
          </div>

          <a
            href="#reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cf-gold text-cf-forest font-semibold text-xs uppercase tracking-wider hover:bg-cf-gold/90 transition-all shrink-0 shadow font-body"
          >
            <span>Read Patient Stories</span>
          </a>
        </div>
      </div>
    </section>
  );
};
