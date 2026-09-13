import React from 'react';
import { Flame, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { TASTING_GUIDE } from '../data/restaurantData';

export const TasteGuide: React.FC = () => {
  return (
    <section id="guide" className="py-20 bg-neutral-900/60 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW TO ENJOY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            어따써 숯불구이 <span className="text-amber-400">200% 맛있게 즐기는 팁</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            특대 왕꼼장어의 탱글한 식감과 3색 시즈닝, 향긋한 깻잎 쌈의 감동적인 조화를 느껴보세요.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TASTING_GUIDE.map((guide, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-neutral-950/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-lg group"
            >
              {/* Top Accent */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                    {guide.step}
                  </span>
                  <span className="text-[11px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800">
                    {guide.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2.5 leading-snug">
                  {guide.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {guide.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                <span>어따써 추천 맛팁</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Three Sauce Special Highlight Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              어따써 만의 특제 상차림 포인트
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              취향대로 골라 찍는 3색 파우더 & 소스 트레이
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              테이블마다 제공되는 <strong>고소한 콩가루</strong>, <strong>향긋한 카레가루</strong>, <strong>알싸한 매콤 양념</strong>의 3색 트레이와 참기름 소금장, 양파 소스로 한 점 한 점 색다른 풍미를 즐길 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-amber-200 text-sm font-bold block mb-1">콩가루</span>
              <span className="text-[11px] text-neutral-400">고소함 폭발</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-amber-400 text-sm font-bold block mb-1">카레가루</span>
              <span className="text-[11px] text-neutral-400">감칠맛 업</span>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
              <span className="text-red-400 text-sm font-bold block mb-1">특제 매콤소스</span>
              <span className="text-[11px] text-neutral-400">깔끔한 불맛</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
