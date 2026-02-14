import React from 'react';
import { ARTIST_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden bg-white flex items-center">
      {/* Background: Minimalist Chinese Ink/Mist Style */}
      {/* Replaced the previous 'strange' food image with a high-key misty mountain/ink landscape */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_top] opacity-[0.15] mix-blend-multiply pointer-events-none"
        style={{ 
          // Using a subtle misty mountain/ink wash texture
          backgroundImage: 'url(https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2670&auto=format&fit=crop)' 
        }} 
      />
      
      {/* Gradient Mask: Fades the image into pure white at the bottom seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center items-center md:items-start text-ink mt-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
        >
          {/* Seal Logo - Refined for elegance */}
          <div className="w-24 h-24 bg-vermilion shadow-2xl shadow-vermilion/20 flex items-center justify-center shrink-0 rounded-full">
            <span className="font-serif text-white text-5xl font-bold writing-vertical-rl select-none pt-1">
              {ARTIST_INFO.name}
            </span>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-5xl font-serif text-ink tracking-widest font-bold leading-tight">
              {ARTIST_INFO.slogan}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-3">
               <div className="h-[1px] w-8 bg-secondary/30 hidden md:block" />
               <p className="text-xs md:text-sm text-secondary uppercase tracking-[0.3em] font-medium">
                {ARTIST_INFO.title}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;