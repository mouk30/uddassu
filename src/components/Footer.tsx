import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 pt-16 pb-24 md:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <BrandLogo className="h-11 sm:h-14 w-auto max-w-[240px] sm:max-w-[280px]" />
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-300 font-semibold w-fit">
                청주사천점
              </span>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs max-w-sm">
              특대형 왕꼼장어의 쫄깃한 식감과 참숯 백탄의 은은한 훈연향, 쫀득한 뒷고기 허겁살까지. 청주 사천동에서 신선하고 정직한 맛으로 보답하겠습니다.
            </p>
          </div>

          {/* Quick Contact & Hours */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              영업시간 안내
            </h4>
            <div className="space-y-1.5 text-neutral-300">
              <p>• 월~토: <span className="text-amber-400 font-bold">오후 16:00 ~ 밤 24:00 (오후 4시~밤 12시)</span></p>
              <p>• 일요일: <span className="text-rose-400 font-bold">매주 일요일 정기휴무</span></p>
              <p className="text-neutral-500 text-[11px]">* 신선한 재료 준비 및 참숯 점화 후 오후 4시 정각 오픈</p>
            </div>
          </div>

          {/* Store Location */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              매장 위치 & 연락처
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {STORE_INFO.address}
            </p>
            <div className="pt-1.5 flex flex-col gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-amber-300 font-bold text-xs transition-all duration-300 hover:border-amber-400 hover:text-amber-200 hover:bg-amber-500/15 hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] group"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>직통 전화: {STORE_INFO.phone}</span>
              </a>

              {STORE_INFO.kakaoOpenChat && (
                <a
                  href={STORE_INFO.kakaoOpenChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FEE500] text-[#371D1E] font-bold text-xs hover:bg-[#FFEB00] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#371D1E]" />
                  <span>카카오톡 1:1 상담 오픈채팅</span>
                </a>
              )}
            </div>
            <p className="text-neutral-500 text-[11px]">
              포장 주문 및 단체석 사전 예약 환영
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <p>© {new Date().getFullYear()} 어따써 숯불포차 청주사천점. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>상호명: 어따써 숯불포차 사천점</span>
            <span>업종: 한식 / 숯불구이 포차</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
