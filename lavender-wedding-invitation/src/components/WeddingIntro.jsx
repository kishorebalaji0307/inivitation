import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Realistic Royal Lavender & Jasmine Floating Petals
 */
function FloatingPetalOverlay({ active }) {
  const petals = useRef(
    Array.from({ length: 36 }, (_, i) => {
      const type = i % 4; // 0: Royal Lavender, 1: Golden Shimmer, 2: Jasmine White, 3: Soft Lilac
      return {
        id: i,
        type,
        color:
          type === 0
            ? '#B896D8'
            : type === 1
            ? '#E5C97F'
            : type === 2
            ? '#FFFDF9'
            : '#9B6DC0',
        accentColor:
          type === 0
            ? '#7A4D96'
            : type === 1
            ? '#C5A059'
            : type === 2
            ? '#F3EAF9'
            : '#5D3378',
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 5.5 + Math.random() * 4.5,
        size: 13 + Math.random() * 14,
        depth: 0.6 + Math.random() * 0.7,
        zIndex: i % 3 === 0 ? 35 : 15,
      };
    })
  ).current;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-30 overflow-hidden transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-10 animate-petal-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * (p.type === 2 ? 1 : 1.3)}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            transform: `scale(${p.depth})`,
            zIndex: p.zIndex,
          }}
        >
          {p.type === 2 ? (
            /* Jasmine Blossom 4-petal Star */
            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-xs">
              <path
                d="M16 2 C17 9 23 15 30 16 C23 17 17 23 16 30 C15 23 9 17 2 16 C9 15 15 9 16 2 Z"
                fill="#FFFDF9"
              />
              <circle cx="16" cy="16" r="3" fill="#C5A059" />
            </svg>
          ) : (
            /* Curled Silk Petal */
            <svg viewBox="0 0 28 36" className="w-full h-full drop-shadow-xs">
              <defs>
                <linearGradient id={`introPetalGrad-${p.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={p.color} />
                  <stop offset="70%" stopColor={p.color} />
                  <stop offset="100%" stopColor={p.accentColor} />
                </linearGradient>
              </defs>
              <path
                d="M14 0 C22 0 28 8 28 18 C28 28 20 36 14 36 C8 36 0 28 0 18 C0 8 6 0 14 0 Z"
                fill={`url(#introPetalGrad-${p.id})`}
                opacity="0.88"
              />
              <path
                d="M14 4 C18 12 18 24 14 32"
                stroke={p.accentColor}
                strokeWidth="0.8"
                opacity="0.35"
                fill="none"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Delicate Corner Watercolor Floral Spray (SVG)
 */
function CardCornerFloral({ className = '', style = {} }) {
  return (
    <div className={`absolute pointer-events-none select-none z-10 w-16 sm:w-24 h-16 sm:h-24 ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" className="w-full h-full drop-shadow-xs">
        <defs>
          <linearGradient id="cardFloralPetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D5BDEE" />
            <stop offset="50%" stopColor="#9C72C3" />
            <stop offset="100%" stopColor="#6E3D96" />
          </linearGradient>
          <linearGradient id="cardFloralLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AFCBB3" />
            <stop offset="100%" stopColor="#5B7E64" />
          </linearGradient>
        </defs>
        {/* Soft stem */}
        <path d="M0 0 Q40 15 75 55 T105 105" stroke="#7A9C83" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
        {/* Leaves */}
        <path d="M40 18 C55 8 68 12 70 24 C58 28 46 25 40 18 Z" fill="url(#cardFloralLeaf)" opacity="0.7" />
        <path d="M18 40 C8 55 12 68 24 70 C28 58 25 46 18 40 Z" fill="url(#cardFloralLeaf)" opacity="0.7" />
        <path d="M65 45 C78 38 88 44 86 54 C76 56 68 52 65 45 Z" fill="url(#cardFloralLeaf)" opacity="0.7" />
        {/* Blooms */}
        <circle cx="50" cy="50" r="14" fill="url(#cardFloralPetal)" opacity="0.85" />
        <circle cx="48" cy="48" r="8" fill="#58297E" opacity="0.9" />
        <circle cx="48" cy="48" r="2.5" fill="#E5C97F" />
        <circle cx="75" cy="35" r="9" fill="url(#cardFloralPetal)" opacity="0.8" />
        <circle cx="35" cy="75" r="9" fill="url(#cardFloralPetal)" opacity="0.8" />
      </svg>
    </div>
  );
}

/**
 * Traditional Brass & Lavender Kuthuvilakku Lamp with Warm Glow
 */
function KuthuvilakkuLamp({ side = 'left' }) {
  return (
    <div
      className={`hidden sm:flex absolute bottom-4 sm:bottom-6 ${
        side === 'left' ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
      } z-25 pointer-events-none flex-col items-center drop-shadow-[0_0_18px_rgba(214,168,79,0.5)]`}
    >
      {/* Glowing Warm Flame */}
      <div className="relative flex flex-col items-center">
        <div className="w-3 sm:w-3.5 h-5 sm:h-6 rounded-full bg-gradient-to-t from-[#C5A059] via-[#FBBF24] to-[#FFFBEB] shadow-[0_0_16px_#C5A059] animate-pulse" />
        <div className="absolute top-1 w-1 h-2 rounded-full bg-white blur-[0.5px]" />
      </div>

      {/* Brass Lamp Oil Reservoir Dish */}
      <div className="w-9 sm:w-11 h-3 rounded-b-full bg-gradient-to-b from-[#E5C97F] via-[#C5A059] to-[#7C5295] border-t border-[#FFFBEB] shadow-xs -mt-0.5" />

      {/* Ornate Fluted Brass Pillar */}
      <div className="w-2.5 sm:w-3 h-16 sm:h-20 bg-gradient-to-r from-[#8C600B] via-[#E5C97F] to-[#5C3D06] shadow-inner" />

      {/* Tiered Decorative Base */}
      <div className="w-5 sm:w-6 h-1.5 rounded-t-sm bg-gradient-to-t from-[#C5A059] to-[#E5C97F]" />
      <div className="w-10 sm:w-12 h-3.5 rounded-t-lg bg-gradient-to-t from-[#6E3C8A] via-[#C5A059] to-[#E5C97F] shadow-lg" />

      {/* Warm Floor Light Glow Reflection */}
      <div className="w-16 h-4 rounded-full bg-[#C5A059]/20 blur-sm -mt-1" />
    </div>
  );
}

/**
 * Hanging Lavender and Jasmine Garlands
 */
function SideGarlandStrand({ side = 'left' }) {
  const flowers = [
    { color: '#9B6DC0' },
    { color: '#FFFDF9' },
    { color: '#7C5295' },
    { color: '#FFFDF9' },
    { color: '#B794D6' },
    { color: '#FFFDF9' },
    { color: '#C5A059' },
    { color: '#9B6DC0' },
    { color: '#FFFDF9' },
  ];

  return (
    <div
      className={`hidden sm:flex absolute top-0 ${
        side === 'left' ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
      } z-25 pointer-events-none flex-col items-center drop-shadow-xs select-none`}
    >
      <div className="w-[1.2px] h-3 bg-gradient-to-b from-[#C5A059] to-[#7C5295]" />
      {flowers.map((f, i) => (
        <div key={i} className="flex flex-col items-center -my-0.5">
          <div
            className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full shadow-xs flex items-center justify-center"
            style={{ backgroundColor: f.color }}
          >
            <div className="w-1 h-1 rounded-full bg-white/70" />
          </div>
          <div className="w-0.5 h-1 bg-[#C5A059]/50" />
        </div>
      ))}
      <div className="w-3 h-4 bg-gradient-to-b from-[#C5A059] to-[#7C5295] rounded-b-full shadow-xs mt-0.5" />
    </div>
  );
}

/**
 * Main Royal Lavender Wedding Theme Intro Screen
 */
export default function WeddingIntro({ onOpenStart, onOpenComplete }) {
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const leftValanceRef = useRef(null);
  const rightValanceRef = useRef(null);
  const lightShaftRef = useRef(null);
  const cardRef = useRef(null);
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

    // 1. Immediately trigger background music playback on user gesture
    if (onOpenStart) {
      try {
        onOpenStart();
      } catch (err) {
        console.warn('[WeddingIntro] onOpenStart audio error:', err);
      }
    }

    // 2. Play smooth, regal opening animation with GSAP
    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        if (onOpenComplete) onOpenComplete();
      },
    });
    timelineRef.current = tl;

    // A. Center Invitation Card gently elevates and fades with light
    if (cardRef.current) {
      tl.to(
        cardRef.current,
        {
          opacity: 0,
          scale: 1.04,
          y: -12,
          duration: 0.5,
          ease: 'power2.in',
        },
        0
      );
    }

    // B. Warm Golden-Lavender Light Shaft expands from the center
    if (lightShaftRef.current) {
      tl.to(
        lightShaftRef.current,
        {
          opacity: 0.95,
          scaleX: 3.2,
          duration: 1.0,
          ease: 'power2.out',
        },
        0.1
      );
      tl.to(
        lightShaftRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: 'power1.out',
        },
        0.8
      );
    }

    // C. Left Royal Lavender Curtain: folds and glides gracefully to the left
    if (leftCurtainRef.current) {
      tl.to(
        leftCurtainRef.current,
        {
          xPercent: -105,
          scaleX: 0.45,
          duration: 1.4,
          ease: 'power3.inOut',
          transformOrigin: 'left top',
        },
        0.05
      );
    }

    // D. Right Royal Lavender Curtain: folds and glides gracefully to the right
    if (rightCurtainRef.current) {
      tl.to(
        rightCurtainRef.current,
        {
          xPercent: 105,
          scaleX: 0.45,
          duration: 1.4,
          ease: 'power3.inOut',
          transformOrigin: 'right top',
        },
        0.05
      );
    }

    // E. Top Lavender Valance Swags lift and part
    if (leftValanceRef.current && rightValanceRef.current) {
      tl.to(
        leftValanceRef.current,
        {
          xPercent: -95,
          duration: 1.35,
          ease: 'power3.inOut',
        },
        0.08
      );
      tl.to(
        rightValanceRef.current,
        {
          xPercent: 95,
          duration: 1.35,
          ease: 'power3.inOut',
        },
        0.08
      );
    }

    // F. Seamlessly fade out the entire intro backdrop revealing the wedding website
    if (containerRef.current) {
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        },
        1.15
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
      className="fixed inset-0 z-50 overflow-hidden select-none bg-[#FAF6FD]"
      style={{ touchAction: 'manipulation' }}
    >
      {/* ── 1. GOLDEN-LAVENDER BACKLIGHT (Reveals as curtains part) ── */}
      <div
        ref={lightShaftRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-[radial-gradient(ellipse_at_center,rgba(255,250,240,0.98)_0%,rgba(240,225,255,0.8)_30%,rgba(216,194,238,0.5)_60%,transparent_100%)] origin-center"
      />

      {/* ── 2. LEFT ROYAL LAVENDER SILK CURTAIN ── */}
      <div
        ref={leftCurtainRef}
        onClick={handleOpenInvitation}
        onTouchStart={handleOpenInvitation}
        className="absolute top-0 bottom-0 left-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[10px_0_30px_rgba(75,35,105,0.4)] origin-left"
        style={{ willChange: 'transform' }}
      >
        {/* Royal Lavender Silk Base Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #6C4288 0%, #895CA6 30%, #AE86CC 58%, #7C5197 82%, #582C72 100%)',
          }}
        />

        {/* Vertical Pleats & Luminous Silk Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(50,18,72,0.38) 0px, rgba(235,220,252,0.22) 18px, rgba(255,255,255,0.26) 36px, rgba(50,18,72,0.4) 54px, rgba(175,135,215,0.18) 72px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Light Sheen */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Antique Gold Zari Border on Inner Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-7 sm:w-11 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#E5C97F]/95 border-l border-[#C5A059]/50 shadow-[-3px_0_10px_rgba(60,25,85,0.35)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFDF9] opacity-95 filter drop-shadow-xs">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem */}
        <div className="absolute bottom-0 inset-x-0 h-3.5 bg-gradient-to-t from-[#B89344] via-[#E5C97F] to-transparent border-t border-[#FFFDF9]/60" />

        {/* Outer Left Tie-Back Tassel */}
        <div className="hidden sm:flex absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none flex-col items-center drop-shadow-md">
          <div className="w-1.5 h-14 rounded-full bg-gradient-to-b from-[#C5A059] via-[#E5C97F] to-[#7C5295] shadow-xs" />
          <div className="w-4 h-6 rounded-b-full bg-gradient-to-b from-[#E5C97F] to-[#572D75] border-t border-white" />
        </div>
      </div>

      {/* ── 3. RIGHT ROYAL LAVENDER SILK CURTAIN ── */}
      <div
        ref={rightCurtainRef}
        onClick={handleOpenInvitation}
        onTouchStart={handleOpenInvitation}
        className="absolute top-0 bottom-0 right-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[-10px_0_30px_rgba(75,35,105,0.4)] origin-right"
        style={{ willChange: 'transform' }}
      >
        {/* Royal Lavender Silk Base Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(-135deg, #6C4288 0%, #895CA6 30%, #AE86CC 58%, #7C5197 82%, #582C72 100%)',
          }}
        />

        {/* Vertical Pleats & Luminous Silk Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(50,18,72,0.38) 0px, rgba(235,220,252,0.22) 18px, rgba(255,255,255,0.26) 36px, rgba(50,18,72,0.4) 54px, rgba(175,135,215,0.18) 72px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Light Sheen */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(-105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0) 60%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Antique Gold Zari Border on Inner Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-7 sm:w-11 bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#E5C97F]/95 border-r border-[#C5A059]/50 shadow-[3px_0_10px_rgba(60,25,85,0.35)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFDF9] opacity-95 filter drop-shadow-xs">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem */}
        <div className="absolute bottom-0 inset-x-0 h-3.5 bg-gradient-to-t from-[#B89344] via-[#E5C97F] to-transparent border-t border-[#FFFDF9]/60" />

        {/* Outer Right Tie-Back Tassel */}
        <div className="hidden sm:flex absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none flex-col items-center drop-shadow-md">
          <div className="w-1.5 h-14 rounded-full bg-gradient-to-b from-[#C5A059] via-[#E5C97F] to-[#7C5295] shadow-xs" />
          <div className="w-4 h-6 rounded-b-full bg-gradient-to-b from-[#E5C97F] to-[#572D75] border-t border-white" />
        </div>
      </div>

      {/* ── 4. TOP DRAPED PELMET / VALANCE SWAG ── */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none overflow-hidden flex justify-between">
        {/* Left Valance */}
        <div
          ref={leftValanceRef}
          className="w-1/2 h-12 sm:h-16 bg-gradient-to-b from-[#4A2466] via-[#6B3C8C] to-[#8E5FA8] rounded-br-[50px] border-b-2 border-[#C5A059] shadow-lg origin-left"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(229,201,127,0.25)_0%,transparent_70%)]" />
        </div>

        {/* Right Valance */}
        <div
          ref={rightValanceRef}
          className="w-1/2 h-12 sm:h-16 bg-gradient-to-b from-[#4A2466] via-[#6B3C8C] to-[#8E5FA8] rounded-bl-[50px] border-b-2 border-[#C5A059] shadow-lg origin-right"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(229,201,127,0.25)_0%,transparent_70%)]" />
        </div>

        {/* Central Auspicious Gold Medallion */}
        <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center drop-shadow-md">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gradient-to-b from-[#F2DFB3] via-[#C5A059] to-[#7C4E96] border-2 border-[#FFFDF9] shadow-[0_2px_12px_rgba(197,160,89,0.7)] flex items-center justify-center">
            <span className="text-xs sm:text-sm text-[#FFFDF9] font-serif font-bold">🪷</span>
          </div>
        </div>
      </div>

      {/* ── 5. TRADITIONAL DECORATIONS: Garlands & Lamps ── */}
      <SideGarlandStrand side="left" />
      <SideGarlandStrand side="right" />
      <KuthuvilakkuLamp side="left" />
      <KuthuvilakkuLamp side="right" />

      {/* ── 6. CENTER ROYAL INVITATION CARD (Floating over the Curtains) ── */}
      <AnimatePresence>
        {!isOpening && (
          <div
            ref={cardRef}
            onClick={handleOpenInvitation}
            onTouchStart={handleOpenInvitation}
            className="absolute inset-0 z-35 flex flex-col items-center justify-center px-3.5 sm:px-6 cursor-pointer text-center"
          >
            {/* Elegant Royal Invitation Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-md sm:max-w-lg w-full px-5 sm:px-9 py-6 sm:py-9 rounded-3xl bg-white/95 backdrop-blur-md border-2 border-[#D8C2EE] shadow-[0_20px_60px_-12px_rgba(85,38,124,0.35),0_0_0_1px_rgba(255,255,255,0.8)_inset] flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Corner Botanical Lavender Floral Ornaments */}
              <CardCornerFloral className="top-1 left-1 origin-top-left" />
              <CardCornerFloral className="top-1 right-1 origin-top-right -scale-x-100" />
              <CardCornerFloral className="bottom-1 left-1 origin-bottom-left -scale-y-100" />
              <CardCornerFloral className="bottom-1 right-1 origin-bottom-right -scale-x-100 -scale-y-100" />

              {/* Inner Antique Gold Hairline Border */}
              <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/35 pointer-events-none" />

              {/* 1. Auspicious Sacred Filigree Emblem */}
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5 text-[#C5A059]" aria-hidden="true">
                <span className="text-[10px] text-[#A278CC]">✦</span>
                <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <span className="text-base sm:text-lg">🪷</span>
                <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <span className="text-[10px] text-[#A278CC]">✦</span>
              </div>

              {/* 2. Top Phrasing */}
              <p className="font-sans-clean text-[9px] sm:text-[11px] font-semibold tracking-[0.28em] text-[#714E8B] uppercase mb-0.5 select-none">
                TOGETHER WITH OUR FAMILIES
              </p>

              <p className="font-serif-elegant italic text-xs sm:text-sm text-[#7D5C99] tracking-wider mb-2.5 sm:mb-3">
                cordially invite you to celebrate the wedding of
              </p>

              {/* 3. Bride & Groom Names in Royal Typography */}
              <div className="w-full py-2 my-0.5 border-y border-[#EADBFA]/80 flex flex-col items-center">
                <h1 className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1546] tracking-wide leading-tight drop-shadow-xs">
                  {couple.groom}
                </h1>
                <div className="font-script text-3xl sm:text-4xl md:text-5xl text-[#C5A059] my-0 leading-none select-none">
                  &amp;
                </div>
                <h1 className="font-serif-royal text-2xl sm:text-4xl font-bold text-[#2E1546] tracking-wide leading-tight drop-shadow-xs">
                  {couple.bride}
                </h1>
              </div>

              {/* 4. Wedding Date (November 29, 2026 clearly featured) */}
              <div className="my-3 sm:my-3.5 flex items-center justify-center gap-2 w-full">
                <div className="h-px flex-1 max-w-[36px] sm:max-w-[48px] bg-gradient-to-r from-transparent to-[#C5A059]/60" />
                <div className="px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F5ECFB] border border-[#DFC9F3] text-center shadow-2xs">
                  <p className="font-serif-royal text-xs sm:text-sm font-bold text-[#35154E] tracking-wider">
                    {marriage?.dateFormatted || "November 29, 2026"}
                  </p>
                </div>
                <div className="h-px flex-1 max-w-[36px] sm:max-w-[48px] bg-gradient-to-l from-transparent to-[#C5A059]/60" />
              </div>

              <p className="font-serif-elegant italic text-[11px] sm:text-xs text-[#704E89] -mt-1 sm:-mt-1.5 mb-4 sm:mb-5">
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
              <p className="mt-2.5 text-[10px] sm:text-xs text-[#82619E] font-serif-elegant italic tracking-wide">
                Touch to open &bull; Music will begin ♫
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── 7. FLOATING PETAL OVERLAY ── */}
      <FloatingPetalOverlay active={!isFinished} />
    </div>
  );
}
