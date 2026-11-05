import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      <svg viewBox="0 0 48 20" className="w-10 h-4 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#C5A059" />
        <circle cx="24" cy="1" r="1.5" fill="#7C5295" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#C5A059" strokeWidth="1.2" opacity="0.75" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    </div>
  );
}

export default function WeddingVenue() {
  const { venues } = weddingData;
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);
  const activeVenue = venues[activeVenueIndex] || venues[0];

  return (
    <section id="wedding-venues" className="relative w-full py-14 sm:py-24 px-3 sm:px-6 bg-[#FAF6FD] overflow-hidden">

      {/* Decorative lavender pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#7C5295_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />

      {/* Sacred Temple Gopuram line watermark in Soft Lavender */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.05]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[360px] sm:w-[500px] h-auto">
          <path d="M160 10 L164 26 H156 L160 10Z" stroke="#7C5295" strokeWidth="1.5" />
          <circle cx="160" cy="9" r="3" fill="#C5A059" />
          <path d="M120 32 C120 27 138 24 160 24 C182 24 200 27 200 32 L207 46 H113 L120 32Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M108 46 H212 L220 66 H100 L108 46Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M94 66 H226 L235 90 H85 L94 66Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M78 90 H242 L253 122 H67 L78 90Z" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M60 122 H260 L272 162 H48 L60 122Z" stroke="#7C5295" strokeWidth="1.5" />
          <rect x="40" y="162" width="240" height="120" stroke="#7C5295" strokeWidth="1.5" />
          <path d="M122 282 V230 C122 208 138 207 160 207 C182 207 198 208 198 230 V282 Z" stroke="#7C5295" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 font-serif"
            style={{ background: 'rgba(124,82,149,0.08)', border: '1px solid rgba(124,82,149,0.22)', color: '#7C5295' }}
          >
            <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Sacred Destinations</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#3E1B56] tracking-wide font-serif mb-3"
            style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
          >
            The Wedding Venues
          </h2>

          <GoldDivider className="max-w-xs sm:max-w-sm mx-auto mb-4" />

          <p className="text-[#64427D] text-xs sm:text-base font-serif italic max-w-md mx-auto px-2">
            Auspicious celebration halls blessed with joy, prayers, and family togetherness.
          </p>

          {/* Interactive Venue Tab Selector */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {venues.map((v, idx) => {
              const isSelected = idx === activeVenueIndex;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveVenueIndex(idx)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#7C5295] to-[#5F337B] text-white shadow-md border-2 border-[#C5A059] scale-105'
                      : 'bg-white/80 text-[#6B3E84] hover:bg-white border border-[#D8C3EC] shadow-xs'
                  }`}
                >
                  {v.event === 'Marriage' ? (
                    <Heart className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F3E1B6] fill-[#F3E1B6]' : 'text-[#7C5295]'}`} />
                  ) : (
                    <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F3E1B6]' : 'text-[#7C5295]'}`} />
                  )}
                  <span>{v.event}: {v.name} ({v.location})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Venue Display Card */}
        <motion.div
          key={activeVenue.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-[#D8C3EC] shadow-[0_20px_60px_rgba(124,82,149,0.12)]"
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 rounded-xl sm:rounded-2xl border border-[#C5A059]/20 pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: Venue Details */}
            <div className="lg:col-span-6 p-5 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                {/* Event Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold font-serif uppercase tracking-wider"
                    style={{ background: 'rgba(124,82,149,0.12)', color: '#6B3E84', border: '1px solid rgba(124,82,149,0.25)' }}
                  >
                    {activeVenue.event} Celebration
                  </span>
                  <span className="text-xs font-serif text-[#C5A059] font-bold uppercase tracking-wider">
                    {activeVenue.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-4xl font-bold text-[#3E1B56] font-serif mb-1"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {activeVenue.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#7C5295] font-serif mb-4 sm:mb-6">
                  {activeVenue.location} &bull; {activeVenue.hall}
                </p>

                <div className="space-y-3.5 sm:space-y-4 text-[#593A6F] font-serif text-xs sm:text-base">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7C5295]/10 flex items-center justify-center mt-0.5">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C5295]" />
                    </div>
                    <span className="leading-relaxed">{activeVenue.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A059]" />
                    </div>
                    <span className="font-semibold text-[#3E1B56]">{activeVenue.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#7C5295]/10 flex items-center justify-center">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7C5295]" />
                    </div>
                    <span className="font-semibold text-[#7C5295]">{activeVenue.time}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Directions */}
              <div className="mt-6 sm:mt-8 pt-4 border-t border-[#D8C3EC]/60 flex flex-col sm:flex-row gap-3">
                <a
                  href={activeVenue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-serif font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7C5295] via-[#68398A] to-[#7C5295] hover:from-[#8E61A8] hover:to-[#763C94] border border-[#C5A059] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Navigation className="w-4 h-4 text-[#F3E1B6]" />
                  <span className="tracking-wider uppercase">Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F3E1B6]/80" />
                </a>
              </div>
            </div>

            {/* Right: Google Maps Embed */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] bg-[#F2EBF9] border-t lg:border-t-0 lg:border-l border-[#D8C3EC]">
              <iframe
                title={`Google Map - ${activeVenue.name}`}
                src={activeVenue.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-center text-[10px] text-[#6B3E84] font-serif border border-[#D8C3EC]">
                📍 {activeVenue.name}, {activeVenue.location}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
