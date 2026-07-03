import React, { useState, useEffect } from 'react';
import { Calendar, User, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function BookingForm({ preSelectedRoom }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'General Inquiry / Not Sure',
    guests: '1',
    message: '',
    wifiNeed: false,
    kayakNeed: false,
    breakfastNeed: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preSelectedRoom) {
      setFormData(prev => ({ ...prev, roomType: preSelectedRoom }));
    }
  }, [preSelectedRoom]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut) {
      setErrorMsg('Please fill in all required fields (*).');
      return;
    }

    // Basic date validation
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    if (checkOutDate <= checkInDate) {
      setErrorMsg('Check-out date must be after check-in date.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: 'General Inquiry / Not Sure',
      guests: '1',
      message: '',
      wifiNeed: false,
      kayakNeed: false,
      breakfastNeed: false
    });
    setSubmitted(false);
  };

  return (
    <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-brand-wood-light text-xs font-semibold uppercase tracking-widest block mb-2">Request Reservation</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-forest">Book Your Lanna Garden Stay</h2>
        <p className="text-brand-forest/70 mt-3 text-sm sm:text-base">
          Fill out this request form, and our family team will verify room availability and contact you within 12 hours.
        </p>
      </div>

      <div className="bg-brand-cream border border-brand-forest/5 rounded-2xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        {submitted ? (
          /* Success Screen */
          <div className="text-center py-12 space-y-6 animate-fade-in flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-forest/10 flex items-center justify-center text-brand-wood mb-2">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-brand-forest">Request Received!</h3>
            <p className="text-brand-forest/70 text-sm sm:text-base max-w-md leading-relaxed mx-auto">
              Sawasdee Kha! Thank you, <strong>{formData.name}</strong>, for requesting a stay for <strong>{formData.guests} {parseInt(formData.guests) === 1 ? 'guest' : 'guests'}</strong> in the <strong>{formData.roomType}</strong>.
            </p>
            <div className="bg-brand-sand-dark rounded-xl p-6 max-w-md w-full text-left space-y-2 border border-brand-forest/5 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold text-brand-forest/60">Check-In:</span>
                <span>{formData.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-brand-forest/60">Check-Out:</span>
                <span>{formData.checkOut}</span>
              </div>
              {(formData.wifiNeed || formData.kayakNeed || formData.breakfastNeed) && (
                <div className="border-t border-brand-forest/5 pt-2 mt-2">
                  <span className="font-semibold text-brand-forest/60 block mb-1">Add-ons requested:</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {formData.wifiNeed && <span className="bg-brand-forest text-brand-sand px-2 py-1 rounded">Writing Desk Setup</span>}
                    {formData.kayakNeed && <span className="bg-brand-forest text-brand-sand px-2 py-1 rounded">Scooter / Bicycle Rental</span>}
                    {formData.breakfastNeed && <span className="bg-brand-forest text-brand-sand px-2 py-1 rounded">Airport Shuttle Pickup</span>}
                  </div>
                </div>
              )}
            </div>
            <p className="text-brand-forest/60 text-xs italic">
              We have sent a verification email to {formData.email}. Our team will reach out with the final confirmation shortly.
            </p>
            <button
              onClick={resetForm}
              className="mt-6 bg-brand-forest hover:bg-brand-forest-light text-brand-sand px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 shadow-md cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            {errorMsg && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-sm font-medium">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-forest/40">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Somchai Sawasdee"
                    className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light focus:ring-1 focus:ring-brand-wood-light text-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-forest/40">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="somchai@gmail.com"
                    className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light focus:ring-1 focus:ring-brand-wood-light text-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-forest/40">
                    <Phone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+66 81 234 5678"
                    className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light focus:ring-1 focus:ring-brand-wood-light text-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg px-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm transition-all duration-300"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests (Family Suite)</option>
                </select>
              </div>

              {/* Check-In */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Check-In Date *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-forest/40">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm transition-all duration-300"
                  />
                </div>
              </div>

              {/* Check-Out */}
              <div>
                <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                  Check-Out Date *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-forest/40">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Room Selection */}
            <div>
              <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                Preferred stay option
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg px-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light text-sm transition-all duration-300"
              >
                <option value="General Inquiry / Not Sure">General Inquiry / Not Sure</option>
                {siteData.rooms.map(room => (
                  <option key={room.id} value={room.title}>{room.title} ({room.price})</option>
                ))}
              </select>
            </div>

            {/* Custom checkboxes for demographic requirements */}
            <div>
              <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-3">
                Tailor your experiences (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label className="flex items-center space-x-3 p-3.5 bg-brand-sand-dark rounded-xl border border-brand-forest/5 cursor-pointer hover:border-brand-wood-light transition-all duration-300">
                  <input
                    type="checkbox"
                    name="wifiNeed"
                    checked={formData.wifiNeed}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 rounded text-brand-forest border-brand-forest/10 focus:ring-brand-wood-light focus:ring-opacity-20 accent-brand-forest"
                  />
                  <span className="text-xs sm:text-sm text-brand-forest/90">Writing Desk Setup</span>
                </label>

                <label className="flex items-center space-x-3 p-3.5 bg-brand-sand-dark rounded-xl border border-brand-forest/5 cursor-pointer hover:border-brand-wood-light transition-all duration-300">
                  <input
                    type="checkbox"
                    name="kayakNeed"
                    checked={formData.kayakNeed}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 rounded text-brand-forest border-brand-forest/10 focus:ring-brand-wood-light focus:ring-opacity-20 accent-brand-forest"
                  />
                  <span className="text-xs sm:text-sm text-brand-forest/90">Scooter / Bicycle Rental</span>
                </label>

                <label className="flex items-center space-x-3 p-3.5 bg-brand-sand-dark rounded-xl border border-brand-forest/5 cursor-pointer hover:border-brand-wood-light transition-all duration-300">
                  <input
                    type="checkbox"
                    name="breakfastNeed"
                    checked={formData.breakfastNeed}
                    onChange={handleChange}
                    className="w-4.5 h-4.5 rounded text-brand-forest border-brand-forest/10 focus:ring-brand-wood-light focus:ring-opacity-20 accent-brand-forest"
                  />
                  <span className="text-xs sm:text-sm text-brand-forest/90">Airport Shuttle Pickup</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-brand-forest/70 uppercase tracking-wider mb-2">
                Special Requests or Questions
              </label>
              <div className="relative">
                <span className="absolute top-3.5 left-3 text-brand-forest/40">
                  <MessageSquare className="w-4 h-4" />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us if you require long-stay digital nomad deals, airport transfers, or elder-friendly room configurations."
                  className="w-full bg-brand-sand-dark border border-brand-forest/10 rounded-lg pl-10 pr-4 py-3 text-brand-forest focus:outline-none focus:border-brand-wood-light focus:ring-1 focus:ring-brand-wood-light text-sm transition-all duration-300"
                ></textarea>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full cursor-pointer bg-brand-forest hover:bg-brand-forest-light text-brand-sand py-4 rounded-xl text-base font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Submit Reservation Request
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
