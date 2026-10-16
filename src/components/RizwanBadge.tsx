import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import rizwanPosterImg from '../assets/images/rizwan_poster_emblem_1788178172045.jpg';
import { PORTFOLIO_DATA } from '../portfolioData';

export const RizwanBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt tracking values (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for realistic physical inertia
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });

  // Subtle 3D perspective tilt angles (restrained, elegant: max ~9 deg)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['9deg', '-9deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-9deg', '9deg']);
  
  // Dynamic light sheen position that tracks mouse
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ['10%', '90%']);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ['10%', '90%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`relative aspect-square w-full max-w-[420px] sm:max-w-[460px] select-none cursor-pointer ${className}`}
    >
      {/* 3D Tilted Floating Container */}
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={shouldReduceMotion ? undefined : {
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full relative"
      >
        {/* Soft Golden Ambient Glow */}
        <div 
          className="absolute -inset-6 rounded-full bg-gradient-to-tr from-amber-500/25 via-amber-400/15 to-transparent blur-2xl pointer-events-none transition-opacity duration-500" 
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Outer ambient subtle aura (Blue/Purple depth) */}
        <div 
          className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-amber-500/15 blur-xl pointer-events-none" 
          style={{ transform: 'translateZ(-10px)' }}
        />

        {/* Rotating ambient halo ring */}
        <div 
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400/40 via-blue-500/30 to-purple-500/30 opacity-40 blur-sm pointer-events-none"
          style={{ transform: 'translateZ(5px)' }}
        />

        {/* Outer Metallic Double Gold Bezel */}
        <div 
          className="relative w-full h-full rounded-full p-[5px] sm:p-[6px] bg-gradient-to-tr from-[#FFDF79] via-[#8C6D1F] to-[#FFEAA7] shadow-[0_0_35px_rgba(234,179,8,0.35),_0_25px_50px_rgba(0,0,0,0.85)] transition-shadow duration-300"
          style={{ transform: 'translateZ(15px)' }}
        >
          {/* Inner Gold Inset Rim */}
          <div className="w-full h-full rounded-full p-[2px] bg-[#070A11] relative overflow-hidden group">
            
            {/* Inner Golden Ring Border */}
            <div 
              className="absolute inset-[2px] rounded-full border-[2px] border-[#D4AF37]/80 z-20 pointer-events-none shadow-[inset_0_0_12px_rgba(212,175,55,0.3)]" 
              style={{ transform: 'translateZ(30px)' }}
            />

            {/* High-Resolution Poster Emblem Image */}
            <div 
              className="w-full h-full rounded-full overflow-hidden relative z-10"
              style={{ transform: 'translateZ(20px)' }}
            >
              <img
                src={rizwanPosterImg || PORTFOLIO_DATA.personal.avatar}
                alt="Rizwan Ahmad - Web Designer & Developer"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Interactive 3D Specular Light Reflection Sheen */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/12 to-transparent pointer-events-none z-30"
              style={{
                backgroundPosition: `${sheenX} ${sheenY}`,
                opacity: 0.6,
                transform: 'translateZ(35px)',
              }}
            />

          </div>
        </div>

      </motion.div>
    </div>
  );
};
