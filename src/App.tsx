import { useState } from 'react';
import { Header } from './components/Header/Header';
import { MobileMenu } from './components/Header/MobileMenu';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Games } from './components/Games/Games';
import { GamingUniverse } from './components/Gaming/GamingUniverse';
import { WalletSection } from './components/Wallet/WalletSection';
import { Footer } from './components/Footer/Footer';

/*
// In the case of no video background
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Header />
      <Hero />
      <Features />
      <Games />
      <GamingUniverse />
      <WalletSection />
      <Footer />
    </div>

  );
}
*/

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="relative h-screen">
        {/* Video Background with Fallback Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/lucas-santos-wdg8yu362gQ-unsplash.jpg.jpg')" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/home.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Content */}
        <div className="relative z-10 pt-16 md:pt-0">
          <Hero />
        </div>
      </div>

      {/* Rest of the content with gradient background */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <Features />
        <Games />
        <GamingUniverse />
        <WalletSection />
        <Footer />
      </div>
    </div>
  );
}
