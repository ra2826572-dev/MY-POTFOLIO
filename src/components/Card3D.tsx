import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt in degrees, default 6
  liftOnHover?: number; // y lift in pixels, default -6
  onClick?: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 6,
  liftOnHover = -6,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized coordinates from -0.5 to 0.5
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;

    // RotateX is driven by Y position, RotateY by X position
    setRotateX(-normY * maxTilt);
    setRotateY(normX * maxTilt);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ perspective: 1000 }}
      className={`relative h-full ${className}`}
    >
      <motion.div
        animate={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          y: isHovered && !shouldReduceMotion ? liftOnHover : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 24,
          mass: 0.8,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};
