import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Traditional South Indian Temple Gopuram SVG Illustration
 * Handcrafted Dravidian style with Kalasam finials, tiered storeys, and sacred sanctum arch.
 */
function TempleGopuramIllustration({ className = "w-36 h-36" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Radiant aura behind Gopuram */}
      <circle cx="100" cy="100" r="75" fill="#D6A84F" fillOpacity="0.08" />

      {/* Main Kalasam Finials */}
      <path d="M100 12 L103 24 H97 L100 12Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1.2" />
      <circle cx="100" cy="11" r="2.5" fill="#A83F25" />
      <path d="M88 18 L90 26 H86 L88 18Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
      <circle cx="88" cy="17" r="2" fill="#A83F25" />
      <path d="M112 18 L114 26 H110 L112 18Z" fill="#D6A84F" stroke="#A83F25" strokeWidth="1" />
      <circle cx="112" cy="17" r="2" fill="#A83F25" />

      {/* Top Shikhara Roof */}
      <path
        d="M78 28 C78 25 88 23 100 23 C112 23 122 25 122 28 L126 36 H74 L78 28Z"
        fill="#A83F25"
        stroke="#D6A84F"
        strokeWidth="1.5"
      />
      {/* Tier 1 */}
      <path d="M72 36 H128 L133 50 H67 L72 36Z" fill="#FFF8EC" stroke="#A83F25" strokeWidth="1.5" />
      <circle cx="100" cy="43" r="3.5" fill="#D6A84F" />
      <circle cx="85" cy="43" r="2.5" fill="#A83F25" />
      <circle cx="115" cy="43" r="2.5" fill="#A83F25" />
      <line x1="67" y1="50" x2="133" y2="50" stroke="#D6A84F" strokeWidth="2" />

      {/* Tier 2 */}
      <path d="M64 50 H136 L142 68 H58 L64 50Z" fill="#FFF8EC" stroke="#A83F25" strokeWidth="1.5" />
      <rect x="74" y="54" width="6" height="10" rx="1" fill="#A83F25" />
      <rect x="97" y="53" width="6" height="11" rx="1" fill="#D6A84F" />
      <rect x="120" y="54" width="6" height="10" rx="1" fill="#A83F25" />
      <line x1="58" y1="68" x2="142" y2="68" stroke="#D6A84F" strokeWidth="2.2" />

      {/* Tier 3 */}
      <path d="M55 68 H145 L153 92 H47 L55 68Z" fill="#FFF8EC" stroke="#A83F25" strokeWidth="1.5" />
      <rect x="65" y="73" width="7" height="14" rx="1" fill="#A83F25" />
      <rect x="82" y="73" width="7" height="14" rx="1" fill="#D6A84F" />
      <rect x="111" y="73" width="7" height="14" rx="1" fill="#D6A84F" />
      <rect x="128" y="73" width="7" height="14" rx="1" fill="#A83F25" />
      <circle cx="100" cy="80" r="4" fill="#247B49" stroke="#D6A84F" strokeWidth="1" />
      <line x1="47" y1="92" x2="153" y2="92" stroke="#D6A84F" strokeWidth="2.5" />

      {/* Tier 4 */}
      <path d="M44 92 H156 L164 122 H36 L44 92Z" fill="#FFF8EC" stroke="#A83F25" strokeWidth="1.5" />
      <path d="M52 98 Q57 95 62 98 V115 H52 Z" fill="#A83F25" opacity="0.9" />
      <path d="M72 98 Q77 95 82 98 V115 H72 Z" fill="#D6A84F" />
      <path d="M94 96 Q100 92 106 96 V115 H94 Z" fill="#A83F25" />
      <path d="M118 98 Q123 95 128 98 V115 H118 Z" fill="#D6A84F" />
      <path d="M138 98 Q143 95 148 98 V115 H138 Z" fill="#A83F25" opacity="0.9" />
      <line x1="36" y1="122" x2="164" y2="122" stroke="#D6A84F" strokeWidth="3" />

      {/* Temple Base & Sanctum */}
      <rect x="30" y="122" width="140" height="58" fill="#FFF8EC" stroke="#A83F25" strokeWidth="2" />
      <line x1="26" y1="130" x2="174" y2="130" stroke="#D6A84F" strokeWidth="2" />

      {/* Sanctum Arch */}
      <path d="M80 180 V144 C80 133 90 133 100 133 C110 133 120 133 120 144 V180 Z" fill="#A83F25" />
      <path d="M85 180 V148 C85 139 93 139 100 139 C107 139 115 139 115 148 V180 Z" fill="#D6A84F" opacity="0.35" />
      
      {/* Sacred Sanctum Diya */}
      <path d="M97 172 C96 170 96 167 100 162 C104 167 104 170 103 172 C103 174 97 174 97 172Z" fill="#D6A84F" />
      <ellipse cx="100" cy="173" rx="5" ry="2" fill="#247B49" />

      {/* Foundation plinth */}
      <rect x="22" y="180" width="156" height="6" fill="#D6A84F" rx="1" />
      <rect x="14" y="186" width="172" height="6" fill="#A83F25" rx="1.5" />

      {/* Side Bells */}
      <path d="M42 134 V146 M40 146 H44 L45 152 H39 L40 146" stroke="#D6A84F" strokeWidth="1.2" fill="#D6A84F" />
      <path d="M158 134 V146 M156 146 H160 L161 152 H155 L156 146" stroke="#D6A84F" strokeWidth="1.2" fill="#D6A84F" />
    </svg>
  );
}

/**
 * Traditional South Indian Ornamental Corner
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
        <path d="M2 38 V6 C2 3.79 3.79 2 6 2 H38" stroke="#D6A84F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 32 V10 C8 8.9 8.9 8 10 8 H32" stroke="#A83F25" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="3" fill="#D6A84F" />
        <path d="M14 14 C18 18 24 18 26 14 C28 10 24 6 18 10" stroke="#247B49" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="2" r="2" fill="#A83F25" />
        <circle cx="2" cy="38" r="2" fill="#A83F25" />
      </svg>
    </div>
  );
}

/**
 * Traditional Floral Thoranam Banner
 */
function ThoranamGarland() {
  return (
    <div className="flex items-center justify-center gap-1.5 py-2 text-[#247B49] select-none" aria-hidden="true">
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D6A84F] to-[#A83F25]" />
      <span className="text-[#A83F25] text-xs">🪷</span>
      <span className="text-[#D6A84F] text-xs font-serif tracking-widest uppercase">✦ ॐ ✦</span>
      <span className="text-[#A83F25] text-xs">🪷</span>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D6A84F] to-[#A83F25]" />
    </div>
  );
}

export default function WeddingDetails({
  heading = "The Wedding Celebration",
  auspiciousText = "With divine grace & the blessings of elders",
  date,
  muhurtham,
  venue,
  onViewLocation,
}) {
  // Use passed props or fall back to centralized weddingData
  const activeDate = date || {
    day: weddingData.event.dayOfWeek,
    fullDate: weddingData.event.fullDate,
    note: "Join us in our sacred celebration",
  };

  const activeMuhurtham = muhurtham || {
    time: weddingData.event.muhurthamTime,
    title: weddingData.event.muhurthamTitle,
    note: weddingData.event.muhurthamNote,
  };

  const activeVenue = venue || {
    name: weddingData.venue.name,
    hall: weddingData.venue.hall,
    address: weddingData.venue.address,
    mapUrl: weddingData.venue.mapUrl,
  };

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

  const handleLocationClick = (e) => {
    if (onViewLocation) {
      e.preventDefault();
      onViewLocation();
    }
  };

  return (
    <motion.section
      id="wedding-details"
      aria-labelledby="wedding-details-heading"
      className="relative w-full py-14 sm:py-20 px-3 sm:px-6 md:px-12 lg:px-16 overflow-hidden bg-[#FFF8EC] text-[#45180D]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Main Card with Traditional Ornamental Border */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#FFFBF4] border-2 border-[#D6A84F]/60 shadow-[0_20px_60px_-15px_rgba(168,63,37,0.12)] p-4 sm:p-10 md:p-14 lg:p-16 transition-all duration-300 overflow-hidden">
          
          {/* Ornamental Gold Corner Accents */}
          <OrnamentalCorner position="top-left" />
          <OrnamentalCorner position="top-right" />
          <OrnamentalCorner position="bottom-right" />
          <OrnamentalCorner position="bottom-left" />

          {/* Inner hairline border */}
          <div className="absolute inset-2 sm:inset-4 md:inset-5 rounded-xl sm:rounded-2xl border border-[#D6A84F]/30 pointer-events-none" />

          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center relative z-10 flex flex-col items-center">
            <div className="mb-3 sm:mb-4 transform hover:scale-105 transition-transform duration-500 ease-out filter drop-shadow-[0_8px_16px_rgba(214,168,79,0.25)]">
              <TempleGopuramIllustration className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36" />
            </div>

            <ThoranamGarland />

            <p className="text-[10px] sm:text-sm tracking-[0.22em] uppercase text-[#A83F25] font-semibold mt-1 font-serif">
              {auspiciousText}
            </p>

            <h2
              id="wedding-details-heading"
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#A83F25] mt-1.5 mb-2.5 tracking-wide font-serif"
              style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
            >
              {heading}
            </h2>

            <div className="flex items-center justify-center gap-3 w-full max-w-md my-2 sm:my-3" aria-hidden="true">
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D6A84F] to-[#A83F25]" />
              <div className="flex items-center gap-1.5 text-[#247B49]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A83F25]" />
                <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
              </div>
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D6A84F] to-[#A83F25]" />
            </div>

            <p className="text-[#6B4B3E] text-xs sm:text-base max-w-lg mx-auto font-normal italic font-serif px-2">
              Join us in solemn prayer and joyful celebration as two sacred journeys unite in eternal harmony.
            </p>
          </motion.div>

          {/* 3-Column Detail Cards Grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 relative z-10">
            
            {/* Card 1: Sacred Wedding Date */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center text-center p-5 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-b from-white to-[#FFF9F0] border border-[#D6A84F]/40 shadow-sm hover:shadow-md hover:border-[#D6A84F] transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#247B49]/10 text-[#247B49] border border-[#247B49]/20 mb-3 sm:mb-4">
                <span>Auspicious Day</span>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFF8EC] to-[#F7EBD3] border-2 border-[#D6A84F] flex items-center justify-center text-[#A83F25] shadow-inner group-hover:scale-110 group-hover:bg-[#A83F25] group-hover:text-[#FFF8EC] transition-all duration-300 mb-3 sm:mb-4">
                <Calendar className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#A83F25] tracking-wide mb-1 font-serif">
                {activeDate.day}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-[#45180D] mb-2 font-serif">
                {activeDate.fullDate}
              </p>
              
              <div className="w-10 h-[1px] bg-[#D6A84F] my-2" />

              <p className="text-xs sm:text-sm text-[#735043] leading-relaxed font-serif">
                {activeDate.note}
              </p>
            </motion.div>

            {/* Card 2: Wedding Reception & Muhurtham Timing */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center text-center p-5 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#FFF3E0]/70 border-2 border-[#D6A84F] shadow-md hover:shadow-lg transition-all duration-300 md:-translate-y-2"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#A83F25] text-[#FFF8EC] shadow-sm mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3 text-[#D6A84F]" />
                <span>Wedding Timing</span>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#A83F25] border-2 border-[#D6A84F] flex items-center justify-center text-[#D6A84F] shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-[#A83F25] tracking-wide mb-1 font-serif">
                {activeMuhurtham.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-xl font-bold text-[#45180D] tracking-wide mb-1 break-normal sm:whitespace-nowrap font-serif">
                {activeMuhurtham.time}
              </p>

              <div className="w-10 h-[1.5px] bg-[#D6A84F] my-2 sm:my-2.5" />

              <p className="text-xs sm:text-sm text-[#735043] leading-relaxed font-serif">
                {activeMuhurtham.note}
              </p>
            </motion.div>

            {/* Card 3: Kalyana Mandapam */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col items-center text-center p-5 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-b from-white to-[#FFF9F0] border border-[#D6A84F]/40 shadow-sm hover:shadow-md hover:border-[#D6A84F] transition-all duration-300"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider bg-[#247B49]/10 text-[#247B49] border border-[#247B49]/20 mb-3 sm:mb-4">
                <span>Sacred Mandapam</span>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFF8EC] to-[#F7EBD3] border-2 border-[#D6A84F] flex items-center justify-center text-[#A83F25] shadow-inner group-hover:scale-110 group-hover:bg-[#A83F25] group-hover:text-[#FFF8EC] transition-all duration-300 mb-3 sm:mb-4">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />
              </div>

              <h3 className="text-base sm:text-xl font-bold text-[#A83F25] tracking-wide mb-1 leading-snug font-serif">
                {activeVenue.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#247B49] mb-1 font-serif">
                {activeVenue.hall}
              </p>

              <div className="w-10 h-[1px] bg-[#D6A84F] my-2" />

              <p className="text-xs sm:text-sm text-[#735043] leading-relaxed line-clamp-3 font-serif">
                {activeVenue.address}
              </p>
            </motion.div>

          </div>

          {/* Action Row: View Location Button */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 text-center"
          >
            <a
              id="view-location-btn"
              href={activeVenue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLocationClick}
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-full font-serif font-bold text-sm sm:text-base text-[#FFF8EC] bg-gradient-to-r from-[#A83F25] via-[#8C321C] to-[#A83F25] hover:from-[#B8472B] hover:to-[#96351E] border-2 border-[#D6A84F] shadow-[0_8px_20px_rgba(168,63,37,0.3)] hover:shadow-[0_12px_28px_rgba(168,63,37,0.45)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#FFF8EC]"
            >
              <MapPin className="w-4 h-4 text-[#D6A84F] group-hover:animate-bounce" />
              <span className="tracking-wider uppercase">View Location</span>
              <ExternalLink className="w-4 h-4 text-[#D6A84F]/80 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Traditional Auspicious Blessing */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center text-[12px] sm:text-xs text-[#8B6454] tracking-widest uppercase flex items-center justify-center gap-2 font-serif"
          >
            <span className="text-[#D6A84F]">✦</span>
            <span>Mangalam Shubham Karoti Kalyanam</span>
            <span className="text-[#D6A84F]">✦</span>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
