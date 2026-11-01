import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WeddingCountdown() {
  const { event } = weddingData;

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
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#FFF8EC] overflow-hidden text-center">
      
      {/* Traditional Temple Gopuram Silhouette Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#A83F25_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Auspicious badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full mb-4 sm:mb-5 font-serif text-[11px] sm:text-sm font-bold uppercase tracking-widest"
          style={{ background: 'rgba(168,63,37,0.09)', border: '1px solid rgba(168,63,37,0.18)', color: '#A83F25' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
          <span>Counting The Moments</span>
          <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
        </div>

        {/* Section Heading */}
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#A83F25] mb-2 sm:mb-3 tracking-wide font-serif"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          Until We Say &#8220;I Do&#8221;
        </h2>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-3 max-w-xs mx-auto my-2 mb-6 sm:mb-8 w-full" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
          <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A83F25] fill-[#A83F25] flex-shrink-0" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
        </div>

        {timeLeft.isFinished ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-[#A83F25] via-[#8C321C] to-[#A83F25] border-2 border-[#D6A84F] text-[#FFF8EC] shadow-2xl"
          >
            <h3
              className="text-2xl sm:text-5xl font-bold font-serif mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Celebration Begins!
            </h3>
            <p className="text-base sm:text-lg text-[#D6A84F] font-serif">
              Thank you for being part of our auspicious day.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-3xl">
            {timeUnits.map((unit) => (
              <motion.div
                key={unit.label}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.22 } }}
                className="relative flex flex-col items-center justify-center p-4 sm:p-7 rounded-2xl sm:rounded-3xl text-[#FFF8EC]"
                style={{
                  background: 'linear-gradient(160deg, #B84530 0%, #8C321C 50%, #6B2418 100%)',
                  border: '2px solid #D6A84F',
                  boxShadow: '0 12px 30px rgba(168,63,37,0.32), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
                {/* Corner gold studs */}
                <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                <div className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
                <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />

                {/* Large Number */}
                <span
                  className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-wider leading-none drop-shadow-lg"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {String(unit.value).padStart(2, '0')}
                </span>

                <div className="w-8 sm:w-10 h-px bg-[#D6A84F]/70 my-2 sm:my-3" />

                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F5D68A] font-bold font-serif">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Auspicious wedding date reminder */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-[#735043] font-serif tracking-wider px-2">
          Wedding Timing: {event.muhurthamTime} • {event.fullDate}
        </p>
      </motion.div>
    </section>
  );
}
