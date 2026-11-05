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
  FloatingPetals,
  LavenderCornerFlorals,
} from './components/TraditionalDecorations';

function App() {
  const [hasOpenedIntro, setHasOpenedIntro] = useState(false);
  const musicPlayerRef = useRef(null);

  return (
    <div className="relative min-h-screen bg-[#FAF6FD] text-[#3E2356] overflow-x-hidden selection:bg-[#7C5295] selection:text-[#FAF6FD]">
      {/* South Indian Royal Silk Curtain Opening Intro Screen */}
      <WeddingIntro
        onOpenStart={() => musicPlayerRef.current?.startAudio()}
        onOpenComplete={() => setHasOpenedIntro(true)}
      />

      {/* Persistent Background Music Controller */}
      <WeddingMusicPlayer ref={musicPlayerRef} />

      {/* Global Lavender & Botanical Accents */}
      <LavenderCornerFlorals />
      <FloatingPetals />

      {/* Main Sections in Exact Required Order */}
      <main className="relative z-10">
        {/* Section 1: Animated Wedding Hero */}
        <WeddingHero />

        {/* Section 2: Wedding Welcome & Couple Portrait */}
        <WeddingWelcome />

        {/* Section 3: Dual Event Wedding Details (Marriage & Reception) */}
        <WeddingDetails />

        {/* Section 4: Live Countdown Timer to Marriage */}
        <WeddingCountdown />

        {/* Section 5: Dual Wedding Venues with Google Maps */}
        <WeddingVenue />

        {/* Section 6: Final Wedding Closing Invitation */}
        <WeddingClosing />
      </main>
    </div>
  );
}

export default App;
