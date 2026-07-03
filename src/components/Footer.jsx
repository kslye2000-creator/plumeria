import React from 'react';
import { Mail, Phone, MapPin, Compass } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-forest text-brand-sand/90 border-t border-brand-forest-light">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <span className="font-serif text-3xl font-bold tracking-wide text-brand-cream block">
              Plumeria <span className="text-brand-wood-muted font-sans font-light text-2xl">Home</span>
            </span>
            <p className="text-brand-sand/70 text-sm leading-relaxed max-w-sm">
              A secluded teakwood garden haven in Chiang Mai, Thailand. Blending traditional Lanna wooden architecture with warm local hospitality to create the ultimate workspace and relaxation getaway.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 rounded-full bg-brand-forest-light hover:bg-brand-wood-light text-brand-sand transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href={siteData.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-brand-forest-light hover:bg-brand-wood-light text-brand-sand transition-colors duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-forest-light hover:bg-brand-wood-light text-brand-sand transition-colors duration-300" aria-label="Map Location">
                <Compass className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-cream tracking-wide">Explore Stay</h4>
            <ul className="space-y-2.5 text-sm text-brand-sand/70">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer">
                  Welcome Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('rooms')} className="hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer">
                  Villas & Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('vibes')} className="hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer">
                  Location & Vibes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-brand-wood-muted transition-colors duration-300 cursor-pointer">
                  Book A Room
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-brand-cream tracking-wide">Contact Us</h4>
            <ul className="space-y-3.5 text-sm text-brand-sand/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-wood-muted shrink-0" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-wood-muted shrink-0" />
                <a href={`tel:${siteData.phone.replace(/ /g, '')}`} className="hover:text-brand-wood-muted transition-colors duration-300">{siteData.phone}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-wood-muted shrink-0" />
                <a href={`mailto:${siteData.emailPrimary}`} className="hover:text-brand-wood-muted transition-colors duration-300">{siteData.emailPrimary}</a>
              </li>
              <li className="text-xs text-brand-sand/60 mt-1">
                {siteData.emailSecondary} (Mr. Tok)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-brand-sand/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-sand/50">
          <p>© {new Date().getFullYear()} Plumeria Home. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for Serene Lanna Living • Chiang Mai, Thailand</p>
        </div>
      </div>
    </footer>
  );
}
