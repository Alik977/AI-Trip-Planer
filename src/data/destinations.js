const destinations = [
  {
    id: 1,
    city: "Paris",
    country: "France",
    description:
      "Discover art, romance, iconic landmarks and amazing French cuisine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    description:
      "Explore historic streets, royal landmarks and modern British culture.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    city: "Rome",
    country: "Italy",
    description:
      "Walk through ancient history, beautiful architecture and authentic Italian cuisine.",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    city: "Tokyo",
    country: "Japan",
    description:
      "Experience futuristic streets, ancient temples, anime culture and incredible food.",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    city: "Dubai",
    country: "UAE",
    description:
      "Enjoy luxury, futuristic architecture, desert adventures and unforgettable views.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    city: "New York",
    country: "USA",
    description:
      "Feel the energy of Manhattan, iconic skyscrapers, Broadway and endless entertainment.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    city: "Barcelona",
    country: "Spain",
    description:
      "Discover Gaudí architecture, Mediterranean beaches and vibrant Spanish culture.",
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    city: "Yerevan",
    country: "Armenia",
    description:
      "Explore the pink city, Armenian history, local cuisine and beautiful mountain views.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXSrNsxmRiY6_w10vj1Q6OS4rjZW-Bzi57zmmxShvi4U6FtkiNN41-sQ&s=10",
  },
  {
    id: 9,
    city: "Istanbul",
    country: "Türkiye",
    description:
      "Experience two continents, colorful bazaars, mosques and amazing Turkish cuisine.",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    city: "Amsterdam",
    country: "Netherlands",
    description:
      "Ride along beautiful canals, explore museums and enjoy the relaxed Dutch atmosphere.",
    image:
      "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    city: "Prague",
    country: "Czech Republic",
    description:
      "Discover medieval streets, stunning castles and one of Europe's most beautiful old towns.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    city: "Vienna",
    country: "Austria",
    description:
      "Enjoy imperial palaces, classical music, elegant streets and famous Austrian cafés.",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    city: "Seoul",
    country: "South Korea",
    description:
      "Mix modern technology, K-culture, ancient palaces and incredible Korean food.",
    image:
      "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/destination/South-Korea/Seoul/219740_SCN_Seoul_iStock521707831_ZC35CD/Seoul-Scenery.jpg?tr=w-656%2Ch-390%2Cfo-auto",
  },
  {
    id: 14,
    city: "Singapore",
    country: "Singapore",
    description:
      "Explore futuristic architecture, tropical gardens and one of Asia's best food scenes.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 15,
    city: "Lisbon",
    country: "Portugal",
    description:
      "Enjoy colorful streets, ocean views, historic neighborhoods and Portuguese cuisine.",
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 16,
    city: "Athens",
    country: "Greece",
    description:
      "Step into ancient Greek history while enjoying Mediterranean food and sunny streets.",
    image:
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 17,
    city: "Sydney",
    country: "Australia",
    description:
      "Enjoy beaches, the famous Opera House, nature and a relaxed Australian lifestyle.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 18,
    city: "Bangkok",
    country: "Thailand",
    description:
      "Discover temples, street food, night markets and the energy of Thailand's capital.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 19,
    city: "Milan",
    country: "Italy",
    description:
      "Experience Italian fashion, design, incredible food and beautiful historic landmarks.",
    image:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 20,
    city: "Stockholm",
    country: "Sweden",
    description:
      "Explore Scandinavian design, islands, historic streets and beautiful Nordic nature.",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80",
  },
];
export default destinations;
