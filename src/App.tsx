import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HorizontalWorks } from './components/HorizontalWorks';
import { InteractiveBento } from './components/InteractiveBento';
import { KineticMarquee } from './components/KineticMarquee';
import { DoctorsSection } from './components/DoctorsSection';
import { MagneticCTA } from './components/MagneticCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E3A34] selection:bg-[#489987]/30 selection:text-[#1E3A34] overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <HorizontalWorks />
        <InteractiveBento />
        <KineticMarquee />
        <DoctorsSection />
      </main>
      <MagneticCTA />
    </div>
  );
}

export default App;
