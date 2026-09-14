/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChalkboardMenuBoard } from './components/ChalkboardMenuBoard';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SetMenuSection } from './components/SetMenuSection';
import { TasteGuide } from './components/TasteGuide';
import { PhotoGallery } from './components/PhotoGallery';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { QuickFloatingBar } from './components/QuickFloatingBar';
import { KakaoFloatingButton } from './components/KakaoFloatingButton';

export default function App() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950 relative">
      {/* Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section with Charcoal Eel Visuals */}
        <Hero onOpenReservation={() => setReservationOpen(true)} />

        {/* Top Store Chalkboard Menu Board (화면 상단 매장 실물 메뉴판) */}
        <ChalkboardMenuBoard />

        {/* Brand Story & 3 Promises */}
        <AboutSection />

        {/* Regular Menu & Categorized Pricing */}
        <MenuSection />

        {/* Value 800g Sets & Interactive Order Estimator */}
        <SetMenuSection onOpenReservation={() => setReservationOpen(true)} />

        {/* 200% Delicious Tasting Guide & 3 Seasoning Sauces */}
        <TasteGuide />

        {/* Real Food & Store Photo Gallery with Lightbox */}
        <PhotoGallery />

        {/* Store Location, Hours, Real-time Status, & Maps */}
        <LocationHours />
      </main>

      {/* Footer */}
      <Footer />

      {/* KakaoTalk Floating Button with Gold Hover Effect */}
      <KakaoFloatingButton />

      {/* Quick Access Mobile Bottom Bar */}
      <QuickFloatingBar onOpenReservation={() => setReservationOpen(true)} />

      {/* Booking & Table Inquiry Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}

