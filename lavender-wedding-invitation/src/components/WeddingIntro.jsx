import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Gentle Lavender & Jasmine Floating Petals
 */
function FloatingPetals({ active }) {
  const petals = useRef(
    Array.from({ length: 26 }, (_, i) => {
      const type = i % 3; // 0: Lavender, 1: Gold, 2: Jasmine
      return {
        id: i,
        type,
        color: type === 0 ? '#C4A5E2' : type === 1 ? '#E5C97F' : '#FFFDF9',
        accentColor: type === 0 ? '#865CA7' : type === 1 ? '#C5A059' : '#EDE0F8',
        left: Math.random() * 100,
        delay: Math.random() * 3.5,
        duration: 6.5 + Math.random() * 4.5,
        size: 11 + Math.random() * 13,
        depth: 0.6 + Math.random() * 0.6,
      };
    })
  ).current;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-10 overflow-hidden transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-8 animate-petal-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * (p.type === 2 ? 1 : 1.35)}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            transform: `scale(${p.depth})`,
          }}
        >
          {p.type === 2 ? (
            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-xs">
              <path
                d="M16 2 C17 9 23 15 30 16 C23 17 17 23 16 30 C15 23 9 17 2 16 C9 15 15 9 16 2 Z"
                fill="#FFFDF9"
              />
              <circle cx="16" cy="16" r="2.5" fill="#E5C97F" />
            </svg>
          ) : (
            <svg viewBox="0 0 28 36" className="w-full h-full drop-shadow-xs">
              <defs>
                <linearGradient id={`introPetal-${p.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={p.color} />
                  <stop offset="100%" stopColor={p.accentColor} />
                </linearGradient>
              </defs>
              <path
                d="M14 0 C22 0 28 8 28 18 C28 28 20 36 14 36 C8 36 0 28 0 18 C0 8 6 0 14 0 Z"
                fill={`url(#introPetal-${p.id})`}
                opacity="0.88"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Botanical Lavender Watercolor Corner Bouquet (SVG)
 * Exquisite botanical floral spray with layered petals and soft sage leaves.
 */
function CardCornerFloral({ className = '', style = {} }) {
  return (
    <div
      className={`absolute pointer-events-none select-none z-10 w-20 sm:w-26 h-20 sm:h-26 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-xs">
        <defs>
          <linearGradient id="petalDeepLav" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A3E4" />
            <stop offset="50%" stopColor="#915EB7" />
            <stop offset="100%" stopColor="#5E2F83" />
          </linearGradient>
          <linearGradient id="petalSoftLav" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF2FF" />
            <stop offset="60%" stopColor="#D2B4EE" />
            <stop offset="100%" stopColor="#9C6DC3" />
          </linearGradient>
          <linearGradient id="leafSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C1DAC5" />
            <stop offset="60%" stopColor="#7E9F85" />
            <stop offset="100%" stopColor="#4E6D54" />
          </linearGradient>
        </defs>

        {/* Stems */}
        <g stroke="#67886E" strokeWidth="1.2" strokeLinecap="round" opacity="0.8">
          <path d="M0 0 Q40 18 70 55 T108 108" />
          <path d="M45 25 Q65 15 88 20" />
          <path d="M25 45 Q15 65 20 88" />
        </g>

        {/* Sage Leaves */}
        <g fill="url(#leafSageGrad)" opacity="0.8">
          <path d="M38 18 C52 8 64 12 65 22 C53 26 43 24 38 18 Z" />
          <path d="M18 38 C8 52 12 64 22 65 C26 53 24 43 18 38 Z" />
          <path d="M60 42 C74 34 84 40 82 50 C71 52 63 48 60 42 Z" />
          <path d="M42 60 C34 74 40 84 50 82 C52 71 48 63 42 60 Z" />
          <path d="M80 20 C92 14 100 20 98 28 C88 29 82 25 80 20 Z" />
          <path d="M20 80 C14 92 20 100 28 98 C29 88 25 82 20 80 Z" />
        </g>

        {/* Small Lavender Buds */}
        <g fill="url(#petalDeepLav)" opacity="0.85">
          <circle cx="92" cy="22" r="3" />
          <circle cx="102" cy="30" r="2.5" />
          <circle cx="22" cy="92" r="3" />
          <circle cx="30" cy="102" r="2.5" />
        </g>

        {/* Outer Flower: Top Right */}
        <g transform="translate(74, 34)">
          <ellipse cx="-7" cy="0" rx="8" ry="6" fill="url(#petalSoftLav)" opacity="0.85" />
          <ellipse cx="7" cy="-2" rx="8" ry="6" fill="url(#petalSoftLav)" opacity="0.85" />
          <circle cx="0" cy="0" r="6" fill="url(#petalDeepLav)" />
          <circle cx="0" cy="0" r="1.5" fill="#E5C97F" />
        </g>

        {/* Outer Flower: Bottom Left */}
        <g transform="translate(34, 74)">
          <ellipse cx="0" cy="-7" rx="6" ry="8" fill="url(#petalSoftLav)" opacity="0.85" />
          <ellipse cx="-2" cy="7" rx="6" ry="8" fill="url(#petalSoftLav)" opacity="0.85" />
          <circle cx="0" cy="0" r="6" fill="url(#petalDeepLav)" />
          <circle cx="0" cy="0" r="1.5" fill="#E5C97F" />
        </g>

        {/* Main Central Blossom */}
        <g transform="translate(48, 48)">
          <ellipse cx="-11" cy="-2" rx="10" ry="7" transform="rotate(-20 -11 -2)" fill="url(#petalSoftLav)" opacity="0.9" />
          <ellipse cx="10" cy="-4" rx="10" ry="7" transform="rotate(25 10 -4)" fill="url(#petalSoftLav)" opacity="0.9" />
          <ellipse cx="-3" cy="11" rx="10" ry="7" transform="rotate(-10 -3 11)" fill="url(#petalDeepLav)" opacity="0.92" />
          <ellipse cx="8" cy="8" rx="9" ry="6" transform="rotate(20 8 8)" fill="url(#petalDeepLav)" opacity="0.92" />
          <circle cx="0" cy="0" r="7.5" fill="url(#petalDeepLav)" />
          <circle cx="0" cy="0" r="4" fill="#3D1558" />
          <circle cx="0" cy="0" r="1.8" fill="#E5C97F" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Antique Gold Corner Bracket Flourish (SVG)
 */
function GoldCornerBracket({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`w-4 h-4 text-[#C5A059] opacity-75 ${className}`} aria-hidden="true">
      <path d="M2 14 V4 C2 2.9 2.9 2 4 2 H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="4" cy="4" r="1.2" fill="currentColor" />
    </svg>
  );
}

/**
 * Royal Lotus & Antique Gold Crest Filigree
 */
function RoyalLotusCrest({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 sm:gap-3 ${className}`} aria-hidden="true">
      <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059]/70 to-[#C5A059]" />
      <div className="flex items-center gap-1.5 text-[#C5A059]">
        <span className="text-[9px] text-[#A278CC]">✦</span>
        <svg viewBox="0 0 30 22" className="w-6 h-4.5 sm:w-7 sm:h-5 text-[#865DA6] filter drop-shadow-xs" fill="currentColor">
          <path d="M15 1 C13 7 9 10 4 13 C9 13 13 12 15 15 C17 12 21 13 26 13 C21 10 17 7 15 1 Z" />
          <path d="M15 16 C11 15 6 16 2 18 C7 19 11 19 15 19 C19 19 23 19 28 18 C24 16 19 15 15 16 Z" opacity="0.8" />
          <circle cx="15" cy="8" r="1.5" fill="#E5C97F" />
        </svg>
        <span className="text-[9px] text-[#A278CC]">✦</span>
      </div>
      <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059]/70 to-[#C5A059]" />
    </div>
  );
}

/**
 * Elegant Royal Lavender Wedding Invitation Card Intro Screen
 */
export default function WeddingIntro({ onOpenStart, onOpenComplete }) {
  const containerRef = useRef(null);
  const cardContainerRef = useRef(null);
  const frontCoverRef = useRef(null);
  const insidePageRef = useRef(null);
  const lightGlowRef = useRef(null);
  const timelineRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const { couple, events } = weddingData;
  const marriage = events?.marriage;

  const handleOpenInvitation = () => {
    if (isOpening || isFinished || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsOpening(true);

    // 1. Immediately start BGM on user interaction
    if (onOpenStart) {
      try {
        onOpenStart();
      } catch (err) {
        console.warn('[WeddingIntro] onOpenStart audio error:', err);
      }
    }

    // 2. Smooth and Graceful Card Opening Animation
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        if (onOpenComplete) onOpenComplete();
      },
    });
    timelineRef.current = tl;

    // A. 3D Card smoothly opens along its left spine with a natural ease curve
    if (frontCoverRef.current) {
      tl.to(
        frontCoverRef.current,
        {
          rotateY: -155,
          duration: 1.35,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
        },
        0
      );
    }

    // B. Inside page reveals with soft golden-lavender illumination
    if (insidePageRef.current) {
      tl.to(
        insidePageRef.current,
        {
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
        },
        0.2
      );
    }

    // C. Center warm golden-lavender ambient light glow expands gracefully
    if (lightGlowRef.current) {
      tl.to(
        lightGlowRef.current,
        {
          opacity: 0.95,
          scale: 2.0,
          duration: 1.1,
          ease: 'power2.out',
        },
        0.15
      );
      tl.to(
        lightGlowRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: 'power1.out',
        },
        1.0
      );
    }

    // D. Card gently scales and dissolves smoothly into the main wedding hero section
    if (cardContainerRef.current) {
      tl.to(
        cardContainerRef.current,
        {
          scale: 1.08,
          y: -8,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
        },
        0.85
      );
    }

    // E. Intro background fades out seamlessly revealing the wedding website
    if (containerRef.current) {
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.75,
          ease: 'power1.inOut',
        },
        1.05
      );
    }
  };

  useEffect(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  if (isFinished) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 overflow-hidden select-none bg-gradient-to-br from-[#FAF7FD] via-[#F4ECFA] to-[#EFE2F7] flex items-center justify-center p-3.5 sm:p-6"
      style={{ touchAction: 'manipulation' }}
    >
      {/* ── AMBIENT RADIAL GLOW & LIGHT SHAFT ── */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 bg-[radial-gradient(circle_at_center,rgba(255,250,240,0.96)_0%,rgba(238,220,255,0.75)_35%,rgba(197,160,89,0.28)_60%,transparent_82%)] origin-center z-20"
      />

      {/* Floating flower petals */}
      <FloatingPetals active={!isFinished} />

      {/* ── 3D CARD CONTAINER WITH GRADUAL FADE-IN & GENTLE ZOOM ANIMATION ── */}
      <motion.div
        ref={cardContainerRef}
        initial={{ opacity: 0, y: 28, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1], // Slow, luxurious, gradual zoom-in
        }}
        className="relative z-20 w-full max-w-[400px] sm:max-w-[450px] max-h-[94vh] flex items-center justify-center"
        style={{ perspective: '1400px' }}
      >
        {/* Multi-layered Soft Glow & Deep Ambient Shadow */}
        <div className="absolute -inset-4 sm:-inset-6 rounded-[32px] bg-gradient-to-tr from-[#8E5BA8]/20 via-[#E5C97F]/18 to-[#FAF6FD]/30 blur-2xl pointer-events-none" />

        {/* ────── 1. INSIDE RIGHT PAGE (Revealed as card opens) ────── */}
        <div
          ref={insidePageRef}
          className="absolute inset-0 rounded-[28px] sm:rounded-3xl bg-[#FAF6FD] border border-[#DFC9F3] shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center opacity-0 overflow-hidden pointer-events-none z-10"
        >
          {/* Subtle inside background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,225,255,0.75)_0%,transparent_75%)] pointer-events-none" />

          {/* Golden inner border */}
          <div className="absolute inset-2.5 sm:inset-3.5 rounded-2xl border border-[#C5A059]/35 pointer-events-none" />

          <p className="font-sans-clean text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#785493] uppercase mb-1">
            CELEBRATING LOVE &amp; TOGETHERNESS
          </p>

          <RoyalLotusCrest className="my-2" />

          <h2 className="font-serif-royal text-2xl sm:text-3.5xl font-bold text-[#2A1242] my-1">
            {couple.groom} &amp; {couple.bride}
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#785197] my-1">
            Welcome to our Celebration
          </p>

          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#6C4B85] mt-1 max-w-xs">
            &ldquo;Two Hearts &bull; One Journey &bull; Forever&rdquo;
          </p>

          <div className="mt-3.5 px-4 py-1.5 rounded-full bg-[#F3EBF9] border border-[#E0CEF3]">
            <p className="font-serif-royal text-xs font-bold text-[#35154E]">
              Sunday, November 29, 2026 &bull; RV Mahal
            </p>
          </div>
        </div>

        {/* ────── 2. 3D FRONT COVER (The Main Royal Lavender Invitation Card) ────── */}
        <div
          ref={frontCoverRef}
          onClick={handleOpenInvitation}
          onTouchStart={handleOpenInvitation}
          className="relative w-full rounded-[28px] sm:rounded-3xl bg-gradient-to-b from-[#FFFDFE] via-[#FAF6FE] to-[#F6EDFC] backdrop-blur-md border-2 border-[#D8C1EE] shadow-[0_24px_65px_-12px_rgba(75,30,115,0.24),0_8px_24px_-4px_rgba(197,160,89,0.18),0_0_0_1px_rgba(255,255,255,0.9)_inset] px-5 sm:px-8 py-6 sm:py-9 flex flex-col items-center justify-center text-center cursor-pointer transition-shadow hover:shadow-[0_28px_75px_-10px_rgba(75,30,115,0.32)] overflow-hidden z-20"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Botanical Watercolor Lavender Corner Floral Sprays */}
          <CardCornerFloral className="top-1 left-1 origin-top-left" />
          <CardCornerFloral className="top-1 right-1 origin-top-right -scale-x-100" />
          <CardCornerFloral className="bottom-1 left-1 origin-bottom-left -scale-y-100" />
          <CardCornerFloral className="bottom-1 right-1 origin-bottom-right -scale-x-100 -scale-y-100" />

          {/* Inner Antique Gold Ornamental Hairline Border with Decorative Brackets */}
          <div className="absolute inset-2.5 sm:inset-3.5 rounded-2xl border border-[#C5A059]/40 pointer-events-none">
            <GoldCornerBracket className="absolute top-1 left-1" />
            <GoldCornerBracket className="absolute top-1 right-1 -scale-x-100" />
            <GoldCornerBracket className="absolute bottom-1 left-1 -scale-y-100" />
            <GoldCornerBracket className="absolute bottom-1 right-1 -scale-x-100 -scale-y-100" />
          </div>

          {/* Subtle Secondary Inner Hairline */}
          <div className="absolute inset-4 sm:inset-5 rounded-xl border border-[#EADBFA]/70 pointer-events-none" />

          {/* Left Spine Shadow Effect for 3D Book/Card Realism */}
          <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-[#D5BEE8]/40 via-white/30 to-transparent pointer-events-none" />

          {/* 1. Auspicious Royal Lotus Emblem */}
          <RoyalLotusCrest className="mb-2 sm:mb-2.5" />

          {/* 2. Top Header Subtitles */}
          <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-[#6E4E85] uppercase mb-0.5 select-none">
            TOGETHER WITH OUR FAMILIES
          </p>

          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#7D5C99] tracking-wider mb-2.5 sm:mb-3">
            cordially invite you to celebrate the wedding of
          </p>

          {/* 3. Bride & Groom Names in Majestic Royal Typography */}
          <div className="w-full py-1.5 sm:py-2 my-0.5 border-y border-[#EADBFA]/85 flex flex-col items-center">
            <h1 className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2A1242] tracking-wider leading-tight drop-shadow-xs">
              {couple.groom}
            </h1>
            <div className="font-script text-3xl sm:text-5xl text-[#C5A059] my-0 leading-none select-none filter drop-shadow-xs">
              &amp;
            </div>
            <h1 className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2A1242] tracking-wider leading-tight drop-shadow-xs">
              {couple.bride}
            </h1>
          </div>

          {/* 4. Wedding Date: November 29, 2026 */}
          <div className="my-3 sm:my-3.5 flex items-center justify-center gap-2 w-full">
            <div className="h-px flex-1 max-w-[32px] sm:max-w-[48px] bg-gradient-to-r from-transparent to-[#C5A059]/70" />
            <div className="px-4 sm:px-5 py-1 sm:py-1.5 rounded-full bg-[#F6EEFC] border border-[#DFC8F3] text-center shadow-2xs">
              <p className="font-serif-royal text-xs sm:text-sm font-bold text-[#35154E] tracking-wider">
                {marriage?.dateFormatted || "November 29, 2026"}
              </p>
            </div>
            <div className="h-px flex-1 max-w-[32px] sm:max-w-[48px] bg-gradient-to-l from-transparent to-[#C5A059]/70" />
          </div>

          <p className="font-serif-elegant italic text-[11px] sm:text-xs text-[#73518D] -mt-1 mb-4 sm:mb-5">
            {marriage?.venueName || "RV Mahal"}, {marriage?.location || "Manaparai"} &bull; {marriage?.timing || "9:00 AM – 10:30 AM"}
          </p>

          {/* 5. "Touch to Open Invitation" Glowing Royal Button */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: [1, 1.025, 1],
              boxShadow: [
                '0 0 18px rgba(197, 160, 89, 0.45), 0 4px 16px rgba(105, 62, 134, 0.28)',
                '0 0 30px rgba(197, 160, 89, 0.85), 0 6px 22px rgba(105, 62, 134, 0.45)',
                '0 0 18px rgba(197, 160, 89, 0.45), 0 4px 16px rgba(105, 62, 134, 0.28)',
              ],
            }}
            transition={{
              opacity: { delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              y: { delay: 1.0, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              scale: { delay: 1.9, duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
              boxShadow: { delay: 1.9, duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#693E86] via-[#8555A2] to-[#693E86] border-2 border-[#E5C97F] text-[#FFFDF9] shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '7s' }} />
            <span className="font-serif-royal text-xs sm:text-sm font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#FFFDF9]">
              Touch to Open Invitation
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '7s' }} />
          </motion.div>

          {/* 6. Romantic Sub-Hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-2.5 text-[10px] sm:text-[11px] text-[#82619E] font-serif-elegant italic tracking-wide"
          >
            Touch to unfold our wedding invitation &bull; Music will play ♫
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
