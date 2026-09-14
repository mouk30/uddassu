import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Flame, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/restaurantData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '전체 메뉴판', href: '#menu-board' },
    { label: '브랜드 소개', href: '#about' },
    { label: '대표 메뉴', href: '#menu' },
    { label: '추천 세트', href: '#sets' },
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
        <a href="#" className="flex items-center gap-2.5 group py-1" aria-label="어따써 숯불포차 홈으로">
          <BrandLogo className="h-10 sm:h-12 w-auto max-w-[220px] sm:max-w-[270px] group-hover:scale-105 transition-transform" />
          <span className="hidden sm:inline-flex text-[11px] px-2 py-0.5 rounded-full bg-neutral-900/90 border border-neutral-700 text-amber-300 font-semibold tracking-wide">
            사천점
          </span>
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
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-semibold transition-all duration-300 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_18px_rgba(245,158,11,0.35)] group"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
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
              오후 16:00 ~ 24:00 (일 휴무)
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
                href={link.href === '#location' ? '#store-address-box' : link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (link.href === '#location') {
                    e.preventDefault();
                    const el = document.getElementById('store-address-box');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                      window.location.hash = 'location';
                    }
                  }
                }}
                className="px-3 py-2 rounded-lg bg-neutral-900 text-sm text-neutral-200 hover:text-amber-400 hover:bg-neutral-800 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 flex gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-neutral-800 text-white text-xs font-bold border border-neutral-700 hover:border-amber-400 hover:text-amber-300 hover:bg-amber-500/15 hover:shadow-[0_0_16px_rgba(245,158,11,0.35)] transition-all duration-300 active:scale-98 group"
            >
              <Phone className="w-4 h-4 text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300" />
              전화 걸기 (010-7795-0918)
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
