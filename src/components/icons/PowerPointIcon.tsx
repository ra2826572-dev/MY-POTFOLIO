import React from 'react';

export const PowerPointIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Microsoft PowerPoint"
  >
    <rect x="4" y="6" width="40" height="36" rx="6" fill="#D24726" />
    <path 
      d="M28 14H18C16.8954 14 16 14.8954 16 16V32C16 33.1046 16.8954 34 18 34H28C33.5228 34 38 29.5228 38 24C38 18.4772 33.5228 14 28 14Z" 
      fill="#EB3C00" 
      opacity="0.9"
    />
    <rect x="6" y="10" width="22" height="28" rx="4" fill="#FF8F6B" opacity="0.35" />
    <path 
      d="M20 18H25.5C27.9853 18 30 20.0147 30 22.5C30 24.9853 27.9853 27 25.5 27H23V31H20V18ZM23 24.5H25.2C26.3046 24.5 27.2 23.6046 27.2 22.5C27.2 21.3954 26.3046 20.5 25.2 20.5H23V24.5Z" 
      fill="white" 
    />
  </svg>
);
