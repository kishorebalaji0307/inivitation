import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WeddingCountdown() {
  const { event, events } = weddingData;
  const marriage = events?.marriage;

  const calculateTimeRemaining = () => {
    const targetDate = new Date(event.countdownTarget).getTime();
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
  }, [event.countdownTarget]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FAF6FD] overflow-hidden text-center">
      
      {/* Decorative Lavender Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#7C5295_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Auspicious Lavender Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-5 font-serif text-[11px] sm:text-sm font-bold uppercase tracking-widest"
          style={{ background: 'rgba(124,82,149,0.09)', border: '1px solid rgba(124,82,149,0.22)', color: '#7C5295' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Counting The Auspicious Moments</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
        </div>

        {/* Section Heading */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E1B56] mb-2 sm:mb-3 tracking-wide font-serif"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          Until We Say &#8220;I Do&#8221;
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 max-w-xs mx-auto my-2 mb-6 sm:mb-8 w-full" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C5295] fill-[#7C5295] flex-shrink-0" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
        </div>

        <p className="text-[#64427D] text-xs sm:text-base font-serif italic max-w-lg mb-8 sm:mb-12">
          Every moment brings us closer to our sacred union on {marriage?.fullDate || "November 29, 2026"} at {marriage?.venueName}, {marriage?.location}.
        </p>

        {/* Countdown Grid (Responsive 4 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl">
          {timeUnits.map((unit) => (
            <motion.div
              key={unit.label}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F5ECFB] border-2 border-[#D8C3EC] shadow-[0_12px_30px_rgba(124,82,149,0.12)] flex flex-col items-center justify-center group"
            >
              {/* Corner accent dots */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />

              {/* Number */}
              <span
                className="text-4xl sm:text-5xl md:text-6xl font-black text-[#3E1B56] leading-none mb-1 group-hover:scale-105 transition-transform"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {String(unit.value).padStart(2, '0')}
              </span>

              {/* Divider */}
              <div className="w-8 h-[1.5px] bg-[#C5A059] my-1 sm:my-2" />

              {/* Label */}
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#7C5295] font-serif">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Auspicious note */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-xs sm:text-sm text-[#7C5295] font-serif"
        >
          <span className="text-[#C5A059]">✦</span>
          <span>Marriage: Nov 29, 2026 &bull; Reception: Dec 02, 2026</span>
          <span className="text-[#C5A059]">✦</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
