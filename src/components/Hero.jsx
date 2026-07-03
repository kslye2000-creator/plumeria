import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

export default function Hero({ setActivePage }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-brand-forest overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/selected/Gemini_Generated_Image_37oujt37oujt37ou.png')] bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-102"
        style={{ contentVisibility: 'auto' }}
      >
        {/* Light gradient overlay — lets the beautiful photography show through */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/40 via-brand-forest/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/30 via-transparent to-brand-forest/10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-8 space-y-6 text-left animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-sand/15 backdrop-blur-md border border-brand-sand/20 px-3.5 py-1.5 rounded-full text-brand-sand text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-brand-wood-muted" />
            <span>Chiang Mai, Thailand</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-cream font-bold leading-[1.1] tracking-tight max-w-2xl">
            Where Secluded <span className="text-brand-wood-muted italic font-normal">Serenity</span> Meets Warm Lanna Hospitality
          </h1>

          <p className="text-brand-sand/80 text-lg sm:text-xl font-light leading-relaxed max-w-xl">
            Escape the noise of modern life. Work from peaceful garden hammocks, explore historic temples, and enjoy the pure relaxation of a traditional teakwood house getaway.
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center space-x-2 bg-brand-wood hover:bg-brand-wood-light text-brand-sand px-8 py-4 rounded-lg font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            >
              <span>Book Your Sanctuary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setActivePage('rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center bg-brand-sand/10 hover:bg-brand-sand/20 text-brand-sand border border-brand-sand/30 backdrop-blur-md px-8 py-4 rounded-lg font-medium tracking-wide transition-all duration-300 cursor-pointer"
            >
              Explore Our Villas
            </button>
          </div>
        </div>

        {/* Right Side: Quick Check-Availability Glass Card */}
        <div className="lg:col-span-4 lg:block hidden">
          <div className="glassmorphism p-8 rounded-2xl shadow-2xl space-y-6 border border-white/10 relative overflow-hidden group">
            {/* Subtle glow effect */}
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-brand-wood-muted/20 blur-3xl group-hover:scale-125 transition-transform duration-500" />
            
            <h3 className="font-serif text-2xl font-bold text-brand-forest tracking-wide">Plan Your Escape</h3>
            <p className="text-brand-forest/70 text-sm leading-relaxed">
              Tell us your desired stay dates, and we'll check availability for our private garden teakwood rooms.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-brand-forest/60 uppercase tracking-widest mb-1.5">Check-In</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-brand-cream border border-brand-forest/10 rounded-lg px-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-forest/60 uppercase tracking-widest mb-1.5">Check-Out</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full bg-brand-cream border border-brand-forest/10 rounded-lg px-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm" 
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full cursor-pointer bg-brand-forest hover:bg-brand-forest-light text-brand-sand py-3.5 rounded-lg text-sm font-semibold tracking-wider uppercase transition-colors duration-300 shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Booking</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
