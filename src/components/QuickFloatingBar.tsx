import React from 'react';
import { Phone, Calendar, MapPin, ChevronUp } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

interface QuickFloatingBarProps {
  onOpenReservation: () => void;
}

export const QuickFloatingBar: React.FC<QuickFloatingBarProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="빠른 이용 메뉴" className="fixed bottom-3 left-4 right-4 z-40 max-w-lg mx-auto md:hidden">
      <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-1.5">
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-neutral-800 text-white text-xs font-bold border border-neutral-700/50 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] active:scale-95 transition-all duration-300 group"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
          <span>전화 걸기</span>
        </a>

        <button
          onClick={onOpenReservation}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 text-xs font-bold active:scale-95 transition-transform shadow-lg cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-neutral-950" />
          <span>예약 / 문의</span>
        </button>

        <a
          href="#store-address-box"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('store-address-box');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
              window.location.hash = 'location';
            }
          }}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-neutral-800 text-white text-xs font-bold active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5 text-orange-400" />
          <span>오시는길</span>
        </a>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white active:scale-95 transition-transform"
          aria-label="맨 위로 가기"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
