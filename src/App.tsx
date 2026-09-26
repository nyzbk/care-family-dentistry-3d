import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureWidget } from './components/SignatureWidget';
import { DoctorsSection } from './components/DoctorsSection';
import { SmileStudioSection } from './components/SmileStudioSection';
import { SedationSanctuarySection } from './components/SedationSanctuarySection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState<string | undefined>(undefined);

  const handleOpenModal = () => {
    setPreselectedDoctor(undefined);
    setModalOpen(true);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E3A34] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#E8A87C]/30 selection:text-[#1E3A34]">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Section 1: 60 continuous motion frames hero */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Section 2: Bespoke Comfort Estimator Signature Widget */}
        <SignatureWidget onOpenBooking={handleOpenModal} />

        {/* Section 3: Three Doctors Roster & Clinical Philosophies */}
        <DoctorsSection onSelectDoctor={handleSelectDoctor} />

        {/* Section 4: Interactive Cosmetic Smile Transformation Studio */}
        <SmileStudioSection onOpenModal={handleOpenModal} />

        {/* Section 5: Anxiety-Free Sedation & Comfort Sanctuary */}
        <SedationSanctuarySection onOpenModal={handleOpenModal} />

        {/* Section 6: Comprehensive Care Services */}
        <ServicesSection onOpenModal={handleOpenModal} />

        {/* Section 7: 100% Patient Recommendations & Real Stories */}
        <ReviewsSection />

        {/* Section 8: Bixby Office Location, Hours & Direct Contact */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Appointment Concierge Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedDoctor={preselectedDoctor}
      />
    </div>
  );
}

export default App;
