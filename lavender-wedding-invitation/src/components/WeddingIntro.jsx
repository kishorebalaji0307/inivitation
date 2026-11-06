import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Gentle Lavender & Jasmine Floating Petals
 */
function FloatingPetals({ active }) {
  const petals = useRef(
    Array.from({ length: 24 }, (_, i) => {
      const type = i % 3; // 0: Lavender, 1: Gold, 2: Jasmine
      return {
        id: i,
        type,
        color: type === 0 ? '#C4A5E2' : type === 1 ? '#E5C97F' : '#FFFDF9',
        accentColor: type === 0 ? '#865CA7' : type === 1 ? '#C5A059' : '#EDE0F8',
        left: Math.random() * 100,
        delay: Math.random() * 3.5,
        duration: 6 + Math.random() * 4,
        size: 11 + Math.random() * 12,
        depth: 0.6 + Math.random() * 0.6,
      };
    })
  ).current;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-10 overflow-hidden transition-opacity duration-700 ${
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
                opacity="0.85"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Botanical Lavender Corner Floral Motif (SVG)
 */
function CardCornerFloral({ className = '', style = {} }) {
  return (
    <div
      className={`absolute pointer-events-none select-none z-10 w-16 sm:w-20 h-16 sm:h-20 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-xs">
        <defs>
          <linearGradient id="petalLavender" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8C2EE" />
            <stop offset="50%" stopColor="#A278CC" />
            <stop offset="100%" stopColor="#6C3E91" />
          </linearGradient>
          <linearGradient id="leafSage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B3CFB7" />
            <stop offset="100%" stopColor="#5E8367" />
          </linearGradient>
        </defs>
        {/* Branch */}
        <path d="M0 0 Q35 15 65 50 T90 90" stroke="#75987E" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        {/* Leaves */}
        <path d="M32 15 C45 6 56 9 58 19 C48 23 38 21 32 15 Z" fill="url(#leafSage)" opacity="0.75" />
        <path d="M15 32 C6 45 9 56 19 58 C23 48 21 38 15 32 Z" fill="url(#leafSage)" opacity="0.75" />
        <path d="M52 38 C64 30 72 35 71 44 C62 46 55 43 52 38 Z" fill="url(#leafSage)" opacity="0.7" />
        {/* Blossoms */}
        <circle cx="42" cy="42" r="11" fill="url(#petalLavender)" opacity="0.88" />
        <circle cx="40" cy="40" r="6" fill="#4E2370" opacity="0.9" />
        <circle cx="40" cy="40" r="2" fill="#E5C97F" />
        <circle cx="62" cy="28" r="7.5" fill="url(#petalLavender)" opacity="0.8" />
        <circle cx="28" cy="62" r="7.5" fill="url(#petalLavender)" opacity="0.8" />
      </svg>
    </div>
  );
}

/**
 * Traditional Auspicious Lotus Filigree
 */
function LotusFiligree({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`} aria-hidden="true">
      <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-[#C5A059] to-[#C5A059]" />
      <svg viewBox="0 0 28 20" className="w-5 h-4 sm:w-6 sm:h-4.5 text-[#865DA6] flex-shrink-0" fill="currentColor">
        <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
        <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
        <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
      </svg>
      <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent via-[#C5A059] to-[#C5A059]" />
    </div>
  );
}

/**
 * Elegant Royal Lavender Wedding Invitation Card Intro Screen
 * Features a realistic, subtle 3D card opening animation.
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

    // 2. Smooth 3D Card Opening Animation
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        if (onOpenComplete) onOpenComplete();
      },
    });
    timelineRef.current = tl;

    // A. 3D Card opens along its left spine
    if (frontCoverRef.current) {
      tl.to(
        frontCoverRef.current,
        {
          rotateY: -160,
          duration: 1.1,
          ease: 'power2.inOut',
          transformOrigin: 'left center',
        },
        0
      );
    }

    // B. Inside page reveals with soft golden illumination
    if (insidePageRef.current) {
      tl.to(
        insidePageRef.current,
        {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        },
        0.15
      );
    }

    // C. Center warm golden-lavender light glow expands
    if (lightGlowRef.current) {
      tl.to(
        lightGlowRef.current,
        {
          opacity: 1,
          scale: 1.8,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.1
      );
      tl.to(
        lightGlowRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
        },
        0.75
      );
    }

    // D. Card gently scales and dissolves smoothly into the main website
    if (cardContainerRef.current) {
      tl.to(
        cardContainerRef.current,
        {
          scale: 1.12,
          y: -10,
          duration: 0.65,
          ease: 'power2.inOut',
        },
        0.5
      );
    }

    // E. Intro container fades out seamlessly revealing the wedding hero
    if (containerRef.current) {
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.55,
          ease: 'power1.inOut',
        },
        0.85
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
      className="fixed inset-0 z-50 overflow-hidden select-none bg-gradient-to-br from-[#FAF7FD] via-[#F3EBF9] to-[#EFE2F7] flex items-center justify-center p-3 sm:p-6"
      style={{ touchAction: 'manipulation' }}
    >
      {/* ── AMBIENT RADIAL GLOW & LIGHT SHAFT ── */}
      <div
        ref={lightGlowRef}
        className="absolute inset-0 pointer-events-none opacity-0 bg-[radial-gradient(circle_at_center,rgba(255,250,240,0.95)_0%,rgba(235,218,252,0.7)_35%,rgba(197,160,89,0.25)_60%,transparent_80%)] origin-center z-20"
      />

      {/* Floating flower petals */}
      <FloatingPetals active={!isFinished} />

      {/* ── 3D CARD CONTAINER ── */}
      <div
        ref={cardContainerRef}
        className="relative z-20 w-full max-w-[400px] sm:max-w-[440px] max-h-[94vh] flex items-center justify-center"
        style={{ perspective: '1400px' }}
      >
        {/* Outer Radiant Soft Glow */}
        <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-[#9B72C3]/25 via-[#E5C97F]/20 to-[#FAF6FD]/30 blur-xl pointer-events-none" />

        {/* ────── 1. INSIDE RIGHT PAGE (Revealed as card opens) ────── */}
        <div
          ref={insidePageRef}
          className="absolute inset-0 rounded-3xl bg-[#FAF6FD] border border-[#DFC9F3] shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center opacity-0 overflow-hidden pointer-events-none z-10"
        >
          {/* Subtle inside background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,225,255,0.7)_0%,transparent_75%)] pointer-events-none" />

          {/* Golden inner border */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/30 pointer-events-none" />

          <p className="font-sans-clean text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#785493] uppercase mb-1">
            CELEBRATING LOVE &amp; TOGETHERNESS
          </p>

          <LotusFiligree className="my-2" />

          <h2 className="font-serif-royal text-2xl sm:text-3xl font-bold text-[#2E1546] my-1">
            {couple.groom} &amp; {couple.bride}
          </h2>

          <p className="font-script text-3xl sm:text-4xl text-[#785197] my-1">
            Welcome to our Celebration
          </p>

          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#6C4B85] mt-1 max-w-xs">
            &ldquo;Two Hearts &bull; One Journey &bull; Forever&rdquo;
          </p>

          <div className="mt-3 px-4 py-1.5 rounded-full bg-[#F3EBF9] border border-[#E0CEF3]">
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
          className="relative w-full rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#D8C2EE] shadow-[0_20px_55px_-10px_rgba(85,38,124,0.28),0_0_0_1px_rgba(255,255,255,0.8)_inset] px-5 sm:px-8 py-6 sm:py-9 flex flex-col items-center justify-center text-center cursor-pointer transition-shadow hover:shadow-[0_25px_65px_-8px_rgba(85,38,124,0.35)] overflow-hidden z-20"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
        >
          {/* Corner Botanical Floral Ornaments */}
          <CardCornerFloral className="top-1 left-1 origin-top-left" />
          <CardCornerFloral className="top-1 right-1 origin-top-right -scale-x-100" />
          <CardCornerFloral className="bottom-1 left-1 origin-bottom-left -scale-y-100" />
          <CardCornerFloral className="bottom-1 right-1 origin-bottom-right -scale-x-100 -scale-y-100" />

          {/* Inner Antique Gold Hairline Border */}
          <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/35 pointer-events-none" />

          {/* Left Spine Fold Line Effect */}
          <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-[#D5BFE9]/40 via-white/30 to-transparent pointer-events-none" />

          {/* 1. Auspicious Filigree Emblem */}
          <LotusFiligree className="mb-2 sm:mb-2.5" />

          {/* 2. Top Header */}
          <p className="font-sans-clean text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] text-[#714E8B] uppercase mb-0.5 select-none">
            TOGETHER WITH OUR FAMILIES
          </p>

          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#7D5C99] tracking-wider mb-2.5 sm:mb-3">
            cordially invite you to celebrate the wedding of
          </p>

          {/* 3. Bride & Groom Names in Royal Typography */}
          <div className="w-full py-1.5 my-0.5 border-y border-[#EADBFA]/80 flex flex-col items-center">
            <h1 className="font-serif-royal text-2xl sm:text-3.5xl font-bold text-[#2E1546] tracking-wide leading-tight drop-shadow-xs">
              {couple.groom}
            </h1>
            <div className="font-script text-3xl sm:text-4xl text-[#C5A059] my-0 leading-none select-none">
              &amp;
            </div>
            <h1 className="font-serif-royal text-2xl sm:text-3.5xl font-bold text-[#2E1546] tracking-wide leading-tight drop-shadow-xs">
              {couple.bride}
            </h1>
          </div>

          {/* 4. Wedding Date: November 29, 2026 */}
          <div className="my-3 sm:my-3.5 flex items-center justify-center gap-2 w-full">
            <div className="h-px flex-1 max-w-[32px] sm:max-w-[44px] bg-gradient-to-r from-transparent to-[#C5A059]/60" />
            <div className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F6EEFC] border border-[#DFC9F3] text-center shadow-2xs">
              <p className="font-serif-royal text-xs sm:text-sm font-bold text-[#35154E] tracking-wider">
                {marriage?.dateFormatted || "November 29, 2026"}
              </p>
            </div>
            <div className="h-px flex-1 max-w-[32px] sm:max-w-[44px] bg-gradient-to-l from-transparent to-[#C5A059]/60" />
          </div>

          <p className="font-serif-elegant italic text-[11px] sm:text-xs text-[#73518D] -mt-1 mb-4 sm:mb-5">
            {marriage?.venueName || "RV Mahal"}, {marriage?.location || "Manaparai"} &bull; {marriage?.timing || "9:00 AM – 10:30 AM"}
          </p>

          {/* 5. "Touch to Open Invitation" Glowing Royal Button */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
              boxShadow: [
                '0 0 16px rgba(197, 160, 89, 0.4), 0 4px 14px rgba(111, 68, 140, 0.25)',
                '0 0 28px rgba(197, 160, 89, 0.8), 0 6px 20px rgba(111, 68, 140, 0.4)',
                '0 0 16px rgba(197, 160, 89, 0.4), 0 4px 14px rgba(111, 68, 140, 0.25)',
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#6F448C] via-[#895CA6] to-[#6F448C] border-2 border-[#E5C97F] text-[#FFFDF9] shadow-lg cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-serif-royal text-xs sm:text-sm font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#FFFDF9]">
              Touch to Open Invitation
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '6s' }} />
          </motion.div>

          {/* 6. Romantic Sub-Hint */}
          <p className="mt-2.5 text-[10px] sm:text-[11px] text-[#82619E] font-serif-elegant italic tracking-wide">
            Touch to unfold our wedding invitation &bull; Music will play ♫
          </p>
        </div>
      </div>
    </div>
  );
}
