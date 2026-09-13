import React from 'react';
import { Flame, CheckCircle, ShieldAlert, Sparkles, Award } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-900/60 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT EOTTASSEU</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            어따써 숯불포차의 <span className="text-amber-400">맛있는 약속</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            "이 좋은 꼼장어 먹고 어따써!"라는 유쾌한 감탄사에서 시작된 이름처럼,
            풍부한 단백질과 비타민A가 가득한 특대형 왕꼼장어를 참숯불에 정직하게 구워냅니다.
          </p>
        </div>

        {/* Content Layout: Visual story on left, 3 Commitments on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950">
              <img
                src="/images/raw_fresh_eel_set_1789293450538.jpg"
                alt="어따써 왕꼼장어와 명품 원육의 신선함"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-neutral-900/90 backdrop-blur-md border border-amber-500/30 px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold text-amber-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>당일 엄선 특대형 왕꼼장어</span>
              </div>

              {/* Bottom Caption Box */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-neutral-700/80">
                <p className="text-xs text-amber-400 font-semibold mb-1">
                  꼼장어 굵기가 곧 맛의 깊이입니다
                </p>
                <p className="text-xs sm:text-sm text-neutral-200">
                  얇고 질긴 일반 꼼장어와 달리, 속이 꽉 찬 도톰한 왕꼼장어만을 엄선하여 숯불 위에서 톡 터지는 풍부한 육즙을 자랑합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Commitments */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 transition-all shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 font-black text-lg">
                  01
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    비린내 없는 정갈한 손질 & 압도적 두께
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    꼼장어를 처음 드시는 분도 부담 없이 빠져들도록 까다로운 세척과 전처리 과정을 거쳐 잡내를 완벽히 잡았습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-orange-500/40 transition-all shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400 font-black text-lg">
                  02
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    100% 참숯 화로 직화로 입힌 훈연향
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    가스불 구이와는 차원이 다른 원적외선 참숯 열기로 겉면은 바삭하고 속은 부드럽고 쫄깃하게 구워냅니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-red-500/40 transition-all shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0 text-red-400 font-black text-lg">
                  03
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                    특수부위 허겁살 & 시원한 빙소면
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    꼼장어 외에도 쫀득한 뒷고기 '허겁살', 통갈매기 '지겁살', 소갈비살과 속 풀어주는 청국장술밥 & 살얼음 빙소면의 완벽한 상차림을 선사합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Trust Stat Strip */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-1">1인분 200g</div>
            <div className="text-xs text-neutral-400">정직하고 푸짐한 정량 제공</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-neutral-800" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-1">참숯 100%</div>
            <div className="text-xs text-neutral-400">고화력 참숯 직화 백탄 화로</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-neutral-800" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-300 mb-1">아침 7시 ~ 밤 12시</div>
            <div className="text-xs text-neutral-400">청주 사천동의 든든한 쉼터</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-neutral-800" />
          <div>
            <div className="text-2xl sm:text-3xl font-black text-red-400 mb-1">가성비 800g 세트</div>
            <div className="text-xs text-neutral-400">3~4인 푸짐한 모임 추천</div>
          </div>
        </div>
      </div>
    </section>
  );
};
