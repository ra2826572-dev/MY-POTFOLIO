import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export const AnimatedBackground: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Subtle restrained floating particles for 3D depth
  const particles = [
    { id: 1, x: '12%', y: '25%', size: 4, duration: 18, delay: 0 },
    { id: 2, x: '85%', y: '18%', size: 5, duration: 22, delay: 2 },
    { id: 3, x: '70%', y: '65%', size: 4, duration: 20, delay: 4 },
    { id: 4, x: '22%', y: '75%', size: 3, duration: 24, delay: 1 },
    { id: 5, x: '48%', y: '88%', size: 4, duration: 19, delay: 3 },
  ];

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

      {/* Very Restrained Floating Particles for Depth */}
      {!shouldReduceMotion && particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20 blur-[0.5px]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
