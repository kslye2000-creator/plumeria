import React from 'react';
import { siteData } from '../data/siteData';
import { Compass, Anchor, MapPin, Smile } from 'lucide-react';

export default function Vibes({ setActivePage }) {
  return (
    <div className="py-12 space-y-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block">Explore Chiang Mai</span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-forest">Location & City Vibes</h1>
        <p className="text-brand-forest/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Discover a slower, gentler pace of life. Far from the busy high-rises, Wualai hosts quiet green lanes, traditional silver workshops, and authentic local night markets.
        </p>
      </div>

      {/* Main Banner Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-brand-forest/5 bg-brand-forest">
          <img
            src={siteData.vibes.heroImage}
            alt="Plumeria wooden retreat"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/90 via-brand-forest/40 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-left max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-1 bg-brand-wood text-brand-sand px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Wualai Chiang Mai Guesthouse</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-brand-cream leading-tight">
              A Quiet Teakwood Garden Retreat
            </h2>
            <p className="text-brand-sand/80 text-sm sm:text-base leading-relaxed font-light">
              {siteData.vibes.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {siteData.vibes.activities.map((act, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Image panel */}
                <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-brand-forest/5 bg-brand-sand-dark relative group">
                    <img 
                      src={act.image} 
                      alt={act.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Text Description panel */}
                <div className={`lg:col-span-6 text-left space-y-4 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="w-10 h-10 rounded-full bg-brand-forest/5 flex items-center justify-center text-brand-wood-light mb-2">
                    {index === 0 ? <Anchor className="w-5 h-5" /> : index === 1 ? <Compass className="w-5 h-5" /> : <Smile className="w-5 h-5" />}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">
                    {act.title}
                  </h3>
                  <p className="text-brand-forest/75 text-sm sm:text-base leading-relaxed">
                    {act.description}
                  </p>
                  <ul className="space-y-2 pt-2 text-sm text-brand-forest/80">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-wood-light" />
                      <span>Curated by local guides & hosts</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-wood-light" />
                      <span>Respectful of community & wildlife</span>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Local Travel Info Map Placeholder */}
      <section className="bg-brand-cream border-y border-brand-forest/5 max-w-7xl mx-auto rounded-2xl py-12 px-6 sm:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">Getting to Plumeria Home</h3>
            <p className="text-brand-forest/75 text-sm leading-relaxed max-w-xl">
              Plumeria Home is located in Chiang Mai, just a 10-minute drive from Chiang Mai International Airport (CNX) and 15 minutes from the Chiang Mai Railway Station.
            </p>
            <p className="text-brand-forest/75 text-sm leading-relaxed max-w-xl">
              Once you arrive in Chiang Mai, you can take a local red songthaew, a taxi, or rent a scooter directly to Wualai Road Soi 2. We are situated in a quiet, green residential lane.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-5 py-3 rounded-lg text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer inline-block"
              >
                Inquire About Airport Pickups
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            {/* Visual Travel Map Card */}
            <div className="bg-brand-sand-dark border border-brand-forest/10 p-6 rounded-xl space-y-4 shadow-sm text-center">
              <div className="inline-flex p-3 rounded-full bg-brand-forest/5 text-brand-wood-light">
                <Anchor className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-brand-forest">Travel Times</h4>
              <div className="space-y-3 text-xs text-brand-forest/80 text-left">
                <div className="flex justify-between border-b border-brand-forest/5 pb-1">
                  <span>Chiang Mai Airport (CNX) → Guesthouse</span>
                  <span className="font-semibold text-brand-wood-light">10 mins Drive</span>
                </div>
                <div className="flex justify-between border-b border-brand-forest/5 pb-1">
                  <span>Chiang Mai Train Station → Guesthouse</span>
                  <span className="font-semibold text-brand-wood-light">15 mins Drive</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>Chiang Mai Gate (Old City) → Guesthouse</span>
                  <span className="font-semibold text-brand-wood-light">5 mins Walk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
