import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/restaurantData';
import { GalleryPhoto } from '../types';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (photo: GalleryPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(GALLERY_PHOTOS[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % GALLERY_PHOTOS.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(GALLERY_PHOTOS[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-950 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>REAL PHOTO GALLERY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            어따써의 <span className="text-amber-400">생생한 현장 포토</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            정갈한 상차림과 숯불 위에서 뿜어져 나오는 직화 구이의 감동을 사진으로 먼저 만나보세요.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openModal(photo, index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-lg hover:border-amber-500/60 transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-amber-500/30">
                {photo.category}
              </span>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-900/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-1">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-neutral-950/80 text-white hover:text-amber-400 flex items-center justify-center border border-neutral-700 hover:border-amber-400 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-950/80 text-white hover:text-amber-400 flex items-center justify-center border border-neutral-700 hover:border-amber-400 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-neutral-950/80 text-white hover:text-amber-400 flex items-center justify-center border border-neutral-700 hover:border-amber-400 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="w-full max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption Footer */}
            <div className="p-5 bg-neutral-950 border-t border-neutral-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
                  {selectedPhoto.category}
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-neutral-400">
                  {selectedPhoto.description}
                </p>
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                {currentIndex + 1} / {GALLERY_PHOTOS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
