import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Botanical Lotus & Filigree Divider Component
 */
function LotusDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-44 sm:w-60 mx-auto ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
      <svg viewBox="0 0 28 20" className="w-5 h-4 sm:w-6 sm:h-4.5 text-[#865DA6] flex-shrink-0" fill="currentColor">
        <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
        <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
        <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
    </div>
  );
}

export default function WeddingHero() {
  const { couple, events, event } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  // Live countdown calculation for Nov 29, 2026 9:00 AM
  const calculateTimeRemaining = () => {
    const targetDate = new Date(event?.countdownTarget || "2026-11-29T09:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: String(d).padStart(2, '0'),
      hours: String(h).padStart(2, '0'),
      minutes: String(m).padStart(2, '0'),
      seconds: String(s).padStart(2, '0'),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, [event?.countdownTarget]);

  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-12 sm:pb-16 px-3 sm:px-6 overflow-hidden">

      {/* ── CENTRAL FROSTED ARCH CARD (Matches Reference Design) ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto bg-gradient-to-b from-[#FFFDFE] via-white to-[#FAF6FE] backdrop-blur-md rounded-t-[170px] sm:rounded-t-[250px] md:rounded-t-[290px] border-2 border-[#D8C1EE] shadow-[0_26px_70px_-12px_rgba(105,62,134,0.14),0_0_0_1px_rgba(255,255,255,0.95)_inset] pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-10 text-center overflow-hidden"
      >
        {/* Soft background ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(240,230,252,0.65)_0%,transparent_75%)]" />

        {/* Inner Antique Gold Hairline Arch Border */}
        <div className="absolute inset-2.5 sm:inset-3.5 rounded-t-[155px] sm:rounded-t-[235px] md:rounded-t-[275px] border border-[#C5A059]/35 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Subtle gold star flourish */}
          <div className="flex items-center justify-center gap-2 mb-1.5 text-[#C5A059] opacity-80" aria-hidden="true">
            <span className="text-[9px] text-[#A278CC]">✦</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="text-[9px] text-[#A278CC]">✦</span>
          </div>

          {/* 1. Header: Together With Our Families */}
          <p className="font-sans-clean text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#6E4E85] uppercase mb-1 select-none">
            TOGETHER WITH OUR FAMILIES
          </p>

          {/* 2. Subtitle: we cordially invite you to our */}
          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#7D5C99] tracking-wider mb-2 sm:mb-3">
            we cordially invite you to our
          </p>

          {/* 3. Majestic Heading: WEDDING */}
          <h1 className="font-serif-royal text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A1545] tracking-[0.26em] md:tracking-[0.34em] uppercase leading-none mt-1 select-none drop-shadow-xs">
            WEDDING
          </h1>

          {/* 4. Cursive Script Calligraphy: Celebration */}
          <p className="font-script text-5xl sm:text-7xl md:text-8xl text-[#4E316E] -mt-1 sm:-mt-3 mb-2 sm:mb-3 select-none leading-tight filter drop-shadow-xs">
            Celebration
          </p>

          {/* 5. Delicate Lotus Filigree */}
          <LotusDivider className="my-2 sm:my-3" />

          {/* 6. Couple Names in Majestic Typography */}
          <h2 className="font-serif-royal text-xl sm:text-3xl md:text-4xl font-bold text-[#2F194E] tracking-wide mt-1 mb-1">
            {couple.groom} <span className="font-script font-normal text-3xl sm:text-5xl text-[#C5A059] mx-1 leading-none select-none filter drop-shadow-xs">&amp;</span> {couple.bride}
          </h2>

          {/* 7. Tagline: TWO HEARTS • ONE JOURNEY • FOREVER */}
          <p className="font-sans-clean text-[9px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#7A5B96] uppercase mt-1 mb-6 sm:mb-8 select-none">
            TWO HEARTS &bull; ONE JOURNEY &bull; FOREVER
          </p>

          {/* 8. EMBEDDED COUNTDOWN PILL (Reference layout) */}
          <div className="w-full max-w-lg mx-auto bg-gradient-to-b from-[#F9F3FD] to-[#F3EBF9] border border-[#E3D3F4] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xs relative overflow-hidden">
            <div className="absolute inset-1.5 rounded-xl sm:rounded-2xl border border-[#C5A059]/20 pointer-events-none" />

            <p className="font-sans-clean text-[9px] sm:text-[11px] font-bold tracking-[0.26em] text-[#694883] uppercase mb-3">
              THE BIG DAY IS COMING
            </p>

            {/* 4 Columns Countdown */}
            <div className="grid grid-cols-4 items-center relative z-10">
              {/* Days */}
              <div className="flex flex-col items-center border-r border-[#DDC9F2] pr-1">
                <span className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1848] tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[11px] text-[#795B94] uppercase tracking-wider mt-0.5">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center border-r border-[#DDC9F2] px-1">
                <span className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1848] tracking-tight">
                  {timeLeft.hours}
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[11px] text-[#795B94] uppercase tracking-wider mt-0.5">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center border-r border-[#DDC9F2] px-1">
                <span className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1848] tracking-tight">
                  {timeLeft.minutes}
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[11px] text-[#795B94] uppercase tracking-wider mt-0.5">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center pl-1">
                <span className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1848] tracking-tight">
                  {timeLeft.seconds}
                </span>
                <span className="font-sans-clean text-[9px] sm:text-[11px] text-[#795B94] uppercase tracking-wider mt-0.5">
                  Seconds
                </span>
              </div>
            </div>

            {/* Filigree Ornament Beneath Countdown */}
            <div className="flex items-center justify-center gap-2 mt-3 text-[#A88EC6] select-none" aria-hidden="true">
              <span className="text-[9px] text-[#C5A059]">✦</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
              <span className="text-[10px] text-[#865DA6]">🪷</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
              <span className="text-[9px] text-[#C5A059]">✦</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 3-COLUMN QUICK INFO BAR (Reference layout) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-6 sm:mt-10 px-2 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 items-center py-4 sm:py-6 bg-white/85 backdrop-blur-md rounded-2xl border-2 border-[#E5D5F5] shadow-[0_12px_36px_-10px_rgba(105,62,134,0.1)] relative overflow-hidden">
          <div className="absolute inset-1.5 rounded-xl border border-[#C5A059]/25 pointer-events-none" />

          {/* Column 1: DATE */}
          <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#E8DCF4] relative z-10">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] mb-2 shadow-2xs">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.24em] text-[#674482] uppercase mb-1">
              DATE
            </p>
            <p className="font-serif-elegant italic text-xs sm:text-sm text-[#4E2D6D] font-medium leading-snug">
              Nov 29 &amp; Dec 02
            </p>
          </div>

          {/* Column 2: TIME */}
          <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#E8DCF4] relative z-10">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] mb-2 shadow-2xs">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.24em] text-[#674482] uppercase mb-1">
              TIME
            </p>
            <p className="font-serif-elegant italic text-xs sm:text-sm text-[#4E2D6D] font-medium leading-snug">
              9:00 AM &amp; 6:30 PM
            </p>
          </div>

          {/* Column 3: VENUE */}
          <div className="flex flex-col items-center text-center px-2 relative z-10">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] mb-2 shadow-2xs">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.24em] text-[#674482] uppercase mb-1">
              VENUE
            </p>
            <p className="font-serif-elegant italic text-xs sm:text-sm text-[#4E2D6D] font-medium leading-snug">
              RV Mahal &amp; GKS Hall
            </p>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
