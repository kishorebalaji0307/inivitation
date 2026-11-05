import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WeddingClosing() {
  const { messages, couple, events } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  return (
    <section
      className="relative w-full py-14 sm:py-28 px-4 sm:px-6 overflow-hidden text-center"
      style={{ background: 'linear-gradient(170deg, #FAF6FD 0%, #F3EAF9 60%, #FAF6FD 100%)' }}
    >
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#7C5295_2px,transparent_2px)] [background-size:28px_28px]" />

      {/* Sacred Temple Gopuram line watermark behind Closing section */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[340px] sm:w-[480px] h-auto">
          <path d="M160 10 L164 26 H156 L160 10Z" stroke="#7C5295" strokeWidth="1.5" />
          <circle cx="160" cy="9" r="3" fill="#C5A059" />
          <path d="M120 32 C120 27 138 24 160 24 C182 24 200 27 200 32 L207 46 H113 L120 32Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M108 46 H212 L220 66 H100 L108 46Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M94 66 H226 L235 90 H85 L94 66Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M78 90 H242 L253 122 H67 L78 90Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M60 122 H260 L272 162 H48 L60 122Z" stroke="#7C5295" strokeWidth="1.5" />
          <rect x="40" y="162" width="240" height="120" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M122 282 V230 C122 208 138 207 160 207 C182 207 198 208 198 230 V282 Z" stroke="#7C5295" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Warm golden radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Temple motif in Gold & Lavender */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 sm:mb-5"
        >
          <svg width="40" height="36" viewBox="0 0 26 24" fill="#C5A059" className="sm:w-12 sm:h-10 mx-auto filter drop-shadow-md">
            <path d="M13 0 L16 4 L10 4 Z" opacity="0.95" />
            <path d="M7 5 L19 5 L21 10 L5 10 Z" opacity="0.8" />
            <path d="M3 11 L23 11 L25 18 L1 18 Z" opacity="0.65" />
            <rect x="0" y="19" width="26" height="2.5" rx="1" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Closing heading */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold text-[#3E1B56] font-serif max-w-2xl leading-snug mb-2 sm:mb-3 px-2"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          {messages.closingHeading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="text-sm sm:text-xl text-[#6B3E84] font-serif italic mb-8 sm:mb-10 max-w-xl px-2"
        >
          &#8220;{messages.closingSubtext}&#8221;
        </motion.p>

        {/* Large arched couple portrait in lavish lavender & gold frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 sm:mb-10"
        >
          {/* Radiant gold glow halo */}
          <div className="absolute -inset-6 rounded-[50%_50%_36px_36px/55%_55%_36px_36px] bg-gradient-to-tr from-[#C5A059]/30 via-[#7C5295]/20 to-transparent blur-2xl opacity-75 pointer-events-none" />

          {/* Arch frame */}
          <div
            className="relative mx-auto p-3 sm:p-4 shadow-[0_28px_64px_rgba(124,82,149,0.3)]"
            style={{
              width: 'clamp(180px, 46vw, 320px)',
              background: 'linear-gradient(160deg, #E5C97F 0%, #7C5295 48%, #C5A059 100%)',
              borderRadius: '50% 50% 28px 28px / 55% 55% 28px 28px',
            }}
          >
            <div
              className="overflow-hidden border-[3px] sm:border-[5px] border-[#FAF6FD]"
              style={{
                borderRadius: '50% 50% 20px 20px / 55% 55% 20px 20px',
                aspectRatio: '3/4',
              }}
            >
              <img
                src={couple.image}
                alt={couple.altText}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Closing details card in Lavender & Gold */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="relative w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-white border-2 border-[#D8C3EC] shadow-[0_12px_40px_rgba(124,82,149,0.1)] text-center"
        >
          {/* Couple names */}
          <p
            className="text-2xl sm:text-3xl font-bold text-[#3E1B56] font-serif mb-1"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {couple.groom} &amp; {couple.bride}
          </p>

          <p className="text-xs sm:text-sm text-[#7C5295] font-serif italic mb-5">
            Joyfully invite you to join them in celebration
          </p>

          {/* Dual Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {/* Marriage Box */}
            <div className="p-3.5 rounded-2xl bg-[#F6EFFC] border border-[#D8C3EC]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#7C5295] uppercase font-serif mb-1">
                <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
                <span>Marriage</span>
              </div>
              <p className="text-sm font-bold text-[#3E1B56] font-serif">
                {marriage?.dateFormatted || "November 29, 2026"}
              </p>
              <p className="text-xs text-[#6B3E84] font-serif">
                {marriage?.timing || "9:00 AM – 10:30 AM"}
              </p>
              <p className="text-xs font-semibold text-[#7C5295] font-serif mt-1">
                📍 {marriage?.venueName}, {marriage?.location}
              </p>
            </div>

            {/* Reception Box */}
            <div className="p-3.5 rounded-2xl bg-[#F6EFFC] border border-[#D8C3EC]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#7C5295] uppercase font-serif mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reception</span>
              </div>
              <p className="text-sm font-bold text-[#3E1B56] font-serif">
                {reception?.dateFormatted || "December 02, 2026"}
              </p>
              <p className="text-xs text-[#6B3E84] font-serif">
                {reception?.timing || "6:30 PM – 9:00 PM"}
              </p>
              <p className="text-xs font-semibold text-[#7C5295] font-serif mt-1">
                📍 {reception?.venueName}, {reception?.location}
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-[#D8C3EC]/60 text-center">
            <p className="text-xs sm:text-sm text-[#7C5295] font-serif tracking-widest uppercase font-semibold">
              ✦ With Warm Regards &amp; Family Blessings ✦
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
