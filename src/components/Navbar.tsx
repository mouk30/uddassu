import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Flame, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '브랜드 소개', href: '#about' },
    { label: '대표 메뉴', href: '#menu' },
    { label: '추천 세트', href: '#sets' },
    { label: '평일 점심특선', href: '#lunch' },
    { label: '맛있게 즐기는 법', href: '#guide' },
    { label: '포토 갤러리', href: '#gallery' },
    { label: '매장 및 오시는길', href: '#location' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 shadow-xl py-3'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-orange-950/40 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                어따써 <span className="text-amber-400">숯불포차</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-amber-300 font-medium">
                사천점
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-normal">
              숯불 꼼장어 · 특수부위 전문점
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-300 hover:text-amber-400 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-neutral-500 text-xs font-semibold transition-all hover:bg-neutral-800"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>010-7795-0918</span>
          </a>

          <button
            id="nav-reserve-btn"
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-neutral-950 font-bold text-xs shadow-md shadow-orange-950/50 transition-all hover:shadow-orange-700/30 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-neutral-950" />
            <span>자리 문의 / 예약</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900 lg:hidden focus:outline-none"
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-neutral-950/98 border-b border-neutral-800 px-5 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl"
        >
          <div className="py-2 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              오전 07:00 ~ 익일 24:00
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              청주 사천동
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-neutral-900 text-sm text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-800 text-white text-xs font-bold border border-neutral-700 active:scale-98"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              전화 걸기
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 text-xs font-bold shadow active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-neutral-950" />
              자리 문의 / 예약
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
