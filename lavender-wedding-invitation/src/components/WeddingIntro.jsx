import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Realistic South Indian Wedding Floating Petals (Rose, Jasmine, Marigold, Soft Pink)
 * Multi-depth particles entering from top and sides with natural breeze and rotations.
 */
function FloatingPetalOverlay({ active, isOpening }) {
  const petals = useRef(
    Array.from({ length: 42 }, (_, i) => {
      const type = i % 4; // 0: Crimson rose, 1: Golden marigold, 2: Jasmine blossom, 3: Soft pink rose
      return {
        id: i,
        type,
        color:
          type === 0
            ? '#BE123C'
            : type === 1
            ? '#F59E0B'
            : type === 2
            ? '#FFFBEB'
            : '#FB7185',
        accentColor:
          type === 0
            ? '#881337'
            : type === 1
            ? '#D97706'
            : type === 2
            ? '#FEF3C7'
            : '#F43F5E',
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
                d="M16 2 C16 9 12 14 2 16 C12 16 16 21 16 30 C16 21 20 16 30 16 C20 14 16 9 16 2 Z"
                fill={p.color}
                stroke="#FDE68A"
                strokeWidth="1.2"
              />
              <circle cx="16" cy="16" r="3.2" fill="#F59E0B" />
            </svg>
          ) : (
            /* Curved Rose / Marigold Petal with natural vein */
            <svg viewBox="0 0 28 36" className="w-full h-full drop-shadow-md">
              <path
                d="M14 2 C22 2 27 10 26 22 C25 32 18 35 14 35 C10 35 3 32 2 22 C1 10 6 2 14 2 Z"
                fill={`url(#curtain-petal-grad-${p.id % 4})`}
              />
              <path
                d="M14 6 C15 16 15 24 14 32"
                stroke={p.accentColor}
                strokeWidth="0.8"
                opacity="0.45"
                fill="none"
              />
            </svg>
          )}
        </div>
      ))}

      {/* SVG Gradients for Petals */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="curtain-petal-grad-0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="50%" stopColor="#BE123C" />
            <stop offset="100%" stopColor="#881337" />
          </linearGradient>
          <linearGradient id="curtain-petal-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="curtain-petal-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#FFFBEB" />
            <stop offset="100%" stopColor="#FEF3C7" />
          </linearGradient>
          <linearGradient id="curtain-petal-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="60%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Traditional Brass Kuthuvilakku Lamp with Animated Oil Flame
 */
function KuthuvilakkuLamp({ side = 'left' }) {
  return (
    <div
      className={`absolute bottom-4 sm:bottom-6 ${
        side === 'left' ? 'left-3 sm:left-8' : 'right-3 sm:right-8'
      } z-30 pointer-events-none flex flex-col items-center drop-shadow-[0_0_26px_rgba(245,158,11,0.7)]`}
    >
      {/* Glowing Warm Flame with Pulsing Core */}
      <div className="relative flex flex-col items-center">
        <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-full bg-gradient-to-t from-[#EA580C] via-[#FBBF24] to-[#FFFBEB] shadow-[0_0_20px_#F59E0B] animate-pulse" />
        <div className="absolute top-1 w-1.5 h-3 rounded-full bg-white blur-[1px]" />
      </div>

      {/* Brass Lamp Oil Reservoir Dish */}
      <div className="w-11 sm:w-14 h-4 rounded-b-full bg-gradient-to-b from-[#E5B85C] via-[#B8860B] to-[#5C3D06] border-t border-[#FFFBEB] shadow-md -mt-1" />

      {/* Ornate Fluted Brass Pillar */}
      <div className="w-3 sm:w-3.5 h-20 sm:h-28 bg-gradient-to-r from-[#8C600B] via-[#E5B85C] to-[#5C3D06] shadow-inner" />

      {/* Tiered Decorative Base */}
      <div className="w-7 sm:w-8 h-2 rounded-t-sm bg-gradient-to-t from-[#B8860B] to-[#E5B85C]" />
      <div className="w-14 sm:w-16 h-4.5 rounded-t-lg bg-gradient-to-t from-[#5C3D06] via-[#B8860B] to-[#E5B85C] shadow-2xl" />

      {/* Warm Floor Light Glow Reflection */}
      <div className="w-24 h-6 rounded-full bg-[#F59E0B]/25 blur-md -mt-2" />
    </div>
  );
}

/**
 * Hanging Marigold and Jasmine Garlands flanking the sides
 */
function SideGarlandStrand({ side = 'left' }) {
  const flowers = [
    { type: 'marigold', color: '#EA580C' },
    { type: 'jasmine', color: '#FFFBEB' },
    { type: 'marigold', color: '#F59E0B' },
    { type: 'jasmine', color: '#FFFBEB' },
    { type: 'marigold', color: '#EA580C' },
    { type: 'jasmine', color: '#FFFBEB' },
    { type: 'marigold', color: '#F59E0B' },
    { type: 'jasmine', color: '#FFFBEB' },
    { type: 'marigold', color: '#EA580C' },
    { type: 'jasmine', color: '#FFFBEB' },
    { type: 'marigold', color: '#F59E0B' },
  ];

  return (
    <div
      className={`absolute top-0 ${
        side === 'left' ? 'left-1 sm:left-4' : 'right-1 sm:right-4'
      } z-30 pointer-events-none flex flex-col items-center drop-shadow-md`}
    >
      {/* Top Golden Brass Bell Hanging */}
      <div className="w-0.5 h-6 sm:h-10 bg-gradient-to-b from-[#A83F25] to-[#D6A84F]" />
      <div className="w-4 h-4 rounded-full bg-gradient-to-b from-[#E5B85C] to-[#8C600B] shadow-sm mb-1" />

      {/* Flower Garland Drops */}
      {flowers.map((f, i) => (
        <div key={i} className="my-0.5 flex flex-col items-center">
          {f.type === 'marigold' ? (
            <div
              className="w-4 sm:w-5 h-4 sm:h-5 rounded-full shadow-md"
              style={{
                backgroundColor: f.color,
                boxShadow: '0 2px 5px rgba(0,0,0,0.25)',
              }}
            />
          ) : (
            <div
              className="w-3.5 sm:w-4 h-3 sm:h-4 rounded-full shadow-sm"
              style={{
                backgroundColor: f.color,
                border: '1px solid #FDE68A',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Main South Indian Silk Curtain Opening Intro
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

  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showPetals, setShowPetals] = useState(true);

  const { couple, event, messages } = weddingData;

  const handleOpenCurtains = () => {
    if (isOpening || isFinished) return;
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
          scale: 1.06,
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
          opacity: 0.9,
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
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#1A0604] transition-all ${
        isFinished ? 'pointer-events-none' : ''
      }`}
      style={{ touchAction: 'manipulation' }}
    >
      {/* 1. Golden Backlight behind the curtains (burgeons as curtains part) */}
      <div
        ref={lightShaftRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-0 bg-[radial-gradient(ellipse_at_center,rgba(255,245,215,0.95)_0%,rgba(245,158,11,0.65)_40%,rgba(168,63,37,0.3)_75%,transparent_100%)] origin-center"
      />

      {/* 2. LEFT SILK CURTAIN (Royal Maroon Kanchipuram Silk with Gold Zari Border on Right Edge) */}
      <div
        ref={leftCurtainRef}
        onClick={handleOpenCurtains}
        onTouchStart={handleOpenCurtains}
        className="absolute top-0 bottom-0 left-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[12px_0_36px_rgba(0,0,0,0.8)] origin-left"
        style={{ willChange: 'transform' }}
      >
        {/* Photorealistic Silk Texture Base */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/textures/silk-curtain-maroon.jpg')",
            filter: 'contrast(1.08) brightness(0.96)',
          }}
        />

        {/* 3D Vertical Accordion Pleat Shadow & Highlights Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(20,2,4,0.65) 0px, rgba(120,13,26,0.15) 24px, rgba(255,255,255,0.18) 48px, rgba(20,2,4,0.7) 72px, rgba(120,13,26,0.2) 96px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Silk Sheen Highlight Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 80%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Intricate Antique Gold Zari Border down the Inner Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-14 bg-gradient-to-r from-transparent via-[#D6A84F]/30 to-[#E5B85C]/90 border-l border-[#D6A84F]/40 shadow-[-4px_0_12px_rgba(0,0,0,0.5)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFBEB] opacity-80 filter drop-shadow">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#B8860B] via-[#E5B85C] to-transparent border-t border-[#FFFBEB]" />

        {/* Outer Left Silk Rope Tie-Back with Tassel */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none flex flex-col items-center drop-shadow-lg">
          <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-[#D6A84F] via-[#FBBF24] to-[#8C600B] shadow-md" />
          <div className="w-5 h-7 rounded-b-full bg-gradient-to-b from-[#E5B85C] to-[#5C3D06] border-t border-white" />
        </div>
      </div>

      {/* 3. RIGHT SILK CURTAIN (Royal Maroon Silk with Gold Zari Border on Left Edge) */}
      <div
        ref={rightCurtainRef}
        onClick={handleOpenCurtains}
        onTouchStart={handleOpenCurtains}
        className="absolute top-0 bottom-0 right-0 w-[51.5%] z-20 cursor-pointer overflow-hidden shadow-[-12px_0_36px_rgba(0,0,0,0.8)] origin-right"
        style={{ willChange: 'transform' }}
      >
        {/* Photorealistic Silk Texture Mirrored so Zari Border meets in center */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: "url('/textures/silk-curtain-maroon.jpg')",
            transform: 'scaleX(-1)',
            filter: 'contrast(1.08) brightness(0.96)',
          }}
        />

        {/* 3D Vertical Accordion Pleat Shadow & Highlights Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(20,2,4,0.65) 0px, rgba(120,13,26,0.15) 24px, rgba(255,255,255,0.18) 48px, rgba(20,2,4,0.7) 72px, rgba(120,13,26,0.2) 96px)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Dynamic Silk Sheen Highlight Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(-105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.08) 80%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Intricate Antique Gold Zari Border down the Inner Edge */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-14 bg-gradient-to-l from-transparent via-[#D6A84F]/30 to-[#E5B85C]/90 border-r border-[#D6A84F]/40 shadow-[4px_0_12px_rgba(0,0,0,0.5)] flex flex-col justify-around items-center py-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="text-[10px] sm:text-xs text-[#FFFBEB] opacity-80 filter drop-shadow">
              ✦
            </div>
          ))}
        </div>

        {/* Bottom Gold Zari Hem Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-[#B8860B] via-[#E5B85C] to-transparent border-t border-[#FFFBEB]" />

        {/* Outer Right Silk Rope Tie-Back with Tassel */}
        <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none flex flex-col items-center drop-shadow-lg">
          <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-[#D6A84F] via-[#FBBF24] to-[#8C600B] shadow-md" />
          <div className="w-5 h-7 rounded-b-full bg-gradient-to-b from-[#E5B85C] to-[#5C3D06] border-t border-white" />
        </div>
      </div>

      {/* 4. TOP DECORATIVE SILK VALANCE / DRAPED PELMET */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none overflow-hidden flex justify-between">
        {/* Left Valance Swag */}
        <div
          ref={leftValanceRef}
          className="w-1/2 h-14 sm:h-20 bg-gradient-to-b from-[#3D070C] via-[#6B0D19] to-[#8C1423] rounded-br-[60px] border-b-2 border-[#D6A84F] shadow-xl origin-left"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(214,168,79,0.25)_0%,transparent_70%)]" />
        </div>

        {/* Right Valance Swag */}
        <div
          ref={rightValanceRef}
          className="w-1/2 h-14 sm:h-20 bg-gradient-to-b from-[#3D070C] via-[#6B0D19] to-[#8C1423] rounded-bl-[60px] border-b-2 border-[#D6A84F] shadow-xl origin-right"
          style={{ willChange: 'transform' }}
        >
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(214,168,79,0.25)_0%,transparent_70%)]" />
        </div>

        {/* Central Auspicious Kalasam Medallion atop Curtains */}
        <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center">
          <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-full bg-gradient-to-b from-[#E5B85C] via-[#B8860B] to-[#5C3D06] border-2 border-[#FFFBEB] shadow-[0_4px_16px_rgba(214,168,79,0.7)] flex items-center justify-center">
            <span className="text-base sm:text-lg font-serif font-bold text-[#FFFBEB]">ॐ</span>
          </div>
          <div className="w-1.5 h-3 bg-[#D6A84F] rounded-b-full shadow-sm" />
        </div>
      </div>

      {/* 5. TRADITIONAL DECORATIONS: Garlands & Kuthuvilakku Lamps */}
      <SideGarlandStrand side="left" />
      <SideGarlandStrand side="right" />
      <KuthuvilakkuLamp side="left" />
      <KuthuvilakkuLamp side="right" />

      {/* 6. CENTER INVITATION CARD (Floating over the Curtains) */}
      <AnimatePresence>
        {!isOpening && (
          <div
            ref={cardRef}
            onClick={handleOpenCurtains}
            onTouchStart={handleOpenCurtains}
            className="absolute inset-0 z-35 flex flex-col items-center justify-center px-4 cursor-pointer text-center"
          >
            {/* Elegant Royal Invitation Card Container */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-lg w-full px-4 sm:px-10 py-5 sm:py-9 rounded-2xl sm:rounded-3xl bg-[#1A0604]/88 border-2 border-[#D6A84F]/70 shadow-[0_20px_60px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-md flex flex-col items-center max-h-[92vh] justify-center"
            >
              {/* Corner Gold Floral Accents */}
              <div className="absolute top-2 left-2.5 text-[#D6A84F] text-xs sm:text-sm">✦</div>
              <div className="absolute top-2 right-2.5 text-[#D6A84F] text-xs sm:text-sm">✦</div>
              <div className="absolute bottom-2 left-2.5 text-[#D6A84F] text-xs sm:text-sm">✦</div>
              <div className="absolute bottom-2 right-2.5 text-[#D6A84F] text-xs sm:text-sm">✦</div>

              {/* Auspicious Sacred Invocation */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm text-[#F59E0B]">🪷</span>
                <span className="text-[10px] sm:text-sm font-serif font-bold text-[#D6A84F] tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                  ✦ ॐ ஸ்ரீ கணேசாய நமஹ ✦
                </span>
                <span className="text-xs sm:text-sm text-[#F59E0B]">🪷</span>
              </div>

              {/* Sub-header: "Together with our families" */}
              <p
                className="text-xs sm:text-base text-[#FDE68A]/90 font-serif italic tracking-wider mb-1 sm:mb-2 font-light"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Together with our families
              </p>

              {/* Main Headline: "You're Invited" */}
              <h1
                className="text-xl sm:text-4xl font-extrabold text-[#FFF8EC] font-serif tracking-widest uppercase mb-0.5 sm:mb-1 drop-shadow-md"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                You're Invited
              </h1>

              {/* "To Celebrate Our Wedding" */}
              <p
                className="text-[10px] sm:text-sm text-[#D6A84F] font-serif uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-2 sm:mb-4 font-semibold"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                To Celebrate Our Wedding
              </p>

              {/* Bride & Groom Names in Royal Gold Typography */}
              <div className="w-full py-2 sm:py-3 my-0.5 sm:my-1 border-y border-[#D6A84F]/40 flex flex-col items-center">
                <p
                  className="text-xl sm:text-3.5xl font-bold text-[#E5B85C] font-serif tracking-wide drop-shadow-md"
                  style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
                >
                  {couple.groom}
                </p>
                <span
                  className="text-xl sm:text-3xl text-[#FFF8EC] my-0 sm:my-0.5 font-light"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  &amp;
                </span>
                <p
                  className="text-xl sm:text-3.5xl font-bold text-[#E5B85C] font-serif tracking-wide drop-shadow-md"
                  style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
                >
                  {couple.bride}
                </p>
              </div>

              {/* Date & Muhurtham Pill */}
              <div className="mt-2 sm:mt-3 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#3D070C]/80 border border-[#D6A84F]/50 text-[10px] sm:text-sm text-[#FFFBEB] font-serif tracking-wider">
                {event.dayOfWeek}, {event.date} • {event.time}
              </div>

              {/* "Touch to Open Invitation" Glowing Royal Button */}
              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    '0 0 16px rgba(214, 168, 79, 0.4)',
                    '0 0 32px rgba(214, 168, 79, 0.85)',
                    '0 0 16px rgba(214, 168, 79, 0.4)',
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-3.5 sm:mt-5 inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-9 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#A83F25] via-[#8C321C] to-[#A83F25] border-2 border-[#E5B85C] text-[#FFF8EC] shadow-2xl cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6A84F] animate-spin" style={{ animationDuration: '6s' }} />
                <span
                  className="text-[11px] sm:text-sm font-bold font-serif uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#FFF8EC]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Touch to Open Invitation
                </span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6A84F] animate-spin" style={{ animationDuration: '6s' }} />
              </motion.div>

              {/* Tap instruction */}
              <p className="mt-2 sm:mt-2.5 text-[10px] sm:text-xs text-[#D6A84F]/85 font-serif tracking-wider">
                Tap anywhere on the sacred silk curtains
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
