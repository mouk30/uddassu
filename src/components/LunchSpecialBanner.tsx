import React from 'react';
import { Sun, Clock, Check, Utensils, AlertCircle } from 'lucide-react';
import { LUNCH_SPECIALS, STORE_INFO } from '../data/restaurantData';

export const LunchSpecialBanner: React.FC = () => {
  return (
    <section id="lunch" className="py-20 bg-neutral-950 border-t border-neutral-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Container */}
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold mb-3">
                <Sun className="w-3.5 h-3.5" />
                <span>WEEKDAY LUNCH SPECIAL</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                사천동 직장인 & 주민을 위한 <span className="text-amber-400">평일 점심특선</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                푸짐한 직화 파불고기와 구수한 뚝배기 청국장, 시원한 냉면의 든든한 한 상!
              </p>
            </div>

            {/* Hours Callout */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-950/80 border border-amber-500/30">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-[11px] text-neutral-400 block font-medium">점심특선 주문 가능 시간</span>
                <span className="text-sm sm:text-base font-bold text-white">
                  오전 11:00 ~ 오후 14:00
                </span>
              </div>
            </div>
          </div>

          {/* 3 Lunch Special Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {LUNCH_SPECIALS.map((spec) => (
              <div
                key={spec.id}
                className="rounded-2xl bg-neutral-950/80 border border-neutral-800/80 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-extrabold text-xs">
                      {spec.code}
                    </span>
                    {spec.minOrder && (
                      <span className="text-[10px] text-neutral-400 font-medium">
                        {spec.minOrder}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {spec.name}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    {spec.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-800/80 mb-6">
                    <span className="text-[11px] font-bold text-neutral-300 block mb-1">
                      포함 구성:
                    </span>
                    {spec.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-baseline justify-between">
                  <span className="text-xs text-neutral-400">1인 기준가</span>
                  <span className="text-2xl font-extrabold text-amber-400">
                    {spec.price.toLocaleString()}
                    <span className="text-xs text-neutral-300 font-normal ml-0.5">원</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3 text-xs text-neutral-400">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              * 파불고기 정식(A, B세트)은 2인 이상 주문 가능하며, 재료 소진 시 조기 마감될 수 있습니다. 단체 점심 예약 문의는 <strong>010-7795-0918</strong>로 편하게 연락주세요.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
