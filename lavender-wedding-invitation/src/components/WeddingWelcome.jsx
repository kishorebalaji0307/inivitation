import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
      <svg viewBox="0 0 48 20" className="w-10 h-4 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#D6A84F" />
        <circle cx="24" cy="1" r="1.5" fill="#A83F25" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#D6A84F" strokeWidth="1.2" opacity="0.7" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
    </div>
  );
}

export default function WeddingWelcome() {
  const { messages, couple } = weddingData;

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
  };

  return (
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-6 bg-[#FFF8EC] overflow-hidden text-center">

      {/* Faint kolam dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.032] bg-[radial-gradient(#A83F25_1.5px,transparent_1.5px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Sacred Temple Gopuram line watermark behind Together section (inspired by reference image) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.07]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[340px] sm:w-[460px] h-auto">
          <path d="M160 10 L164 26 H156 L160 10Z" stroke="#D6A84F" strokeWidth="1.5" />
          <circle cx="160" cy="9" r="3" fill="#D6A84F" />
          <path d="M120 32 C120 27 138 24 160 24 C182 24 200 27 200 32 L207 46 H113 L120 32Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M108 46 H212 L220 66 H100 L108 46Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M94 66 H226 L235 90 H85 L94 66Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M78 90 H242 L253 122 H67 L78 90Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M60 122 H260 L272 162 H48 L60 122Z" stroke="#D6A84F" strokeWidth="1.5" />
          <rect x="40" y="162" width="240" height="120" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M122 282 V230 C122 208 138 207 160 207 C182 207 198 208 198 230 V282 Z" stroke="#D6A84F" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Very subtle warm radial glow center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(214,168,79,0.08)_0%,transparent_65%)]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* Section badge */}
        <motion.div variants={fadeUp} className="flex flex-col items-center mb-4 sm:mb-5">
          <svg viewBox="0 0 26 24" fill="#D6A84F" className="w-6 h-6 sm:w-7 sm:h-7 mb-1.5 filter drop-shadow-sm" aria-hidden="true">
            <path d="M13 0 L16 4 L10 4 Z" opacity="0.95" />
            <path d="M7 5 L19 5 L21 10 L5 10 Z" opacity="0.8" />
            <path d="M3 11 L23 11 L25 18 L1 18 Z" opacity="0.65" />
            <rect x="0" y="19" width="26" height="2.5" rx="1" opacity="0.5" />
          </svg>
          <p
            className="text-[10px] sm:text-xs tracking-[0.32em] text-[#A83F25] uppercase font-bold font-serif"
          >
            {messages.welcomeTitle}
          </p>
        </motion.div>

        {/* "Together" heading – elegant serif style like the reference */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#A83F25] tracking-wide mb-2 font-serif leading-tight"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-xs sm:text-base text-[#8C4B1A] font-serif italic tracking-widest mb-6 sm:mb-8 px-2"
        >
          {messages.welcomeSubtitle}
        </motion.p>

        {/* ── Arched Couple Portrait – the centrepiece, matches reference ── */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative mb-8 sm:mb-10"
        >
          {/* Outer glow */}
          <div className="absolute -inset-5 rounded-[50%_50%_40%_40%/55%_55%_45%_45%] bg-gradient-to-tr from-[#D6A84F]/30 via-[#A83F25]/15 to-transparent blur-2xl opacity-80 pointer-events-none" />

          {/* Decorative arch frame */}
          <div
            className="relative mx-auto p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(168,63,37,0.32)]"
            style={{
              width: 'clamp(170px, 44vw, 300px)',
              background: 'linear-gradient(160deg, #E5B85C 0%, #A83F25 50%, #E5B85C 100%)',
              borderRadius: '50% 50% 24px 24px / 55% 55% 24px 24px',
            }}
          >
            {/* Inner arch image */}
            <div
              className="overflow-hidden border-[3px] sm:border-4 border-[#FFF8EC] bg-[#FFF8EC]"
              style={{
                borderRadius: '50% 50% 18px 18px / 55% 55% 18px 18px',
                aspectRatio: '3/4',
              }}
            >
              <img
                src={couple.image}
                alt={couple.altText}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Small kalasam above arch */}
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-1.5 sm:w-2 h-4 sm:h-5 bg-gradient-to-b from-[#E5B85C] to-[#A83F25] rounded-full" />
              <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-gradient-to-b from-[#E5B85C] to-[#8C321C] border border-white shadow-md" />
            </div>
          </div>

          {/* Gold ornamental side flourishes */}
          <div className="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 text-[#D6A84F] text-xl sm:text-2xl opacity-70" aria-hidden="true">✦</div>
          <div className="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 text-[#D6A84F] text-xl sm:text-2xl opacity-70" aria-hidden="true">✦</div>
        </motion.div>

        {/* ── Invitation Card ── */}
        <motion.div
          variants={fadeUp}
          className="relative w-full max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #FFFBF2 0%, #FFF5E1 100%)',
            border: '1.5px solid rgba(214,168,79,0.45)',
            boxShadow: '0 16px 48px rgba(168,63,37,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-2.5 rounded-xl sm:rounded-2xl border border-[#D6A84F]/20 pointer-events-none" />

          <div className="relative px-5 sm:px-12 py-6 sm:py-10">
            {/* Couple names header inside card */}
            <p
              className="text-lg sm:text-2xl font-bold text-[#A83F25] font-serif tracking-wide mb-1"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {couple.groom} &amp; {couple.bride}
            </p>

            <GoldDivider className="max-w-xs mx-auto my-3 sm:my-4" />

            {/* Invitation message */}
            <p
              className="text-sm sm:text-lg font-light italic text-[#5C2415] leading-relaxed sm:leading-loose font-serif"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              &#8220;{messages.invitationLetter}&#8221;
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
