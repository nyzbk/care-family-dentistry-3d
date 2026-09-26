import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorsSection } from './components/DoctorsSection';
import { AnxietyFreeCompass } from './components/AnxietyFreeCompass';
import { ReviewsWall } from './components/ReviewsWall';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cf-alabaster text-cf-forest selection:bg-cf-gold/30 selection:text-cf-forest">
      <Navbar />
      <main>
        <Hero totalFrames={60} />
        <DoctorsSection />
        <AnxietyFreeCompass />
        <ReviewsWall />
        <LocationHours />
      </main>
      <Footer />
    </div>
  );
}

export default App;
