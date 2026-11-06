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
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto bg-white/95 backdrop-blur-md rounded-t-[160px] sm:rounded-t-[240px] md:rounded-t-[280px] border border-[#EADBFA] shadow-[0_22px_60px_-15px_rgba(110,65,150,0.09)] pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-10 text-center overflow-hidden"
      >
        {/* Soft background ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(240,230,252,0.6)_0%,transparent_75%)]" />

        <div className="relative z-10 flex flex-col items-center">
          {/* 1. Header: Together With Our Families */}
          <p className="font-sans-clean text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#6F4E88] uppercase mb-1 select-none">
            TOGETHER WITH OUR FAMILIES
          </p>

          {/* 2. Subtitle: we cordially invite you to our */}
          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#7D5C99] tracking-wider mb-2 sm:mb-3">
            we cordially invite you to our
          </p>

          {/* 3. Majestic Heading: WEDDING */}
          <h1 className="font-serif-royal text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A1545] tracking-[0.26em] md:tracking-[0.34em] uppercase leading-none mt-1 select-none">
            WEDDING
          </h1>

          {/* 4. Cursive Script Calligraphy: Celebration */}
          <p className="font-script text-5xl sm:text-7xl md:text-8xl text-[#4E316E] -mt-1 sm:-mt-3 mb-2 sm:mb-3 select-none leading-tight">
            Celebration
          </p>

          {/* 5. Delicate Lotus Filigree */}
          <LotusDivider className="my-2 sm:my-3" />

          {/* 6. Couple Names */}
          <h2 className="font-serif-royal text-xl sm:text-3xl md:text-4xl font-semibold text-[#2F194E] tracking-wide mt-1 mb-1">
            {couple.groom} &amp; {couple.bride}
          </h2>

          {/* 7. Tagline: TWO HEARTS • ONE JOURNEY • FOREVER */}
          <p className="font-sans-clean text-[9px] sm:text-[11px] font-semibold tracking-[0.26em] text-[#7A5B96] uppercase mt-1 mb-6 sm:mb-8 select-none">
            TWO HEARTS &bull; ONE JOURNEY &bull; FOREVER
          </p>

          {/* 8. EMBEDDED COUNTDOWN PILL (Reference layout) */}
          <div className="w-full max-w-lg mx-auto bg-[#F6EEFC]/90 border border-[#E5D5F5] rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xs">
            <p className="font-sans-clean text-[9px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#694883] uppercase mb-3">
              THE BIG DAY IS COMING
            </p>

            {/* 4 Columns Countdown */}
            <div className="grid grid-cols-4 items-center">
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
              <span className="text-[9px]">✦</span>
              <div className="w-8 sm:w-12 h-px bg-[#D6C2EE]" />
              <span className="text-[10px] text-[#865DA6]">🪷</span>
              <div className="w-8 sm:w-12 h-px bg-[#D6C2EE]" />
              <span className="text-[9px]">✦</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── 4-COLUMN QUICK INFO BAR (Reference layout) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.15 }}
        className="relative z-10 w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mt-6 sm:mt-10 px-2 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 items-center py-4 sm:py-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-[#EADBFA]/70 shadow-xs">

          {/* Column 1: DATE */}
          <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#E8DCF4]">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EBFB] border border-[#E2D1F4] flex items-center justify-center text-[#734A8E] mb-2 shadow-xs">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#674482] uppercase mb-1">
              DATE
            </p>
            <p className="font-serif-elegant italic text-xs sm:text-sm text-[#4E2D6D] font-medium leading-snug">
              Nov 29 &amp; Dec 02
            </p>
          </div>

          {/* Column 2: TIME */}
          <div className="flex flex-col items-center text-center px-2 sm:border-r border-[#E8DCF4]">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EBFB] border border-[#E2D1F4] flex items-center justify-center text-[#734A8E] mb-2 shadow-xs">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#674482] uppercase mb-1">
              TIME
            </p>
            <p className="font-serif-elegant italic text-xs sm:text-sm text-[#4E2D6D] font-medium leading-snug">
              9:00 AM &amp; 6:30 PM
            </p>
          </div>

          {/* Column 3: VENUE */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EBFB] border border-[#E2D1F4] flex items-center justify-center text-[#734A8E] mb-2 shadow-xs">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#734A8E]" />
            </div>
            <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#674482] uppercase mb-1">
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
