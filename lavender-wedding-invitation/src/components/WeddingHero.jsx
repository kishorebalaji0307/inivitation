import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { BananaLeavesDecor } from './TraditionalDecorations';

/* ──────────────────────────────────────────────
   Ornamental horizontal divider in Soft Gold & Lavender
   ────────────────────────────────────────────── */
function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      <svg viewBox="0 0 48 20" className="w-10 sm:w-12 h-4 sm:h-5 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#C5A059" />
        <circle cx="24" cy="1" r="1.5" fill="#7C5295" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#C5A059" strokeWidth="1.2" opacity="0.75" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    </div>
  );
}

export default function WeddingHero() {
  const { couple, events } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.0, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-between pt-14 sm:pt-16 pb-20 sm:pb-24 px-3 sm:px-6 overflow-hidden bg-[#FAF6FD]">

      {/* ── FULL BACKGROUND BRIDE & GROOM PHOTO ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src={couple.heroBackground || '/images/hero-bg-couple.jpg'}
          alt={couple.altText}
          className="w-full h-full object-cover object-center select-none"
        />
        {/* Luminous Lavender-Cream Overlay for pristine text readability while highlighting the couple */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6FD]/70 via-[#F3EBF9]/35 to-[#FAF6FD]/90" />
      </div>

      {/* ── MAIN FOREGROUND CONTENT ── */}
      <motion.div
        className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center w-full my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── "The Auspicious Union" Sub-header ── */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-sm italic text-[#6B3E84] tracking-[0.24em] font-semibold mb-2 sm:mb-3 uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          ✦ &nbsp; The Auspicious Union &nbsp; ✦
        </motion.p>

        {/* ── COUPLE NAMES ── */}
        <motion.div variants={fadeUp} className="w-full px-2">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E1B56] leading-tight tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Cinzel', 'Marcellus', Georgia, serif",
            }}
          >
            {couple.groom}
          </h1>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="my-0.5 text-2xl sm:text-4xl md:text-5xl text-[#C5A059] font-light"
          style={{
            fontFamily: "'Great Vibes', cursive",
          }}
        >
          &amp;
        </motion.div>

        <motion.div variants={fadeUp} className="w-full px-2">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E1B56] leading-tight tracking-wide whitespace-nowrap"
            style={{
              fontFamily: "'Cinzel', 'Marcellus', Georgia, serif",
            }}
          >
            {couple.bride}
          </h1>
        </motion.div>

        {/* ── DUAL EVENT CARD (Marriage & Reception in Lavender & Gold) ── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="mt-6 sm:mt-8 w-full max-w-xl mx-auto rounded-3xl shadow-[0_16px_40px_-10px_rgba(75,34,105,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] text-[#FFFDF9] overflow-hidden p-3.5 sm:p-6"
          style={{
            background: 'linear-gradient(150deg, #6B398A 0%, #4E2368 50%, #351448 100%)',
            border: '2px solid #C5A059',
          }}
        >
          {/* Mini temple motif */}
          <div className="flex items-center justify-center gap-1.5 mb-2.5">
            <svg viewBox="0 0 26 18" className="w-5 h-3.5 sm:w-6 sm:h-4" fill="#C5A059" opacity="0.95">
              <path d="M13 0 L15 5 H11 Z" />
              <path d="M7 6 L19 6 L21 11 L5 11 Z" opacity="0.85" />
              <rect x="0" y="12" width="26" height="3" rx="1" opacity="0.6" />
            </svg>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F3E1B6] font-serif font-bold">
              Wedding Celebrations
            </span>
            <svg viewBox="0 0 26 18" className="w-5 h-3.5 sm:w-6 sm:h-4" fill="#C5A059" opacity="0.95">
              <path d="M13 0 L15 5 H11 Z" />
              <path d="M7 6 L19 6 L21 11 L5 11 Z" opacity="0.85" />
              <rect x="0" y="12" width="26" height="3" rx="1" opacity="0.6" />
            </svg>
          </div>

          {/* Grid of Two Events */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Event 1: Marriage */}
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-[#2D123D]/80 border border-[#C5A059]/40 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#F5D899] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-serif">
                <Heart className="w-2.5 h-2.5 text-[#E5C97F] fill-[#E5C97F]" />
                <span>Marriage</span>
              </div>
              <p
                className="text-2xl sm:text-3xl font-black text-white drop-shadow my-0.5"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Nov 29, 2026
              </p>
              <p className="text-[11px] sm:text-xs text-[#E5C97F] font-semibold font-serif">
                Sunday • {marriage?.timing || "9:00 AM – 10:30 AM"}
              </p>
              <div className="flex items-center gap-1 mt-1.5 text-[11px] sm:text-xs text-[#EADBFA] font-serif">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span className="font-medium">{marriage?.venueName}, {marriage?.location}</span>
              </div>
            </div>

            {/* Event 2: Reception */}
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-[#2D123D]/80 border border-[#C5A059]/40 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#F5D899] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-serif">
                <Sparkles className="w-2.5 h-2.5 text-[#E5C97F]" />
                <span>Reception</span>
              </div>
              <p
                className="text-2xl sm:text-3xl font-black text-white drop-shadow my-0.5"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Dec 02, 2026
              </p>
              <p className="text-[11px] sm:text-xs text-[#E5C97F] font-semibold font-serif">
                Wednesday • {reception?.timing || "6:30 PM – 9:00 PM"}
              </p>
              <div className="flex items-center gap-1 mt-1.5 text-[11px] sm:text-xs text-[#EADBFA] font-serif">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span className="font-medium">{reception?.venueName}, {reception?.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Gold Divider ── */}
        <motion.div variants={fadeUp} className="w-full max-w-xs sm:max-w-md mt-6 sm:mt-7">
          <GoldDivider />
        </motion.div>

        {/* ── Venues subtitle ── */}
        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-base text-[#5E367A] font-serif italic mt-3 tracking-wide max-w-md mx-auto leading-relaxed px-4"
        >
          {marriage?.venueName}, {marriage?.location} &bull; {reception?.venueName}, {reception?.location}
        </motion.p>
      </motion.div>

      {/* ── 3. BANANA LEAVES & KUTHUVILAKKU ── */}
      <BananaLeavesDecor />

      {/* Left Kuthuvilakku Lamp */}
      <div className="absolute bottom-2 sm:bottom-4 left-1.5 sm:left-6 z-10 pointer-events-none scale-75 sm:scale-100 origin-bottom-left" aria-hidden="true">
        <svg width="44" height="76" viewBox="0 0 52 88" fill="none" className="sm:w-[52px] sm:h-[88px]">
          <path d="M26 4 C24 10 21 14 26 22 C31 14 28 10 26 4 Z" fill="#F59E0B" className="animate-gentle-glow" />
          <ellipse cx="26" cy="22" rx="4.5" ry="2" fill="#7C5295" />
          <path d="M13 24 C13 32 39 32 39 24 Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1.2" />
          <path d="M13 24 C13 28 39 28 39 24" fill="#E5C97F" />
          <rect x="23" y="32" width="6" height="36" fill="url(#lampGradL)" />
          <circle cx="26" cy="42" r="5" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
          <circle cx="26" cy="56" r="6" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
          <path d="M10 70 C10 67 18 66 26 66 C34 66 42 67 42 70 L47 82 H5 L10 70 Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1.2" />
          <rect x="3" y="82" width="46" height="5" rx="2" fill="#6B398A" />
          <defs>
            <linearGradient id="lampGradL" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8C600B" />
              <stop offset="40%" stopColor="#E5C97F" />
              <stop offset="100%" stopColor="#8C600B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Right Kuthuvilakku Lamp */}
      <div className="absolute bottom-2 sm:bottom-4 right-1.5 sm:right-6 z-10 pointer-events-none scale-75 sm:scale-100 origin-bottom-right" aria-hidden="true">
        <svg width="44" height="76" viewBox="0 0 52 88" fill="none" className="sm:w-[52px] sm:h-[88px]">
          <path d="M26 4 C24 10 21 14 26 22 C31 14 28 10 26 4 Z" fill="#F59E0B" className="animate-gentle-glow" />
          <ellipse cx="26" cy="22" rx="4.5" ry="2" fill="#7C5295" />
          <path d="M13 24 C13 32 39 32 39 24 Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1.2" />
          <path d="M13 24 C13 28 39 28 39 24" fill="#E5C97F" />
          <rect x="23" y="32" width="6" height="36" fill="url(#lampGradR)" />
          <circle cx="26" cy="42" r="5" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
          <circle cx="26" cy="56" r="6" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
          <path d="M10 70 C10 67 18 66 26 66 C34 66 42 67 42 70 L47 82 H5 L10 70 Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1.2" />
          <rect x="3" y="82" width="46" height="5" rx="2" fill="#6B398A" />
          <defs>
            <linearGradient id="lampGradR" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8C600B" />
              <stop offset="40%" stopColor="#E5C97F" />
              <stop offset="100%" stopColor="#8C600B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
