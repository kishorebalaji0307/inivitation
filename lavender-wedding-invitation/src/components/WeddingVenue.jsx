import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

function LotusDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-40 sm:w-56 mx-auto ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
      <svg viewBox="0 0 28 20" className="w-5 h-4 text-[#865DA6] flex-shrink-0" fill="currentColor">
        <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
        <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
        <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C7B2DF] to-[#9E7BBF]" />
    </div>
  );
}

export default function WeddingVenue() {
  const { venues } = weddingData;
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);
  const activeVenue = venues[activeVenueIndex] || venues[0];

  return (
    <section id="wedding-venues" className="relative w-full py-12 sm:py-20 px-3 sm:px-6 overflow-hidden">
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EBF9] border border-[#E0CEF3] text-[#714E8B] text-[10px] sm:text-xs font-sans-clean font-semibold uppercase tracking-widest mb-3">
            <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Sacred Destinations</span>
          </div>

          <h2 className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E1848] tracking-wide mb-2">
            The Wedding Venues
          </h2>

          <LotusDivider className="my-2 sm:my-3" />

          <p className="font-serif-elegant italic text-xs sm:text-base text-[#684C82] max-w-md mx-auto px-2">
            Auspicious celebration halls blessed with joy, prayers, and loving family memories.
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
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans-clean font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#694285] to-[#512B6B] text-white shadow-md border-2 border-[#C5A059] scale-105'
                      : 'bg-white/90 text-[#6B4783] hover:bg-[#F3EBF9] border border-[#DDC7EE] shadow-xs'
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#E5D5F5] shadow-[0_16px_50px_-12px_rgba(110,65,150,0.08)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
            
            {/* Left: Venue Information (2 cols) */}
            <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#F0E6F8]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBF9] border border-[#E0CEF3] text-[#694285] font-sans-clean text-[10px] font-bold uppercase tracking-wider mb-3">
                  {activeVenue.event} Venue
                </span>

                <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-[#2A1443] mb-1">
                  {activeVenue.name}
                </h3>
                <p className="font-serif-elegant italic text-xs sm:text-sm text-[#73528E] mb-4">
                  {activeVenue.hall || activeVenue.location}
                </p>

                <div className="space-y-3 pt-2 border-t border-[#F0E6F8]">
                  <div className="flex items-start gap-2.5 text-xs text-[#5D3D74]">
                    <Calendar className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span className="font-serif-royal font-semibold">{activeVenue.date}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#5D3D74]">
                    <Clock className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span className="font-serif-royal font-semibold">{activeVenue.time}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#5D3D74]">
                    <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span className="font-serif-elegant leading-relaxed">{activeVenue.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0E6F8]">
                <a
                  href={activeVenue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6B4286] to-[#4F276E] hover:from-[#5A3375] hover:to-[#421D5E] text-white text-xs font-sans-clean font-semibold tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F2E1B6]" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F2E1B6]" />
                </a>
              </div>
            </div>

            {/* Right: Embedded Google Maps (3 cols) */}
            <div className="lg:col-span-3 min-h-[300px] sm:min-h-[360px] bg-[#FAF6FD] relative">
              <iframe
                title={`${activeVenue.name} Map Location`}
                src={activeVenue.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
