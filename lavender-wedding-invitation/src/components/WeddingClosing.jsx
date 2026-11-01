import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WeddingClosing() {
  const { messages, couple, event } = weddingData;

  return (
    <section className="relative w-full py-14 sm:py-28 px-4 sm:px-6 overflow-hidden text-center"
      style={{ background: 'linear-gradient(170deg, #FFF8EC 0%, #FFF0D9 60%, #FFF8EC 100%)' }}
    >
      {/* Rangoli watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#A83F25_2px,transparent_2px)] [background-size:28px_28px]" />

      {/* Sacred Temple Gopuram line watermark behind Closing section */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.06]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[340px] sm:w-[480px] h-auto">
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

      {/* Warm golden radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(214,168,79,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Temple motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 sm:mb-5"
        >
          <svg width="40" height="36" viewBox="0 0 26 24" fill="#D6A84F" className="sm:w-12 sm:h-10 mx-auto filter drop-shadow-md">
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
          className="text-xl sm:text-3xl md:text-4xl font-bold text-[#A83F25] font-serif max-w-2xl leading-snug mb-2 sm:mb-3 px-2"
          style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
        >
          {messages.closingHeading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.12 }}
          className="text-sm sm:text-xl text-[#735043] font-serif italic mb-8 sm:mb-10 max-w-xl px-2"
        >
          &#8220;{messages.closingSubtext}&#8221;
        </motion.p>

        {/* Large arched couple illustration in lavish ornamental frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8 sm:mb-10"
        >
          {/* Radiant gold glow halo */}
          <div className="absolute -inset-6 rounded-[50%_50%_36px_36px/55%_55%_36px_36px] bg-gradient-to-tr from-[#D6A84F]/35 via-[#A83F25]/20 to-transparent blur-2xl opacity-80 pointer-events-none" />

          {/* Arch gold frame */}
          <div
            className="relative mx-auto p-3 sm:p-4 shadow-[0_28px_64px_rgba(168,63,37,0.4)]"
            style={{
              width: 'clamp(180px, 46vw, 320px)',
              background: 'linear-gradient(160deg, #E5B85C 0%, #A83F25 48%, #E5B85C 100%)',
              borderRadius: '50% 50% 28px 28px / 55% 55% 28px 28px',
            }}
          >
            <div
              className="overflow-hidden border-[3px] sm:border-[5px] border-[#FFF8EC]"
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

            {/* Kalasam crown */}
            <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-gradient-to-b from-[#E5B85C] to-[#A83F25] rounded-full" />
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-gradient-to-b from-[#E5B85C] to-[#8C321C] border border-white shadow-md -mt-1" />
            </div>
          </div>
        </motion.div>

        {/* Couple names sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="flex flex-col items-center gap-1 px-2"
        >
          <p
            className="text-2xl sm:text-4xl md:text-5xl text-[#A83F25] font-serif font-bold tracking-wide"
            style={{ fontFamily: "'Cinzel', Georgia, serif" }}
          >
            {couple.groom} &amp; {couple.bride}
          </p>
          <p className="text-[11px] sm:text-sm font-bold tracking-[0.3em] uppercase text-[#D6A84F] font-serif mt-1">
            {event.fullDate}
          </p>
        </motion.div>

        {/* Decorative footer strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#D6A84F]/35 w-full max-w-lg flex flex-col items-center gap-2.5 sm:gap-3 px-4"
        >
          <div className="flex items-center gap-3 text-[#D6A84F]">
            <span className="text-sm">✦</span>
            <Heart className="w-4 h-4 fill-current text-[#A83F25]" />
            <span className="text-sm">✦</span>
          </div>
          <p className="text-[11px] sm:text-sm text-[#8F331C] tracking-[0.2em] uppercase font-serif font-semibold">
            We Look Forward to Celebrating With You
          </p>
        </motion.div>

      </div>
    </section>
  );
}
