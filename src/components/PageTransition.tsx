import React from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
      }}
      className="w-full flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};
