import React, { useState } from 'react';
import { Maximize2, X, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const ChalkboardMenuBoard: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <section id="menu-board" className="py-12 sm:py-16 bg-neutral-950 relative border-b border-neutral-800">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Eyebrow & Headline */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>매장 실물 메뉴판 안내</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
              어따써 숯불포차 <span className="text-amber-400">정식 메뉴판</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              실제 매장에 게시된 최신 정량(200g) 규격 및 가격표입니다.
            </p>
          </div>

          {/* Actual Chalkboard Frame */}
          <div className="relative rounded-3xl bg-black border-4 border-stone-800 shadow-2xl p-5 sm:p-8 lg:p-10 font-sans select-none transition-all">
            {/* Wooden/Chalkboard Border Accents */}
            <div className="absolute inset-0 rounded-[22px] border border-stone-700/50 pointer-events-none" />

            {/* Top Bar inside Board: Logo & Zoom Toggle */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-stone-800 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
                <span className="text-xs sm:text-sm font-bold text-stone-400 tracking-wider">
                  OFFICIAL STORE MENU
                </span>
              </div>

              {/* Logo Area */}
              <div className="flex items-center gap-3">
                <BrandLogo className="h-10 sm:h-14 w-auto max-w-[210px] sm:max-w-[260px]" />

                <button
                  onClick={() => setIsZoomed(true)}
                  className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="크게보기"
                >
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">크게보기</span>
                </button>
              </div>
            </div>

            {/* Main Menu Grid (2-Column Board) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: 꼼장어 & 고기류 */}
              <div className="space-y-8">
                {/* 1. 꼼장어 */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-black text-sm tracking-widest shadow">
                      꼼 장 어
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          왕소금구이 <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (100g 9,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩19,000
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          양 념 구 이 <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (100g 9,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩19,000
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          야채꼼장어 <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] font-bold text-amber-400 mt-0.5">
                          2인분이상
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (100g 9,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩19,000
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 고기류 */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-black text-sm tracking-widest shadow">
                      고 기 류
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Item 1 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          생 소 갈 비 살 <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (미국 · 호주산 100g 8,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩17,000
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          양념소갈비살 <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (미국 · 호주산 100g 8,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩17,000
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide">
                          허겁살구이-(뒷고기 <span className="text-xs sm:text-sm font-semibold text-sky-400">200g</span>)
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (국내산 100g 6,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩15,000
                      </div>
                    </div>

                    {/* Item 4 (추가메뉴 돼지꼬리) */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2">
                      <div>
                        <div className="text-white font-black text-base sm:text-lg tracking-wide flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs font-black text-amber-300 px-1.5 py-0.5 bg-amber-500/20 border border-amber-400/40 rounded">
                            추가메뉴
                          </span>
                          <span>돼지꼬리</span>
                          <span className="text-xs sm:text-sm font-semibold text-sky-400">(200g)</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-sky-300/90 font-semibold mt-0.5">
                          (국내산 100g 5,500원)
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                        ₩11,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 세트메뉴, 식사류, 주류 */}
              <div className="space-y-8">
                {/* 3. 세트 메뉴 */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-black text-sm tracking-widest shadow">
                      세트 메뉴
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {/* Set A */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2 gap-2">
                      <div className="text-white font-black text-sm sm:text-base leading-snug">
                        <span className="text-amber-400 font-black mr-1.5 text-base sm:text-lg">A</span>
                        <span>꼼장어구이<span className="text-sky-400 text-xs font-semibold">(2인/400g)</span> + 소갈비살<span className="text-sky-400 text-xs font-semibold">(2인/400g)</span></span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-amber-400 tracking-tight whitespace-nowrap">
                        ₩67,000
                      </div>
                    </div>

                    {/* Set B */}
                    <div className="flex items-baseline justify-between border-b border-stone-800/80 pb-2 gap-2">
                      <div className="text-white font-black text-sm sm:text-base leading-snug">
                        <span className="text-amber-400 font-black mr-1.5 text-base sm:text-lg">B</span>
                        <span>야채꼼장어<span className="text-sky-400 text-xs font-semibold">(2인/400g)</span> + 허겁살구이<span className="text-sky-400 text-xs font-semibold">(2인/400g)</span></span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-amber-400 tracking-tight whitespace-nowrap">
                        ₩65,000
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. 식사류 */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-black text-sm tracking-widest shadow">
                      식 사 류
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm sm:text-base">
                    {/* Left sub-col */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">청국장</span>
                        <span className="text-amber-400 font-black text-base">₩3,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">청국장술밥</span>
                        <span className="text-amber-400 font-black text-base">₩4,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">온소면</span>
                        <span className="text-amber-400 font-black text-base">₩6,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">빙소면</span>
                        <span className="text-amber-400 font-black text-base">₩6,000</span>
                      </div>
                    </div>

                    {/* Right sub-col */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">냉면(물/비빔)</span>
                        <span className="text-amber-400 font-black text-base">₩6,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <div>
                          <div className="text-white font-bold leading-tight">볶음밥</div>
                          <div className="text-[10px] text-stone-500">(야채꼼장어만 가능)</div>
                        </div>
                        <span className="text-amber-400 font-black text-base">₩5,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">공기밥</span>
                        <span className="text-amber-400 font-black text-base">₩1,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. 주류 */}
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-black text-sm tracking-widest shadow">
                      주 류
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm sm:text-base">
                    {/* Left sub-col */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">음 료 수</span>
                        <span className="text-amber-400 font-black text-base">₩2,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">소 주</span>
                        <span className="text-amber-400 font-black text-base">₩4,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">맥 주</span>
                        <span className="text-amber-400 font-black text-base">₩4,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">막 걸 리</span>
                        <span className="text-amber-400 font-black text-base">₩4,000</span>
                      </div>
                    </div>

                    {/* Right sub-col */}
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">청 하</span>
                        <span className="text-amber-400 font-black text-base">₩5,000</span>
                      </div>
                      <div className="flex justify-between items-baseline border-b border-stone-850 pb-1.5">
                        <span className="text-white font-bold">복 분 자</span>
                        <span className="text-amber-400 font-black text-base">₩12,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Origin Notice Banner */}
            <div className="mt-8 pt-5 border-t border-stone-800 text-center">
              <p className="text-xs sm:text-sm text-stone-300 font-medium leading-relaxed">
                어따써 꼼장어 에서는 <strong className="text-sky-300 font-bold">돼지고기(국내산)</strong>, <strong className="text-sky-300 font-bold">쌀(국내산)</strong>, <strong className="text-sky-300 font-bold">배추(국내산, 중국산)</strong>, <strong className="text-sky-300 font-bold">고춧가루(국내산, 중국산)</strong>를 사용하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-black border-2 border-stone-700 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center justify-center pb-4 mb-6 border-b border-stone-800">
              <BrandLogo className="h-14 sm:h-20 w-auto max-w-[320px] sm:max-w-[440px]" />
              <span className="text-xs px-2.5 py-0.5 mt-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-amber-300 font-semibold tracking-wider">
                청주사천점
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-4">
                <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                  <div className="font-bold text-amber-400 mb-2 border-b border-stone-800 pb-1">
                    꼼 장 어 <span className="text-sky-400 text-xs font-semibold">(200g)</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span>왕소금구이 <span className="text-sky-300 text-xs font-semibold">(100g 9,500원)</span></span>
                      <span className="text-amber-400 font-bold">₩19,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>양념구이 <span className="text-sky-300 text-xs font-semibold">(100g 9,500원)</span></span>
                      <span className="text-amber-400 font-bold">₩19,000</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <span>야채꼼장어 <span className="text-sky-300 text-xs font-semibold">(100g 9,500원)</span></span>
                        <div className="text-[10px] font-bold text-amber-400">2인분이상</div>
                      </div>
                      <span className="text-amber-400 font-bold">₩19,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                  <div className="font-bold text-amber-400 mb-2 border-b border-stone-800 pb-1">
                    고 기 류 <span className="text-sky-400 text-xs font-semibold">(200g)</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span>생소갈비살 <span className="text-sky-300 text-xs font-semibold">(미국·호주산 100g 8,500원)</span></span>
                      <span className="text-amber-400 font-bold">₩17,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>양념소갈비살 <span className="text-sky-300 text-xs font-semibold">(미국·호주산 100g 8,500원)</span></span>
                      <span className="text-amber-400 font-bold">₩17,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>허겁살구이-(뒷고기 <span className="text-sky-300 text-xs font-semibold">국내산 100g 6,500원</span>)</span>
                      <span className="text-amber-400 font-bold">₩15,000</span>
                    </div>
                    <div className="flex justify-between text-amber-300">
                      <span>[추가] 돼지꼬리 <span className="text-sky-300 text-xs font-semibold">(국내산 100g 5,500원)</span></span>
                      <span className="text-amber-400 font-bold">₩11,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                  <div className="font-bold text-amber-400 mb-2 border-b border-stone-800 pb-1">
                    세트 메뉴 <span className="text-sky-400 text-xs font-semibold">(400g+400g)</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">A</span> 꼼장어구이 + 소갈비살 <span className="text-sky-400 text-xs font-semibold">(총 800g)</span>
                      </div>
                      <span className="text-amber-400 font-bold text-base">₩67,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-amber-400 font-bold">B</span> 야채꼼장어 + 허겁살구이 <span className="text-sky-400 text-xs font-semibold">(총 800g)</span>
                      </div>
                      <span className="text-amber-400 font-bold text-base">₩65,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                  <div className="font-bold text-amber-400 mb-2 border-b border-stone-800 pb-1">식사류 & 주류</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>청국장 ₩3,000</div>
                    <div>냉면(물/비빔) ₩6,000</div>
                    <div>청국장술밥 ₩4,000</div>
                    <div>볶음밥 <span className="text-sky-300 text-[10px] font-semibold">(야채꼼장어만)</span> ₩5,000</div>
                    <div>온소면 / 빙소면 ₩6,000</div>
                    <div>공기밥 ₩1,000</div>
                    <div className="col-span-2 pt-2 border-t border-stone-800 flex flex-wrap gap-2 text-stone-300">
                      <span>소주/맥주/막걸리 ₩4,000</span>
                      <span>청하 ₩5,000</span>
                      <span>복분자 ₩12,000</span>
                      <span>음료수 ₩2,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-stone-400">
              어따써 꼼장어 에서는 <span className="text-sky-300 font-semibold">돼지고기(국내산)</span>, <span className="text-sky-300 font-semibold">쌀(국내산)</span>, <span className="text-sky-300 font-semibold">배추(국내산, 중국산)</span>, <span className="text-sky-300 font-semibold">고춧가루(국내산, 중국산)</span>를 사용하고 있습니다.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
