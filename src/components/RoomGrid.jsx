import React from 'react';
import { siteData } from '../data/siteData';
import { Maximize, Tag, Check } from 'lucide-react';

export default function RoomGrid({ setActivePage, setPreSelectedRoom }) {
  const handleBookRoom = (roomTitle) => {
    if (setPreSelectedRoom) {
      setPreSelectedRoom(roomTitle);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-sand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block mb-2">Our Sanctuaries</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest">Villas & Staying Options</h2>
          <p className="text-brand-forest/70 mt-3 text-sm sm:text-base">
            Every room at Plumeria Home is handcrafted with high-quality local timber and designed to let you experience the calming mountain breeze.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-brand-cream rounded-2xl overflow-hidden border border-brand-forest/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Hover Zoom and CSS crop */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-forest text-brand-sand px-3 py-1 rounded-md text-xs font-medium tracking-wide uppercase shadow-sm">
                  {room.audience === 'all' ? 'Signature' : room.audience}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest tracking-wide group-hover:text-brand-wood transition-colors duration-300">
                      {room.title}
                    </h3>
                  </div>

                  <p className="text-brand-forest/70 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex items-center space-x-6 text-brand-forest/60 text-xs font-medium py-1.5 border-y border-brand-forest/5">
                    <div className="flex items-center space-x-1.5">
                      <Maximize className="w-4 h-4 text-brand-wood-light" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Tag className="w-4 h-4 text-brand-wood-light" />
                      <span>{room.price}</span>
                    </div>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <h4 className="text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">Amenities</h4>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-brand-forest/80">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-brand-wood-light shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <button 
                    onClick={() => handleBookRoom(room.title)}
                    className="w-full bg-brand-forest hover:bg-brand-forest-light text-brand-sand py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-transparent hover:-translate-y-0.5"
                  >
                    Reserve - {room.price}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
