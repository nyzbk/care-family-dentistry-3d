import React, { useState } from 'react';
import { X, Calendar, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor
}) => {
  const [doctor, setDoctor] = useState(preselectedDoctor || 'First Available Doctor');
  const [service, setService] = useState('Gentle Cleaning & Checkup');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comfortPreference, setComfortPreference] = useState('Standard Gentle Care');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c06c52', '#3f6652', '#bfa16a', '#f6f1ea']
      });
    } catch {
      // Canvas confetti fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fbf9f6] w-full max-w-lg rounded-3xl border border-[#eee3d5] shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-800 hover:bg-[#eee3d5] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f6f1ea] border border-[#eee3d5] text-[#c06c52] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Personalized Dental Concierge</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Reserve Your Family Visit
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                7810 E 121st St S, Bixby • (918) 299-7750
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Select Your Preferred Doctor
                </label>
                <select
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#eee3d5] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c06c52]"
                >
                  <option value="First Available Doctor">First Available Doctor</option>
                  <option value="Dr. Angie Nauman, DDS">Dr. Angie Nauman, DDS (Restorative &amp; Implants)</option>
                  <option value="Dr. Rachel L. Standlee, DDS">Dr. Rachel L. Standlee, DDS (Family &amp; Anxious Patients)</option>
                  <option value="Dr. Meghan Sellmeyer, DDS">Dr. Meghan Sellmeyer, DDS (Cosmetic &amp; Sedation)</option>
                </select>
              </div>

              {/* Service Requested */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Care Focus
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#eee3d5] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c06c52]"
                >
                  <option value="Gentle Cleaning & Checkup">Gentle Cleaning &amp; Prevention</option>
                  <option value="Cosmetic Veneer Consultation">Cosmetic Veneers / Smile Makeover</option>
                  <option value="Anxiety-Free Sedation Visit">Anxiety-Free Sedation Treatment</option>
                  <option value="Dental Implant Consultation">Dental Implant Replacement</option>
                  <option value="Pediatric Family Visit">Children &amp; Pediatric Care</option>
                  <option value="Urgent Dental Emergency">Urgent Emergency Pain Relief</option>
                </select>
              </div>

              {/* Comfort Preferences */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#3f6652]" />
                  <span>Comfort &amp; Anxiety Comfort Level</span>
                </label>
                <select
                  value={comfortPreference}
                  onChange={(e) => setComfortPreference(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#eee3d5] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c06c52]"
                >
                  <option value="Standard Gentle Care">Standard Gentle Care with Warm Towels</option>
                  <option value="Nitrous Oxide Relaxation">I would like Nitrous Oxide (Laughing Gas)</option>
                  <option value="Oral Conscious Twilight Sedation">I would like Oral Twilight Sedation (Dental Fear)</option>
                  <option value="Headphones & Weighted Blanket">Noise-Canceling Headphones &amp; Weighted Blanket</option>
                </select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 rounded-xl border border-[#eee3d5] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c06c52]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(918) 555-0123"
                    className="w-full px-4 py-2 rounded-xl border border-[#eee3d5] bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#c06c52]"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#c06c52] hover:bg-[#ab593f] text-white font-semibold text-sm shadow-lg shadow-[#c06c52]/25 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>
                <p className="text-[11px] text-center text-stone-500 mt-2">
                  Our Bixby concierge team confirms your booking within 2 business hours.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#e1ede6] text-[#3f6652] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Thank You, {name || 'Valued Patient'}!
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Your appointment request with <strong>{doctor}</strong> for <strong>{service}</strong> has been received by our Bixby team.
            </p>
            <div className="bg-[#f6f1ea] p-4 rounded-2xl text-xs text-stone-700 max-w-xs mx-auto">
              Comfort Level: <strong>{comfortPreference}</strong>
              <div className="text-[10px] text-stone-500 mt-1">Direct Line: (918) 299-7750</div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Return to Experience
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
