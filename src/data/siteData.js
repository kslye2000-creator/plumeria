export const siteData = {
  name: "Plumeria Home",
  tagline: "Serene Lanna Teakwood Homestay",
  location: "Chiang Mai, Thailand",
  neighborhood: "Sripingmuang/Haiya",
  address: "7/8 SeepingMueang Soi 3 Changklan, Mueang Chiang Mai District, Chiang Mai 50100",
  phone: "083 694 5963",
  emailPrimary: "big.pooh@hotmail.com",
  emailSecondary: "kanaes_1967@hotmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100070086097674#",
  details: "A cozy, adult-only 8-room Thai homestay spread across a charming 2-story building, offering a true home-away-from-home feeling in a quiet residential lane.",
  
  // Demographics targeting (with adapted mature/adult-only focus)
  audiences: [
    {
      id: "nomads",
      title: "Digital Nomads",
      subtitle: "Productivity Meets Peace",
      description: "Your quiet sanctuary to smash deadlines, free from the chaotic noise of standard party hostels, but deeply connected to Chiang Mai's remote work ecosystem.",
      image: "/selected/thumbnail/digital-nomad.png",
      highlights: [
        "Blazing-Fast, Seamless Fiber Internet: Zero lag, zero dropouts. Whether you're hosting a client Zoom call from your private room or pushing code to GitHub from the garden, you have enterprise-grade Wi-Fi completely covering the property.",
        "Serene Outdoor Work & Chill Areas: Swap fluorescent office lights for our quiet, green inner courtyard. Sip fresh coffee while working under the natural shade of tropical greenery, designed with comfortable seating and accessible power sockets.",
        "Perfect Balance of Isolation & Community: When you need absolute focus, your spacious 30-square-meter room provides a quiet haven. When you want a change of scenery, you're perfectly positioned near Chiang Mai's premier nomad hubs \u2014 Heartwork the Sharing Space (1.5 km), Punspace Tha Phae Gate (2.7 km), and The Story 106 Coworking (2.5 km)."
      ]
    },
    {
      id: "backpackers",
      title: "Backpacker",
      subtitle: "Authentic Lanna Vibe, Absolute Freedom",
      description: "An adult-only, traditional Thai homestay experience that treats you like family while giving you the keys to explore Chiang Mai on your own terms.",
      image: "/selected/thumbnail/backpacker.png",
      highlights: [
        "In-House Fleet (Bicycles & Motorbikes): Skip the sketchy city rental shops and passport deposit scams. Rent reliable, well-maintained motorbikes or grab a bicycle directly from the owner to cruise the historic alleyways at your own pace.",
        "The Ultimate Street Food Haven: Save your cash for adventures. You're a mere 0.35 km (walking distance) from Kad Manee Market, a massive, vibrant lakeside night market filled with cheap, legendary local street food, and just 1.3 km from the chaotic, delicious Chiang Mai Gate Market.",
        "A Shared Kitchen for Slow Travelers: Traveling long-term means missing home-cooked meals. Our fully-equipped communal kitchen lets you prep your own breakfast, share recipes with fellow travelers, and keep your food budget incredibly lean."
      ]
    },
    {
      id: "families",
      title: "Small Families & Couples",
      subtitle: "Your Cozy Home-Away-From-Home",
      description: "A secure, intimate, and deeply relaxing boutique space that cuts out the stress of travel so you can focus on making memories.",
      image: "/selected/thumbnail/family (1).png",
      highlights: [
        "The All-Day Free Refreshment Station: Unwind on the terrace with zero extra costs. Enjoy completely free, premium brewed machine coffee, an array of teas, local snacks, and instant access to unlimited hot & cold purified drinking water. Perfect for slow mornings or a quick pick-me-up.",
        "Seamless Family Transit (Car Rental Upon Request): Don't worry about wrangling luggage or kids onto local red trucks (Rod Daeng). Simply ask us, and we'll arrange a reliable, private car rental delivered right to our secure, free on-site parking lot.",
        "Tranquility Within Arm's Reach of Everything: Enjoy the safety and peaceful, sleepy pace of our residential neighborhood, knowing you're just 1.5 km away from the beautiful ponds, playground, and open lawns of Nong Buak Hard Public Park, and a quick 2 km drive from the airport."
      ]
    }
  ],

  // Rooms and Rates
  rooms: [
    {
      id: "standard-double",
      title: "King Bed Room",
      audience: "all",
      price: "800 THB / night",
      weeklyRate: "7,200 THB / week",
      monthlyNomadRate: "9,000 - 15,000 THB / month (excl. electricity)",
      image: "/selected/King-bed.jpg",
      description: "Spacious adult-only room looking out onto the quiet inner courtyard. Features 1 King Bed, a comfortable seating area, a writing desk, and a refrigerator.",
      size: "30 sqm",
      amenities: ["1 King Bed", "Garden/Courtyard View", "Writing Desk", "Refrigerator", "Air Conditioning", "Flat-Screen Cable TV", "Private Bathroom (Shower/Bidet)", "Slippers & Toiletries"]
    },
    {
      id: "standard-twin",
      title: "Twin Bed Room",
      audience: "all",
      price: "800 THB / night",
      weeklyRate: "7,200 THB / week",
      monthlyNomadRate: "9,000 - 15,000 THB / month (excl. electricity)",
      image: "/selected/Twin-bed.jpg",
      description: "Identical layout to the double room, featuring 2 Twin Beds instead of a King. Perfect for friends traveling together.",
      size: "30 sqm",
      amenities: ["2 Twin Beds", "Garden/Courtyard View", "Writing Desk", "Refrigerator", "Air Conditioning", "Flat-Screen Cable TV", "Private Bathroom (Shower/Bidet)", "Slippers & Toiletries"]
    }
  ],

  // Shared Facilities
  facilities: [
    { name: "Shared Community Kitchen", desc: "Fully equipped kitchen for preparing your own meals — a massive plus for digital nomads and families." },
    { name: "Lush Inner Garden & Terrace", desc: "Quiet courtyard with outdoor seating, hammocks, and a shaded gazebo for afternoon tea." },
    { name: "Free On-Site Private Parking", desc: "Secure gated car and scooter/bike bays inside the property." },
    { name: "Airport Shuttle Service", desc: "Available upon request for smooth transits from Chiang Mai Airport (10 min drive)." },
    { name: "Tour & Ticket Assistance", desc: "Book temple excursions, hikes, and cooking classes with local guides." },
    { name: "On-Site Hairdresser/Beautician", desc: "Beauty services available on the property for guest convenience." }
  ],

  // Local Points of Interest — categorized for the Explore page
  exploreCategories: [
    {
      id: "food-markets",
      title: "Food & Night Markets",
      icon: "UtensilsCrossed",
      spots: [
        { name: "Kad Manee Market", dist: "0.35 km", walking: true, desc: "A fantastic local evening food market centered around a lake. Perfect for cheap, authentic Thai street food in a lively lakeside atmosphere.", thumbnail: "/selected/thumbnail/kadmanee-market.png" },
        { name: "Chiang Mai Gate Market", dist: "1.3 km", walking: true, desc: "Bustling morning fresh produce market that transforms into a legendary street food market at night. Located at the southern entrance of the Old City wall.", thumbnail: "/selected/thumbnail/chiang-mai-gate-market.png" },
        { name: "Saturday Night Market (Wualai)", dist: "1.6 km", walking: true, desc: "Massive Wualai Road walking street specializing in local silver crafts, handmade goods, and street eats. Takes over the entire road every Saturday evening.", thumbnail: "/selected/thumbnail/saturday-night-market.png" },
        { name: "Sunday Night Walking Street (Tha Phae)", dist: "2.3 km", walking: false, desc: "The largest and most famous market in Chiang Mai, cutting straight through the center of the Old City every Sunday evening. Hundreds of food stalls and artisans.", thumbnail: "/selected/thumbnail/sunday-night market.png" }
      ]
    },
    {
      id: "temples-culture",
      title: "Temples & Culture",
      icon: "Church",
      spots: [
        { name: "Old Chiang Mai Cultural Center", dist: "0.5 km", walking: true, desc: "Offers traditional Northern Lanna Kantoke dinners and cultural dance performances in a historic setting.", thumbnail: "/selected/thumbnail/cultural-center.png" },
        { name: "Wat Sri Suphan (The Silver Temple)", dist: "1.4 km", walking: true, desc: "A stunning, intricate temple completely handcrafted from silver and aluminum. One of Chiang Mai's most unique temples.", thumbnail: "/selected/thumbnail/wat-sri-suphan.png" },
        { name: "Wat Chedi Luang", dist: "2.7 km", walking: false, desc: "Historic 14th-century temple ruins site in the heart of Chiang Mai's Old City. Massive ancient chedi and atmospheric temple grounds.", thumbnail: "/selected/thumbnail/wat-chendi-luang.png" }
      ]
    },
    {
      id: "nature-parks",
      title: "Nature & Parks",
      icon: "TreePine",
      spots: [
        { name: "Nong Buak Hard Public Park", dist: "1.5 km", walking: true, desc: "Beautiful manicured city park with ponds, bridges, coffee shops, and open grass fields. Extremely popular with digital nomads for running and yoga.", thumbnail: "/selected/thumbnail/park.png" }
      ]
    },
    {
      id: "shopping-services",
      title: "Shopping & Services",
      icon: "ShoppingBag",
      spots: [
        { name: "Central Plaza Chiang Mai Airport", dist: "1.3 km", walking: false, desc: "Major multi-story shopping mall featuring a modern supermarket, banks, international restaurants, and a cinema.", thumbnail: "/selected/thumbnail/central-mall.png" },
        { name: "Chiang Mai International Airport (CNX)", dist: "2.0 km", walking: false, desc: "Incredibly convenient transit access just 10 minutes from the guesthouse, making arrivals and departures seamless." }
      ]
    }
  ],

  // Vibes / Local Area
  vibes: {
    heroImage: "/selected/9e766f8d63c076ce7548559df8f12ec2.jpg",
    description: "Nestled in the residential Wualai neighborhood (Sripingmuang/Haiya), Plumeria Home offers a quiet garden guesthouse retreat. We are within walking distance of local food markets like Kad Manee, Lanna cultural centers, and local artisan shops.",
  },

  // Testimonials - authentic reviews from Google & TripAdvisor
  testimonials: [
    {
      name: "Taehyun Kim",
      role: "Digital Nomad & Developer",
      quote: "Clean, spacious rooms, great hosts, and great quiet location in Chiang Mai. I was pleasantly surprised to see what a short distance it was from the airport! Sasiwimol and her family were extremely welcoming.",
      rating: 5,
      demographic: "nomads",
      source: "Google Review"
    },
    {
      name: "Charlotte L.",
      role: "Family Traveler",
      quote: "Plumeria Home is a true hidden gem in Chiang Mai. A quiet and convenient location in a typical Thai teakwood home environment. The hostess Sasiwimol is very kind and good people. Truly felt like a home away from home.",
      rating: 5,
      demographic: "families",
      source: "TripAdvisor"
    },
    {
      name: "Maximilian Richter",
      role: "Solo Backpacker",
      quote: "Outstanding choice! Super close to the Wualai Saturday Night Walking Street and Silver Temple, yet located in a very quiet lane. Rooms are clean and comfortable, and the shared garden kitchen was perfect.",
      rating: 5,
      demographic: "backpackers",
      source: "Google Review"
    }
  ],

  // Gallery of actual images
  gallery: [
    { src: "/selected/IMG_20260703_103016.jpg", caption: "Teakwood details of our traditional house" },
    { src: "/selected/IMG_20260703_103430.jpg", caption: "Green garden pathways in the courtyard" },
    { src: "/selected/IMG_20260703_103502.jpg", caption: "Traditional Lanna guesthouse architecture" },
    { src: "/selected/IMG_20260703_103545.jpg", caption: "Cozy Lanna reading corner in the main room" },
    { src: "/selected/IMG_20260703_103742.jpg", caption: "Freshly prepared local snacks and hospitality" },
    { src: "/selected/IMG_20260703_103838.jpg", caption: "Relaxing garden hammocks under the trees" },
    { src: "/selected/IMG_20260703_104114.jpg", caption: "Beautiful garden colors in the quiet lane" },
    { src: "/selected/IMG_20260703_104252.jpg", caption: "Complimentary breakfast items and tea" },
    { src: "/selected/IMG_20260703_105843.jpg", caption: "Charming teakwood balcony overlooking the garden" },
    { src: "/selected/IMG_20260703_110032.jpg", caption: "Courtyard path to the cozy Lanna cabins" },
    { src: "/selected/IMG_20260703_110328.jpg", caption: "Hammock corner for reading and working" },
    { src: "/selected/IMG_20260703_110417.jpg", caption: "Shaded gazebo area for afternoon herbal tea" }
  ]
};
