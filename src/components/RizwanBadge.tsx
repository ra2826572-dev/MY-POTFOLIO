import React from 'react';
import { motion } from 'motion/react';
import rizwanPosterImg from '../assets/images/rizwan_poster_emblem_1788178172045.jpg';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div 
      animate={{
        y: [0, -9, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`relative aspect-square w-full max-w-[420px] sm:max-w-[460px] select-none ${className}`}
    >
      
      {/* Outer ambient gold & neon blue pulsating aura with rotating gradient */}
      <motion.div 
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-5 rounded-full bg-gradient-to-tr from-amber-500/35 via-blue-600/35 to-purple-600/35 blur-2xl pointer-events-none" 
      />

      {/* Rotating ambient halo ring */}
      <div 
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-blue-500 to-purple-500 opacity-40 blur-sm pointer-events-none"
      />

      {/* Outer Metallic Double Gold Bezel */}
      <div className="relative w-full h-full rounded-full p-[5px] sm:p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.45),_0_20px_50px_rgba(0,0,0,0.95)]">
        
        {/* Inner Gold Inset Rim */}
        <div className="w-full h-full rounded-full p-[2px] bg-[#070A11] relative overflow-hidden group">
          
          {/* Inner Golden Ring Border */}
          <div className="absolute inset-[2px] rounded-full border-[2px] border-[#D4AF37]/80 z-20 pointer-events-none shadow-[inset_0_0_15px_rgba(212,175,55,0.4)]" />

          {/* High-Resolution Poster Emblem Image */}
          <div className="w-full h-full rounded-full overflow-hidden relative z-10">
            <img
              src={rizwanPosterImg || PORTFOLIO_DATA.personal.avatar}
              alt="Rizwan Ahmad - Web Designer & Developer"
              className="w-full h-full object-cover object-center scale-100 group-hover:scale-106 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Subtle light sweep shimmer overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-20 pointer-events-none" />

        </div>
      </div>

    </motion.div>
  );
};
