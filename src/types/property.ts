// Define the structure (Interface) for a Property object
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  area: number; // in sqm
  bedrooms: number;
  bathrooms: number;
  // تم التعديل لإضافة 'Penthouse' و 'Townhouse'
  type: 'Apartment' | 'Villa' | 'Land' | 'Commercial' | 'Penthouse' | 'Townhouse';
  imagePath: string;
  isFeatured: boolean;
  amenities: string[];
  details?: { // تم وضعه كاختياري لتجاوز مشاكل البيانات المفقودة مؤقتاً
      yearBuilt: number;
      parkingSpaces: number;
  };
}
