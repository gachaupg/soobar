
// Dummy data for the ecommerce system

export interface Product {
  id: string;
  title: string;
  price: number;
  currency: string;
  category: string;
  subcategory?: string;
  location: string;
  description: string;
  condition: string;
  sellerName: string;
  sellerRating: number;
  sellerAvatar: string;
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  datePosted: string;
  specifications?: Record<string, string | number | boolean>;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  count: number;
}

export interface Location {
  id: string;
  name: string;
  count: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  whatsapp?: string;
  location: string;
  rating: number;
  totalReviews: number;
  memberSince: string;
  isVerified: boolean;
}

// Dummy products
export const products: Product[] = [
  {
    id: "1",
    title: "Classic Mini Cooper S 2017",
    price: 22000,
    currency: "USD",
    category: "Cars",
    subcategory: "Mini",
    location: "Mogadishu",
    description: "Classic Mini Cooper S in excellent condition. Low mileage, well maintained, and comes with all the original accessories.",
    condition: "Used",
    sellerName: "Leeza Alam",
    sellerRating: 5.0,
    sellerAvatar: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    images: ["/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png"],
    isFeatured: true,
    isNew: false,
    datePosted: "2023-04-15",
    specifications: {
      year: 2017,
      mileage: 45000,
      fuel: "Petrol",
      transmission: "Automatic",
      color: "Blue",
      doors: 4
    }
  },
  {
    id: "2",
    title: "Porsche Panamera Hybrid",
    price: 85000,
    currency: "USD",
    category: "Cars",
    subcategory: "Luxury",
    location: "Mogadishu",
    description: "Porsche Panamera in pristine condition with low mileage. This car has been keeping up with the times and fashion trends in the exotic dream industry! No accident just checked with a CarFax report! This ride maintains its value well over time. The new AER AMAX 90 CD is the iconic athlete shoe from Nike. They are super comfortable to various school levels and formally protect the human feet. This model of sneaker for practicing various sports.",
    condition: "New",
    sellerName: "Leeza Alam",
    sellerRating: 5.0,
    sellerAvatar: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    images: ["/lovable-uploads/9f930f86-d721-4f49-9ef8-6a85c08b5eac.png"],
    isFeatured: true,
    isNew: true,
    datePosted: "2023-08-10",
    specifications: {
      year: 2023,
      mileage: 1500,
      fuel: "Hybrid",
      transmission: "Automatic",
      color: "White",
      doors: 4
    }
  },
  {
    id: "3",
    title: "Mustang GT Premium 2020",
    price: 45000,
    currency: "USD",
    category: "Cars",
    subcategory: "Muscle",
    location: "Mogadishu",
    description: "Ford Mustang GT Premium with low mileage. Powerful V8 engine, premium sound system, and leather interior.",
    condition: "Used",
    sellerName: "Ahmed Hassan",
    sellerRating: 4.8,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/513f8cc6-52d0-459b-8d64-8bfad9ef1a0e.png"],
    isFeatured: false,
    isNew: false,
    datePosted: "2023-07-22",
    specifications: {
      year: 2020,
      mileage: 22000,
      fuel: "Petrol",
      transmission: "Manual",
      color: "Yellow",
      doors: 2
    }
  },
  {
    id: "4",
    title: "Apple MacBook Pro 2022",
    price: 2000,
    currency: "USD",
    category: "Electronics",
    subcategory: "Laptops",
    location: "Mogadishu",
    description: "Apple MacBook Pro with M1 Pro chip, 16GB RAM, and 512GB SSD. Like new condition with warranty remaining.",
    condition: "Used",
    sellerName: "Farah Omar",
    sellerRating: 4.9,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/22985f38-ad0c-4cc3-9609-7b3545158631.png"],
    isFeatured: true,
    isNew: false,
    datePosted: "2023-09-05",
    specifications: {
      processor: "M1 Pro",
      ram: "16GB",
      storage: "512GB SSD",
      display: "14-inch Retina",
      batteryLife: "Up to 17 hours"
    }
  },
  {
    id: "5",
    title: "Modern Living Room Set",
    price: 1200,
    currency: "USD",
    category: "Home & Living",
    subcategory: "Furniture",
    location: "Mogadishu",
    description: "Complete living room set including sofa, coffee table, and two chairs. Modern design with comfortable fabric.",
    condition: "Used",
    sellerName: "Sara Ahmed",
    sellerRating: 4.7,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/d96db869-af7a-4604-afb1-7ba35dbb9e7c.png"],
    isFeatured: false,
    isNew: false,
    datePosted: "2023-06-18",
    specifications: {
      material: "Fabric and wood",
      color: "Blue and beige",
      pieces: 4,
      age: "2 years"
    }
  },
  {
    id: "6",
    title: "Sony Wireless Headphones",
    price: 180,
    currency: "USD",
    category: "Electronics",
    subcategory: "Audio",
    location: "Mogadishu",
    description: "Sony WH-1000XM4 noise-cancelling headphones. Great condition with original packaging and accessories.",
    condition: "Used",
    sellerName: "Mohamed Ali",
    sellerRating: 4.5,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/8c5fd081-d42a-4480-b4dd-31b718681ee9.png"],
    isFeatured: false,
    isNew: false,
    datePosted: "2023-08-30",
    specifications: {
      type: "Over-ear",
      batteryLife: "30 hours",
      connectivity: "Bluetooth 5.0",
      noiseCancel: true
    }
  },
  {
    id: "7",
    title: "iPhone 14 Pro Max",
    price: 999,
    currency: "USD",
    category: "Mobile Phones",
    subcategory: "Apple",
    location: "Mogadishu",
    description: "iPhone 14 Pro Max 256GB in perfect condition. Includes original charger, box, and additional case.",
    condition: "Used",
    sellerName: "Amina Hussein",
    sellerRating: 4.9,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/1eb8747c-8b03-4731-889b-7b8275277b2c.png"],
    isFeatured: true,
    isNew: false,
    datePosted: "2023-09-10",
    specifications: {
      storage: "256GB",
      color: "Deep Purple",
      screen: "6.7-inch Super Retina XDR",
      camera: "48MP triple camera"
    }
  },
  {
    id: "8",
    title: "Modern Apartment for Rent",
    price: 800,
    currency: "USD",
    category: "Real Estate",
    subcategory: "Apartments for Rent",
    location: "Mogadishu",
    description: "Modern 2-bedroom apartment in the city center. Fully furnished with all utilities included.",
    condition: "N/A",
    sellerName: "Real Estate Agency",
    sellerRating: 4.8,
    sellerAvatar: "/public/placeholder.svg",
    images: ["/lovable-uploads/25a66102-c4a3-4d2f-87fd-9b2f5ece4c93.png"],
    isFeatured: true,
    isNew: true,
    datePosted: "2023-09-15",
    specifications: {
      bedrooms: 2,
      bathrooms: 1,
      size: "90 sq.m",
      furnished: true,
      parking: true
    }
  }
];

// Generate more products by duplicating and modifying existing ones
export const allProducts: Product[] = [
  ...products,
  ...products.map((product, index) => ({
    ...product,
    id: (products.length + index + 1).toString(),
    isNew: index % 3 === 0,
    isFeatured: index % 5 === 0,
    datePosted: new Date(new Date().setDate(new Date().getDate() - (index * 2))).toISOString().split('T')[0]
  })),
  ...products.map((product, index) => ({
    ...product,
    id: (products.length * 2 + index + 1).toString(),
    price: product.price * 0.9,
    isNew: index % 4 === 0,
    isFeatured: index % 6 === 0,
    datePosted: new Date(new Date().setDate(new Date().getDate() - (index * 3 + 10))).toISOString().split('T')[0]
  }))
];

// Categories
export const categories: Category[] = [
  {
    id: "1",
    name: "Real Estate",
    icon: "home",
    count: 87242,
    subcategories: [
      { id: "1-1", name: "Rent: House & Apartments", count: 45120 },
      { id: "1-2", name: "Sale: House & Apartments", count: 32456 },
      { id: "1-3", name: "Lands & Plots", count: 5432 },
      { id: "1-4", name: "For Rent: Shops & Offices", count: 2134 },
      { id: "1-5", name: "For Sale: Shops & Offices", count: 2100 }
    ]
  },
  {
    id: "2",
    name: "Cars",
    icon: "car",
    count: 87242,
    subcategories: [
      { id: "2-1", name: "Cars", count: 65432 },
      { id: "2-2", name: "Commercial Vehicles", count: 5432 },
      { id: "2-3", name: "Spare Parts", count: 12345 },
      { id: "2-4", name: "Other Vehicles", count: 4033 }
    ]
  },
  {
    id: "3",
    name: "Mobile Phones",
    icon: "smartphone",
    count: 87242,
    subcategories: [
      { id: "3-1", name: "Mobile Phones", count: 54321 },
      { id: "3-2", name: "Accessories", count: 23456 },
      { id: "3-3", name: "Tablets", count: 9465 }
    ]
  },
  {
    id: "4",
    name: "Electronics",
    icon: "tv",
    count: 87242,
    subcategories: [
      { id: "4-1", name: "Computers & Laptops", count: 32145 },
      { id: "4-2", name: "TV, Audio & Video", count: 21345 },
      { id: "4-3", name: "Cameras & Accessories", count: 10234 },
      { id: "4-4", name: "Computer Accessories", count: 14325 },
      { id: "4-5", name: "Other Electronics", count: 9193 }
    ]
  },
  {
    id: "5",
    name: "Jobs",
    icon: "briefcase",
    count: 87242,
    subcategories: [
      { id: "5-1", name: "IT & Software", count: 12345 },
      { id: "5-2", name: "Sales & Marketing", count: 9876 },
      { id: "5-3", name: "Customer Service", count: 8765 },
      { id: "5-4", name: "Driver", count: 5678 },
      { id: "5-5", name: "Office Admin", count: 4321 },
      { id: "5-6", name: "Teaching", count: 3456 }
    ]
  },
  {
    id: "6",
    name: "Bikes",
    icon: "bike",
    count: 87242,
    subcategories: [
      { id: "6-1", name: "Motorcycles", count: 12345 },
      { id: "6-2", name: "Scooters", count: 7654 },
      { id: "6-3", name: "Bicycles", count: 5432 },
      { id: "6-4", name: "Spare Parts", count: 6543 }
    ]
  },
  {
    id: "7",
    name: "Services",
    icon: "settings",
    count: 87242,
    subcategories: [
      { id: "7-1", name: "Home Services", count: 5432 },
      { id: "7-2", name: "Electronics & Computer", count: 4321 },
      { id: "7-3", name: "Education & Classes", count: 3214 },
      { id: "7-4", name: "Drivers & Taxi", count: 2134 }
    ]
  },
  {
    id: "8",
    name: "Fashion",
    icon: "shirt",
    count: 87242,
    subcategories: [
      { id: "8-1", name: "Men", count: 12345 },
      { id: "8-2", name: "Women", count: 23456 },
      { id: "8-3", name: "Kids", count: 7890 }
    ]
  },
  {
    id: "9",
    name: "Announcements",
    icon: "speaker",
    count: 87242,
    subcategories: [
      { id: "9-1", name: "Community", count: 3456 },
      { id: "9-2", name: "Events", count: 2345 },
      { id: "9-3", name: "Lost & Found", count: 1234 },
      { id: "9-4", name: "Others", count: 987 }
    ]
  }
];

// Locations
export const locations: Location[] = [
  { id: "1", name: "Mogadishu", count: 123456 },
  { id: "2", name: "Hargeisa", count: 87654 },
  { id: "3", name: "Kismayo", count: 54321 },
  { id: "4", name: "Bosaso", count: 43210 },
  { id: "5", name: "Burao", count: 32109 },
  { id: "6", name: "Berbera", count: 21098 },
  { id: "7", name: "Garoowe", count: 10987 }
];

// Dummy users
export const users: User[] = [
  {
    id: "1",
    name: "Leeza Alam",
    avatar: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    email: "leeza.alam@example.com",
    phone: "+252 123456789",
    whatsapp: "+252 123456789",
    location: "Mogadishu",
    rating: 5.0,
    totalReviews: 74,
    memberSince: "Oct 2019",
    isVerified: true
  },
  {
    id: "2",
    name: "Ahmed Hassan",
    avatar: "/public/placeholder.svg",
    email: "ahmed.hassan@example.com",
    phone: "+252 987654321",
    location: "Hargeisa",
    rating: 4.8,
    totalReviews: 65,
    memberSince: "Mar 2020",
    isVerified: true
  },
  {
    id: "3",
    name: "Amina Hussein",
    avatar: "/public/placeholder.svg",
    email: "amina.hussein@example.com",
    phone: "+252 456789123",
    whatsapp: "+252 456789123",
    location: "Kismayo",
    rating: 4.9,
    totalReviews: 42,
    memberSince: "Jan 2021",
    isVerified: true
  }
];

// Partner logos
export const partners = [
  { name: "Google", logo: "/public/placeholder.svg" },
  { name: "Nike", logo: "/public/placeholder.svg" },
  { name: "Apple", logo: "/public/placeholder.svg" },
  { name: "Samsung", logo: "/public/placeholder.svg" },
  { name: "Uber", logo: "/public/placeholder.svg" },
  { name: "P&G", logo: "/public/placeholder.svg" },
  { name: "Adidas", logo: "/public/placeholder.svg" },
  { name: "Microsoft", logo: "/public/placeholder.svg" },
  { name: "Amazon", logo: "/public/placeholder.svg" },
  { name: "Coca-Cola", logo: "/public/placeholder.svg" }
];
