import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'auto',
  showTagline = true,
  size = 'md'
}) => {
  const isLight = variant === 'light'; // Light text on dark background

  // Dimension scaling
  const sizeMap = {
    sm: { emblem: 'w-9 h-9', text: 'text-base sm:text-lg', subtext: 'text-[9px] sm:text-[10px]' },
    md: { emblem: 'w-11 h-11 sm:w-12 sm:h-12', text: 'text-lg sm:text-xl', subtext: 'text-[10px] sm:text-[11px]' },
    lg: { emblem: 'w-14 h-14 sm:w-16 sm:h-16', text: 'text-xl sm:text-2xl', subtext: 'text-xs' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Original Circular Seal / Emblem with Classical Column & Stars */}
      <div className={`relative ${currentSize.emblem} shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-xs`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Top Text Path (clockwise around center) */}
            <path id="logo-top-arc-path" d="M 22,100 A 78,78 0 1,1 178,100" fill="none" />
            {/* Bottom Text Path (clockwise around bottom) */}
            <path id="logo-bottom-arc-path" d="M 172,104 A 74,74 0 0,1 28,104" fill="none" />
          </defs>

          {/* Outer Deep Navy Circular Base */}
          <circle cx="100" cy="100" r="98" fill="#0D3559" />

          {/* Outer White Concentric Ring */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />

          {/* Inner White Framing Ring for Circular Text */}
          <circle cx="100" cy="100" r="70" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />

          {/* Side Accent Arc Dividers */}
          <path d="M 12,100 A 88,88 0 0,1 16,74" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 188,100 A 88,88 0 0,0 184,74" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 12,100 A 88,88 0 0,0 16,126" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 188,100 A 88,88 0 0,1 184,126" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Arched Text: PREMIUM EDUCATION */}
          <text fill="#FFFFFF" fontFamily="'Inter', system-ui, -apple-system, sans-serif" fontSize="13.8" fontWeight="800" letterSpacing="2.6">
            <textPath href="#logo-top-arc-path" startOffset="50%" textAnchor="middle">
              PREMIUM EDUCATION
            </textPath>
          </text>

          {/* Arched Text: CONSULTANCY */}
          <text fill="#FFFFFF" fontFamily="'Inter', system-ui, -apple-system, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="4.2">
            <textPath href="#logo-bottom-arc-path" startOffset="50%" textAnchor="middle">
              CONSULTANCY
            </textPath>
          </text>

          {/* Center White Medallion Disc */}
          <circle cx="100" cy="100" r="66" fill="#FFFFFF" />

          {/* Dotted Beaded Ring inside White Medallion */}
          <circle cx="100" cy="100" r="60.5" fill="none" stroke="#0D3559" strokeWidth="2.2" strokeDasharray="1.5 5" strokeLinecap="round" />

          {/* Inner Thin Border Ring */}
          <circle cx="100" cy="100" r="54.5" fill="none" stroke="#0D3559" strokeWidth="0.8" />

          {/* Three Navy Stars */}
          {/* Center Star */}
          <polygon points="100,56 102.5,63.5 110.5,63.5 104,68.5 106.5,76 100,71.5 93.5,76 96,68.5 89.5,63.5 97.5,63.5" fill="#0D3559" />
          {/* Left Star */}
          <g transform="translate(80, 64) rotate(-16)">
            <polygon points="0,-7.5 2,-2 7.5,-2 3,1.5 5,7 0,3.5 -5,7 -3,1.5 -7.5,-2 -2,-2" fill="#0D3559" />
          </g>
          {/* Right Star */}
          <g transform="translate(120, 64) rotate(16)">
            <polygon points="0,-7.5 2,-2 7.5,-2 3,1.5 5,7 0,3.5 -5,7 -3,1.5 -7.5,-2 -2,-2" fill="#0D3559" />
          </g>

          {/* Classical Temple Pediment & Ionic Column */}
          {/* Triangular Roof Pediment */}
          <path d="M 75 96 L 100 87 L 125 96 Z" fill="#0D3559" />
          {/* Architrave beam */}
          <rect x="74" y="97.5" width="52" height="3" fill="#0D3559" />

          {/* Ionic Capital Scrolls */}
          <path d="M 72 108 C 67 108 67 101 74 101 C 80 101 80 106 75 106 C 73 106 72 105 72 104" fill="none" stroke="#0D3559" strokeWidth="3" strokeLinecap="round" />
          <path d="M 128 108 C 133 108 133 101 126 101 C 120 101 120 106 125 106 C 127 106 128 105 128 104" fill="none" stroke="#0D3559" strokeWidth="3" strokeLinecap="round" />
          <rect x="75" y="103" width="50" height="4" rx="1.5" fill="#0D3559" />

          {/* 3 Vertical Fluted Pillars */}
          <rect x="83.5" y="112" width="6.5" height="36" fill="#0D3559" />
          <rect x="96.75" y="112" width="6.5" height="36" fill="#0D3559" />
          <rect x="110" y="112" width="6.5" height="36" fill="#0D3559" />

          {/* Sturdy Column Pedestal */}
          <rect x="79" y="148" width="42" height="3.5" fill="#0D3559" />
          <rect x="74" y="152" width="52" height="4" fill="#0D3559" />
          <line x1="68" y1="158" x2="132" y2="158" stroke="#0D3559" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Typography Brand Lockup: EDUCATION has same exact style as PREMIUM */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`${currentSize.text} font-extrabold tracking-tight ${
              isLight ? 'text-white' : 'text-[#0D3559]'
            }`}
          >
            PREMIUM
          </span>
          <span
            className={`${currentSize.text} font-extrabold tracking-tight ${
              isLight ? 'text-white' : 'text-[#0D3559]'
            }`}
          >
            EDUCATION
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" aria-hidden="true" />
        </div>

        {showTagline && (
          <span
            className={`${currentSize.subtext} font-bold uppercase tracking-widest mt-1 ${
              isLight ? 'text-amber-400' : 'text-[#1D4ED8]'
            }`}
          >
            Consultancy
          </span>
        )}
      </div>
    </div>
  );
};
