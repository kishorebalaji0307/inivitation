import React from 'react';

/**
 * Premium Botanical Watercolor Lavender Floral Corner Decoration
 * Features realistic layered lavender roses, delicate sage and eucalyptus foliage,
 * lavender bud sprigs, and subtle antique-gold vein & stamen accents.
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
      className={`absolute pointer-events-none select-none z-20 w-48 sm:w-68 md:w-84 lg:w-96 h-auto opacity-95 transition-all duration-700 ${containerClasses}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_28px_rgba(125,78,168,0.18)]"
      >
        <defs>
          {/* Petal Gradients for Realistic Velvet Roses */}
          <linearGradient id={`roseDeep-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A5E6" />
            <stop offset="45%" stopColor="#8F5EB8" />
            <stop offset="100%" stopColor="#55277A" />
          </linearGradient>

          <linearGradient id={`roseMid-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5ECFD" />
            <stop offset="40%" stopColor="#D4B6EE" />
            <stop offset="85%" stopColor="#9C6DC4" />
            <stop offset="100%" stopColor="#6C3B91" />
          </linearGradient>

          <linearGradient id={`roseSoft-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F8F0FE" />
            <stop offset="75%" stopColor="#E0C9F4" />
            <stop offset="100%" stopColor="#B38AD8" />
          </linearGradient>

          {/* Leaf Gradients for Watercolor Sage & Eucalyptus */}
          <linearGradient id={`leafSage-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4DFC8" />
            <stop offset="50%" stopColor="#7DA685" />
            <stop offset="100%" stopColor="#466E4F" />
          </linearGradient>

          <linearGradient id={`leafMuted-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D5E8D9" />
            <stop offset="60%" stopColor="#92B89A" />
            <stop offset="100%" stopColor="#5A7D63" />
          </linearGradient>

          {/* Stem & Gold Gradients */}
          <linearGradient id={`stemGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#88AE90" />
            <stop offset="100%" stopColor="#4A6F53" />
          </linearGradient>

          <linearGradient id={`goldAccent-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3E5BE" />
            <stop offset="50%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8E6924" />
          </linearGradient>
        </defs>

        {/* ── 1. BACKGROUND BRANCHES & STEMS ── */}
        <g stroke={`url(#stemGrad-${position})`} strokeWidth="1.8" strokeLinecap="round" opacity="0.85">
          {/* Main graceful curved branch */}
          <path d="M0 0 Q70 20 145 75 T265 195" />
          <path d="M135 70 Q180 40 235 50" />
          <path d="M180 95 Q245 105 300 170" />
          {/* Secondary branch downward */}
          <path d="M0 0 Q20 75 75 150 T170 285" />
          <path d="M70 140 Q40 195 55 250" />
          <path d="M100 185 Q115 240 180 300" />
        </g>

        {/* ── 2. SUBTLE ANTIQUE GOLD FILIGREE TENDRILS ── */}
        <g stroke={`url(#goldAccent-${position})`} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65">
          <path d="M60 25 Q110 15 160 38" />
          <path d="M25 60 Q15 110 38 160" />
          <path d="M160 38 C180 42 195 30 190 15 C185 5 170 10 175 25" />
          <path d="M38 160 C42 180 30 195 15 190 C5 185 10 170 25 175" />
          {/* Small gold sparkle stars */}
          <circle cx="205" cy="40" r="1.5" fill="#E5C97F" />
          <circle cx="40" cy="205" r="1.5" fill="#E5C97F" />
          <circle cx="280" cy="140" r="1.8" fill="#E5C97F" />
          <circle cx="140" cy="280" r="1.8" fill="#E5C97F" />
        </g>

        {/* ── 3. BOTANICAL SAGE & EUCALYPTUS LEAVES ── */}
        <g fill={`url(#leafSage-${position})`} opacity="0.82">
          {/* Upper stem foliage */}
          <path d="M150 52 C175 30 205 35 210 58 C192 68 162 62 150 52 Z" />
          <path d="M190 48 C215 26 242 32 248 54 C230 65 202 59 190 48 Z" />
          <path d="M228 72 C255 60 282 72 282 94 C260 99 238 88 228 72 Z" />
          <path d="M250 115 C278 110 298 126 292 148 C270 148 255 132 250 115 Z" />

          {/* Lower stem foliage */}
          <path d="M52 150 C30 175 35 205 58 210 C68 192 62 162 52 150 Z" />
          <path d="M48 190 C26 215 32 242 54 248 C65 230 59 202 48 190 Z" />
          <path d="M72 228 C60 255 72 282 94 282 C99 260 88 238 72 228 Z" />
          <path d="M115 250 C110 278 126 298 148 292 C148 270 132 255 115 250 Z" />
        </g>

        {/* Leaf Veins in Subtle Gold & Dark Sage */}
        <g stroke={`url(#goldAccent-${position})`} strokeWidth="0.8" opacity="0.45" strokeLinecap="round">
          <path d="M154 53 Q180 45 205 56" />
          <path d="M193 49 Q218 40 243 52" />
          <path d="M231 74 Q256 75 277 92" />
          <path d="M53 154 Q45 180 56 205" />
          <path d="M49 193 Q40 218 52 243" />
          <path d="M74 231 Q75 256 92 277" />
        </g>

        {/* ── 4. LAVENDER BUD SPRIGS & BERRIES ── */}
        <g fill={`url(#roseDeep-${position})`} opacity="0.9">
          {/* Upper lavender buds */}
          <circle cx="230" cy="52" r="4.5" />
          <circle cx="252" cy="62" r="4" />
          <circle cx="274" cy="78" r="3.5" />
          <circle cx="292" cy="98" r="3" />
          <circle cx="310" cy="120" r="2.5" />
          {/* Lower lavender buds */}
          <circle cx="52" cy="230" r="4.5" />
          <circle cx="62" cy="252" r="4" />
          <circle cx="78" cy="274" r="3.5" />
          <circle cx="98" cy="292" r="3" />
          <circle cx="120" cy="310" r="2.5" />
        </g>

        {/* ── 5. ROSE 1: UPPER RIGHT LAVENDER PEONY / ROSE ── */}
        <g transform="translate(210, 135)">
          {/* Outer Velvet Petals */}
          <path d="M-28 -4 C-26 -22 -6 -28 10 -22 C24 -16 28 0 24 14 C18 26 -4 28 -18 20 C-26 12 -28 6 -28 -4 Z" fill={`url(#roseMid-${position})`} opacity="0.88" />
          <ellipse cx="-22" cy="2" rx="22" ry="16" transform="rotate(-18 -22 2)" fill={`url(#roseSoft-${position})`} opacity="0.9" />
          <ellipse cx="20" cy="-6" rx="22" ry="16" transform="rotate(22 20 -6)" fill={`url(#roseSoft-${position})`} opacity="0.9" />
          <ellipse cx="-4" cy="-22" rx="22" ry="17" transform="rotate(5 -4 -22)" fill={`url(#roseMid-${position})`} opacity="0.9" />
          <ellipse cx="-6" cy="20" rx="22" ry="16" transform="rotate(-15 -6 20)" fill={`url(#roseDeep-${position})`} opacity="0.92" />
          <ellipse cx="16" cy="18" rx="20" ry="15" transform="rotate(20 16 18)" fill={`url(#roseDeep-${position})`} opacity="0.92" />

          {/* Inner Petal Layers (Rose Center) */}
          <circle cx="-5" cy="-2" r="14" fill={`url(#roseDeep-${position})`} />
          <circle cx="5" cy="2" r="12" fill={`url(#roseMid-${position})`} opacity="0.92" />
          <ellipse cx="0" cy="0" rx="8" ry="7" fill="#4B206C" />
          {/* Antique Gold Stamen Core */}
          <circle cx="0" cy="0" r="4.5" fill="#E5C97F" />
          <circle cx="-2" cy="-1.5" r="1.5" fill="#FFFDF9" />
          <circle cx="2" cy="1.5" r="1.5" fill="#FFFDF9" />
        </g>

        {/* ── 6. ROSE 2: LOWER LEFT LAVENDER PEONY / ROSE ── */}
        <g transform="translate(135, 210)">
          {/* Outer Velvet Petals */}
          <path d="M-4 -28 C-22 -26 -28 -6 -22 10 C-16 24 0 28 14 24 C26 18 28 -4 20 -18 C12 -26 6 -28 -4 -28 Z" fill={`url(#roseMid-${position})`} opacity="0.88" />
          <ellipse cx="-18" cy="-5" rx="20" ry="16" transform="rotate(-28 -18 -5)" fill={`url(#roseSoft-${position})`} opacity="0.9" />
          <ellipse cx="18" cy="-8" rx="20" ry="16" transform="rotate(22 18 -8)" fill={`url(#roseSoft-${position})`} opacity="0.9" />
          <ellipse cx="-2" cy="-20" rx="20" ry="16" fill={`url(#roseMid-${position})`} opacity="0.9" />
          <ellipse cx="-6" cy="18" rx="20" ry="15" transform="rotate(-10 -6 18)" fill={`url(#roseDeep-${position})`} opacity="0.92" />
          <ellipse cx="16" cy="16" rx="19" ry="15" transform="rotate(25 16 16)" fill={`url(#roseDeep-${position})`} opacity="0.92" />

          {/* Inner Petal Layers */}
          <circle cx="-4" cy="-1" r="13" fill={`url(#roseDeep-${position})`} />
          <circle cx="4" cy="2" r="11" fill={`url(#roseMid-${position})`} opacity="0.92" />
          <ellipse cx="0" cy="0" rx="7.5" ry="6.5" fill="#4B206C" />
          <circle cx="0" cy="0" r="4" fill="#E5C97F" />
          <circle cx="-1.5" cy="-1.5" r="1.5" fill="#FFFDF9" />
          <circle cx="1.5" cy="1.5" r="1.5" fill="#FFFDF9" />
        </g>

        {/* ── 7. MAIN MAGNIFICENT CENTRAL LAVENDER ROSE ── */}
        <g transform="translate(112, 112)">
          {/* Broad outer petal skirt */}
          <ellipse cx="-34" cy="-5" rx="32" ry="22" transform="rotate(-25 -34 -5)" fill={`url(#roseSoft-${position})`} opacity="0.92" />
          <ellipse cx="30" cy="-14" rx="32" ry="22" transform="rotate(30 30 -14)" fill={`url(#roseSoft-${position})`} opacity="0.92" />
          <ellipse cx="-6" cy="-34" rx="30" ry="24" transform="rotate(5 -6 -34)" fill={`url(#roseSoft-${position})`} opacity="0.95" />
          <ellipse cx="-14" cy="30" rx="32" ry="22" transform="rotate(-18 -14 30)" fill={`url(#roseDeep-${position})`} opacity="0.95" />
          <ellipse cx="26" cy="26" rx="30" ry="21" transform="rotate(25 26 26)" fill={`url(#roseDeep-${position})`} opacity="0.95" />

          {/* Middle layered petals */}
          <ellipse cx="-18" cy="-8" rx="24" ry="18" transform="rotate(-15 -18 -8)" fill={`url(#roseDeep-${position})`} />
          <ellipse cx="16" cy="-10" rx="24" ry="18" transform="rotate(20 16 -10)" fill={`url(#roseMid-${position})`} opacity="0.94" />
          <ellipse cx="-3" cy="15" rx="22" ry="16" fill={`url(#roseDeep-${position})`} />
          <ellipse cx="11" cy="9" rx="20" ry="15" fill={`url(#roseSoft-${position})`} opacity="0.95" />

          {/* Inner Rose Heart */}
          <circle cx="0" cy="0" r="15" fill="#5E3587" />
          <circle cx="1" cy="-1" r="11" fill="#3D185C" />

          {/* Antique Golden Stamens with Shimmer */}
          <circle cx="0" cy="0" r="5.5" fill="#E5C97F" />
          <circle cx="-3" cy="-2.5" r="1.8" fill="#FFFDF9" />
          <circle cx="3" cy="2.5" r="1.8" fill="#FFFDF9" />
          <circle cx="-2.5" cy="3" r="1.2" fill="#FAF6ED" />
          <circle cx="2.5" cy="-3" r="1.2" fill="#FAF6ED" />
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
