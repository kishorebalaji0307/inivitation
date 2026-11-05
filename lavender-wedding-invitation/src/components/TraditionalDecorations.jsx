import React from 'react';

/**
 * Botanical Lavender Watercolor Corner Bouquet
 * Matches the floral sprays framing the four corners of the reference design.
 */
export function LavenderCornerFloral({ position = 'top-left' }) {
  const isTop = position.includes('top');
  const isLeft = position.includes('left');

  const containerClasses = {
    'top-left': 'top-0 left-0 origin-top-left',
    'top-right': 'top-0 right-0 origin-top-right scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 origin-bottom-left scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 origin-bottom-right scale-x-[-1] scale-y-[-1]',
  }[position] || 'top-0 left-0';

  return (
    <div
      className={`absolute pointer-events-none select-none z-20 w-44 sm:w-64 md:w-80 lg:w-96 h-auto opacity-95 transition-all duration-700 ${containerClasses}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(145,98,186,0.18)]"
      >
        <defs>
          {/* Petal gradients for rich watercolor depth */}
          <linearGradient id={`petalDeep-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A5E2" />
            <stop offset="45%" stopColor="#9668BF" />
            <stop offset="100%" stopColor="#5E3587" />
          </linearGradient>
          <linearGradient id={`petalSoft-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF4FE" />
            <stop offset="50%" stopColor="#D5BDEE" />
            <stop offset="100%" stopColor="#A278CC" />
          </linearGradient>
          <linearGradient id={`leafGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A4BFA9" />
            <stop offset="60%" stopColor="#6C8D75" />
            <stop offset="100%" stopColor="#45634D" />
          </linearGradient>
          <linearGradient id={`stemGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E9B85" />
            <stop offset="100%" stopColor="#4A6550" />
          </linearGradient>
          <filter id={`softGlow-${position}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Background Foliage & Stems ── */}
        <g stroke={`url(#stemGrad-${position})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
          {/* Outer branch 1 */}
          <path d="M0 0 Q60 20 130 70 T240 180" />
          <path d="M120 65 Q160 40 210 50" />
          <path d="M160 90 Q220 100 270 160" />
          {/* Secondary branch 2 */}
          <path d="M0 0 Q20 70 65 140 T150 260" />
          <path d="M60 130 Q35 180 50 230" />
          <path d="M90 170 Q105 220 160 275" />
        </g>

        {/* ── Watercolor Sage Leaves ── */}
        <g fill={`url(#leafGrad-${position})`} opacity="0.8">
          {/* Leaf spray along upper stem */}
          <path d="M140 50 C160 30 185 35 190 55 C175 65 150 60 140 50 Z" />
          <path d="M175 45 C195 25 220 30 225 50 C210 60 185 55 175 45 Z" />
          <path d="M210 70 C235 60 260 70 260 90 C240 95 220 85 210 70 Z" />
          <path d="M230 110 C255 105 275 120 270 140 C250 140 235 125 230 110 Z" />

          {/* Leaf spray along lower stem */}
          <path d="M45 130 C30 150 35 175 55 180 C65 165 60 140 45 130 Z" />
          <path d="M45 175 C25 195 30 220 50 225 C60 210 55 185 45 175 Z" />
          <path d="M70 210 C60 235 70 260 90 260 C95 240 85 220 70 210 Z" />
          <path d="M110 230 C105 255 120 275 140 270 C140 250 125 235 110 230 Z" />
        </g>

        {/* ── Small Lavender Buds & Berries on Stems ── */}
        <g fill={`url(#petalDeep-${position})`} opacity="0.9">
          <circle cx="215" cy="50" r="4.5" />
          <circle cx="235" cy="58" r="4" />
          <circle cx="255" cy="72" r="3.5" />
          <circle cx="270" cy="90" r="3" />
          <circle cx="50" cy="225" r="4.5" />
          <circle cx="58" cy="245" r="4" />
          <circle cx="72" cy="265" r="3.5" />
          <circle cx="90" cy="280" r="3" />
        </g>

        {/* ── Flower 1: Upper Right Rose/Peony Bloom ── */}
        <g transform="translate(195, 125)">
          {/* Outer Petals */}
          <ellipse cx="-20" cy="0" rx="22" ry="16" transform="rotate(-20 -20 0)" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="20" cy="-6" rx="22" ry="16" transform="rotate(25 20 -6)" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="-4" cy="-22" rx="20" ry="17" transform="rotate(5 -4 -22)" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="-8" cy="20" rx="22" ry="16" transform="rotate(-15 -8 20)" fill={`url(#petalDeep-${position})`} opacity="0.9" />
          <ellipse cx="14" cy="18" rx="20" ry="15" transform="rotate(20 14 18)" fill={`url(#petalDeep-${position})`} opacity="0.9" />
          {/* Inner Petal Layers */}
          <circle cx="-6" cy="-2" r="14" fill={`url(#petalDeep-${position})`} />
          <circle cx="5" cy="1" r="12" fill={`url(#petalSoft-${position})`} opacity="0.9" />
          <ellipse cx="0" cy="0" rx="8" ry="7" fill="#4A2568" />
          {/* Core stamen */}
          <circle cx="0" cy="0" r="4" fill="#C5A059" opacity="0.9" />
        </g>

        {/* ── Flower 2: Lower Left Rose/Peony Bloom ── */}
        <g transform="translate(120, 195)">
          {/* Outer Petals */}
          <ellipse cx="-18" cy="-5" rx="20" ry="15" transform="rotate(-30 -18 -5)" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="18" cy="-8" rx="20" ry="15" transform="rotate(20 18 -8)" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="-2" cy="-20" rx="19" ry="15" fill={`url(#petalSoft-${position})`} opacity="0.85" />
          <ellipse cx="-6" cy="18" rx="20" ry="15" transform="rotate(-10 -6 18)" fill={`url(#petalDeep-${position})`} opacity="0.9" />
          <ellipse cx="15" cy="15" rx="19" ry="14" transform="rotate(25 15 15)" fill={`url(#petalDeep-${position})`} opacity="0.9" />
          {/* Inner Petal Layers */}
          <circle cx="-4" cy="-1" r="13" fill={`url(#petalDeep-${position})`} />
          <circle cx="4" cy="2" r="11" fill={`url(#petalSoft-${position})`} opacity="0.9" />
          <ellipse cx="0" cy="0" rx="7" ry="6" fill="#4A2568" />
          <circle cx="0" cy="0" r="3.5" fill="#C5A059" opacity="0.9" />
        </g>

        {/* ── Flower 3: Main Central Magnificent Lavender Blossom ── */}
        <g transform="translate(100, 95)">
          {/* Broad outer petal skirt */}
          <ellipse cx="-32" cy="-4" rx="30" ry="20" transform="rotate(-25 -32 -4)" fill={`url(#petalSoft-${position})`} opacity="0.9" />
          <ellipse cx="28" cy="-12" rx="30" ry="20" transform="rotate(30 28 -12)" fill={`url(#petalSoft-${position})`} opacity="0.9" />
          <ellipse cx="-6" cy="-32" rx="28" ry="22" transform="rotate(5 -6 -32)" fill={`url(#petalSoft-${position})`} opacity="0.95" />
          <ellipse cx="-12" cy="28" rx="30" ry="20" transform="rotate(-18 -12 28)" fill={`url(#petalDeep-${position})`} opacity="0.95" />
          <ellipse cx="24" cy="24" rx="28" ry="19" transform="rotate(25 24 24)" fill={`url(#petalDeep-${position})`} opacity="0.95" />
          {/* Middle layered petals */}
          <ellipse cx="-16" cy="-8" rx="22" ry="16" transform="rotate(-15 -16 -8)" fill={`url(#petalDeep-${position})`} />
          <ellipse cx="14" cy="-10" rx="22" ry="16" transform="rotate(20 14 -10)" fill={`url(#petalSoft-${position})`} opacity="0.92" />
          <ellipse cx="-2" cy="14" rx="20" ry="15" fill={`url(#petalDeep-${position})`} />
          <ellipse cx="10" cy="8" rx="18" ry="14" fill={`url(#petalSoft-${position})`} opacity="0.95" />
          {/* Inner heart */}
          <circle cx="0" cy="0" r="14" fill="#5E3587" />
          <circle cx="1" cy="-1" r="10" fill="#3D1B5B" />
          {/* Golden stamens */}
          <circle cx="0" cy="0" r="5" fill="#E5C97F" />
          <circle cx="-3" cy="-2" r="1.5" fill="#FFFDF9" />
          <circle cx="3" cy="2" r="1.5" fill="#FFFDF9" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Botanical Lavender Frame rendering the corner watercolor bouquets
 */
export function LavenderCornerFlorals() {
  return (
    <>
      <LavenderCornerFloral position="top-left" />
      <LavenderCornerFloral position="top-right" />
      <LavenderCornerFloral position="bottom-left" />
      <LavenderCornerFloral position="bottom-right" />
    </>
  );
}

/**
 * Floating Flower Petals (Lavender, Soft Violet & Cream Petals)
 */
export function FloatingPetals() {
  const petals = [
    { left: '6%', delay: 0, duration: 16, size: 13, color: '#C4A5E2' },
    { left: '24%', delay: 4, duration: 20, size: 16, color: '#E8D9F6' },
    { left: '42%', delay: 8, duration: 18, size: 12, color: '#8E65B5' },
    { left: '64%', delay: 2, duration: 22, size: 15, color: '#C4A5E2' },
    { left: '80%', delay: 6, duration: 17, size: 14, color: '#E8D9F6' },
    { left: '92%', delay: 9, duration: 19, size: 12, color: '#A57BC9' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-25 select-none" aria-hidden="true">
      {petals.map((petal, idx) => (
        <div
          key={idx}
          className="absolute -top-6 rounded-full opacity-50"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            backgroundColor: petal.color,
            borderRadius: '50% 50% 50% 10%',
            animation: `floatPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            boxShadow: '0 2px 6px rgba(145, 98, 186, 0.15)',
          }}
        />
      ))}
      <style>{`
        @keyframes floatPetal {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(30px);
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-25px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
