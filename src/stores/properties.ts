import { defineStore } from 'pinia';
import { ref, computed } from 'vue';


const REPO_NAME = 'REAL-ESTATE-VITE';
const BASE_PATH = process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '';



export interface Property {
  id: string;
  type: 'Penthouse' | 'Villa' | 'Townhouse' | 'Apartment';
  title: string;
  location: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  imagePath: string; // سيتم تعديل مساره الآن ليشمل BASE_PATH
  isFeatured: boolean;
  amenities: string[];
}

const mockProperties: Property[] = [
  {
    id: 'P1',
    type: 'Penthouse',
    title: 'Coastal Executive Penthouse',
    location: 'Miami, USA',
    price: 4500000,
    area: 320,
    bedrooms: 3,
    bathrooms: 4,
    description: 'A breathtaking executive penthouse with panoramic ocean views. Featuring floor-to-ceiling windows, smart home technology, and private lift access. This residence defines exclusive coastal living, offering a sanctuary of light and space. Located in Miami\'s most exclusive coastal strip, minutes away from high-end dining and private yacht clubs. The master suite includes a private balcony and a spa-like en-suite bathroom with a soaking tub and dual vanities. This is where luxury meets the horizon.',
    // تم التعديل: BASE_PATH يضمن أن المسار يبدأ بـ /REAL-ESTATE-VITE/images... على الإنترنت
    imagePath: `${BASE_PATH}/images/P1.jpg.jpg`,
    isFeatured: true,
    amenities: ['Private Elevator', 'Ocean View', 'Smart Home System', 'Concierge 24/7'],
  },
  {
    id: 'P2',
    type: 'Villa',
    title: 'Modern Villa with Private Garden',
    location: 'Marbella, Spain',
    price: 7800000,
    area: 550,
    bedrooms: 5,
    bathrooms: 6,
    description: 'An architectural masterpiece offering unparalleled luxury and serenity. This villa boasts an infinity pool, a meticulously maintained private garden, a home cinema, and state-of-the-art security systems. Designed by Renzo Piano, it provides ultimate privacy and seamless indoor-outdoor living, ideal for private retreats and grand entertaining. The expansive living areas open directly onto the pool deck, offering magnificent views of the surrounding mountains. Absolute privacy guaranteed.',
    imagePath: `${BASE_PATH}/images/P2.jpg.jpg`,
    isFeatured: true,
    amenities: ['Infinity Pool', 'Home Cinema', 'Gated Community', 'Smart Climate Control'],
  },
  {
    id: 'P3',
    type: 'Townhouse',
    title: 'Historic Townhouse London',
    location: 'Kensington, UK',
    price: 3200000,
    area: 280,
    bedrooms: 4,
    bathrooms: 3,
    description: 'A charming, fully renovated historic townhouse in the heart of Kensington. Blending classic British architecture with modern interior design, original fireplaces, and a secluded roof terrace overlooking the city skyline. This property offers elegance and historic charm with every modern convenience. The lower ground floor features a bespoke wine cellar and a separate staff entrance. Ideal location for cultural pursuits.',
    imagePath: `${BASE_PATH}/images/P3.jpg.jpg`,
    isFeatured: true,
    amenities: ['Roof Terrace', 'Bespoke Wine Cellar', 'Original Features', 'Prime Location'],
  },
  {
    id: 'P4',
    type: 'Villa',
    title: 'Desert Oasis Luxury Villa',
    location: 'Palm Springs, USA',
    price: 2900000,
    area: 400,
    bedrooms: 4,
    bathrooms: 5,
    description: 'Experience desert luxury in this secluded villa. Designed for entertainment, it features a massive outdoor patio, stunning mountain views, a sunken lounge area, and a bespoke outdoor kitchen. Perfect for sun-drenched gatherings and serene living. The interior design maximizes natural light and features custom-made furniture throughout. A true sanctuary away from the city bustle.',
    imagePath: `${BASE_PATH}/images/P4.jpg.jpg`,
    isFeatured: false,
    amenities: ['Mountain Views', 'Outdoor Kitchen', 'Sunken Lounge', 'Extensive Patio'],
  },
  {
    id: 'P5',
    type: 'Penthouse',
    title: 'Skyline Residence Dubai',
    location: 'Downtown Dubai, UAE',
    price: 12500000,
    area: 600,
    bedrooms: 4,
    bathrooms: 5,
    description: 'A rare opportunity to own one of the highest penthouses in Downtown Dubai. Enjoy 360-degree views of the Burj Khalifa and the coastline. Includes a private gym, office space, and access to exclusive residential services. Finished to the highest standard with marble floors and signature lighting installations. An investment in the ultimate high-rise lifestyle.',
    imagePath: `${BASE_PATH}/images/P5.jpg.jpg`,
    isFeatured: true,
    amenities: ['360-Degree Views', 'Private Gym', 'Luxury Finishes', 'Helipad Access'],
  },
  {
    id: 'P6',
    type: 'Villa',
    title: 'Lakefront Modern Retreat',
    location: 'Lake Como, Italy',
    price: 9500000,
    area: 480,
    bedrooms: 6,
    bathrooms: 6,
    description: 'Timeless elegance meets modern design on the shores of Lake Como. This villa features a private dock, terraced gardens, and stunning views of the Italian Alps. A truly private and inspirational setting. Every bedroom is en-suite, and the property includes a dedicated wellness area with a sauna and steam room. Perfect for large families or corporate retreats.',
    imagePath: `${BASE_PATH}/images/P6.jpg.jpg`,
    isFeatured: true,
    amenities: ['Private Dock', 'Terraced Gardens', 'Wellness Area', 'Alp Views'],
  },
  {
    id: 'P7',
    type: 'Townhouse',
    title: 'Riverside Designer Home',
    location: 'Sydney, Australia',
    price: 2100000,
    area: 240,
    bedrooms: 3,
    bathrooms: 3,
    description: 'Contemporary townhouse positioned directly on the riverfront. Features floor-to-ceiling glass, high-end Gaggenau appliances, and a secluded plunge pool. Ideal for the discerning urban professional. The multi-level layout ensures maximum light and views from all primary rooms. Low-maintenance luxury living at its best.',
    imagePath: `${BASE_PATH}/images/P7.jpg.jpg`,
    isFeatured: false,
    amenities: ['Riverfront Access', 'Plunge Pool', 'Gaggenau Kitchen', 'Multi-Level Design'],
  },
  {
    id: 'P8',
    type: 'Penthouse',
    title: 'Manhattan View Penthouse',
    location: 'New York, USA',
    price: 18000000,
    area: 700,
    bedrooms: 5,
    bathrooms: 7,
    description: 'The pinnacle of luxury in the heart of Manhattan. Offering unparalleled views of Central Park and the city skyline. Features a custom wine cellar, private screening room, and 24/7 concierge service. Custom-commissioned artwork and furniture are included in the sale. The ultimate status-symbol and a masterpiece of interior design.',
    imagePath: `${BASE_PATH}/images/P8.jpg.jpg`,
    isFeatured: true,
    amenities: ['Central Park Views', 'Private Screening Room', 'Wine Cellar', 'Staff Quarters'],
  }
];

export const usePropertiesStore = defineStore('properties', () => {
  const properties = ref<Property[]>(mockProperties);


  function getPropertyById(id: string) {

    return computed(() => properties.value.find(p => p.id === id));
  }


  // function searchProperties(query: string) {
  //   const lowerCaseQuery = query.toLowerCase();
  //   return properties.value.filter(p => p.title.toLowerCase().includes(lowerCaseQuery) || p.location.toLowerCase().includes(lowerCaseQuery));
  // }

  return {
    properties,
    getPropertyById,
    // searchProperties
  };
});
