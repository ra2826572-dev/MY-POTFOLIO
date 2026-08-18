import React, { useState, useEffect, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [customBadgeImg, setCustomBadgeImg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('rizwan_custom_badge_img');
    if (saved) {
      setCustomBadgeImg(saved);
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomBadgeImg(result);
        localStorage.setItem('rizwan_custom_badge_img', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomBadgeImg(null);
    localStorage.removeItem('rizwan_custom_badge_img');
  };

  return (
    <div className={`relative aspect-square w-full max-w-[420px] sm:max-w-[460px] select-none group ${className}`}>
      
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Outer ambient gold & neon blue pulsating aura */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/25 via-blue-600/25 to-purple-600/25 blur-2xl animate-pulse pointer-events-none" />

      {/* If custom image has been selected */}
      {customBadgeImg ? (
        <div className="relative w-full h-full rounded-full p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.35),_0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#070A11] relative">
            <img
              src={customBadgeImg}
              alt="Rizwan Ahmad - Web Designer & Developer"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ) : (
        /* Outer Metallic Double Gold Bezel */
        <div className="relative w-full h-full rounded-full p-[6px] sm:p-[7px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.4),_0_20px_50px_rgba(0,0,0,0.95)]">
          
          {/* Inner Gold Inset Rim */}
          <div className="w-full h-full rounded-full p-[3px] bg-[#070A11] relative overflow-hidden">
            
            {/* Inner Golden Ring Border */}
            <div className="absolute inset-[3px] rounded-full border-[2px] border-[#D4AF37]/80 z-20 pointer-events-none shadow-[inset_0_0_15px_rgba(212,175,55,0.4)]" />

            {/* Background Image: Portrait & Workstation */}
            <div className="absolute inset-0 z-0">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt="Rizwan Ahmad - Web Designer & Developer"
                className="w-full h-full object-cover object-[center_18%] scale-105"
              />

              {/* Cinematic dark vignette & lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/70 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#06080F]/20 to-[#06080F]/90" />
            </div>

            {/* Top Right Crown & Royal "R" Gold Emblem */}
            <div className="absolute top-7 right-7 sm:top-9 sm:right-9 z-20 flex flex-col items-center">
              {/* Crown */}
              <svg className="w-7 h-5 sm:w-9 sm:h-6 text-[#F5C842] drop-shadow-[0_2px_8px_rgba(245,200,66,0.85)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
              </svg>

              {/* Stylized "R" Monogram with Golden Ribbon Ring */}
              <div className="relative -mt-0.5 w-11 h-11 sm:w-13 sm:h-13 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-[#FFE28A] opacity-90 shadow-[0_0_14px_rgba(255,226,138,0.75)]" />
                <span className="font-black text-2xl sm:text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C0] via-[#E6B830] to-[#8F6A00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  R
                </span>
              </div>
            </div>

            {/* Bottom Half: 3D Typography & Badges Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 pb-4 sm:pb-5 px-3 sm:px-5 flex flex-col items-center text-center">
              
              {/* 3D Embossed "RIZWAN" Heading */}
              <div className="relative mb-0.5">
                <div className="absolute -inset-1 bg-amber-500/25 blur-md rounded-full pointer-events-none" />
                
                <h3 
                  className="relative text-3xl sm:text-4xl lg:text-[42px] font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4D068] to-[#AA7C11] drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] leading-tight"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    textShadow: '0 2px 0 #785400, 0 4px 10px rgba(0,0,0,0.8)'
                  }}
                >
                  RIZWAN
                </h3>
              </div>

              {/* Gold Subtitle Bar: — WEB DESIGNER & DEVELOPER — */}
              <div className="flex items-center justify-center gap-1.5 w-full max-w-[300px] sm:max-w-[330px] my-0.5">
                <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#F4D068] to-[#F4D068]" />
                <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#FFE898] whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  WEB DESIGNER & DEVELOPER
                </span>
                <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#F4D068] to-[#F4D068]" />
              </div>

              {/* Sub-tagline: DESIGN • DEVELOP • CREATE */}
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.22em] text-slate-300 mb-1.5">
                DESIGN <span className="text-[#F4D068] mx-0.5">•</span> DEVELOP <span className="text-[#F4D068] mx-0.5">•</span> CREATE
              </p>

              {/* Tech Badges Row */}
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 mb-1.5 flex-wrap">
                {/* WordPress */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#21759B]/25 border border-[#21759B] flex items-center justify-center shadow-sm" title="WordPress">
                  <span className="text-[10px] sm:text-xs font-black text-[#21759B]">W</span>
                </div>

                {/* Elementor */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#92003B]/25 border border-[#D6336C] flex items-center justify-center shadow-sm" title="Elementor">
                  <span className="text-[9px] sm:text-[10px] font-black text-[#FF6B8B]">IE</span>
                </div>

                {/* HTML5 */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#E44D26]/25 border border-[#E44D26] flex items-center justify-center shadow-sm" title="HTML5">
                  <span className="text-[10px] sm:text-xs font-black text-[#E44D26]">5</span>
                </div>

                {/* CSS3 */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#264DE4]/25 border border-[#264DE4] flex items-center justify-center shadow-sm" title="CSS3">
                  <span className="text-[10px] sm:text-xs font-black text-[#38BDF8]">3</span>
                </div>

                {/* JavaScript */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F7DF1E]/25 border border-[#F7DF1E] flex items-center justify-center shadow-sm" title="JavaScript">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#F7DF1E]">JS</span>
                </div>

                {/* React */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#00D8FF]/25 border border-[#00D8FF] flex items-center justify-center shadow-sm" title="React">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>

                {/* Photoshop */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#31A8FF]/25 border border-[#31A8FF] flex items-center justify-center shadow-sm" title="Photoshop">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#31A8FF]">Ps</span>
                </div>
              </div>

              {/* Bottom Quote & Handwritten Golden Signature */}
              <p className="text-[8px] sm:text-[9px] text-slate-300 font-medium italic mb-0.5 max-w-[260px] sm:max-w-[290px]">
                "Building Modern Websites That Grow Your Business"
              </p>

              <span 
                className="text-xs sm:text-sm text-[#F4D068] font-cursive tracking-wider select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{
                  fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif"
                }}
              >
                Rizwan
              </span>

            </div>

          </div>
        </div>
      )}

      {/* Discreet Camera button in top-left corner on hover if they want to swap */}
      <div className="absolute top-2 left-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 rounded-full bg-slate-900/90 hover:bg-blue-600 border border-slate-700 text-slate-300 hover:text-white shadow-lg backdrop-blur-md transition-all cursor-pointer"
          title="Upload or change image"
        >
          <Camera className="w-3.5 h-3.5" />
        </button>
        {customBadgeImg && (
          <button
            type="button"
            onClick={handleReset}
            className="p-2 rounded-full bg-slate-900/90 hover:bg-red-600 border border-slate-700 text-slate-300 hover:text-white shadow-lg backdrop-blur-md transition-all cursor-pointer"
            title="Reset to default badge"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
