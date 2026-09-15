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
        viewBox="0 0 760 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
        aria-label="어따써 숯불포차 사천점 로고"
      >
        <defs>
          {/* Subtle drop shadow for depth */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
          </filter>

          {/* Red Seal Box Gradient */}
          <linearGradient id="sealGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          {/* 4 Colored Stepped Palette Bars */}
          <linearGradient id="stepRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>
          <linearGradient id="stepYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="stepGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
          <linearGradient id="stepTeal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#115e59" />
          </linearGradient>

          {/* Fresh Green Dot on '포' */}
          <radialGradient id="greenSproutDot" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#bef264" />
            <stop offset="50%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </radialGradient>
        </defs>

        {/* ========================================================= */}
        {/* LEFT SECTION: [어따써] + [빨간 직인] + [4색 계단 바] + [숯불 꼼장어 전문점] */}
        {/* ========================================================= */}
        <g id="left-section" filter="url(#logoShadow)">
          {/* 어따써 - 원본 캘리그라피와 동일한 검정/먹색 브러시 텍스트 */}
          <text
            x="14"
            y="76"
            fontFamily="'Gaegu', 'Dongle', 'Do Hyeon', 'Noto Sans KR', sans-serif"
            fontSize="68"
            fontWeight="900"
            letterSpacing="-1"
            fill="#ffffff"
            stroke="#1c1917"
            strokeWidth="4"
            paintOrder="stroke fill"
          >
            어따써
          </text>

          {/* 원본의 '써' 위 빨간 직인 낙관 */}
          <g id="seal-stamp" transform="translate(204, 18)">
            <rect
              x="0"
              y="0"
              width="26"
              height="26"
              rx="6"
              fill="url(#sealGrad)"
              stroke="#fca5a5"
              strokeWidth="1.5"
            />
            {/* 직인 안의 하얀 문양 */}
            <path
              d="M13 6 C8 6 6 9.5 6 13 C6 17 9.5 20 13.5 20 C17.5 20 20 17 19.5 13.5 C19 10.5 16.5 9 13.5 9.5 C11 10 9.5 12 10 14 C10.5 15.5 12 16.5 13.5 16 C14.5 15.5 15 14.5 14.5 13.5"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>

          {/* 4색 계단형 팔레트 (빨강 - 주황 - 연두 - 청록) */}
          <g id="stepped-color-bar" transform="translate(14, 94)">
            <path d="M0 6 L44 5 L44 22 L0 23 Z" fill="url(#stepRed)" stroke="#1c1917" strokeWidth="1.5" />
            <path d="M44 5 L88 3 L88 20 L44 22 Z" fill="url(#stepYellow)" stroke="#1c1917" strokeWidth="1.5" />
            <path d="M88 3 Q110 2 136 0 L142 0 L142 17 L88 20 Z" fill="url(#stepGreen)" stroke="#1c1917" strokeWidth="1.5" />
            <path d="M142 7 L190 8 L190 17 L142 17 Z" fill="url(#stepTeal)" stroke="#1c1917" strokeWidth="1.5" />
          </g>

          {/* 하단 설명: 숯불 꼼장어 전문점 */}
          {showSubtitle && (
            <text
              x="22"
              y="142"
              fontFamily="'Pretendard', 'Noto Sans KR', sans-serif"
              fontSize="20"
              fontWeight="800"
              letterSpacing="2.5"
              fill="#e2e8f0"
              stroke="#0f172a"
              strokeWidth="2"
              paintOrder="stroke fill"
            >
              숯불 꼼장어 전문점
            </text>
          )}
        </g>

        {/* ========================================================= */}
        {/* RIGHT SECTION: [숯] [불] [포] [차] + [사천점] 캡슐 */}
        {/* 인위적인 짝대기 없이, 원본 글자 그대로 선명하게 살림 */}
        {/* ========================================================= */}
        <g id="right-section" filter="url(#logoShadow)">
          {/* 1. 숯 : 글씨가 선명하게 또렷이 보이도록 깨끗한 화이트/골드 엣지 적용 */}
          <g id="char-sooth">
            <text
              x="272"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#fbbf24"
              stroke="#1c1917"
              strokeWidth="6"
              paintOrder="stroke fill"
            >
              숯
            </text>
            {/* 안쪽 텍스트를 한 번 더 얹어서 획이 어두운 배경에서도 선명하게 강조 */}
            <text
              x="272"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#ffffff"
            >
              숯
            </text>
            {/* 원본 '숯'의 황금빛 브러시 컬러링 */}
            <text
              x="272"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#f59e0b"
              opacity="0.85"
            >
              숯
            </text>
          </g>

          {/* 2. 불 : '불' 글씨 그대로, 받침 부분의 붉은 불꽃 포인트 */}
          <g id="char-bool">
            <text
              x="396"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#ffffff"
              stroke="#1c1917"
              strokeWidth="6"
              paintOrder="stroke fill"
            >
              불
            </text>
            {/* 하단 붉은 붓터치 강조 */}
            <text
              x="396"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#ef4444"
              clipPath="url(#boolLowerClip2)"
            >
              불
            </text>
            <clipPath id="boolLowerClip2">
              <rect x="390" y="78" width="100" height="60" />
            </clipPath>
          </g>

          {/* 3. 포 : 또렷한 화이트 글씨 + 원본의 초록 열매 포인트 */}
          <g id="char-po">
            <text
              x="512"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#ffffff"
              stroke="#1c1917"
              strokeWidth="6"
              paintOrder="stroke fill"
            >
              포
            </text>
            {/* 초록색 열매/새싹 포인트 */}
            <circle
              cx="548"
              cy="62"
              r="7.5"
              fill="url(#greenSproutDot)"
              stroke="#27272a"
              strokeWidth="1.5"
            />
            <ellipse cx="546" cy="60" rx="2.5" ry="1.5" fill="#f7fee7" />
          </g>

          {/* 4. 차 : 또렷한 화이트 붓글씨 */}
          <g id="char-cha">
            <text
              x="626"
              y="108"
              fontFamily="'Gaegu', 'Black Han Sans', 'Do Hyeon', 'Noto Sans KR', sans-serif"
              fontSize="106"
              fontWeight="900"
              fill="#ffffff"
              stroke="#1c1917"
              strokeWidth="6"
              paintOrder="stroke fill"
            >
              차
            </text>
          </g>

          {/* 5. 사천점 : 원본과 동일한 블랙 알약 캡슐 뱃지 */}
          <g id="branch-badge" transform="translate(562, 126)">
            <rect
              x="0"
              y="0"
              width="134"
              height="38"
              rx="19"
              fill="#09090b"
              stroke="#52525b"
              strokeWidth="2.5"
            />
            <text
              x="67"
              y="25"
              textAnchor="middle"
              fontFamily="'Pretendard', 'Noto Sans KR', sans-serif"
              fontSize="19"
              fontWeight="900"
              letterSpacing="3"
              fill="#ffffff"
            >
              사천점
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
