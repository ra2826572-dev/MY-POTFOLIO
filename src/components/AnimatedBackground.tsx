import React from 'react';
import { motion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 no-print" aria-hidden="true">
      {/* Primary Floating Orb - Deep Blue */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]"
      />

      {/* Secondary Floating Orb - Rich Purple */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      {/* Tertiary Floating Orb - Subtle Emerald / Cyan */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 35, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 -left-28 w-[450px] h-[450px] rounded-full bg-cyan-500/8 blur-[120px]"
      />

      {/* Quaternary Floating Orb - Warm Amber Accent */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 35, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-24 right-1/3 w-[400px] h-[400px] rounded-full bg-amber-500/6 blur-[130px]"
      />

      {/* Gentle Constellation Twinkle Dust Particles */}
      <div className="absolute inset-0 opacity-[0.4]">
        {[
          { top: '15%', left: '12%', size: 'w-1 h-1', delay: 0 },
          { top: '28%', left: '84%', size: 'w-1.5 h-1.5', delay: 1.2 },
          { top: '45%', left: '22%', size: 'w-1 h-1', delay: 2.5 },
          { top: '62%', left: '76%', size: 'w-1 h-1', delay: 0.8 },
          { top: '78%', left: '18%', size: 'w-1.5 h-1.5', delay: 1.9 },
          { top: '88%', left: '88%', size: 'w-1 h-1', delay: 3.1 },
          { top: '35%', left: '48%', size: 'w-1 h-1', delay: 2.1 },
          { top: '70%', left: '42%', size: 'w-1.5 h-1.5', delay: 1.5 },
        ].map((star, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${star.size} rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,0.8)]`}
            style={{ top: star.top, left: star.left }}
            animate={{
              opacity: [0.2, 0.85, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
