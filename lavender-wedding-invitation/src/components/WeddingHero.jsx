import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { BananaLeavesDecor } from './TraditionalDecorations';



/* ──────────────────────────────────────────────
   Ornamental horizontal divider
   ────────────────────────────────────────────── */
function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
      <svg viewBox="0 0 48 20" className="w-10 sm:w-12 h-4 sm:h-5 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#D6A84F" />
        <circle cx="24" cy="1" r="1.5" fill="#A83F25" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#D6A84F" strokeWidth="1.2" opacity="0.7" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
    </div>
  );
}

export default function WeddingHero() {
  const { couple, event, venue } = weddingData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.0, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between pt-14 sm:pt-16 pb-20 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-[#FFF8EC]">

      {/* ── FULL BACKGROUND BRIDE & GROOM PHOTO ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src={couple.heroBackground || '/images/hero-bg-couple.jpg'}
          alt={couple.altText}
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Subtle light overlay to guarantee readability while preserving photo appearance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8EC]/65 via-[#FFF8EC]/35 to-[#FFF8EC]/85" />
      </div>

      {/* ── MAIN FOREGROUND CONTENT ── */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center w-full my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── "The Auspicious Moment" Sub-header ── */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-sm italic text-[#8C4B1A] tracking-[0.24em] font-semibold mb-2 sm:mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            // textShadow: '0 1px 4px rgba(255, 248, 236, 0.95), 0 0 10px rgba(255, 248, 236, 0.9)',
          }}
        >
          ✦ &nbsp; The Auspicious Moment &nbsp; ✦
        </motion.p>

        {/* ── COUPLE NAMES (Guaranteed Single-Line Without Awkward Wrap) ── */}
        <motion.div variants={fadeUp} className="w-full px-2">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8C2815] leading-tight tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Cinzel', 'Marcellus', Georgia, serif",
              // textShadow: '0 2px 10px rgba(255, 248, 236, 0.95), 0 0 18px rgba(255, 248, 236, 0.9)',
            }}
          >
            {couple.groom}
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="my-0.5 text-2xl sm:text-4xl md:text-5xl text-[#B8860B] font-light"
          style={{
            fontFamily: "'Great Vibes', cursive",
            // textShadow: '0 2px 8px rgba(255, 248, 236, 0.95)',
          }}
        >
          &amp;
        </motion.div>

        <motion.div variants={fadeUp} className="w-full px-2">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#8C2815] leading-tight tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Cinzel', 'Marcellus', Georgia, serif",
              // textShadow: '0 2px 10px rgba(255, 248, 236, 0.95), 0 0 18px rgba(255, 248, 236, 0.9)',
            }}
          >
            {couple.bride}
          </h1>
        </motion.div>

        {/* ── DATE CARD ── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          className="mt-6 sm:mt-8 inline-flex flex-col items-center px-6 sm:px-12 py-4 sm:py-6 rounded-3xl shadow-[0_16px_40px_-10px_rgba(168,63,37,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] text-[#FFF8EC] max-w-[92vw] sm:max-w-none"
          style={{
            background: 'linear-gradient(160deg, #B84530 0%, #8C321C 45%, #6B2418 100%)',
            border: '2px solid #D6A84F',
          }}
        >
          {/* Mini temple motif */}
          <svg viewBox="0 0 26 18" className="w-5 h-3.5 sm:w-6 sm:h-4 mb-1" fill="#D6A84F" opacity="0.9">
            <path d="M13 0 L15 5 H11 Z" />
            <path d="M7 6 L19 6 L21 11 L5 11 Z" opacity="0.85" />
            <rect x="0" y="12" width="26" height="3" rx="1" opacity="0.6" />
          </svg>

          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-[#F5D68A] mb-0.5 font-serif">
            {event.dayOfWeek}
          </p>
          <p
            className="text-4xl sm:text-6xl md:text-7xl font-black leading-none text-white drop-shadow-md my-0.5"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {event.dayNumber}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#F5D68A] font-semibold font-serif">
              {event.monthYear}
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
          </div>
          <p className="text-[11px] sm:text-xs mt-1 text-[#FFCC77]/95 tracking-wider font-serif">
            {event.muhurthamTime}
          </p>
        </motion.div>

        {/* ── Gold Divider ── */}
        <motion.div variants={fadeUp} className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-7">
          <GoldDivider />
        </motion.div>

        {/* ── Venue subtitle ── */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-base text-[#7A4826] font-serif italic mt-3 tracking-wide max-w-sm mx-auto leading-relaxed px-4"
          style={{
            textShadow: '0 1px 4px rgba(255, 248, 236, 0.95)',
          }}
        >
          {venue.name}, {venue.hall}
        </motion.p>
      </motion.div>

      {/* ── 3. BANANA LEAVES & KUTHUVILAKKU ── */}
      <BananaLeavesDecor />

      {/* Left Kuthuvilakku Lamp */}
      <div className="absolute bottom-2 sm:bottom-4 left-1.5 sm:left-6 z-10 pointer-events-none scale-75 sm:scale-100 origin-bottom-left" aria-hidden="true">
        <svg width="44" height="76" viewBox="0 0 52 88" fill="none" className="sm:w-[52px] sm:h-[88px]">
          <path d="M26 4 C24 10 21 14 26 22 C31 14 28 10 26 4 Z" fill="#F59E0B" className="animate-gentle-glow" />
          <ellipse cx="26" cy="22" rx="4.5" ry="2" fill="#DC2626" />
          <path d="M13 24 C13 32 39 32 39 24 Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1.2" />
          <path d="M13 24 C13 28 39 28 39 24" fill="#E5B85C" />
          <rect x="23" y="32" width="6" height="36" fill="url(#lampGradL)" />
          <circle cx="26" cy="42" r="5" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
          <circle cx="26" cy="56" r="6" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
          <path d="M10 70 C10 67 18 66 26 66 C34 66 42 67 42 70 L47 82 H5 L10 70 Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1.2" />
          <rect x="3" y="82" width="46" height="5" rx="2" fill="#A83F25" />
          <defs>
            <linearGradient id="lampGradL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8C600B" />
              <stop offset="40%" stopColor="#E5B85C" />
              <stop offset="100%" stopColor="#8C600B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Kuthuvilakku Lamp */}
      <div className="absolute bottom-2 sm:bottom-4 right-1.5 sm:right-6 z-10 pointer-events-none scale-75 sm:scale-100 origin-bottom-right" aria-hidden="true">
        <svg width="44" height="76" viewBox="0 0 52 88" fill="none" className="sm:w-[52px] sm:h-[88px]">
          <path d="M26 4 C24 10 21 14 26 22 C31 14 28 10 26 4 Z" fill="#F59E0B" className="animate-gentle-glow" />
          <ellipse cx="26" cy="22" rx="4.5" ry="2" fill="#DC2626" />
          <path d="M13 24 C13 32 39 32 39 24 Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1.2" />
          <path d="M13 24 C13 28 39 28 39 24" fill="#E5B85C" />
          <rect x="23" y="32" width="6" height="36" fill="url(#lampGradR)" />
          <circle cx="26" cy="42" r="5" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
          <circle cx="26" cy="56" r="6" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
          <path d="M10 70 C10 67 18 66 26 66 C34 66 42 67 42 70 L47 82 H5 L10 70 Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1.2" />
          <rect x="3" y="82" width="46" height="5" rx="2" fill="#A83F25" />
          <defs>
            <linearGradient id="lampGradR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8C600B" />
              <stop offset="40%" stopColor="#E5B85C" />
              <stop offset="100%" stopColor="#8C600B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
