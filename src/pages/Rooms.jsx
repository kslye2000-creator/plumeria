import React from 'react';
import { siteData } from '../data/siteData';
import { Maximize, Check, Award, ArrowRight } from 'lucide-react';

export default function Rooms({ setActivePage, setPreSelectedRoom }) {
  const handleBookRoom = (roomTitle) => {
    if (setPreSelectedRoom) {
      setPreSelectedRoom(roomTitle);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block">Tropical Accommodation</span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-forest">Rooms & Staying Rates</h1>
        <p className="text-brand-forest/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Select from our curated private spaces. Each room is built inside our traditional teakwood house or cozy garden cabins, blending Lanna style with modern comforts.
        </p>
      </div>

      {/* Room Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 max-w-5xl flex-1 lg:flex-none">
          {siteData.rooms.map((room) => (
            <div
              key={room.id}
              className="bg-brand-cream border border-brand-forest/5 rounded-2xl overflow-hidden shadow-md flex flex-col lg:flex-row group transition-all duration-300 hover:shadow-lg hover:border-brand-wood-muted/20 flex-1"
            >
              {/* Image Column */}
              <div className="lg:w-[40%] relative min-h-[250px] lg:min-h-full overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                />
                <div className="absolute top-4 left-4 bg-brand-forest text-brand-sand px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest">
                  {room.audience}
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-[60%] p-6 sm:p-8 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-forest tracking-wide">
                      {room.title}
                    </h3>
                    <span className="text-brand-wood-light text-xs font-semibold block mt-1 uppercase tracking-widest">
                      {room.price}
                    </span>
                  </div>

                  <p className="text-brand-forest/70 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Stats */}
                  <div className="flex flex-wrap gap-4 text-brand-forest/60 text-xs py-2.5 border-y border-brand-forest/5 font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <Maximize className="w-4 h-4 text-brand-wood-light" />
                      <span>{room.size} Space</span>
                    </div>
                    {room.weeklyRate && (
                      <div className="flex items-center space-x-1.5">
                        <Award className="w-4 h-4 text-brand-wood-light" />
                        <span>Weekly: {room.weeklyRate}</span>
                      </div>
                    )}
                    {room.monthlyNomadRate && (
                      <div className="flex items-center space-x-1.5 text-brand-wood">
                        <Award className="w-4 h-4" />
                        <span>Monthly: {room.monthlyNomadRate}</span>
                      </div>
                    )}
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">Room Amenities</h4>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-brand-forest/80">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <Check className="w-3.5 h-3.5 text-brand-wood-light shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Book & Inquire Buttons */}
                <div className="pt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleBookRoom(room.title)}
                    className="flex-1 bg-brand-forest hover:bg-brand-forest-light text-brand-sand py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 cursor-pointer border border-transparent hover:-translate-y-0.5"
                  >
                    <span>Book Nightly</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (setPreSelectedRoom) {
                        setPreSelectedRoom(room.title + " (Monthly Nomad Stay)");
                      }
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 bg-brand-cream border border-brand-forest/20 text-brand-forest hover:border-brand-wood hover:text-brand-wood py-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center space-x-1.5 cursor-pointer hover:-translate-y-0.5"
                  >
                    <span>Inquire for Monthly Nomad Rates</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Long-Stay Discount Note */}
      <section className="bg-brand-sand-dark py-12 px-4 sm:px-6 lg:px-8 border-y border-brand-forest/5 max-w-7xl mx-auto rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-forest">Planning a Long-Term Stay?</h3>
            <p className="text-brand-forest/70 text-sm leading-relaxed">
              We offer exclusive deals for digital nomads and families seeking long stays. Rest, work, and explore Chiang Mai without stress. Enjoy <strong>20% off</strong> on weekly bookings and up to <strong>40% off</strong> on stays longer than 28 nights.
            </p>
          </div>
          <div className="text-center md:text-right">
            <button
              onClick={() => setActivePage('contact')}
              className="bg-brand-wood hover:bg-brand-wood-light text-brand-sand px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm cursor-pointer inline-block"
            >
              Request Long-Stay Deal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
