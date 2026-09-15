import React, { useState } from 'react';
import { Flame, Sparkles, Search, Utensils, Beer, Award, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'eel' | 'meat' | 'side' | 'drink'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { key: 'all', label: '전체 메뉴' },
    { key: 'eel', label: '숯불 꼼장어' },
    { key: 'meat', label: '고기 & 특수부위' },
    { key: 'side', label: '식사 & 사이드' },
    { key: 'drink', label: '주류 & 음료' },
  ] as const;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.tag && item.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>ORIGINAL CHARCOAL MENU</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            어따써 숯불포차 <span className="text-amber-400">정성 메뉴</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            특대형 꼼장어부터 도축업자들의 비밀 뒷고기 허겁살, 시원한 빙소면까지 넉넉한 1인분 200g으로 제공합니다.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 shadow-md shadow-orange-950/40'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="메뉴명 또는 키워드 검색 (예: 허겁살, 술밥)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 placeholder:text-neutral-500 text-xs sm:text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-sm">'{searchTerm}'에 해당하는 메뉴가 없습니다.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
            >
              전체 메뉴 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-amber-500/50 transition-all p-5 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-950/10"
              >
                <div>
                  {/* Image (if provided) */}
                  {item.image && (
                    <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.tag && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-amber-500/40 text-[11px] font-bold text-amber-300">
                          {item.tag}
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-red-600/90 text-[10px] font-bold text-white flex items-center gap-1">
                          <Flame className="w-3 h-3 text-white" /> 매콤
                        </span>
                      )}
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h3>
                        {!item.image && item.tag && (
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-semibold text-amber-300">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.minOrderNotice && (
                        <div className="mt-0.5">
                          <span className="inline-block text-xs font-bold text-amber-400">
                            {item.minOrderNotice}
                          </span>
                        </div>
                      )}
                      {item.weight && (
                        <span className="text-[11px] text-sky-400 font-semibold block mt-0.5">
                          {item.weight}
                          {item.pricePer100g && ` (${item.pricePer100g})`}
                        </span>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="text-lg font-extrabold text-amber-400 block">
                        {item.price.toLocaleString()}
                        <span className="text-xs text-neutral-300 ml-0.5 font-normal">원</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Pairing tip (if any) */}
                {item.pairingNote && (
                  <div className="pt-3 border-t border-neutral-800/80 flex items-start gap-1.5 text-[11px] text-amber-300/80 bg-amber-500/5 p-2 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item.pairingNote}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Set Menu Banner Teaser */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/40 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                3~4인 방문이신가요? 800g 가성비 세트메뉴를 확인하세요!
              </h4>
              <p className="text-xs text-neutral-400">
                사장님세트, 단골세트, 청년세트로 더 푸짐하고 저렴하게 즐기실 수 있습니다.
              </p>
            </div>
          </div>

          <a
            href="#sets"
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-md transition-colors whitespace-nowrap"
          >
            세트메뉴 보러가기 &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
