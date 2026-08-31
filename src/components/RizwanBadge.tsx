import React from 'react';
import rizwanPosterImg from '../assets/images/rizwan_poster_emblem_1788178172045.jpg';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative aspect-square w-full max-w-[420px] sm:max-w-[460px] select-none ${className}`}>
      
      {/* Outer ambient gold & neon blue pulsating aura */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/30 via-blue-600/30 to-purple-600/30 blur-2xl animate-pulse pointer-events-none" />

      {/* Outer Metallic Double Gold Bezel */}
      <div className="relative w-full h-full rounded-full p-[5px] sm:p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.45),_0_20px_50px_rgba(0,0,0,0.95)]">
        
        {/* Inner Gold Inset Rim */}
        <div className="w-full h-full rounded-full p-[2px] bg-[#070A11] relative overflow-hidden">
          
          {/* Inner Golden Ring Border */}
          <div className="absolute inset-[2px] rounded-full border-[2px] border-[#D4AF37]/80 z-20 pointer-events-none shadow-[inset_0_0_15px_rgba(212,175,55,0.4)]" />

          {/* High-Resolution Poster Emblem Image */}
          <div className="w-full h-full rounded-full overflow-hidden relative z-10">
            <img
              src={rizwanPosterImg || PORTFOLIO_DATA.personal.avatar}
              alt="Rizwan Ahmad - Web Designer & Developer"
              className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>

    </div>
  );
};
