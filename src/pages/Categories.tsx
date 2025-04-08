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
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";
import { useState } from "react";
import { Menu } from "lucide-react";

const categories = [
  {
    id: "vehicles",
    name: "Vehicles",
    icon: <Car className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/5e7a4db1-4358-483a-9fd4-3969e1295d76.png",
    count: 87242,
    subcategories: ["Cars", "Motorcycles", "Trucks", "Auto Parts"],
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Tv className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1da8a23b-dad8-4e77-a8b2-af6715c4fdaa.png",
    count: 87242,
    subcategories: ["TVs", "Laptops", "Gaming Consoles", "Audio Equipment"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1eb8747c-8b03-4731-889b-7b8275277b2c.png",
    count: 87242,
    subcategories: ["Apartments", "Houses", "Land", "Commercial"],
  },
  {
    id: "mobile-phones",
    name: "Mobile Phones",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242,
    subcategories: ["Smartphones", "Accessories", "Tablets", "Wearables"],
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: <ShoppingBag className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/6e39c0d9-6c24-4176-9411-7a5f76cb8373.png",
    count: 87242,
    subcategories: ["Men's Fashion", "Women's Fashion", "Jewelry", "Watches"],
  },
  {
    id: "furniture",
    name: "Furniture",
    icon: <Bed className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    count: 87242,
    subcategories: ["Living Room", "Bedroom", "Kitchen", "Office"],
  },
  {
    id: "services",
    name: "Services",
    icon: <Wrench className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/ef23568b-918e-41bc-8a52-62320a1550c9.png",
    count: 87242,
    subcategories: [
      "Home Services",
      "Professional Services",
      "Repair",
      "Cleaning",
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242,
    subcategories: [
      "Phone Cases",
      "Chargers",
      "Headphones",
      "Screen Protectors",
    ],
  },
];

export default function Categories() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
          {/* Mobile menu button */}

          {/* Sidebar with responsive classes */}
          <div
            className={`fixed lg:static inset-0 z-40 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
          >
            <Sidebar className="h-full" />
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <main className="flex-1 lg:ml-0">
            <h1 className="text-4xl font-bold mb-8">All Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <h3 className="font-semibold text-lg">
                          {category.name}
                        </h3>
                      </div>
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        {expandedCategories[category.id] ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {category.count.toLocaleString()} Ads
                    </p>
                    {expandedCategories[category.id] && (
                      <div className="mt-2 border-t pt-2">
                        <ul className="space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory}>
                              <Link
                                to={`/products?category=${
                                  category.id
                                }&subcategory=${subcategory
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block px-2 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100"
                              >
                                {subcategory}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
