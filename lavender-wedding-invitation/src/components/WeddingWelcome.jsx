import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      <svg viewBox="0 0 48 20" className="w-10 h-4 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#C5A059" />
        <circle cx="24" cy="1" r="1.5" fill="#7C5295" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#C5A059" strokeWidth="1.2" opacity="0.75" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    </div>
  );
}

export default function WeddingWelcome() {
  const { messages, couple, events } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
  };

  return (
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-6 bg-[#FAF6FD] overflow-hidden text-center">

      {/* Faint lavender dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#7C5295_1.5px,transparent_1.5px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Sacred Temple Gopuram line watermark behind Together section */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.06]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[340px] sm:w-[460px] h-auto">
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

      {/* Subtle warm radial glow center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_65%)]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-4 sm:mb-5">
          <svg viewBox="0 0 26 24" fill="#C5A059" className="w-6 h-6 sm:w-7 sm:h-7 mb-1.5 filter drop-shadow-sm" aria-hidden="true">
            <path d="M13 0 L16 4 L10 4 Z" opacity="0.95" />
            <path d="M7 5 L19 5 L21 10 L5 10 Z" opacity="0.8" />
            <path d="M3 11 L23 11 L25 18 L1 18 Z" opacity="0.65" />
            <rect x="0" y="19" width="26" height="2.5" rx="1" opacity="0.5" />
          </svg>
          <p
            className="text-[10px] sm:text-xs tracking-[0.32em] text-[#7C5295] uppercase font-bold font-serif"
          >
            {messages.welcomeTitle}
          </p>
        </motion.div>

        {/* "Together" heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E1B56] tracking-wide mb-2 font-serif leading-tight"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-base text-[#6B3E84] font-serif italic tracking-widest mb-6 sm:mb-8 px-2"
        >
          {messages.welcomeSubtitle}
        </motion.p>

        {/* ── Arched Couple Portrait – center framed with lavender & gold halo ── */}
        <motion.div
          variants={fadeUp}
          className="relative mb-8 sm:mb-10"
        >
          {/* Radiant gold glow halo */}
          <div className="absolute -inset-5 rounded-[50%_50%_32px_32px/55%_55%_32px_32px] bg-gradient-to-tr from-[#C5A059]/30 via-[#7C5295]/20 to-transparent blur-2xl opacity-75 pointer-events-none" />

          {/* Arched border in lavender & gold */}
          <div
            className="relative mx-auto p-2 sm:p-3 shadow-[0_24px_50px_rgba(124,82,149,0.3)] transition-transform duration-500 hover:scale-[1.02]"
            style={{
              width: 'clamp(180px, 46vw, 300px)',
              background: 'linear-gradient(160deg, #E5C97F 0%, #7C5295 50%, #C5A059 100%)',
              borderRadius: '50% 50% 28px 28px / 55% 55% 28px 28px',
            }}
          >
            {/* Inner arch image */}
            <div
              className="overflow-hidden border-[3px] sm:border-4 border-[#FAF6FD] bg-[#FAF6FD]"
              style={{
                borderRadius: '50% 50% 22px 22px / 55% 55% 22px 22px',
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

        {/* ── Invitation Card in Lavender Porcelain Glass ── */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden text-center"
          style={{
            background: 'linear-gradient(165deg, #FFFFFF 0%, #FBF6FE 100%)',
            border: '2px solid #D8C3EC',
            boxShadow: '0 20px 60px rgba(124, 82, 149, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
          }}
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/25 pointer-events-none" />

          <div className="relative px-5 sm:px-12 py-6 sm:py-10">
            {/* Couple names header inside card */}
            <p
              className="text-lg sm:text-2xl font-bold text-[#3E1B56] font-serif tracking-wide mb-1"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {couple.groom} &amp; {couple.bride}
            </p>

            <GoldDivider className="max-w-xs mx-auto my-3" />

            {/* Invitation Letter */}
            <p className="text-xs sm:text-base text-[#593A6F] font-serif italic leading-relaxed sm:leading-loose mb-5 px-1 sm:px-4">
              &#8220;{messages.invitationLetter}&#8221;
            </p>

            {/* Event Dates Reminder Box */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-2.5 px-4 sm:px-6 rounded-2xl bg-[#F4EAFB] border border-[#D8C3EC] text-xs font-serif">
              <span className="font-bold text-[#3E1B56]">
                💍 Marriage: {marriage?.dateFormatted || "Nov 29, 2026"} (Manaparai)
              </span>
              <span className="hidden sm:inline text-[#C5A059]">&bull;</span>
              <span className="font-bold text-[#3E1B56]">
                🥂 Reception: {reception?.dateFormatted || "Dec 02, 2026"} (Coimbatore)
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
