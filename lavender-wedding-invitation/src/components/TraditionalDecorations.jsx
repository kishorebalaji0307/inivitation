import React from 'react';

/**
 * Top Marigold Garlands with Sacred Mango Leaves (Maa-Vilai Thoranam)
 * Traditional South Indian wedding entrance garland with alternating marigold blossoms and auspicious mango leaves.
 * Fully responsive and fluidly adapts to any screen width without horizontal overflow.
 */
export function FloralGarlandTop() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-30 pointer-events-none select-none overflow-hidden h-9 sm:h-12 flex justify-between items-start"
      aria-hidden="true"
    >
      {/* Repeating decorative SVG toranam */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="marigoldOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
          <linearGradient id="marigoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
          {/* Unit pattern of Thoranam (Marigold flower + Mango leaf + Marigold flower) */}
          <pattern id="thoranamUnit" width="60" height="48" patternUnits="userSpaceOnUse">
            {/* Top hanging rope */}
            <line x1="0" y1="2" x2="60" y2="2" stroke="#8C600B" strokeWidth="2" strokeDasharray="3,1" />

            {/* Mango Leaf hanging in center */}
            <path
              d="M30 2 C23 12 21 28 30 42 C39 28 37 12 30 2 Z"
              fill="url(#mangoLeaf)"
              stroke="#A5D6A7"
              strokeWidth="0.8"
            />
            <line x1="30" y1="4" x2="30" y2="38" stroke="#81C784" strokeWidth="0.75" opacity="0.6" />

            {/* Saffron Marigold Blossom Cluster (Left) */}
            <circle cx="8" cy="8" r="7" fill="url(#marigoldOrange)" />
            <circle cx="15" cy="8" r="6" fill="url(#marigoldYellow)" />
            <circle cx="11" cy="14" r="5" fill="url(#marigoldOrange)" />

            {/* Golden Marigold Blossom Cluster (Right) */}
            <circle cx="45" cy="8" r="6.5" fill="url(#marigoldYellow)" />
            <circle cx="52" cy="8" r="6" fill="url(#marigoldOrange)" />
            <circle cx="48" cy="14" r="5" fill="url(#marigoldYellow)" />
          </pattern>
        </defs>

        <rect width="1200" height="48" fill="url(#thoranamUnit)" />
      </svg>
    </div>
  );
}

/**
 * Hanging Temple Bells & Gold Garland Strands
 * Responsively scaled so it never crowds content on small screens.
 */
export function HangingBells() {
  return (
    <div className="fixed top-0 inset-x-0 pointer-events-none z-30 select-none overflow-hidden" aria-hidden="true">
      {/* Left Strand with Bell */}
      <div className="absolute top-0 left-1.5 sm:left-6 flex flex-col items-center scale-90 sm:scale-100 origin-top">
        <div className="w-[1.5px] h-10 sm:h-18 bg-gradient-to-b from-[#A83F25] via-[#D6A84F] to-[#D6A84F]" />
        {/* Beads */}
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EA580C] -mt-1 shadow-sm" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#D6A84F] mt-0.5 shadow-sm" />
        {/* Brass Temple Bell */}
        <div className="mt-0.5 animate-float-gentle">
          <svg width="22" height="28" viewBox="0 0 26 32" fill="none" className="sm:w-[26px] sm:h-[32px]">
            <path
              d="M13 2 C13 0.9 12.1 0 11 0 H15 C13.9 0 13 0.9 13 2 V5 M7 12 C7 7 9.5 5 13 5 C16.5 5 19 7 19 12 V22 H7 V12 Z"
              fill="#D6A84F"
              stroke="#A83F25"
              strokeWidth="1.2"
            />
            <path d="M4 22 H22 L24 26 H2 L4 22 Z" fill="#A83F25" stroke="#D6A84F" strokeWidth="1" />
            <circle cx="13" cy="28" r="2.5" fill="#D6A84F" />
          </svg>
        </div>
      </div>

      {/* Right Strand with Bell */}
      <div className="absolute top-0 right-1.5 sm:right-6 flex flex-col items-center scale-90 sm:scale-100 origin-top">
        <div className="w-[1.5px] h-10 sm:h-18 bg-gradient-to-b from-[#A83F25] via-[#D6A84F] to-[#D6A84F]" />
        {/* Beads */}
        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#EA580C] -mt-1 shadow-sm" />
        <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#D6A84F] mt-0.5 shadow-sm" />
        {/* Brass Temple Bell */}
        <div className="mt-0.5 animate-float-gentle">
          <svg width="22" height="28" viewBox="0 0 26 32" fill="none" className="sm:w-[26px] sm:h-[32px]">
            <path
              d="M13 2 C13 0.9 12.1 0 11 0 H15 C13.9 0 13 0.9 13 2 V5 M7 12 C7 7 9.5 5 13 5 C16.5 5 19 7 19 12 V22 H7 V12 Z"
              fill="#D6A84F"
              stroke="#A83F25"
              strokeWidth="1.2"
            />
            <path d="M4 22 H22 L24 26 H2 L4 22 Z" fill="#A83F25" stroke="#D6A84F" strokeWidth="1" />
            <circle cx="13" cy="28" r="2.5" fill="#D6A84F" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/**
 * Traditional Brass Diya Lamps on Screen Sides
 */
export function SideDiyas() {
  return (
    <div className="fixed inset-y-0 inset-x-0 pointer-events-none z-20 hidden md:block select-none" aria-hidden="true">
      {/* Left Diya */}
      <div className="absolute top-1/2 -translate-y-1/2 left-3 lg:left-6 flex flex-col items-center">
        {/* Flame with flickering glow */}
        <div className="relative animate-pulse">
          <div className="w-2.5 h-4.5 rounded-full bg-gradient-to-t from-[#EA580C] via-[#FBBF24] to-[#FFF7C2] shadow-[0_0_12px_#F59E0B]" />
        </div>
        {/* Diya Base */}
        <div className="w-7 h-3 rounded-b-full bg-gradient-to-b from-[#D6A84F] to-[#92640A] border-t border-[#FFF7C2] shadow-sm -mt-0.5" />
        <div className="w-3 h-4 bg-gradient-to-b from-[#92640A] to-[#D6A84F]" />
        <div className="w-6 h-1.5 rounded-full bg-[#92640A]" />
      </div>

      {/* Right Diya */}
      <div className="absolute top-1/2 -translate-y-1/2 right-3 lg:right-6 flex flex-col items-center">
        {/* Flame with flickering glow */}
        <div className="relative animate-pulse">
          <div className="w-2.5 h-4.5 rounded-full bg-gradient-to-t from-[#EA580C] via-[#FBBF24] to-[#FFF7C2] shadow-[0_0_12px_#F59E0B]" />
        </div>
        {/* Diya Base */}
        <div className="w-7 h-3 rounded-b-full bg-gradient-to-b from-[#D6A84F] to-[#92640A] border-t border-[#FFF7C2] shadow-sm -mt-0.5" />
        <div className="w-3 h-4 bg-gradient-to-b from-[#92640A] to-[#D6A84F]" />
        <div className="w-6 h-1.5 rounded-full bg-[#92640A]" />
      </div>
    </div>
  );
}

/**
 * Traditional Side Kolam / Rangoli Dot Clusters
 * Inspired directly by traditional South Indian printed wedding invitations (as shown in reference image).
 */
export function SideKolamDots() {
  const dots = [
    { top: '24%' },
    { top: '48%' },
    { top: '72%' },
  ];

  return (
    <div className="fixed inset-y-0 inset-x-0 pointer-events-none z-10 select-none overflow-hidden" aria-hidden="true">
      {dots.map((pos, idx) => (
        <React.Fragment key={idx}>
          {/* Left margin Kolam Dots */}
          <div
            className="absolute left-2 sm:left-6 -translate-y-1/2 opacity-25"
            style={{ top: pos.top }}
          >
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#A83F25]" />
              ))}
            </div>
          </div>

          {/* Right margin Kolam Dots */}
          <div
            className="absolute right-2 sm:right-6 -translate-y-1/2 opacity-25"
            style={{ top: pos.top }}
          >
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#A83F25]" />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Traditional South Indian Banana Leaves (Vazhai Maram / Plantain Leaf)
 * Flanking the bottom sides, optimized for responsive screens without horizontal overflow.
 */
export function BananaLeavesDecor() {
  return (
    <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden select-none z-10" aria-hidden="true">
      {/* Left Banana Plant */}
      <div className="absolute bottom-0 -left-4 sm:left-0 w-24 sm:w-44 md:w-56 lg:w-64 opacity-90 transition-transform duration-700 ease-out">
        <svg viewBox="-120 -260 240 280" className="w-full h-auto drop-shadow-md overflow-visible">
          {/* Main Stalk */}
          <path d="M-16,50 C-17,-10 -13,-60 0,-95 C13,-60 17,-10 16,50 Z" fill="#247B49" />
          <path d="M0,20 L0,-85" stroke="#1B5E20" strokeWidth="2" opacity="0.6" />
          
          {/* Fan of Lush Banana Leaves */}
          <g transform="translate(0,-92)">
            {/* Leaf 1 (Left tilt) */}
            <g transform="rotate(-60) scale(0.85)">
              <path d="M0,0 C-50,-45 -58,-120 0,-190 C58,-120 50,-45 0,0 Z" fill="#2E7D32" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-185" stroke="#A5D6A7" strokeWidth="3" opacity="0.6" fill="none" />
            </g>
            {/* Leaf 2 (Center Left) */}
            <g transform="rotate(-25) scale(1.05)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#247B49" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#C8E6C9" strokeWidth="3.5" opacity="0.7" fill="none" />
            </g>
            {/* Leaf 3 (Center Top) */}
            <g transform="scale(1.2)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#1B5E20" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#E8F5E9" strokeWidth="3.5" opacity="0.8" fill="none" />
            </g>
            {/* Leaf 4 (Center Right) */}
            <g transform="rotate(28) scale(1.05)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#247B49" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#C8E6C9" strokeWidth="3.5" opacity="0.7" fill="none" />
            </g>
            {/* Leaf 5 (Right tilt) */}
            <g transform="rotate(62) scale(0.85)">
              <path d="M0,0 C-50,-45 -58,-120 0,-190 C58,-120 50,-45 0,0 Z" fill="#2E7D32" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-185" stroke="#A5D6A7" strokeWidth="3" opacity="0.6" fill="none" />
            </g>
            {/* Traditional Plantain Flower (Vazhaipoo) & Golden bananas */}
            <g transform="translate(6, 12)">
              <ellipse cx="0" cy="18" rx="8" ry="14" fill="#702B24" />
              <circle cx="-5" cy="5" r="4" fill="#D6A84F" />
              <circle cx="5" cy="5" r="4" fill="#D6A84F" />
              <circle cx="0" cy="0" r="4" fill="#D6A84F" />
            </g>
          </g>
        </svg>
      </div>

      {/* Right Banana Plant (Mirrored) */}
      <div className="absolute bottom-0 -right-4 sm:right-0 w-24 sm:w-44 md:w-56 lg:w-64 opacity-90 transition-transform duration-700 ease-out">
        <svg viewBox="-120 -260 240 280" className="w-full h-auto drop-shadow-md overflow-visible scale-x-[-1]">
          {/* Main Stalk */}
          <path d="M-16,50 C-17,-10 -13,-60 0,-95 C13,-60 17,-10 16,50 Z" fill="#247B49" />
          <path d="M0,20 L0,-85" stroke="#1B5E20" strokeWidth="2" opacity="0.6" />
          
          {/* Fan of Lush Banana Leaves */}
          <g transform="translate(0,-92)">
            <g transform="rotate(-60) scale(0.85)">
              <path d="M0,0 C-50,-45 -58,-120 0,-190 C58,-120 50,-45 0,0 Z" fill="#2E7D32" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-185" stroke="#A5D6A7" strokeWidth="3" opacity="0.6" fill="none" />
            </g>
            <g transform="rotate(-25) scale(1.05)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#247B49" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#C8E6C9" strokeWidth="3.5" opacity="0.7" fill="none" />
            </g>
            <g transform="scale(1.2)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#1B5E20" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#E8F5E9" strokeWidth="3.5" opacity="0.8" fill="none" />
            </g>
            <g transform="rotate(28) scale(1.05)">
              <path d="M0,0 C-52,-45 -60,-120 0,-195 C60,-120 52,-45 0,0 Z" fill="#247B49" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-188" stroke="#C8E6C9" strokeWidth="3.5" opacity="0.7" fill="none" />
            </g>
            <g transform="rotate(62) scale(0.85)">
              <path d="M0,0 C-50,-45 -58,-120 0,-190 C58,-120 50,-45 0,0 Z" fill="#2E7D32" />
              <path d="M0,-6 C-3,-70 -3,-140 0,-185" stroke="#A5D6A7" strokeWidth="3" opacity="0.6" fill="none" />
            </g>
            <g transform="translate(6, 12)">
              <ellipse cx="0" cy="18" rx="8" ry="14" fill="#702B24" />
              <circle cx="-5" cy="5" r="4" fill="#D6A84F" />
              <circle cx="5" cy="5" r="4" fill="#D6A84F" />
              <circle cx="0" cy="0" r="4" fill="#D6A84F" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Floating Flower Petals (Rose & Marigold Petals)
 */
export function FloatingPetals() {
  const petals = [
    { left: '8%', delay: 0, duration: 14, size: 14, color: '#A83F25' },
    { left: '22%', delay: 3, duration: 18, size: 18, color: '#D6A84F' },
    { left: '38%', delay: 7, duration: 16, size: 12, color: '#EA580C' },
    { left: '55%', delay: 2, duration: 20, size: 16, color: '#A83F25' },
    { left: '72%', delay: 5, duration: 15, size: 14, color: '#D6A84F' },
    { left: '88%', delay: 8, duration: 17, size: 16, color: '#EA580C' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-25 select-none" aria-hidden="true">
      {petals.map((petal, idx) => (
        <div
          key={idx}
          className="absolute -top-6 rounded-full opacity-60"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            backgroundColor: petal.color,
            borderRadius: '50% 50% 50% 10%',
            animation: `floatPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
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
            opacity: 0.7;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(40px);
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-30px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
