import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { MapPin, Footprints, Car, UtensilsCrossed, Church, TreePine, ShoppingBag, ArrowRight } from 'lucide-react';

const iconMap = {
  UtensilsCrossed: UtensilsCrossed,
  Church: Church,
  TreePine: TreePine,
  ShoppingBag: ShoppingBag,
};

export default function Explore({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const allSpots = siteData.exploreCategories.flatMap(cat =>
    cat.spots.map(spot => ({ ...spot, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSpots = activeCategory === 'all'
    ? allSpots
    : allSpots.filter(s => s.categoryId === activeCategory);

  return (
    <div className="py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block">
          Explore Chiang Mai
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-forest">
          Your Neighborhood Guide
        </h1>
        <p className="text-brand-forest/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Every great stay starts with a great location. Plumeria Home sits in the quiet Wualai/
          Haiya neighborhood — steps from legendary street food, silver temples, and lush parks.
        </p>
      </div>

      {/* Hero Map Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-brand-forest">
          <img src="/selected/neighbourhood.png" alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/70 via-brand-forest/40 to-transparent z-10" />
          <div className="absolute bottom-8 left-8 right-8 z-20 text-left max-w-xl">
            <div className="inline-flex items-center space-x-1.5 bg-brand-terracotta text-brand-sand px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>14 Wualai Rd Soi 2, Hai Ya</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-cream mt-3 leading-tight">
              Everything Within 5 km
            </h2>
            <p className="text-brand-sand/80 text-sm mt-2 leading-relaxed">
              From our front door you can walk to night markets, silver temples, and lakeside food courts.
              Most attractions are under 2 km away.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 p-1.5 bg-brand-sand-dark rounded-xl border border-brand-forest/5 shadow-sm justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-brand-forest text-brand-sand shadow-sm'
                : 'text-brand-forest/70 hover:text-brand-forest hover:bg-brand-sand/50'
            }`}
          >
            All Spots
          </button>
          {siteData.exploreCategories.map(cat => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-forest text-brand-sand shadow-sm'
                    : 'text-brand-forest/70 hover:text-brand-forest hover:bg-brand-sand/50'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spots Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSpots.map((spot, idx) => (
            <div
              key={idx}
              className="bg-brand-cream border border-brand-forest/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-brand-wood-muted/20 transition-all duration-300"
            >
              {spot.thumbnail && (
                <img
                  src={spot.thumbnail}
                  alt={spot.name}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-6 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-brand-forest">{spot.name}</h3>
                  <div className="flex items-center space-x-3 text-xs text-brand-forest/60">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-terracotta" />
                      <span>{spot.dist}</span>
                    </span>
                    <span className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      spot.walking
                        ? 'bg-brand-forest/10 text-brand-forest'
                        : 'bg-brand-wood/10 text-brand-wood'
                    }`}>
                      {spot.walking ? <Footprints className="w-3 h-3" /> : <Car className="w-3 h-3" />}
                      <span>{spot.walking ? 'Walkable' : 'Short Ride'}</span>
                    </span>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-terracotta bg-brand-terracotta/10 px-2.5 py-1 rounded-full">
                  {spot.categoryTitle}
                </span>
              </div>
              <p className="text-brand-forest/70 text-sm leading-relaxed">
                {spot.desc}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Getting Around CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-brand-sand-dark border border-brand-forest/5 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">Getting to Plumeria Home</h2>
          <p className="text-brand-forest/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Chiang Mai International Airport (CNX) is just a 10-minute drive away. We offer
            airport shuttle service upon request — simply let us know your arrival time.
          </p>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-md inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Inquire About Airport Pickups</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
