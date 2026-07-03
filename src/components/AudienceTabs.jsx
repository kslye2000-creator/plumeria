import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Wifi, Compass, Heart, CheckCircle2 } from 'lucide-react';

export default function AudienceTabs({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('nomads');

  const getIcon = (id) => {
    switch (id) {
      case 'nomads': return <Wifi className="w-4 h-4" />;
      case 'backpackers': return <Compass className="w-4 h-4" />;
      case 'families': return <Heart className="w-4 h-4" />;
      default: return null;
    }
  };

  const selectedAudience = siteData.audiences.find(aud => aud.id === activeTab);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block mb-2">Designed For You</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest">Your Stay, Your Rhythm</h2>
        <p className="text-brand-forest/70 mt-3 text-sm sm:text-base">
          Whether you need to attend video calls, explore Saturday Walking Streets, or relax under plumeria trees with your loved ones, Plumeria Home is tailored to fit your lifestyle.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 bg-brand-sand-dark rounded-xl border border-brand-forest/5 shadow-sm max-w-full overflow-x-auto">
          {siteData.audiences.map((aud) => (
            <button
              key={aud.id}
              onClick={() => setActiveTab(aud.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === aud.id
                  ? 'bg-brand-forest text-brand-sand shadow-md'
                  : 'text-brand-forest/70 hover:text-brand-forest hover:bg-brand-sand-dark'
              }`}
            >
              {getIcon(aud.id)}
              <span>{aud.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Panel Content */}
      <div className="bg-brand-cream border border-brand-forest/5 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Description & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <div>
              <span className="text-brand-wood-light font-serif text-sm italic">{selectedAudience.subtitle}</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest mt-1">
                {selectedAudience.title}
              </h3>
            </div>
            
            <p className="text-brand-forest/80 text-sm sm:text-base leading-relaxed">
              {selectedAudience.description}
            </p>

            <ul className="space-y-3.5 pt-2">
              {selectedAudience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-brand-forest/95">
                  <CheckCircle2 className="w-5 h-5 text-brand-wood-light shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={() => {
                  setActivePage('rooms');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-6 py-3.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center space-x-2 cursor-pointer"
              >
                <span>View Matching Stay Options</span>
              </button>
            </div>
          </div>

          {/* Visual Container with CSS cropped image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-brand-forest/5 group">
              <img
                src={selectedAudience.image}
                alt={selectedAudience.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/30 to-transparent opacity-60 pointer-events-none" />
              {/* Decorative wood accent border */}
              <div className="absolute inset-3 border border-brand-sand/30 rounded-lg pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
