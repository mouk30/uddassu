import React from 'react';
import { Flame, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 pt-16 pb-24 md:pb-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  어따써 <span className="text-amber-400">숯불포차</span>
                </span>
                <span className="text-xs text-neutral-400 block font-normal">
                  청주사천점 [숯불 꼼장어 전문점]
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs max-w-sm">
              특대형 왕꼼장어의 쫄깃한 식감과 참숯 백탄의 은은한 훈연향, 쫀득한 뒷고기 허겁살까지. 청주 사천동에서 신선하고 정직한 맛으로 보답하겠습니다.
            </p>

            <div className="flex items-center gap-2 pt-1 text-neutral-300">
              <span className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-amber-300">
                가맹점 문의 (주)만객 {STORE_INFO.franchiseContact}
              </span>
            </div>
          </div>

          {/* Quick Contact & Hours */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              영업시간 안내
            </h4>
            <div className="space-y-1.5 text-neutral-300">
              <p>• 화~일: <span className="text-amber-400 font-bold">오전 07:00 ~ 익일 24:00</span></p>
              <p>• 월요일: 오후 17:00 ~ 익일 24:00</p>
              <p>• 평일 점심특선: 오전 11:00 ~ 오후 14:00</p>
              <p className="text-neutral-500 text-[11px]">* 연중무휴 정상 영업</p>
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
            <p className="text-white font-bold pt-1">
              직통 전화: <a href={`tel:${STORE_INFO.phone}`} className="text-amber-400 hover:underline">{STORE_INFO.phone}</a>
            </p>
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
