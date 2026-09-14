import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Car, Users, Sparkles, ExternalLink, Flame } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Address copy handler
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(STORE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Real-time operating status calculation
  const storeStatus = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0: Sun, 1: Mon, 2: Tue, ..., 6: Sat
    const hour = now.getHours();

    // Sunday: Regular Holiday (Closed)
    if (day === 0) {
      return {
        isOpen: false,
        label: '일요일 정기휴무',
        sub: '매주 일요일은 정기휴무입니다. 월요일 오후 4시에 뵙겠습니다!',
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      };
    }

    // Monday ~ Saturday: 16:00 ~ 24:00
    if (hour >= 16 && hour < 24) {
      return {
        isOpen: true,
        label: '지금 영업 중',
        sub: '오늘 밤 12시까지 운영됩니다. 참숯 직화구이를 즐겨보세요!',
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      };
    } else {
      return {
        isOpen: false,
        label: '영업 준비 중',
        sub: '월~토 오후 4시부터 밤 12시까지 활기차게 오픈합니다.',
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      };
    }
  }, []);

  return (
    <section id="location" className="py-20 bg-neutral-900/70 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT & INFORMATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            매장 안내 및 <span className="text-amber-400">찾아오시는 길</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            청주 사천동 중심에서 언제나 따뜻하고 활기찬 숯불 향기로 여러분을 맞이합니다.
          </p>
        </div>

        {/* Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Card */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${storeStatus.color}`}>
                    ● {storeStatus.label}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">월~토 16:00 ~ 24:00 (일 휴무)</span>
                </div>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-amber-300 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  전화 문의
                </a>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">{storeStatus.sub}</p>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                상세 영업시간 안내
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="font-semibold text-neutral-300">오픈 시간 (월요일 ~ 토요일)</span>
                  <span className="text-amber-400 font-bold text-sm sm:text-base">오후 4시 ~ 밤 12시 (16:00 ~ 24:00)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-neutral-800">
                  <span className="font-semibold text-neutral-300">정기 휴무</span>
                  <span className="text-rose-400 font-bold text-sm sm:text-base">매주 일요일 휴무</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 text-[11px] text-neutral-400">
                * 당일 공수한 신선한 특대형 왕꼼장어와 참숯을 정성껏 준비하여 매일 오후 4시에 문을 엽니다.
              </div>
            </div>

            {/* Address & Quick Map Navigators */}
            <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                위치 및 내비게이션
              </h3>

              <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-neutral-500 block mb-0.5">도로명 / 지번 주소</span>
                  <span className="text-xs sm:text-sm text-neutral-200 font-medium">
                    {STORE_INFO.address}
                  </span>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold border border-neutral-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">복사됨!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>주소 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Map App Shortcuts */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="https://map.naver.com/v5/search/%EC%96%B4%EB%94%B0%EC%8D%A8%EC%88%AF%EB%B6%88%ED%8F%AC%EC%83%88%20%EC%B2%AD%EC%A3%BC%EC%82%AC%EC%82%AC%EC%B2%9C%EC%A0%90"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#03C75A]/15 hover:bg-[#03C75A]/25 border border-[#03C75A]/40 text-[#03C75A] font-bold text-xs transition-colors"
                >
                  <span>네이버 지도 길찾기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://map.kakao.com/?q=%EC%96%B4%EB%94%B0%EC%8D%A8%EC%88%AF%EB%B6%88%ED%8F%AC%EC%83%88%20%EC%B2%AD%EC%A3%BC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FEE500]/15 hover:bg-[#FEE500]/25 border border-[#FEE500]/40 text-[#FFD700] font-bold text-xs transition-colors"
                >
                  <span>카카오맵 길찾기</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Store Front Image & Facilities */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
              <div className="relative h-64 sm:h-72 w-full">
                <img
                  src="/images/eottasseo_front_1789294184510.jpg"
                  alt="어따써 숯불포차 청주사천점 매장 외관"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />

                {/* Prominent Illuminated Brand Signboard Overlay */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-neutral-950/90 border border-amber-500/50 shadow-2xl backdrop-blur-md text-center max-w-[90%]">
                  <div className="flex items-center justify-center gap-2">
                    <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-sm sm:text-base font-extrabold text-amber-300 tracking-wider">
                      어따써 <span className="text-white">숯불포차</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40">
                      사천점
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium tracking-widest block mt-0.5">
                    [ 숯불 꼼장어 · 특수부위 전문점 ]
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-white px-3 py-1 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                    청주 사천동 어따써 숯불포차 전경
                  </span>
                  <span className="text-xs text-amber-400 font-bold bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/40">
                    사천점 직통: 010-7795-0918
                  </span>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="p-6 space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider text-neutral-300">
                  매장 편의 및 방문 안내
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STORE_INFO.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Franchise & Business Details */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
                  <div>
                    <span>가맹 문의 Hotline: </span>
                    <strong className="text-neutral-200">(주)만객 {STORE_INFO.franchiseContact}</strong>
                  </div>
                  <div>
                    <span>사업자 형태: </span>
                    <strong className="text-neutral-200">일반음식점</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
