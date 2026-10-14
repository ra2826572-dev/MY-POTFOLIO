import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import rizwanPosterImg from '../assets/images/rizwan_poster_emblem_1788178172045.jpg';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      animate={shouldReduceMotion ? undefined : {
        y: [0, -5, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative aspect-square w-full max-w-[420px] sm:max-w-[460px] select-none ${className}`}
    >
      {/* Outer ambient subtle aura */}
      <div 
        className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/20 via-blue-600/20 to-purple-600/20 blur-2xl pointer-events-none" 
      />

      {/* Rotating ambient halo ring */}
      <div 
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-blue-500 to-purple-500 opacity-30 blur-sm pointer-events-none"
      />

      {/* Outer Metallic Double Gold Bezel */}
      <div className="relative w-full h-full rounded-full p-[5px] sm:p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_35px_rgba(234,179,8,0.35),_0_20px_40px_rgba(0,0,0,0.9)]">
        
        {/* Inner Gold Inset Rim */}
        <div className="w-full h-full rounded-full p-[2px] bg-[#070A11] relative overflow-hidden group">
          
          {/* Inner Golden Ring Border */}
          <div className="absolute inset-[2px] rounded-full border-[2px] border-[#D4AF37]/80 z-20 pointer-events-none shadow-[inset_0_0_12px_rgba(212,175,55,0.3)]" />

          {/* High-Resolution Poster Emblem Image */}
          <div className="w-full h-full rounded-full overflow-hidden relative z-10">
            <img
              src={rizwanPosterImg || PORTFOLIO_DATA.personal.avatar}
              alt="Rizwan Ahmad - Web Designer & Developer"
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtle light sweep shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-20 pointer-events-none" />

        </div>
      </div>

    </motion.div>
  );
};
