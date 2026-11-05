import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Realistic Lavender Wedding Floating Petals (Lavender, Jasmine, Violet, Soft Pink)
 * Multi-depth particles entering from top and sides with natural breeze and rotations.
 */
function FloatingPetalOverlay({ active, isOpening }) {
  const petals = useRef(
    Array.from({ length: 40 }, (_, i) => {
      const type = i % 4; // 0: Royal Lavender, 1: Golden Shimmer, 2: Jasmine White, 3: Soft Violet
      return {
        id: i,
        type,
        color:
          type === 0
            ? '#B794D6'
            : type === 1
            ? '#C5A059'
            : type === 2
            ? '#FFFDF9'
            : '#8E68A8',
        accentColor:
          type === 0
            ? '#7C5295'
            : type === 1
            ? '#E5C97F'
            : type === 2
            ? '#F3EAF9'
            : '#572D75',
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: (isOpening ? 4.5 : 6.5) + Math.random() * 4.5,
        size: 13 + Math.random() * 16,
        depth: 0.55 + Math.random() * 0.75,
        swayX: (Math.random() - 0.5) * 60,
        zIndex: i % 3 === 0 ? 35 : 15,
      };
    })
  ).current;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-40 overflow-hidden transition-opacity duration-1000 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-12 animate-petal-fall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * (p.type === 2 ? 1 : 1.35)}px`,
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
            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-md">
              <path
                d="M16 2 C17 9 23 15 30 16 C23 17 17 23 16 30 C15 23 9 17 2 16 C9 15 15 9 16 2 Z"
                fill="#FFFDF9"
              />
              <circle cx="16" cy="16" r="3" fill="#C5A059" />
            </svg>
          ) : (
            /* Curled Silk Petal */
            <svg viewBox="0 0 28 36" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id={`petalGrad-${p.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={p.color} />
                  <stop offset="70%" stopColor={p.color} />
                  <stop offset="100%" stopColor={p.accentColor} />
                </linearGradient>
              </defs>
              <path
                d="M14 0 C22 0 28 8 28 18 C28 28 20 36 14 36 C8 36 0 28 0 18 C0 8 6 0 14 0 Z"
                fill={`url(#petalGrad-${p.id})`}
                opacity="0.9"
              />
              <path
                d="M14 4 C18 12 18 24 14 32"
                stroke={p.accentColor}
                strokeWidth="0.8"
                opacity="0.4"
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
 * Traditional Brass Kuthuvilakku Lamp with Lavender Base & Warm Oil Flame
 */
function KuthuvilakkuLamp({ side = 'left' }) {
  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 ${
        side === 'left' ? 'left-3 sm:left-8' : 'right-3 sm:right-8'
      } z-30 pointer-events-none flex flex-col items-center drop-shadow-[0_0_26px_rgba(214,168,79,0.7)]`}
    >
      {/* Glowing Warm Flame with Pulsing Core */}
      <div className="relative flex flex-col items-center">
        <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-full bg-gradient-to-t from-[#C5A059] via-[#FBBF24] to-[#FFFBEB] shadow-[0_0_20px_#C5A059] animate-pulse" />
        <div className="absolute top-1 w-1.5 h-3 rounded-full bg-white blur-[1px]" />
      </div>

      {/* Brass Lamp Oil Reservoir Dish */}
      <div className="w-11 sm:w-14 h-4 rounded-b-full bg-gradient-to-b from-[#E5C97F] via-[#C5A059] to-[#7C5295] border-t border-[#FFFBEB] shadow-md -mt-1" />

      {/* Ornate Fluted Brass Pillar */}
      <div className="w-3 sm:w-3.5 h-20 sm:h-28 bg-gradient-to-r from-[#8C600B] via-[#E5C97F] to-[#5C3D06] shadow-inner" />

      {/* Tiered Decorative Base */}
      <div className="w-7 sm:w-8 h-2 rounded-t-sm bg-gradient-to-t from-[#C5A059] to-[#E5C97F]" />
      <div className="w-14 sm:w-16 h-4.5 rounded-t-lg bg-gradient-to-t from-[#572D75] via-[#C5A059] to-[#E5C97F] shadow-2xl" />

      {/* Warm Floor Light Glow Reflection */}
      <div className="w-24 h-6 rounded-full bg-[#C5A059]/20 blur-md -mt-2" />
    </div>
  );
}

/**
 * Hanging Lavender and Jasmine Garlands flanking the sides
 */
function SideGarlandStrand({ side = 'left' }) {
  const flowers = [
    { type: 'lavender', color: '#9B6DC0' },
    { type: 'jasmine', color: '#FFFDF9' },
    { type: 'violet', color: '#7C5295' },
    { type: 'jasmine', color: '#FFFDF9' },
    { type: 'lavender', color: '#B794D6' },
    { type: 'jasmine', color: '#FFFDF9' },
    { type: 'violet', color: '#68398A' },
    { type: 'gold', color: '#C5A059' },
    { type: 'jasmine', color: '#FFFDF9' },
    { type: 'lavender', color: '#9B6DC0' },
    { type: 'jasmine', color: '#FFFDF9' },
  ];

  return (
    <div
      className={`absolute top-0 ${
        side === 'left' ? 'left-2 sm:left-7' : 'right-2 sm:right-7'
      } z-30 pointer-events-none flex flex-col items-center drop-shadow-md select-none`}
    >
      <div className="w-[1.5px] h-4 bg-gradient-to-b from-[#C5A059] to-[#7C5295]" />
      {flowers.map((f, i) => (
        <div key={i} className="flex flex-col items-center -my-0.5">
          <div
            className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 rounded-full shadow-sm flex items-center justify-center"
            style={{ backgroundColor: f.color }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
          <div className="w-0.5 h-1 bg-[#C5A059]/60" />
        </div>
      ))}
      <div className="w-4 h-6 bg-gradient-to-b from-[#C5A059] to-[#7C5295] rounded-b-full shadow-sm mt-0.5" />
    </div>
  );
}

/**
 * Main South Indian Royal Lavender Silk Curtain Opening Intro
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
  const [showPetals] = useState(true);

  const { couple, events } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  const handleOpenCurtains = () => {
    if (isOpening || isFinished || hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    setIsOpening(true);

    // Start background music immediately upon user gesture
    if (onOpenStart) onOpenStart();

    const tl = gsap.timeline({
      onComplete: () => {
        setIsFinished(true);
        if (onOpenComplete) onOpenComplete();
      },
    });
    timelineRef.current = tl;

    // 1. Center Invitation Card smoothly dissolves & scales up slightly
    if (cardRef.current) {
      tl.to(
        cardRef.current,
        {
          opacity: 0,
          scale: 1.05,
          y: -15,
          duration: 0.65,
          ease: 'power2.in',
        },
        0
      );
    }

    // 2. Golden Light Shaft expands between the parting curtains
    if (lightShaftRef.current) {
      tl.to(
        lightShaftRef.current,
        {
          opacity: 0.95,
          scaleX: 3.5,
          duration: 1.8,
          ease: 'power2.out',
        },
        0.2
      );
      tl.to(
        lightShaftRef.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: 'power1.out',
        },
        2.0
      );
    }

    // 3. Left Silk Curtain: Gathers, folds, waves and pulls to the left
    if (leftCurtainRef.current) {
      tl.to(
        leftCurtainRef.current,
        {
          xPercent: -105,
          scaleX: 0.38,
          skewY: -2.0,
          duration: 3.2,
          ease: 'power3.inOut',
          transformOrigin: 'left top',
        },
        0.1
      );
    }

    // 4. Right Silk Curtain: Gathers, folds, waves and pulls to the right
    if (rightCurtainRef.current) {
      tl.to(
        rightCurtainRef.current,
        {
          xPercent: 105,
          scaleX: 0.38,
          skewY: 2.0,
          duration: 3.2,
          ease: 'power3.inOut',
          transformOrigin: 'right top',
        },
        0.1
      );
    }

    // 5. Top Silk Valance Drapes lift and part smoothly
    if (leftValanceRef.current && rightValanceRef.current) {
      tl.to(
        leftValanceRef.current,
        {
          xPercent: -95,
          duration: 3.0,
          ease: 'power3.inOut',
        },
        0.15
      );
      tl.to(
        rightValanceRef.current,
        {
          xPercent: 95,
          duration: 3.0,
          ease: 'power3.inOut',
        },
        0.15
      );
    }

    // 6. Seamlessly fade out the intro backdrop into the already-mounted WeddingHero underneath
    if (containerRef.current) {
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        2.8
      );
    }
  };

  useEffect(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#1F0E2C] transition-all ${
        isFinished ? 'pointer-events-none' : ''
      }`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* 1. Golden Backlight behind the curtains (burgeons as curtains part) */}
      <div
        ref={lightShaftRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-[radial-gradient(ellipse_at_center,rgba(255,248,230,0.98)_0%,rgba(229,201,127,0.7)_35%,rgba(124,82,149,0.35)_70%,transparent_100%)] origin-center"
      />

      {/* 2. LEFT SILK CURTAIN (Royal Lavender Kanchipuram Silk with Gold Zari Border on Right Edge) */}
      <div
        ref={leftCurtainRef}
        onClick={handleOpenCurtains}
        onTouchStart={handleOpenCurtains}
        className="absolute top-0 bottom-0 left-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[12px_0_36px_rgba(0,0,0,0.85)] origin-left"
        style={{ willChange: 'transform' }}
      >
        {/* Photorealistic Silk Texture Base with Royal Lavender Tint */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/textures/silk-curtain-maroon.jpg')",
            filter: 'hue-rotate(240deg) saturate(1.1) brightness(0.9)',
          }}
        />

        {/* Rich Royal Lavender Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(45,20,61,0.7) 0%, rgba(94,50,122,0.45) 40%, rgba(124,82,149,0.3) 70%, rgba(34,12,48,0.75) 100%)',
          }}
        />

        {/* 3D Vertical Accordion Pleat Shadow & Highlights Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(20,8,30,0.7) 0px, rgba(124,82,149,0.18) 24px, rgba(255,255,255,0.16) 48px, rgba(20,8,30,0.72) 72px, rgba(124,82,149,0.2) 96px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Silk Sheen Highlight Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 80%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Intricate Antique Gold Zari Border down the Inner Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#E5C97F]/95 border-l border-[#C5A059]/50 shadow-[-4px_0_12px_rgba(0,0,0,0.5)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFDF9] opacity-90 filter drop-shadow">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#B89344] via-[#E5C97F] to-transparent border-t border-[#FFFDF9]" />

        {/* Outer Left Silk Rope Tie-Back with Tassel */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none flex flex-col items-center drop-shadow-lg">
          <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-[#C5A059] via-[#E5C97F] to-[#7C5295] shadow-md" />
          <div className="w-5 h-7 rounded-b-full bg-gradient-to-b from-[#E5C97F] to-[#572D75] border-t border-white" />
        </div>
      </div>

      {/* 3. RIGHT SILK CURTAIN (Royal Lavender Silk with Gold Zari Border on Left Edge) */}
      <div
        ref={rightCurtainRef}
        onClick={handleOpenCurtains}
        onTouchStart={handleOpenCurtains}
        className="absolute top-0 bottom-0 right-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[-12px_0_36px_rgba(0,0,0,0.85)] origin-right"
        style={{ willChange: 'transform' }}
      >
        {/* Photorealistic Silk Texture Mirrored with Lavender Tint */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/textures/silk-curtain-maroon.jpg')",
            transform: 'scaleX(-1)',
            filter: 'hue-rotate(240deg) saturate(1.1) brightness(0.9)',
          }}
        />

        {/* Rich Royal Lavender Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(-135deg, rgba(45,20,61,0.7) 0%, rgba(94,50,122,0.45) 40%, rgba(124,82,149,0.3) 70%, rgba(34,12,48,0.75) 100%)',
          }}
        />

        {/* 3D Vertical Accordion Pleat Shadow & Highlights Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(20,8,30,0.7) 0px, rgba(124,82,149,0.18) 24px, rgba(255,255,255,0.16) 48px, rgba(20,8,30,0.72) 72px, rgba(124,82,149,0.2) 96px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Silk Sheen Highlight Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(-105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 80%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Intricate Antique Gold Zari Border down the Inner Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#E5C97F]/95 border-r border-[#C5A059]/50 shadow-[4px_0_12px_rgba(0,0,0,0.5)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFDF9] opacity-90 filter drop-shadow">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#B89344] via-[#E5C97F] to-transparent border-t border-[#FFFDF9]" />

        {/* Outer Right Silk Rope Tie-Back with Tassel */}
        <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none flex flex-col items-center drop-shadow-lg">
          <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-[#C5A059] via-[#E5C97F] to-[#7C5295] shadow-md" />
          <div className="w-5 h-7 rounded-b-full bg-gradient-to-b from-[#E5C97F] to-[#572D75] border-t border-white" />
        </div>
      </div>

      {/* 4. TOP DECORATIVE SILK VALANCE / DRAPED PELMET */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none overflow-hidden flex justify-between">
        {/* Left Valance Swag */}
        <div
          ref={leftValanceRef}
          className="w-1/2 h-14 sm:h-20 bg-gradient-to-b from-[#2B1038] via-[#4F256B] to-[#6E3A8F] rounded-br-[60px] border-b-2 border-[#C5A059] shadow-xl origin-left"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(229,201,127,0.3)_0%,transparent_70%)]" />
        </div>

        {/* Right Valance Swag */}
        <div
          ref={rightValanceRef}
          className="w-1/2 h-14 sm:h-20 bg-gradient-to-b from-[#2B1038] via-[#4F256B] to-[#6E3A8F] rounded-bl-[60px] border-b-2 border-[#C5A059] shadow-xl origin-right"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(229,201,127,0.3)_0%,transparent_70%)]" />
        </div>

        {/* Central Auspicious Kalasam Medallion atop Curtains */}
        <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
          <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gradient-to-b from-[#E5C97F] via-[#C5A059] to-[#63337D] border-2 border-[#FFFDF9] shadow-[0_4px_16px_rgba(214,168,79,0.7)] flex items-center justify-center">
            <span className="text-base sm:text-lg font-serif font-bold text-[#FFFDF9]">ॐ</span>
          </div>
          <div className="w-1.5 h-3 bg-[#C5A059] rounded-b-full shadow-sm" />
        </div>
      </div>

      {/* 5. TRADITIONAL DECORATIONS: Garlands & Kuthuvilakku Lamps */}
      <SideGarlandStrand side="left" />
      <SideGarlandStrand side="right" />
      <KuthuvilakkuLamp side="left" />
      <KuthuvilakkuLamp side="right" />

      {/* 6. CENTER ROYAL INVITATION CARD (Floating over the Curtains) */}
      <AnimatePresence>
        {!isOpening && (
          <div
            ref={cardRef}
            onClick={handleOpenCurtains}
            onTouchStart={handleOpenCurtains}
            className="absolute inset-0 z-35 flex flex-col items-center justify-center px-3 sm:px-4 cursor-pointer text-center"
          >
            {/* Elegant Royal Invitation Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-lg w-full px-4 sm:px-9 py-5 sm:py-8 rounded-2xl sm:rounded-3xl bg-[#230F33]/92 border-2 border-[#C5A059]/80 shadow-[0_20px_60px_rgba(15,5,22,0.9),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-md flex flex-col items-center max-h-[94vh] justify-center"
            >
              {/* Corner Gold Floral Accents */}
              <div className="absolute top-2 left-2.5 text-[#C5A059] text-xs sm:text-sm">✦</div>
              <div className="absolute top-2 right-2.5 text-[#C5A059] text-xs sm:text-sm">✦</div>
              <div className="absolute bottom-2 left-2.5 text-[#C5A059] text-xs sm:text-sm">✦</div>
              <div className="absolute bottom-2 right-2.5 text-[#C5A059] text-xs sm:text-sm">✦</div>

              {/* Auspicious Sacred Invocation */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm text-[#E5C97F]">🪷</span>
                <span className="text-[10px] sm:text-xs font-serif font-bold text-[#E5C97F] tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  ✦ ॐ ஸ்ரீ கணேசாய நமஹ ✦
                </span>
                <span className="text-xs sm:text-sm text-[#E5C97F]">🪷</span>
              </div>

              {/* Sub-header: "Together with our families" */}
              <p
                className="text-xs sm:text-sm text-[#EEDBFA] font-serif italic tracking-wider mb-0.5 sm:mb-1 font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Together with our families
              </p>

              {/* Main Headline: "You're Invited" */}
              <h1
                className="text-xl sm:text-3.5xl font-extrabold text-[#FFFDF9] font-serif tracking-widest uppercase mb-0.5 sm:mb-1 drop-shadow-md"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                You're Invited
              </h1>

              {/* "To Celebrate Our Wedding" */}
              <p
                className="text-[10px] sm:text-xs text-[#C5A059] font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-2 sm:mb-3 font-semibold"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                To Celebrate Our Wedding Celebrations
              </p>

              {/* Bride & Groom Names in Royal Gold Typography */}
              <div className="w-full py-2 my-0.5 border-y border-[#C5A059]/40 flex flex-col items-center">
                <p
                  className="text-xl sm:text-3xl font-bold text-[#F3E1B6] font-serif tracking-wide drop-shadow-md"
                  style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
                >
                  {couple.groom}
                </p>
                <span
                  className="text-xl sm:text-2.5xl text-[#FFFDF9] my-0 sm:my-0.5 font-light"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  &amp;
                </span>
                <p
                  className="text-xl sm:text-3xl font-bold text-[#F3E1B6] font-serif tracking-wide drop-shadow-md"
                  style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
                >
                  {couple.bride}
                </p>
              </div>

              {/* Dual Events Summary Cards (Marriage & Reception) */}
              <div className="w-full grid grid-cols-2 gap-2 my-2.5 sm:my-3">
                {/* Marriage Pill */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-[#3D1E56]/85 border border-[#C5A059]/45 text-center">
                  <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F2DFB3]">
                    <Heart className="w-2.5 h-2.5 text-[#C5A059] fill-[#C5A059]" />
                    <span>Marriage</span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-[#FFFDF9] font-serif mt-0.5">
                    {marriage?.dateFormatted || "Nov 29, 2026"}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#EADBFA] font-serif">
                    {marriage?.timing || "9:00 AM – 10:30 AM"}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#C5A059] font-serif truncate w-full mt-0.5">
                    {marriage?.venueName}, {marriage?.location}
                  </p>
                </div>

                {/* Reception Pill */}
                <div className="flex flex-col items-center p-2 rounded-xl bg-[#3D1E56]/85 border border-[#C5A059]/45 text-center">
                  <div className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F2DFB3]">
                    <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                    <span>Reception</span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-[#FFFDF9] font-serif mt-0.5">
                    {reception?.dateFormatted || "Dec 02, 2026"}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#EADBFA] font-serif">
                    {reception?.timing || "6:30 PM – 9:00 PM"}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#C5A059] font-serif truncate w-full mt-0.5">
                    {reception?.venueName}, {reception?.location}
                  </p>
                </div>
              </div>

              {/* "Touch to Open Invitation" Glowing Royal Button */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    '0 0 16px rgba(197, 160, 89, 0.4)',
                    '0 0 32px rgba(197, 160, 89, 0.85)',
                    '0 0 16px rgba(197, 160, 89, 0.4)',
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-1 sm:mt-2 inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-9 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#7C5295] via-[#5F307A] to-[#7C5295] border-2 border-[#E5C97F] text-[#FFFDF9] shadow-2xl cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '6s' }} />
                <span
                  className="text-[11px] sm:text-sm font-bold font-serif uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#FFFDF9]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Touch to Open Invitation
                </span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3E1B6] animate-spin" style={{ animationDuration: '6s' }} />
              </motion.div>

              {/* Tap instruction */}
              <p className="mt-2 text-[10px] sm:text-xs text-[#C5A059]/90 font-serif tracking-wider">
                Tap anywhere on the silk curtains to enter
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. Floating Petal Animation across screen */}
      <FloatingPetalOverlay active={showPetals} isOpening={isOpening} />
    </div>
  );
}
