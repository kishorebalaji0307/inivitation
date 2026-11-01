import React, { useState, useRef } from 'react';
import WeddingIntro from './components/WeddingIntro';
import WeddingMusicPlayer from './components/WeddingMusicPlayer';
import WeddingHero from './components/WeddingHero';
import WeddingWelcome from './components/WeddingWelcome';
import WeddingDetails from './components/WeddingDetails';
import WeddingCountdown from './components/WeddingCountdown';
import WeddingVenue from './components/WeddingVenue';
import WeddingClosing from './components/WeddingClosing';
import {
  FloralGarlandTop,
  HangingBells,
  SideDiyas,
  FloatingPetals,
  SideKolamDots,
} from './components/TraditionalDecorations';

function App() {
  const [hasOpenedIntro, setHasOpenedIntro] = useState(false);
  const musicPlayerRef = useRef(null);

  return (
    <div className="relative min-h-screen bg-[#FFF8EC] text-[#45180D] overflow-x-hidden selection:bg-[#A83F25] selection:text-[#FFF8EC]">
      {/* South Indian Silk Curtain Opening Intro */}
      <WeddingIntro
        onOpenStart={() => musicPlayerRef.current?.startAudio()}
        onOpenComplete={() => setHasOpenedIntro(true)}
      />

      {/* Persistent Background Music Controller */}
      <WeddingMusicPlayer ref={musicPlayerRef} />

      {/* Global Traditional South Indian Wedding Accents */}
      <FloralGarlandTop />
      <HangingBells />
      <SideDiyas />
      <FloatingPetals />
      <SideKolamDots />

      {/* Main Sections in Exact Required Order */}
      <main className="relative z-10">
        {/* Section 1: Animated Wedding Hero */}
        <WeddingHero />

        {/* Section 2: Wedding Welcome */}
        <WeddingWelcome />

        {/* Section 3: Wedding Ceremony Details */}
        <WeddingDetails />

        {/* Section 4: Live Countdown Timer */}
        <WeddingCountdown />

        {/* Section 5: Wedding Venue with Google Maps */}
        <WeddingVenue />

        {/* Section 8: Final Invitation */}
        <WeddingClosing />
      </main>
    </div>
  );
}

export default App;
