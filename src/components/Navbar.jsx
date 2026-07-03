import React, { useState } from 'react';
import { Menu, X, Compass, Home, Moon, Phone } from 'lucide-react';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rooms', label: 'Rooms & Rates', icon: Moon },
    { id: 'explore', label: 'Location & Vibes', icon: Compass },
    { id: 'contact', label: 'Book Your Stay', icon: Phone },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full glassmorphism transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="font-serif text-2xl font-bold tracking-wide text-brand-forest">
              Plumeria <span className="text-brand-wood-light font-sans font-light text-xl">Home</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'text-brand-wood-light'
                      : 'text-brand-forest/80 hover:text-brand-forest'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {/* Subtle underline indicator */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-wood-light transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-4 cursor-pointer bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Reserve Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-forest p-2 rounded-md hover:bg-brand-sand-dark focus:outline-none transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-cream border-t border-brand-forest/5 ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-4 space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-brand-forest/10 text-brand-forest'
                    : 'text-brand-forest/70 hover:bg-brand-sand-dark hover:text-brand-forest'
                }`}
              >
                <Icon className="w-5 h-5 text-brand-wood-light" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-4 py-3 rounded-lg text-base font-medium tracking-wide text-center transition-colors duration-200 shadow-md"
          >
            Reserve Now
          </button>
        </div>
      </div>
    </nav>
  );
}
