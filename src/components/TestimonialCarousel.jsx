import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialCarousel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? siteData.testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === siteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance testimonial every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = siteData.testimonials[currentIdx];

  return (
    <section className="py-24 bg-brand-forest text-brand-sand/90 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 text-brand-forest-light select-none pointer-events-none opacity-20 hidden md:block">
        <Quote className="w-48 h-48" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand-wood-muted text-xs font-semibold uppercase tracking-widest block mb-2">Guest Stories</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-cream">Loved by Travelers</h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative min-h-[300px] flex flex-col items-center justify-center text-center px-4 sm:px-12">
          {/* Quote Mark */}
          <Quote className="w-10 h-10 text-brand-wood-muted mb-6" />

          {/* Rating */}
          <div className="flex space-x-1 mb-6">
            {[...Array(activeTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-wood-muted text-brand-wood-muted" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="font-serif text-lg sm:text-2xl font-light italic leading-relaxed text-brand-cream max-w-3xl mb-8 transition-all duration-500 ease-in-out">
            "{activeTestimonial.quote}"
          </p>

          {/* Author Details */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg tracking-wide text-brand-cream">{activeTestimonial.name}</h4>
            <p className="text-brand-sand/60 text-xs sm:text-sm mt-0.5">{activeTestimonial.role}</p>
            <span className="inline-block mt-2 bg-brand-forest-light text-brand-wood-muted text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
              {activeTestimonial.demographic}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex space-x-4 mt-12 items-center">
            <button 
              onClick={prevSlide}
              className="p-2.5 rounded-full border border-brand-sand/20 hover:border-brand-wood-muted hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-2">
              {siteData.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIdx === idx ? 'bg-brand-wood-muted scale-125' : 'bg-brand-sand/35 hover:bg-brand-sand/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-2.5 rounded-full border border-brand-sand/20 hover:border-brand-wood-muted hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
