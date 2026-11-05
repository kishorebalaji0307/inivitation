import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Traditional South Indian Temple Gopuram SVG in Soft Gold & Lavender
 */
function TempleGopuramIllustration({ className = "w-28 h-28 sm:w-36 sm:h-36" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Radiant aura behind Gopuram */}
      <circle cx="100" cy="100" r="75" fill="#C5A059" fillOpacity="0.12" />

      {/* Main Kalasam Finials */}
      <path d="M100 12 L103 24 H97 L100 12Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1.2" />
      <circle cx="100" cy="11" r="2.5" fill="#7C5295" />
      <path d="M88 18 L90 26 H86 L88 18Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
      <circle cx="88" cy="17" r="2" fill="#7C5295" />
      <path d="M112 18 L114 26 H110 L112 18Z" fill="#D4AF37" stroke="#7C5295" strokeWidth="1" />
      <circle cx="112" cy="17" r="2" fill="#7C5295" />

      {/* Top Shikhara Roof */}
      <path
        d="M78 28 C78 25 88 23 100 23 C112 23 122 25 122 28 L126 36 H74 L78 28Z"
        fill="#7C5295"
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      {/* Tier 1 */}
      <path d="M72 36 H128 L133 50 H67 L72 36Z" fill="#FAF6FD" stroke="#7C5295" strokeWidth="1.5" />
      <circle cx="100" cy="43" r="3.5" fill="#D4AF37" />
      <circle cx="85" cy="43" r="2.5" fill="#7C5295" />
      <circle cx="115" cy="43" r="2.5" fill="#7C5295" />
      <line x1="67" y1="50" x2="133" y2="50" stroke="#D4AF37" strokeWidth="2" />

      {/* Tier 2 */}
      <path d="M64 50 H136 L142 68 H58 L64 50Z" fill="#FAF6FD" stroke="#7C5295" strokeWidth="1.5" />
      <rect x="74" y="54" width="6" height="10" rx="1" fill="#7C5295" />
      <rect x="97" y="53" width="6" height="11" rx="1" fill="#D4AF37" />
      <rect x="120" y="54" width="6" height="10" rx="1" fill="#7C5295" />
      <line x1="58" y1="68" x2="142" y2="68" stroke="#D4AF37" strokeWidth="2.2" />

      {/* Tier 3 */}
      <path d="M55 68 H145 L153 92 H47 L55 68Z" fill="#FAF6FD" stroke="#7C5295" strokeWidth="1.5" />
      <rect x="65" y="73" width="7" height="14" rx="1" fill="#7C5295" />
      <rect x="82" y="73" width="7" height="14" rx="1" fill="#D4AF37" />
      <rect x="111" y="73" width="7" height="14" rx="1" fill="#D4AF37" />
      <rect x="128" y="73" width="7" height="14" rx="1" fill="#7C5295" />
      <circle cx="100" cy="80" r="4" fill="#9B6DC0" stroke="#D4AF37" strokeWidth="1" />
      <line x1="47" y1="92" x2="153" y2="92" stroke="#D4AF37" strokeWidth="2.5" />

      {/* Tier 4 */}
      <path d="M44 92 H156 L164 122 H36 L44 92Z" fill="#FAF6FD" stroke="#7C5295" strokeWidth="1.5" />
      <path d="M52 98 Q57 95 62 98 V115 H52 Z" fill="#7C5295" opacity="0.9" />
      <path d="M72 98 Q77 95 82 98 V115 H72 Z" fill="#D4AF37" />
      <path d="M94 96 Q100 92 106 96 V115 H94 Z" fill="#7C5295" />
      <path d="M118 98 Q123 95 128 98 V115 H118 Z" fill="#D4AF37" />
      <path d="M138 98 Q143 95 148 98 V115 H138 Z" fill="#7C5295" opacity="0.9" />
      <line x1="36" y1="122" x2="164" y2="122" stroke="#D4AF37" strokeWidth="3" />

      {/* Temple Base & Sanctum */}
      <rect x="30" y="122" width="140" height="58" fill="#FAF6FD" stroke="#7C5295" strokeWidth="2" />
      <line x1="26" y1="130" x2="174" y2="130" stroke="#D4AF37" strokeWidth="2" />

      {/* Sanctum Arch */}
      <path d="M80 180 V144 C80 133 90 133 100 133 C110 133 120 133 120 144 V180 Z" fill="#7C5295" />
      <path d="M85 180 V148 C85 139 93 139 100 139 C107 139 115 139 115 148 V180 Z" fill="#D4AF37" opacity="0.35" />
      
      {/* Sacred Sanctum Diya */}
      <path d="M97 172 C96 170 96 167 100 162 C104 167 104 170 103 172 C103 174 97 174 97 172Z" fill="#D4AF37" />
      <ellipse cx="100" cy="173" rx="5" ry="2" fill="#7C5295" />

      {/* Foundation plinth */}
      <rect x="22" y="180" width="156" height="6" fill="#D4AF37" rx="1" />
      <rect x="14" y="186" width="172" height="6" fill="#7C5295" rx="1.5" />

      {/* Side Bells */}
      <path d="M42 134 V146 M40 146 H44 L45 152 H39 L40 146" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" />
      <path d="M158 134 V146 M156 146 H160 L161 152 H155 L156 146" stroke="#D4AF37" strokeWidth="1.2" fill="#D4AF37" />
    </svg>
  );
}

/**
 * Traditional Ornamental Corner in Lavender & Gold
 */
function OrnamentalCorner({ position = "top-left" }) {
  const positionClasses = {
    "top-left": "top-2.5 left-2.5 sm:top-3 sm:left-3 origin-top-left",
    "top-right": "top-2.5 right-2.5 sm:top-3 sm:right-3 origin-top-right rotate-90",
    "bottom-right": "bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 origin-bottom-right rotate-180",
    "bottom-left": "bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 origin-bottom-left -rotate-90",
  }[position] || "top-3 left-3";

  return (
    <div className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 pointer-events-none select-none ${positionClasses}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <path d="M2 38 V6 C2 3.79 3.79 2 6 2 H38" stroke="#C5A059" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 32 V10 C8 8.9 8.9 8 10 8 H32" stroke="#7C5295" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" fill="#C5A059" />
        <path d="M14 14 C18 18 24 18 26 14 C28 10 24 6 18 10" stroke="#9B6DC0" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="2" r="2" fill="#7C5295" />
        <circle cx="2" cy="38" r="2" fill="#7C5295" />
      </svg>
    </div>
  );
}

/**
 * Thoranam Banner in Lavender & Gold
 */
function ThoranamGarland() {
  return (
    <div className="flex items-center justify-center gap-1.5 py-2 text-[#7C5295] select-none" aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C5A059] to-[#7C5295]" />
      <span className="text-[#7C5295] text-xs">🪷</span>
      <span className="text-[#C5A059] text-xs font-serif tracking-widest uppercase font-bold">✦ ॐ ✦</span>
      <span className="text-[#7C5295] text-xs">🪷</span>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C5A059] to-[#7C5295]" />
    </div>
  );
}

export default function WeddingDetails() {
  const { events } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  const sectionVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      id="wedding-details"
      aria-labelledby="wedding-details-heading"
      className="relative w-full py-14 sm:py-20 px-3 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-[#FAF6FD] text-[#3E2356]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Main Card with Lavender & Gold Border */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#FFFFFF] border-2 border-[#D8C3EC] shadow-[0_20px_60px_-15px_rgba(124,82,149,0.14)] p-4 sm:p-10 md:p-12 transition-all duration-300 overflow-hidden">
          
          {/* Ornamental Gold & Lavender Corner Accents */}
          <OrnamentalCorner position="top-left" />
          <OrnamentalCorner position="top-right" />
          <OrnamentalCorner position="bottom-right" />
          <OrnamentalCorner position="bottom-left" />

          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-4 md:inset-5 rounded-xl sm:rounded-2xl border border-[#C5A059]/25 pointer-events-none" />

          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center relative z-10 flex flex-col items-center">
            <div className="mb-2 sm:mb-3 transform hover:scale-105 transition-transform duration-500 ease-out filter drop-shadow-[0_8px_16px_rgba(197,160,89,0.25)]">
              <TempleGopuramIllustration />
            </div>

            <ThoranamGarland />

            <p className="text-[10px] sm:text-xs tracking-[0.24em] uppercase text-[#7C5295] font-bold mt-1 font-serif">
              With Divine Grace &amp; Elders' Blessings
            </p>

            <h2
              id="wedding-details-heading"
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#3E1B56] mt-1.5 mb-2 tracking-wide font-serif"
              style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
            >
              Wedding Celebrations
            </h2>

            <div className="flex items-center justify-center gap-3 w-full max-w-md my-2" aria-hidden="true">
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-[#7C5295]" />
              <div className="flex items-center gap-1.5 text-[#7C5295]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7C5295]" />
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059] to-[#7C5295]" />
            </div>

            <p className="text-[#64427D] text-xs sm:text-base max-w-lg mx-auto font-normal italic font-serif px-2">
              We cordially invite you and your family to grace both auspicious occasions with your loving presence.
            </p>
          </motion.div>

          {/* ── TWO SEPARATE EVENT CARDS: MARRIAGE & RECEPTION ── */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
            
            {/* ═════════ EVENT 1: MARRIAGE CARD ═════════ */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFFDFE] to-[#F7F0FC] border-2 border-[#D8C3EC] shadow-[0_10px_30px_rgba(124,82,149,0.08)] hover:shadow-[0_16px_36px_rgba(124,82,149,0.18)] hover:border-[#7C5295] transition-all duration-300"
            >
              {/* Top Event Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#7C5295] text-white shadow-sm font-serif">
                  <Heart className="w-3 h-3 text-[#F3E1B6] fill-[#F3E1B6]" />
                  <span>The Sacred Marriage</span>
                </span>
                <span className="text-[11px] font-serif font-bold text-[#C5A059] tracking-wider uppercase">
                  Muhurtham
                </span>
              </div>

              {/* Title & Date */}
              <div className="text-center sm:text-left mb-4">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#3E1B56] font-serif tracking-wide mb-1"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  Marriage
                </h3>
                <p className="text-xs sm:text-sm text-[#7C5295] font-serif italic mb-3">
                  {marriage?.tagline}
                </p>

                {/* Date Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      {marriage?.dayOfWeek}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {marriage?.dateFormatted}
                    </p>
                  </div>
                </div>

                {/* Time Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      Muhurtham Timing
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {marriage?.timing}
                    </p>
                  </div>
                </div>

                {/* Venue & Location Row */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      Venue &amp; Location
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {marriage?.venueName}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#7C5295] font-serif">
                      {marriage?.location}
                    </p>
                    <p className="text-[11px] text-[#6E4F84] font-serif mt-0.5 leading-snug">
                      {marriage?.address}
                    </p>
                  </div>
                </div>

                {/* Auspicious note */}
                <p className="text-xs text-[#7C5295] font-serif italic text-center sm:text-left pt-1">
                  ✦ {marriage?.note}
                </p>
              </div>

              {/* Action Button: Get Directions to RV Mahal */}
              <div className="mt-4 pt-4 border-t border-[#D8C3EC]/60">
                <a
                  href={marriage?.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7C5295] via-[#663582] to-[#7C5295] hover:from-[#8E61A8] hover:to-[#763C94] border border-[#C5A059] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-[#F3E1B6]" />
                  <span className="tracking-wider uppercase">View RV Mahal Location</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F3E1B6]/80 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* ═════════ EVENT 2: RECEPTION CARD ═════════ */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#FFFDFE] to-[#F7F0FC] border-2 border-[#D8C3EC] shadow-[0_10px_30px_rgba(124,82,149,0.08)] hover:shadow-[0_16px_36px_rgba(124,82,149,0.18)] hover:border-[#7C5295] transition-all duration-300"
            >
              {/* Top Event Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5A2C76] text-white shadow-sm font-serif">
                  <Sparkles className="w-3 h-3 text-[#F3E1B6]" />
                  <span>The Wedding Reception</span>
                </span>
                <span className="text-[11px] font-serif font-bold text-[#C5A059] tracking-wider uppercase">
                  Celebration
                </span>
              </div>

              {/* Title & Date */}
              <div className="text-center sm:text-left mb-4">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#3E1B56] font-serif tracking-wide mb-1"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  Reception
                </h3>
                <p className="text-xs sm:text-sm text-[#7C5295] font-serif italic mb-3">
                  {reception?.tagline}
                </p>

                {/* Date Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      {reception?.dayOfWeek}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {reception?.dateFormatted}
                    </p>
                  </div>
                </div>

                {/* Time Row */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      Reception Timing
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {reception?.timing}
                    </p>
                  </div>
                </div>

                {/* Venue & Location Row */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/90 border border-[#D8C3EC]/60 shadow-xs mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2E8FA] border border-[#7C5295]/30 flex items-center justify-center text-[#7C5295] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-[#7C5295] font-bold font-serif">
                      Venue &amp; Location
                    </p>
                    <p className="text-base sm:text-lg font-bold text-[#3E1B56] font-serif">
                      {reception?.venueName}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#7C5295] font-serif">
                      {reception?.location}
                    </p>
                    <p className="text-[11px] text-[#6E4F84] font-serif mt-0.5 leading-snug">
                      {reception?.address}
                    </p>
                  </div>
                </div>

                {/* Auspicious note */}
                <p className="text-xs text-[#7C5295] font-serif italic text-center sm:text-left pt-1">
                  ✦ {reception?.note}
                </p>
              </div>

              {/* Action Button: Get Directions to GKS Auditorium */}
              <div className="mt-4 pt-4 border-t border-[#D8C3EC]/60">
                <a
                  href={reception?.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-serif font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#5A2C76] via-[#481E62] to-[#5A2C76] hover:from-[#6E368F] hover:to-[#552473] border border-[#C5A059] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <MapPin className="w-4 h-4 text-[#F3E1B6]" />
                  <span className="tracking-wider uppercase">View GKS Auditorium Location</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F3E1B6]/80 ml-1" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Traditional Auspicious Blessing in Lavender & Gold */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-10 text-center text-[11px] sm:text-xs text-[#7C5295] tracking-widest uppercase flex items-center justify-center gap-2 font-serif font-semibold"
          >
            <span className="text-[#C5A059]">✦</span>
            <span>Mangalam Shubham Karoti Kalyanam</span>
            <span className="text-[#C5A059]">✦</span>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
