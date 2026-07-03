import React from 'react';
import BookingForm from '../components/BookingForm';
import { Mail, Phone, HelpCircle, ExternalLink } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Contact({ preSelectedRoom }) {
  const faqs = [
    {
      q: "What is your cancellation policy?",
      a: "For digital nomads and standard guests, we offer free cancellation up to 14 days before arrival. For long-stay discounted bookings, cancellations require 30 days notice."
    },
    {
      q: "How fast and reliable is the Wi-Fi?",
      a: "We have dedicated, high-speed fiber-optic lines running to each villa. Standard speeds are 300+ Mbps downstream, making it perfect for Zoom calls, VPN access, and large uploads."
    },
    {
      q: "Can you organize airport taxi transfers?",
      a: "Yes! We can arrange a private taxi from Chiang Mai International Airport (CNX) directly to our guesthouse (about a 10-minute drive). Simply tick the option or add your details in the form."
    },
    {
      q: "Do you serve vegetarian / halal options?",
      a: "Our home-cooked breakfasts are locally sourced and naturally halal. We happily prepare vegetarian, vegan, and gluten-free Northern Thai dishes (like Khao Soi) upon request."
    }
  ];

  return (
    <div className="py-12 space-y-12">
      {/* Contact Form */}
      <BookingForm preSelectedRoom={preSelectedRoom} />

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10">
          <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block mb-2">Common Inquiries</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-forest">Stay FAQs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-brand-cream border border-brand-forest/5 p-6 rounded-xl space-y-2.5 shadow-sm">
              <div className="flex items-start space-x-2 text-brand-forest">
                <HelpCircle className="w-5 h-5 text-brand-wood-light shrink-0 mt-0.5" />
                <h4 className="font-serif font-bold text-base leading-snug">{faq.q}</h4>
              </div>
              <p className="text-brand-forest/70 text-sm leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-brand-cream p-6 rounded-xl border border-brand-forest/5 text-center space-y-2 shadow-sm">
          <div className="inline-flex p-3 rounded-full bg-brand-forest/5 text-brand-wood-light">
            <Phone className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-brand-forest">Call Us</h4>
          <p className="text-xs text-brand-forest/60">Mon-Sun • 8am - 8pm ICT</p>
          <a href={`tel:${siteData.phone.replace(/ /g, '')}`} className="text-sm font-semibold text-brand-forest hover:text-brand-wood-light transition-colors block">{siteData.phone}</a>
        </div>

        <div className="bg-brand-cream p-6 rounded-xl border border-brand-forest/5 text-center space-y-2 shadow-sm">
          <div className="inline-flex p-3 rounded-full bg-brand-forest/5 text-brand-wood-light">
            <Mail className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-brand-forest">Email Us</h4>
          <p className="text-xs text-brand-forest/60">Mrs. Big</p>
          <a href={`mailto:${siteData.emailPrimary}`} className="text-sm font-semibold text-brand-forest hover:text-brand-wood-light transition-colors block">{siteData.emailPrimary}</a>
          <p className="text-xs text-brand-forest/60 mt-1">Mr. Tok</p>
          <a href={`mailto:${siteData.emailSecondary}`} className="text-sm font-semibold text-brand-forest hover:text-brand-wood-light transition-colors block">{siteData.emailSecondary}</a>
        </div>

        <div className="bg-brand-cream p-6 rounded-xl border border-brand-forest/5 text-center space-y-2 shadow-sm">
          <div className="inline-flex p-3 rounded-full bg-brand-forest/5 text-brand-wood-light">
            <ExternalLink className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-brand-forest">Facebook</h4>
          <p className="text-xs text-brand-forest/60">Follow us</p>
          <a href={siteData.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand-forest hover:text-brand-wood-light transition-colors block">Plumeria Home</a>
        </div>
      </section>
    </div>
  );
}
