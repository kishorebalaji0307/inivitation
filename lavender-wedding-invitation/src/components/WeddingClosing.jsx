import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * Botanical Leaf / Blossom Horizontal Divider
 */
function FooterFloralDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-48 sm:w-64 mx-auto ${className}`} aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#CBB5E2] to-[#A381C4]" />
      <svg viewBox="0 0 28 20" className="w-5 h-4 text-[#8C62AC] flex-shrink-0" fill="currentColor">
        <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
        <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
        <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#CBB5E2] to-[#A381C4]" />
    </div>
  );
}

export default function WeddingClosing() {
  const { couple } = weddingData;

  return (
    <footer className="relative w-full pt-12 pb-20 sm:pb-24 px-4 overflow-hidden text-center">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(235,220,250,0.4)_0%,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Top Lotus Emblem */}
        <div className="mb-2 text-[#8C62AC] flex items-center justify-center gap-2">
          <span className="text-[10px] text-[#C5A059]">✦</span>
          <svg viewBox="0 0 28 20" className="w-6 h-5" fill="currentColor" aria-hidden="true">
            <path d="M14 1 C12 6 8 9 4 12 C9 12 12 11 14 14 C16 11 19 12 24 12 C20 9 16 6 14 1 Z" />
            <path d="M14 14.5 C10 13.5 6 14.5 2 16.5 C6 17.5 10 17.5 14 17.5 C18 17.5 22 17.5 26 16.5 C22 14.5 18 13.5 14 14.5 Z" opacity="0.8" />
            <circle cx="14" cy="7.5" r="1.2" fill="#E5C97F" />
          </svg>
          <span className="text-[10px] text-[#C5A059]">✦</span>
        </div>

        {/* Cursive Script: Kindly grace the occasion */}
        <h3 className="font-script text-4xl sm:text-5xl text-[#3A1E57] mb-2 leading-tight filter drop-shadow-xs">
          Kindly grace the occasion
        </h3>

        {/* Uppercase line: YOUR PRESENCE WILL MAKE OUR DAY MORE SPECIAL */}
        <p className="font-sans-clean text-[9px] sm:text-[11px] font-bold tracking-[0.28em] text-[#785794] uppercase mb-5 max-w-md">
          YOUR PRESENCE WILL MAKE OUR DAY MORE SPECIAL
        </p>

        {/* Delicate Horizontal Divider with Central Leaf */}
        <FooterFloralDivider className="my-3 sm:my-4" />

        {/* WITH LOVE */}
        <p className="font-sans-clean text-[9px] sm:text-[10px] font-bold tracking-[0.32em] text-[#8A6AAB] uppercase mt-2">
          WITH LOVE
        </p>

        {/* Heart symbol */}
        <div className="mt-1 text-[#8C62AC]">
          <Heart className="w-3.5 h-3.5 fill-[#8C62AC] text-[#8C62AC] inline-block animate-pulse" />
        </div>

        {/* Couple & Family Signature */}
        <p className="font-serif-elegant italic text-xs text-[#806399] mt-4">
          {couple.groom} &amp; {couple.bride} and their Families
        </p>
      </motion.div>
    </footer>
  );
}
