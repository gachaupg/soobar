import { Link } from "react-router-dom";
import {
  Car,
  Smartphone,
  Tv,
  Home,
  Briefcase,
  ShoppingBag,
  Bed,
  Wrench,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

const categories = [
  {
    id: "vehicles",
    name: "Vehicles",
    icon: <Car className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/5e7a4db1-4358-483a-9fd4-3969e1295d76.png",
    count: 87242,
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Tv className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1da8a23b-dad8-4e77-a8b2-af6715c4fdaa.png",
    count: 87242,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1eb8747c-8b03-4731-889b-7b8275277b2c.png",
    count: 87242,
  },
  {
    id: "mobile-phones",
    name: "Mobile Phones",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242,
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: <ShoppingBag className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/6e39c0d9-6c24-4176-9411-7a5f76cb8373.png",
    count: 87242,
  },
  {
    id: "furniture",
    name: "Furniture",
    icon: <Bed className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    count: 87242,
  },
  {
    id: "services",
    name: "Services",
    icon: <Wrench className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/ef23568b-918e-41bc-8a52-62320a1550c9.png",
    count: 87242,
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242,
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
          <Sidebar className="flex-shrink-0" />
          <main className="flex-1">
            <h1 className="text-4xl font-bold mb-8">All Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <div className="flex justify-center mb-3">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {category.count.toLocaleString()} Ads
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
