import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Ornamental Lotus Divider
 */
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

export default function WeddingDetails() {
  const { events, couple } = weddingData;
  const marriage = events?.marriage;
  const reception = events?.reception;

  const scrollToVenues = (e) => {
    e.preventDefault();
    const el = document.getElementById('wedding-venues');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-20 px-3 sm:px-6 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(235,220,250,0.5)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-sans-clean text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#714E8B] uppercase mb-1">
            CELEBRATING SACRED MOMENTS
          </p>

          <h2 className="font-serif-royal text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E1848] tracking-wide mb-2">
            Wedding Celebrations
          </h2>

          <LotusDivider className="my-2 sm:my-3" />

          <p className="font-serif-elegant italic text-xs sm:text-base text-[#684C82] max-w-md mx-auto px-2">
            We warmly invite you and your family to grace our celebrations and shower us with your loving blessings.
          </p>
        </div>

        {/* ── TWO SEPARATE EVENT CARDS (Marriage & Reception) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* ────── 1. THE SACRED MARRIAGE CARD ────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="relative bg-gradient-to-b from-[#FFFDFE] via-white to-[#FAF6FE] backdrop-blur-md rounded-3xl border-2 border-[#D8C1EE] shadow-[0_20px_50px_-12px_rgba(105,62,134,0.12),0_0_0_1px_rgba(255,255,255,0.9)_inset] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/60 overflow-hidden"
          >
            {/* Inner Gold Hairline Frame */}
            <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/30 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] text-[#694285] font-sans-clean text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Heart className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                  Sacred Muhurtham
                </span>
                <span className="text-[10px] sm:text-xs font-serif-elegant italic text-[#8869A1]">
                  Auspicious Union
                </span>
              </div>

              {/* Event Title */}
              <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-[#2A1443] mb-1">
                Marriage
              </h3>
              <p className="font-serif-elegant italic text-xs sm:text-sm text-[#704F89] mb-5">
                Vedic Rites &amp; Thali Kattu
              </p>

              {/* Details List */}
              <div className="space-y-4 pt-1 border-t border-[#F0E6F8]">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Calendar className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Date
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      Sunday, November 29, 2026
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Timing
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      9:00 AM – 10:30 AM
                    </p>
                    <p className="font-serif-elegant italic text-xs text-[#806399]">
                      Muhurtham followed by traditional South Indian feast
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Venue &amp; Location
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      RV Mahal, Manaparai
                    </p>
                    <p className="font-serif-elegant text-xs text-[#6F5287] mt-0.5">
                      Dindigul Main Road, Manaparai, Tamil Nadu – 621306
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-4 border-t border-[#F0E6F8] flex items-center justify-between relative z-10">
              <a
                href={marriage?.mapUrl || "https://maps.google.com/?q=RV+Mahal+Manaparai"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans-clean font-semibold tracking-wider uppercase text-[#694285] hover:text-[#45225E] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </a>
              <button
                type="button"
                onClick={scrollToVenues}
                className="px-3.5 py-1.5 rounded-full bg-[#F4ECFA] hover:bg-[#EDE0F7] border border-[#DFC9F3] text-[11px] font-sans-clean font-semibold text-[#5A3375] transition-colors cursor-pointer"
              >
                View Map &darr;
              </button>
            </div>
          </motion.div>

          {/* ────── 2. THE WEDDING RECEPTION CARD ────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="relative bg-gradient-to-b from-[#FFFDFE] via-white to-[#FAF6FE] backdrop-blur-md rounded-3xl border-2 border-[#D8C1EE] shadow-[0_20px_50px_-12px_rgba(105,62,134,0.12),0_0_0_1px_rgba(255,255,255,0.9)_inset] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/60 overflow-hidden"
          >
            {/* Inner Gold Hairline Frame */}
            <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#C5A059]/30 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] text-[#694285] font-sans-clean text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  Evening Reception
                </span>
                <span className="text-[10px] sm:text-xs font-serif-elegant italic text-[#8869A1]">
                  Grand Celebration
                </span>
              </div>

              {/* Event Title */}
              <h3 className="font-serif-royal text-2xl sm:text-3xl font-bold text-[#2A1443] mb-1">
                Reception
              </h3>
              <p className="font-serif-elegant italic text-xs sm:text-sm text-[#704F89] mb-5">
                Music, Blessings &amp; Royal Dinner
              </p>

              {/* Details List */}
              <div className="space-y-4 pt-1 border-t border-[#F0E6F8]">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Calendar className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Date
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      Wednesday, December 02, 2026
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Timing
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      6:30 PM – 9:00 PM
                    </p>
                    <p className="font-serif-elegant italic text-xs text-[#806399]">
                      Celebration evening followed by lavish dinner banquet
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#F7F0FD] to-[#EFE2F9] border border-[#DEC7F3] flex items-center justify-center text-[#734A8E] flex-shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4 text-[#734A8E]" />
                  </div>
                  <div>
                    <p className="font-sans-clean text-[10px] font-bold uppercase tracking-wider text-[#795C91]">
                      Venue &amp; Location
                    </p>
                    <p className="font-serif-royal text-base sm:text-lg font-bold text-[#2E1848]">
                      GKS Auditorium, Coimbatore
                    </p>
                    <p className="font-serif-elegant text-xs text-[#6F5287] mt-0.5">
                      Bharathi Nagar, Ganapathy, Coimbatore, Tamil Nadu – 641006
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-4 border-t border-[#F0E6F8] flex items-center justify-between relative z-10">
              <a
                href={reception?.mapUrl || "https://maps.google.com/?q=GKS+Auditorium+Bharathi+Nagar+Ganapathy+Coimbatore"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans-clean font-semibold tracking-wider uppercase text-[#694285] hover:text-[#45225E] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </a>
              <button
                type="button"
                onClick={scrollToVenues}
                className="px-3.5 py-1.5 rounded-full bg-[#F4ECFA] hover:bg-[#EDE0F7] border border-[#DFC9F3] text-[11px] font-sans-clean font-semibold text-[#5A3375] transition-colors cursor-pointer"
              >
                View Map &darr;
              </button>
            </div>
          </motion.div>

        </div>

        {/* ── LOVING COUPLE PORTRAIT CARD (Preserving bride and groom illustration) ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12 sm:mt-16 max-w-xl mx-auto text-center"
        >
          <div className="relative mx-auto inline-block p-3 sm:p-4 rounded-[42px] bg-gradient-to-b from-[#FFFDFE] via-[#FAF4FE] to-[#F2E5FA] border-2 border-[#D8C1EE] shadow-[0_22px_60px_-12px_rgba(105,62,134,0.18)]">
            {/* Subtle inner gold rim */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-[36px] border border-[#C5A059]/35 pointer-events-none" />

            <div className="overflow-hidden rounded-[30px] w-64 sm:w-80 h-72 sm:h-96 mx-auto bg-[#FAF6FD] relative shadow-inner">
              <img
                src={couple.image || "/images/wedding-couple-original-purple.jpg"}
                alt={couple.altText}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1242]/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <p className="font-script text-3xl sm:text-5xl text-[#3A1856] mt-3.5 filter drop-shadow-xs">
            S. Sasidharan <span className="text-[#C5A059]">&amp;</span> S. Swetha
          </p>
          <p className="font-serif-elegant italic text-xs sm:text-sm text-[#73528E] mt-0.5">
            Beginning their lifelong voyage of harmony and happiness
          </p>
        </motion.div>

      </div>
    </section>
  );
}
