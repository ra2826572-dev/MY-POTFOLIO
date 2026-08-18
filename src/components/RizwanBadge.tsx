import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, RefreshCw, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [customBadgeImg, setCustomBadgeImg] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
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
    <div 
      className={`relative aspect-square w-full max-w-[440px] select-none group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Outer ambient gold & neon blue pulsating aura */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-amber-500/30 via-blue-600/30 to-purple-600/30 blur-2xl animate-pulse pointer-events-none" />

      {/* If custom image has been uploaded or set */}
      {customBadgeImg ? (
        <div className="relative w-full h-full rounded-full p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.35),_0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#070A11] relative">
            <img
              src={customBadgeImg}
              alt="Rizwan Ahmad - Custom Emblem Badge"
              className="w-full h-full object-cover object-center"
            />
            {/* Action overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold shadow-lg flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Change Image</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-[11px] text-slate-300 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Standard</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Outer Metallic Double Gold Bezel */
        <div className="relative w-full h-full rounded-full p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_50px_rgba(234,179,8,0.35),_0_20px_40px_rgba(0,0,0,0.9)]">
          
          {/* Inner Gold Inset Rim */}
          <div className="w-full h-full rounded-full p-[4px] bg-[#070A11] relative overflow-hidden">
            
            {/* Inner Golden Ring Border */}
            <div className="absolute inset-[3px] rounded-full border-[2px] border-[#D4AF37]/70 z-20 pointer-events-none shadow-[inset_0_0_15px_rgba(212,175,55,0.4)]" />

            {/* Background Image: Portrait & Workstation */}
            <div className="absolute inset-0 z-0">
              <img
                src={PORTFOLIO_DATA.personal.avatar}
                alt="Rizwan Ahmad - Web Designer & Developer"
                className="w-full h-full object-cover object-[center_20%] scale-105"
              />

              {/* Cinematic dark vignette & lighting gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080F] via-[#06080F]/75 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#06080F]/30 to-[#06080F]/90" />
            </div>

            {/* Top Right Crown & Royal "R" Gold Emblem */}
            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 z-20 flex flex-col items-center">
              {/* Crown */}
              <svg className="w-8 h-6 sm:w-10 sm:h-7 text-[#F5C842] drop-shadow-[0_2px_8px_rgba(245,200,66,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V17H19V19Z" />
              </svg>

              {/* Stylized "R" Monogram */}
              <div className="relative -mt-1 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-[#FFE28A] opacity-90 shadow-[0_0_12px_rgba(255,226,138,0.7)]" />
                <span className="font-black text-2xl sm:text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C0] via-[#E6B830] to-[#8F6A00] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  R
                </span>
              </div>
            </div>

            {/* Bottom Half: 3D Typography & Badges Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-20 pb-5 sm:pb-6 px-4 sm:px-6 flex flex-col items-center text-center">
              
              {/* 3D Embossed "RIZWAN" Heading */}
              <div className="relative mb-0.5">
                <div className="absolute -inset-1 bg-amber-500/20 blur-md rounded-full pointer-events-none" />
                
                <h3 
                  className="relative text-3xl sm:text-4xl lg:text-5xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F4D068] to-[#AA7C11] drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)]"
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    textShadow: '0 2px 0 #785400, 0 4px 10px rgba(0,0,0,0.8)'
                  }}
                >
                  RIZWAN
                </h3>
              </div>

              {/* Gold Subtitle Bar: — WEB DESIGNER & DEVELOPER — */}
              <div className="flex items-center justify-center gap-2 w-full max-w-[320px] my-1">
                <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#F4D068] to-[#F4D068]" />
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#FFE898] whitespace-nowrap drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  WEB DESIGNER & DEVELOPER
                </span>
                <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#F4D068] to-[#F4D068]" />
              </div>

              {/* Sub-tagline: DESIGN • DEVELOP • CREATE */}
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.25em] text-slate-300 mb-2">
                DESIGN <span className="text-[#F4D068] mx-1">•</span> DEVELOP <span className="text-[#F4D068] mx-1">•</span> CREATE
              </p>

              {/* Tech Badges Row */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2 flex-wrap">
                {/* WordPress */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#21759B]/20 border border-[#21759B] flex items-center justify-center shadow-sm" title="WordPress">
                  <span className="text-[11px] sm:text-xs font-black text-[#21759B]">W</span>
                </div>

                {/* Elementor */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#92003B]/20 border border-[#D6336C] flex items-center justify-center shadow-sm" title="Elementor">
                  <span className="text-[10px] sm:text-[11px] font-black text-[#FF6B8B]">IE</span>
                </div>

                {/* HTML5 */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E44D26]/20 border border-[#E44D26] flex items-center justify-center shadow-sm" title="HTML5">
                  <span className="text-[11px] sm:text-xs font-black text-[#E44D26]">5</span>
                </div>

                {/* CSS3 */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#264DE4]/20 border border-[#264DE4] flex items-center justify-center shadow-sm" title="CSS3">
                  <span className="text-[11px] sm:text-xs font-black text-[#38BDF8]">3</span>
                </div>

                {/* JavaScript */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F7DF1E]/20 border border-[#F7DF1E] flex items-center justify-center shadow-sm" title="JavaScript">
                  <span className="text-[9px] sm:text-[10px] font-black text-[#F7DF1E]">JS</span>
                </div>

                {/* React */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00D8FF]/20 border border-[#00D8FF] flex items-center justify-center shadow-sm" title="React">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D8FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>

                {/* Photoshop */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#31A8FF]/20 border border-[#31A8FF] flex items-center justify-center shadow-sm" title="Photoshop">
                  <span className="text-[9px] sm:text-[10px] font-black text-[#31A8FF]">Ps</span>
                </div>
              </div>

              {/* Bottom Quote & Handwritten Golden Signature */}
              <p className="text-[9px] sm:text-[10px] text-slate-300 font-medium italic mb-0.5 max-w-[280px]">
                "Building Modern Websites That Grow Your Business"
              </p>

              <span 
                className="text-sm sm:text-base text-[#F4D068] font-cursive tracking-wider select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{
                  fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif"
                }}
              >
                Rizwan
              </span>

            </div>

            {/* Quick Upload Action Button on Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex flex-col items-center justify-center pointer-events-auto">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-xl flex items-center gap-2 cursor-pointer transform hover:scale-105 transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>Upload Exact Image File</span>
              </button>
              <p className="text-[10px] text-slate-300 mt-2 px-6 text-center">
                Click here to pick your downloaded <code>image.png</code> file
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
