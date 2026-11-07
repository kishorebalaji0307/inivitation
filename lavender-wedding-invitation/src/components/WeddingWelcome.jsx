import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Botanical Lotus Filigree
 */
function LotusIcon({ className = "w-6 h-6 text-[#9A74BE]" }) {
  return (
    <svg viewBox="0 0 28 20" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
      <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
      <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
    </svg>
  );
}

export default function WeddingWelcome() {
  const { couple } = weddingData;

  const scrollToVenues = (e) => {
    e.preventDefault();
    const el = document.getElementById('wedding-venues');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-8 sm:py-14 px-3 sm:px-6 overflow-hidden">
      <div className="relative z-10 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
        
        {/* ── SPLIT CARD (Left Prose + Right Rings Image) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-b from-[#FFFDFE] via-white to-[#FAF6FE] backdrop-blur-md rounded-3xl border-2 border-[#E3D3F4] shadow-[0_22px_60px_-12px_rgba(105,62,134,0.12)] overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch relative"
        >
          {/* Left Column: A new chapter begins... */}
          <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left relative z-10">
            <h2 className="font-script text-4xl sm:text-5xl text-[#3E215C] leading-snug mb-2 sm:mb-3 filter drop-shadow-xs">
              A new chapter<br className="hidden sm:inline" /> begins...
            </h2>

            <div className="my-2 sm:my-3">
              <LotusIcon className="w-6 h-5 text-[#8E65B5]" />
            </div>

            <p className="font-serif-elegant italic text-sm sm:text-base md:text-lg text-[#63497C] leading-relaxed max-w-sm mt-1">
              &ldquo;We would be truly honoured to have you with us as we celebrate love, togetherness and the beginning of our forever.&rdquo;
            </p>
          </div>

          {/* Right Column: Rings & Hands Photo seamlessly integrated */}
          <div className="relative min-h-[260px] sm:min-h-[300px] md:min-h-full overflow-hidden bg-[#F7F1FB]">
            <img
              src="/images/couple-rings.png"
              alt="Sasidharan &amp; Swetha - Holding Hands and Wedding Rings"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Soft atmospheric overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6FD]/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* ── CENTRED LOCATION PILL BUTTON (Reference Design) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center mt-7 sm:mt-10"
        >
          <a
            href="#wedding-venues"
            onClick={scrollToVenues}
            className="inline-flex items-center gap-2 px-7 sm:px-9 py-2.5 sm:py-3 rounded-full border-2 border-[#C5A059]/70 bg-gradient-to-r from-white via-[#FAF6FE] to-white hover:bg-[#F3EBF9] text-[#4E2D6D] text-xs sm:text-sm font-sans-clean font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>VIEW LOCATION</span>
            <span className="text-[#C5A059] font-bold ml-0.5">&gt;</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
