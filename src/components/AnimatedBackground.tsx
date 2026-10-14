import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 no-print" aria-hidden="true">
      {/* Primary Soft Ambient Glow - Deep Indigo */}
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[140px]"
      />

      {/* Secondary Soft Ambient Glow - Rich Purple */}
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          opacity: [0.10, 0.16, 0.10],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-28 w-[550px] h-[550px] rounded-full bg-purple-600/15 blur-[150px]"
      />

      {/* Subtle Cyan Bottom Glow */}
      <div 
        className="absolute bottom-1/4 -left-28 w-[400px] h-[400px] rounded-full bg-cyan-600/10 blur-[130px] opacity-70"
      />
    </div>
  );
};
