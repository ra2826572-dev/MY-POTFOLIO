import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none no-print">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left shadow-[0_0_12px_rgba(99,102,241,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
