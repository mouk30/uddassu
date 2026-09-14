import React, { useState } from 'react';
import { Award, Users, Check, Sparkles, Calculator, Flame, ChevronRight } from 'lucide-react';
import { SET_MENUS } from '../data/restaurantData';

interface SetMenuSectionProps {
  onOpenReservation: () => void;
}

export const SetMenuSection: React.FC<SetMenuSectionProps> = ({ onOpenReservation }) => {
  // Recommender State
  const [peopleCount, setPeopleCount] = useState<number>(4);
  const [flavorPreference, setFlavorPreference] = useState<'balance' | 'eel' | 'meat'>('balance');
  const [includeSoolbap, setIncludeSoolbap] = useState<boolean>(true);
  const [includeNoodle, setIncludeNoodle] = useState<boolean>(true);

  // Calculate recommended package
  const getRecommendation = () => {
    let baseSet = SET_MENUS[0]; // 세트 A (꼼장어 + 소갈비살)
    if (flavorPreference === 'eel') {
      baseSet = SET_MENUS[1] || SET_MENUS[0]; // 세트 B (야채꼼장어 + 허겁살)
    } else if (flavorPreference === 'meat') {
      baseSet = SET_MENUS[0]; // 세트 A (소갈비살 포함)
    } else {
      baseSet = SET_MENUS[0]; // 세트 A 기본
    }

    let totalPrice = baseSet.price;
    const addOns: { name: string; price: number }[] = [];

    if (includeSoolbap) {
      const soolbapCount = peopleCount >= 4 ? 2 : 1;
      totalPrice += 4000 * soolbapCount;
      addOns.push({ name: `청국장술밥 ${soolbapCount}개`, price: 4000 * soolbapCount });
    }

    if (includeNoodle) {
      const noodleCount = peopleCount >= 4 ? 2 : 1;
      totalPrice += 6000 * noodleCount;
      addOns.push({ name: `살얼음 빙소면 ${noodleCount}개`, price: 6000 * noodleCount });
    }

    const perPersonPrice = Math.round(totalPrice / peopleCount / 100) * 100;

    return {
      baseSet,
      addOns,
      totalPrice,
      perPersonPrice,
    };
  };

  const rec = getRecommendation();

  return (
    <section id="sets" className="py-20 bg-neutral-900/80 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VALUE 800G SET MENU</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            3~4인 기준 800g <span className="text-amber-400">가성비 명품 세트</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            어따써의 대표 구이 부위를 가장 합리적인 가격과 풍성한 조합으로 구성했습니다.
          </p>
        </div>

        {/* 3 Set Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SET_MENUS.map((set) => {
            const isFeatured = set.popularRank === 1;
            return (
              <div
                key={set.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900 to-amber-950/30 border-2 border-amber-500/60 shadow-2xl shadow-amber-950/30 -translate-y-1'
                    : 'bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Badge */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-neutral-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                    인기 주문 1위 ★
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-400 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                      {set.targetPeople}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium">
                      {set.totalWeight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {set.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {set.description}
                  </p>

                  {/* Components breakdown */}
                  <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 mb-6 space-y-2">
                    <div className="text-[11px] font-bold text-neutral-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Flame className="w-3 h-3 text-orange-400" /> 세트 구성 내역
                    </div>
                    {set.items.map((itemStr, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{itemStr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">3~4인 실속가</span>
                    <div className="text-2xl font-extrabold text-amber-400">
                      {set.price.toLocaleString()}
                      <span className="text-xs text-neutral-300 ml-1 font-normal">원</span>
                    </div>
                  </div>

                  <button
                    onClick={onOpenReservation}
                    className="px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-neutral-200 text-xs font-bold transition-all border border-neutral-700 hover:border-amber-400 cursor-pointer"
                  >
                    예약하고 주문
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Estimator Tool */}
        <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  어따써 맞춤 상차림 추천 & 주문 견적기
                </h3>
                <p className="text-xs text-neutral-400">
                  방문 인원과 취향을 선택하면 가장 만족스러운 추천 코스와 1인당 예상 금액을 계산해드립니다.
                </p>
              </div>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Step 1: People */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-2">
                  1. 방문 인원 수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[2, 3, 4, 6].map((count) => (
                    <button
                      key={count}
                      onClick={() => setPeopleCount(count)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        peopleCount === count
                          ? 'bg-amber-500 text-neutral-950 border border-amber-400 shadow-md'
                          : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:bg-neutral-850'
                      }`}
                    >
                      {count}인 {count === 6 ? '이상' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Flavor */}
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-2">
                  2. 음식 취향 선호도
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setFlavorPreference('balance')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      flavorPreference === 'balance'
                        ? 'bg-amber-500 text-neutral-950 border border-amber-400'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}
                  >
                    꼼장어+소갈비
                  </button>
                  <button
                    onClick={() => setFlavorPreference('eel')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      flavorPreference === 'eel'
                        ? 'bg-amber-500 text-neutral-950 border border-amber-400'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}
                  >
                    매콤 야채꼼장어
                  </button>
                  <button
                    onClick={() => setFlavorPreference('meat')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      flavorPreference === 'meat'
                        ? 'bg-amber-500 text-neutral-950 border border-amber-400'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}
                  >
                    특수부위 고기파
                  </button>
                </div>
              </div>

              {/* Step 3: Sides */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-neutral-300 mb-2">
                  3. 어따써 필수 식사 사이드 포함 여부
                </label>
                <div className="flex flex-wrap gap-3">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer text-xs text-neutral-300 hover:border-amber-500/40">
                    <input
                      type="checkbox"
                      checked={includeSoolbap}
                      onChange={(e) => setIncludeSoolbap(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span>청국장술밥 (+4,000원)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 cursor-pointer text-xs text-neutral-300 hover:border-amber-500/40">
                    <input
                      type="checkbox"
                      checked={includeNoodle}
                      onChange={(e) => setIncludeNoodle(e.target.checked)}
                      className="accent-amber-500 rounded"
                    />
                    <span>살얼음 빙소면 (+6,000원)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                  {peopleCount}인 추천 베스트 조합
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {rec.baseSet.name} ({rec.baseSet.totalWeight})
                  {rec.addOns.length > 0 && ` + ${rec.addOns.map((a) => a.name).join(' + ')}`}
                </h4>
                <p className="text-xs text-neutral-400">
                  총 견적 합계: <span className="text-amber-300 font-bold">{rec.totalPrice.toLocaleString()}원</span> (1인당 약 {rec.perPersonPrice.toLocaleString()}원)
                </p>
              </div>

              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 font-bold text-xs sm:text-sm shadow-md hover:from-amber-400 hover:to-orange-500 transition-all cursor-pointer whitespace-nowrap"
              >
                이 구성으로 테이블 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
