import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, ExternalLink } from 'lucide-react';
import { weddingData } from '../data/weddingData';

function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
      <svg viewBox="0 0 48 20" className="w-10 h-4 flex-shrink-0" fill="none">
        <path d="M24 2 L26 8 L24 10 L22 8 Z" fill="#D6A84F" />
        <circle cx="24" cy="1" r="1.5" fill="#A83F25" />
        <path d="M2 10 C8 5 16 4 24 10 C32 4 40 5 46 10" stroke="#D6A84F" strokeWidth="1.2" opacity="0.7" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#D6A84F]/60 to-[#D6A84F]" />
    </div>
  );
}

export default function WeddingVenue() {
  const { venue, event } = weddingData;

  return (
    <section className="relative w-full py-14 sm:py-24 px-4 sm:px-6 bg-[#FFF8EC] overflow-hidden">

      {/* Decorative kolam pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.032] bg-[radial-gradient(#A83F25_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(214,168,79,0.06)_0%,transparent_70%)]" />

      {/* Sacred Temple Gopuram line watermark behind Venue section (inspired by reference image) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.06]" aria-hidden="true">
        <svg viewBox="0 0 320 420" fill="none" className="w-[360px] sm:w-[500px] h-auto">
          <path d="M160 10 L164 26 H156 L160 10Z" stroke="#D6A84F" strokeWidth="1.5" />
          <circle cx="160" cy="9" r="3" fill="#D6A84F" />
          <path d="M120 32 C120 27 138 24 160 24 C182 24 200 27 200 32 L207 46 H113 L120 32Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M108 46 H212 L220 66 H100 L108 46Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M94 66 H226 L235 90 H85 L94 66Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M78 90 H242 L253 122 H67 L78 90Z" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M60 122 H260 L272 162 H48 L60 122Z" stroke="#D6A84F" strokeWidth="1.5" />
          <rect x="40" y="162" width="240" height="120" stroke="#D6A84F" strokeWidth="1.5" />
          <path d="M122 282 V230 C122 208 138 207 160 207 C182 207 198 208 198 230 V282 Z" stroke="#D6A84F" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 font-serif"
            style={{ background: 'rgba(168,63,37,0.09)', border: '1px solid rgba(168,63,37,0.18)', color: '#A83F25' }}
          >
            <Navigation className="w-3.5 h-3.5 text-[#D6A84F]" />
            <span>Sacred Destination</span>
          </div>

          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#A83F25] tracking-wide font-serif mb-3"
            style={{ fontFamily: "'Cinzel', 'Marcellus', Georgia, serif" }}
          >
            The Wedding Venue
          </h2>

          <GoldDivider className="max-w-xs sm:max-w-sm mx-auto mb-4" />

          <p className="text-[#735043] text-xs sm:text-base font-serif italic max-w-md mx-auto px-2">
            An auspicious celebration hall blessed with joy and togetherness.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #FFFBF2 0%, #FFF5E0 100%)',
            border: '2px solid rgba(214,168,79,0.65)',
            boxShadow: '0 20px 60px rgba(168,63,37,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 rounded-xl sm:rounded-2xl border border-[#D6A84F]/20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: Venue Details */}
            <div className="lg:col-span-6 p-5 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                {/* "Venue" badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold font-serif uppercase tracking-wider mb-4 sm:mb-5"
                  style={{ background: 'rgba(36,123,73,0.12)', color: '#1a6b40', border: '1px solid rgba(36,123,73,0.2)' }}
                >
                  Celebration Hall
                </span>

                <h3
                  className="text-2xl sm:text-4xl font-bold text-[#A83F25] font-serif mb-1"
                  style={{ fontFamily: "'Cinzel', Georgia, serif" }}
                >
                  {venue.name}
                </h3>
                <p className="text-sm sm:text-lg font-semibold text-[#247B49] font-serif mb-4 sm:mb-6">
                  {venue.hall}
                </p>

                <div className="space-y-3.5 sm:space-y-4 text-[#735043] font-serif text-xs sm:text-base">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#A83F25]/10 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A83F25]" />
                    </div>
                    <span className="leading-relaxed">{venue.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D6A84F]/15 flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6A84F]" />
                    </div>
                    <span>{event.fullDate}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D6A84F]/15 flex items-center justify-center">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D6A84F]" />
                    </div>
                    <span>{event.muhurthamTitle}: <strong>{event.muhurthamTime}</strong></span>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="pt-6 sm:pt-8 mt-6 border-t border-[#D6A84F]/30">
                <a
                  href={venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-full font-serif font-bold text-sm sm:text-base text-[#FFF8EC] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl shadow-md text-center"
                  style={{
                    background: 'linear-gradient(135deg, #B84530 0%, #8C321C 50%, #A83F25 100%)',
                    border: '2px solid #D6A84F',
                  }}
                >
                  <MapPin className="w-4 h-4 text-[#D6A84F] group-hover:animate-bounce" />
                  <span className="uppercase tracking-wider">Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#D6A84F]" />
                </a>
              </div>
            </div>

            {/* Right: Map Embed */}
            <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-[#D6A84F]/30 bg-[#EFE9DD]">
              <iframe
                title="Wedding Venue Map"
                src={venue.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '260px' }}
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
