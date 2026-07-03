import React from 'react';
import Hero from '../components/Hero';
import AudienceTabs from '../components/AudienceTabs';
import RoomGrid from '../components/RoomGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Gallery from '../components/Gallery';
import { ArrowRight, Waves, Compass, Shield } from 'lucide-react';

export default function Home({ setActivePage, setPreSelectedRoom }) {
  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <Hero setActivePage={setActivePage} />

      {/* Trust & Vibe Pillars */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-wood-light">
              <Waves className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-forest">Teakwood Lanna Design</h3>
            <p className="text-brand-forest/70 text-sm leading-relaxed max-w-xs">
              Traditional architecture built with native teak wood, blending with a quiet garden courtyard.
            </p>
          </div>
          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-wood-light">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-forest">Eco-Conscious Living</h3>
            <p className="text-brand-forest/70 text-sm leading-relaxed max-w-xs">
              Traditional timber construction that respects Chiang Mai's mountain breeze and natural topography.
            </p>
          </div>
          <div className="space-y-3 p-4 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-wood-light">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-forest">Lanna Hospitality</h3>
            <p className="text-brand-forest/70 text-sm leading-relaxed max-w-xs">
              Deeply rooted local hosts providing safety, home-cooked Northern Thai recipes, and airport transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audiences Segmented Tabs */}
      <AudienceTabs setActivePage={setActivePage} />

      {/* Room Preview Grid */}
      <RoomGrid setActivePage={setActivePage} setPreSelectedRoom={setPreSelectedRoom} />

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Escape Plan CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-brand-cream to-brand-sand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest leading-tight">
            Ready to Experience Plumeria Home?
          </h2>
          <p className="text-brand-forest/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Reserve your quiet room inside our Lanna teakwood house. Let us prepare your garden hammock, hook up your dedicated fiber Wi-Fi, or schedule your airport pickup.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-terracotta hover:bg-brand-terracotta-light text-brand-sand px-8 py-4 rounded-xl text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2.5 cursor-pointer hover:-translate-y-0.5"
            >
              <span>Begin Your Booking</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
