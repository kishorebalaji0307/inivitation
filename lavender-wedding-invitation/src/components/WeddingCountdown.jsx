import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

function LotusDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-40 sm:w-56 mx-auto ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
      <svg viewBox="0 0 28 20" className="w-5 h-4 text-[#865DA6] flex-shrink-0" fill="currentColor">
        <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
        <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
        <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
    </div>
  );
}

export default function WeddingCountdown() {
  const { event, events } = weddingData;
  const marriage = events?.marriage;

  const calculateTimeRemaining = () => {
    const targetDate = new Date(event?.countdownTarget || "2026-11-29T09:00:00+05:30").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isFinished: false };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, [event?.countdownTarget]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-10 sm:py-16 px-3 sm:px-6 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EBF9] border border-[#E0CEF3] text-[#714E8B] text-[10px] sm:text-xs font-sans-clean font-semibold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Counting The Auspicious Moments</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>

        <h2 className="font-serif-royal text-2xl sm:text-4xl md:text-5xl font-bold text-[#2E1848] tracking-wide mb-2">
          Until We Say &ldquo;I Do&rdquo;
        </h2>

        <LotusDivider className="my-2 sm:my-3" />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto mt-6 mb-6">
          {timeUnits.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#FFFDFE] to-[#FAF4FE] rounded-2xl border-2 border-[#E3D3F4] p-3.5 sm:p-4 shadow-xs relative overflow-hidden"
            >
              <div className="absolute inset-1 rounded-xl border border-[#C5A059]/25 pointer-events-none" />
              <p className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#341B4E] relative z-10">
                {String(item.value).padStart(2, '0')}
              </p>
              <p className="font-sans-clean text-[9px] sm:text-[11px] font-bold text-[#7E5E99] uppercase tracking-wider mt-1 relative z-10">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="font-serif-elegant italic text-xs sm:text-sm text-[#73548D]">
          Muhurtham: Sunday, Nov 29, 2026 &bull; {marriage?.timing || "9:00 AM – 10:30 AM"} &bull; {marriage?.venueName}, {marriage?.location}
        </p>
      </motion.div>
    </section>
  );
}
