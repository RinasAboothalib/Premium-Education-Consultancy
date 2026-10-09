import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'auto',
  showTagline = true
}) => {
  const isLight = variant === 'light'; // Light text on dark bg

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Brand Emblem */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Shield / Geometric Foundation */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill={isLight ? '#FFFFFF' : '#0B2545'}
            className="transition-colors"
          />
          
          {/* Subtle Accent Glow Ring */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            stroke="#F59E0B"
            strokeWidth="2.5"
            strokeOpacity="0.4"
          />

          {/* Stylized Modern Academic Cap & Upward Arrow Crest */}
          {/* Graduation Cap Diamond */}
          <path
            d="M50 24L78 39L50 54L22 39L50 24Z"
            fill="#F59E0B"
          />
          
          {/* Cap Lower Base / Arch */}
          <path
            d="M32 46.5V60C32 68 40 73 50 73C60 73 68 68 68 60V46.5L50 56.5L32 46.5Z"
            fill={isLight ? '#0B2545' : '#1D4ED8'}
          />

          {/* Upward Dynamic Pathway Arrow */}
          <path
            d="M50 48L62 38H54V24H46V38H38L50 48Z"
            fill="#FFFFFF"
          />

          {/* Golden Tassel Accent */}
          <circle cx="78" cy="40" r="3" fill="#F59E0B" />
          <path d="M78 40V58" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography Brand Lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-lg sm:text-xl font-extrabold tracking-tight leading-none ${
              isLight ? 'text-white' : 'text-[#0B2545]'
            }`}
          >
            PREMIUM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
        </div>
        
        {showTagline && (
          <span
            className={`text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider leading-tight mt-0.5 ${
              isLight ? 'text-blue-200' : 'text-[#1D4ED8]'
            }`}
          >
            Education Consultancy
          </span>
        )}
      </div>
    </div>
  );
};
