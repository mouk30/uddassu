import React from 'react';
import { Flame, Phone, Calendar, ArrowDown, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_charcoal_eel_1789293432554.jpg"
          alt="어따써 숯불포차 참숯 꼼장어 직화구이"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000 filter brightness-60 contrast-110"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/60" />
        <div className="absolute inset-0 bg-radial-at-center from-amber-500/10 via-transparent to-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Official Brand Logo */}
        <div className="mb-5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-md shadow-2xl">
          <BrandLogo className="h-12 sm:h-16 w-auto max-w-[280px] sm:max-w-[360px]" />
        </div>

        {/* Top Eyebrow Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg shadow-amber-950/20"
        >
          <Flame className="w-4 h-4 text-orange-400" />
          <span>청주 사천동 숯불 꼼장어 & 특수부위 전문점</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight mb-6">
          참숯 불향에 터지는 쫄깃함, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
            진짜 왕꼼장어의 맛
          </span>
          을 만나다
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
          당일 엄선한 통통한 특대형 <strong>왕꼼장어</strong>, 육즙 가득한 명품 뒷고기 <strong>허겁살</strong>,
          그리고 시원한 <strong>살얼음 빙소면</strong>과 구수한 <strong>청국장술밥</strong>까지.
          사천동 주민과 단골들이 입을 모아 극찬하는 참숯 포차입니다.
        </p>

        {/* 4 Highlight Bullets (2줄 + 2줄 구성) */}
        <div className="w-full max-w-2xl mx-auto mb-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-200">
            {/* Row 1 - 1: 1인분 200g 넉넉한 정량 원칙 */}
            <div className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-900/85 border border-neutral-800/90 backdrop-blur-md shadow-sm hover:border-amber-500/40 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">1인분 200g 넉넉한 정량 원칙</span>
            </div>

            {/* Row 1 - 2: 3 ~ 4인 800g 세트 A·B (65,000원~) */}
            <div className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-900/85 border border-neutral-800/90 backdrop-blur-md shadow-sm hover:border-amber-500/40 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-medium">3 ~ 4인 800g 세트 A·B (65,000원~)</span>
            </div>

            {/* Row 2 - 1: 월~토 16:00~24:00 영업 (일요일 정기휴무) - 핵심 강조 (금색 글씨체) */}
            <div className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-900/95 border border-amber-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.12)] hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.22)] transition-all">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-amber-300 text-[13px] sm:text-sm tracking-tight">
                월~토 16:00~24:00 영업 (일요일 정기휴무)
              </span>
            </div>

            {/* Row 2 - 2: 충청북도 청주시 청원구 율봉로 11, 1층 - 핵심 강조 (금색 글씨체) */}
            <div className="flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-900/95 border border-amber-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.12)] hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.22)] transition-all">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-amber-300 text-[13px] sm:text-sm tracking-tight whitespace-nowrap sm:whitespace-normal">
                {STORE_INFO.address}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mb-12">
          {/* 오늘 자리 예약 / 단체 문의 */}
          <button
            id="hero-reserve-cta"
            onClick={onOpenReservation}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 hover:from-amber-400 hover:to-orange-500 text-neutral-950 font-bold text-base shadow-xl shadow-orange-950/40 hover:shadow-orange-700/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-neutral-950" />
            <span>오늘 자리 예약 / 단체 문의</span>
          </button>

          {/* 전화 바로걸기 (금색 호버링 적용) */}
          <a
            id="hero-call-cta"
            href={`tel:${STORE_INFO.phone}`}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900/90 border border-neutral-700 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_22px_rgba(245,158,11,0.35)] transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
            <span>전화 바로걸기</span>
          </a>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="text-amber-400 font-bold text-lg mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              왕꼼장어 전문
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              두툼하고 통통한 특대형 꼼장어만 고집하여 비린내 없는 쫄깃함
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="text-orange-400 font-bold text-lg mb-1 flex items-center gap-1.5">
              <Flame className="w-4 h-4" />
              100% 참숯 화로
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              센 화력의 참숯 직화로 겉은 바삭, 속은 촉촉한 훈연 육즙
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="text-amber-300 font-bold text-lg mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              특수부위 허겁살
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              도축업자가 뒤로 챙겨 먹었다는 명품 뒷고기 & 통갈매기 지겁살
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-sm hover:border-amber-500/40 transition-colors">
            <div className="text-red-400 font-bold text-lg mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              살얼음 빙소면 & 술밥
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              구수한 청국장술밥과 머리끝까지 시원한 빙소면의 완벽한 마무리
            </p>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center gap-1 text-xs text-neutral-500 hover:text-amber-400 transition-colors"
        >
          <span>어따써의 맛있는 이야기</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-500/70" />
        </a>
      </div>
    </section>
  );
};
