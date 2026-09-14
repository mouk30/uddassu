import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'h-10 w-auto',
  showSubtitle = true,
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 680 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
        aria-label="어따써 숯불포차 로고"
      >
        <defs>
          {/* Cyan Glow Filter */}
          <filter id="cyanNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#06b6d4" floodOpacity="0.75" />
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.6" />
          </filter>

          {/* Orange Glow Filter */}
          <filter id="orangeNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#f97316" floodOpacity="0.7" />
          </filter>

          {/* General 3D Drop Shadow */}
          <filter id="solidShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.8" />
          </filter>

          {/* Text Gradients */}
          {/* 어따써 Gradient */}
          <linearGradient id="eottaTextGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* 숯 Gradient (Deep Cobalt to Electric Blue) */}
          <linearGradient id="soothCharGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="25%" stopColor="#60a5fa" />
            <stop offset="65%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          {/* 불 Gradient (Luminous Electric Cyan/Aqua) */}
          <linearGradient id="boolCharGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="35%" stopColor="#22d3ee" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* 포 Gradient (Platinum White) */}
          <linearGradient id="poCharGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="80%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          {/* 차 Gradient (Warm White to Coral Orange) */}
          <linearGradient id="chaCharGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>

          {/* Swirl Badge Gradients */}
          <linearGradient id="swirlBoxGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#083344" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="swirlLineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="50%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          {/* 5-Color Bar Segments */}
          <linearGradient id="bar1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="bar2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="bar3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#6b21a8" />
          </linearGradient>
          <linearGradient id="bar4" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#86198f" />
            <stop offset="100%" stopColor="#c026d3" />
          </linearGradient>
          <linearGradient id="bar5" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          {/* Purple Gem Gradient for 포 */}
          <radialGradient id="purpleGemGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="30%" stopColor="#c084fc" />
            <stop offset="75%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#6b21a8" />
          </radialGradient>

          {/* Orange Spark Gradient for 차 */}
          <radialGradient id="orangeSparkGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="40%" stopColor="#fb923c" />
            <stop offset="85%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>
        </defs>

        {/* ========================================================= */}
        {/* LEFT BLOCK: [어따써] + [회오리 엠블럼] + [5색 바] + [서브타이틀] */}
        {/* ========================================================= */}
        <g id="left-block" filter="url(#solidShadow)">
          {/* 어따써 Main Text (Enlarged, Extra Bold, Crystal Clear) */}
          <text
            x="8"
            y="54"
            fontFamily="'Do Hyeon', 'Black Han Sans', 'Noto Sans KR', sans-serif"
            fontSize="54"
            fontWeight="900"
            letterSpacing="2"
            fill="url(#eottaTextGrad)"
            stroke="#090d16"
            strokeWidth="3.5"
            paintOrder="stroke fill"
          >
            어따써
          </text>

          {/* Swirl Badge (Top-Right of 어따써) */}
          <g id="swirl-badge" transform="translate(198, 14)">
            <rect
              x="0"
              y="0"
              width="32"
              height="32"
              rx="8"
              fill="url(#swirlBoxGrad)"
              stroke="#22d3ee"
              strokeWidth="1.8"
            />
            {/* Swirl Vortex */}
            <path
              d="M16 7 C10 7 6.5 11 6.5 16 C6.5 21.5 11 25.5 16.5 25.5 C21.5 25.5 24.5 22 24 17 C23.5 13 20 11 16.5 11.5 C13.5 12 11.5 14.5 12 17 C12.5 19.5 14.5 20.5 16.5 20 C18 19.5 19 18 18.5 16.5 C18 15.5 17 15 16 15.5"
              fill="none"
              stroke="url(#swirlLineGrad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="1.5" fill="#ffffff" />
          </g>

          {/* 5-Color Brush Palette Bar (Enlarged & Vivid) */}
          <g id="five-color-bar" transform="translate(8, 66)">
            {/* Shadow Base */}
            <rect x="0" y="0" width="224" height="13" rx="3" fill="#090d16" />
            {/* 5 Segments */}
            <rect x="0" y="0" width="46" height="12" rx="3" fill="url(#bar1)" />
            <rect x="44" y="0" width="46" height="12" fill="url(#bar2)" />
            <rect x="88" y="0" width="46" height="12" fill="url(#bar3)" />
            <rect x="132" y="0" width="46" height="12" fill="url(#bar4)" />
            <path
              d="M176 0 L220 0 Q225 0 224 6 Q223 12 218 12 L176 12 Z"
              fill="url(#bar5)"
            />
            {/* Texture light lines on bar */}
            <line x1="20" y1="2.5" x2="40" y2="2.5" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
            <line x1="95" y1="2.5" x2="120" y2="2.5" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.4" strokeLinecap="round" />
            <line x1="185" y1="2.5" x2="215" y2="2.5" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
          </g>

          {/* Subtitle: 숯불 꼼장어 전문점 */}
          {showSubtitle && (
            <text
              x="10"
              y="102"
              fontFamily="'Pretendard', 'Noto Sans KR', sans-serif"
              fontSize="16"
              fontWeight="800"
              letterSpacing="3.5"
              fill="#e2e8f0"
              stroke="#090d16"
              strokeWidth="2"
              paintOrder="stroke fill"
            >
              숯불 꼼장어 전문점
            </text>
          )}
        </g>

        {/* ========================================================= */}
        {/* RIGHT BLOCK: [숯] [불] [포] [차] - Enlarged, 100% Legible */}
        {/* ========================================================= */}
        <g id="right-block" filter="url(#solidShadow)">
          {/* 1. 숯 (Deep Royal Blue to Electric Blue with ㅊ 받침) */}
          <g id="char-sooth-unit">
            <text
              x="255"
              y="82"
              fontFamily="'Do Hyeon', 'Black Han Sans', 'Noto Sans KR', sans-serif"
              fontSize="84"
              fontWeight="900"
              fill="url(#soothCharGrad)"
              stroke="#091428"
              strokeWidth="5"
              paintOrder="stroke fill"
            >
              숯
            </text>
            {/* Light streak highlight across the middle horizontal stroke of 숯 */}
            <path
              d="M266 52 Q285 50 318 52"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
          </g>

          {/* 2. 불 (Vivid Electric Cyan Turquoise Centerpiece) */}
          <g id="char-bool-unit" filter="url(#cyanNeonGlow)">
            <text
              x="362"
              y="82"
              fontFamily="'Do Hyeon', 'Black Han Sans', 'Noto Sans KR', sans-serif"
              fontSize="84"
              fontWeight="900"
              fill="url(#boolCharGrad)"
              stroke="#082838"
              strokeWidth="5"
              paintOrder="stroke fill"
            >
              불
            </text>
            {/* Gloss highlight on ㅂ */}
            <path
              d="M374 24 L374 48"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
          </g>

          {/* 3. 포 (Crisp White with Signature Purple Gem inside ㅍ) */}
          <g id="char-po-unit">
            <text
              x="470"
              y="82"
              fontFamily="'Do Hyeon', 'Black Han Sans', 'Noto Sans KR', sans-serif"
              fontSize="84"
              fontWeight="900"
              fill="url(#poCharGrad)"
              stroke="#0f172a"
              strokeWidth="5"
              paintOrder="stroke fill"
            >
              포
            </text>
            {/* Iconic Purple Jewel inside ㅍ */}
            <g id="purple-gem" transform="translate(506, 33)">
              <circle
                cx="0"
                cy="0"
                r="8"
                fill="url(#purpleGemGrad)"
                stroke="#c084fc"
                strokeWidth="1.8"
              />
              <circle cx="-2.5" cy="-2.5" r="2.2" fill="#ffffff" />
            </g>
          </g>

          {/* 4. 차 (Warm Crisp White with Flame Orange Accent on ㅊ) */}
          <g id="char-cha-unit">
            <text
              x="575"
              y="82"
              fontFamily="'Do Hyeon', 'Black Han Sans', 'Noto Sans KR', sans-serif"
              fontSize="84"
              fontWeight="900"
              fill="url(#chaCharGrad)"
              stroke="#18120c"
              strokeWidth="5"
              paintOrder="stroke fill"
            >
              차
            </text>
            {/* Flame Orange Spark on top of ㅊ */}
            <g id="orange-spark" transform="translate(607, 16)" filter="url(#orangeNeonGlow)">
              <circle
                cx="0"
                cy="0"
                r="7"
                fill="url(#orangeSparkGrad)"
                stroke="#fed7aa"
                strokeWidth="1.5"
              />
              <path
                d="M-2 -2 Q0 -6 2 -2 Q5 2 0 4 Q-4 2 -2 -2 Z"
                fill="#ffffff"
                opacity="0.9"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
