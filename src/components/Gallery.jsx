import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = ''; // Restore background scrolling
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? siteData.gallery.length - 1 : prevIndex - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === siteData.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block mb-2">Visual Serenity</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest">Plumeria Home Moments</h2>
        <p className="text-brand-forest/70 mt-3 text-sm sm:text-base">
          A glimpse into the daily rhythm of our Lanna garden sanctuary. Hover to see descriptions and tap to expand.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {siteData.gallery.map((image, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer border border-brand-forest/5 bg-brand-sand-dark"
          >
            {/* Gallery Image */}
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Cover */}
            <div className="absolute inset-0 bg-brand-forest/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
              <Maximize2 className="w-5 h-5 text-brand-sand absolute top-4 right-4" />
              <p className="text-brand-cream text-sm font-medium tracking-wide">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-brand-wood-muted transition-colors p-2 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={showPrev}
            className="absolute left-4 sm:left-8 text-white hover:text-brand-wood-muted transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Center Expanded Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center space-y-4"
          >
            <img 
              src={siteData.gallery[lightboxIndex].src} 
              alt={siteData.gallery[lightboxIndex].caption} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/5"
            />
            <p className="text-brand-cream text-sm sm:text-base font-light text-center tracking-wide px-4">
              {siteData.gallery[lightboxIndex].caption}
            </p>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={showNext}
            className="absolute right-4 sm:right-8 text-white hover:text-brand-wood-muted transition-colors p-2 bg-black/30 rounded-full hover:bg-black/50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
