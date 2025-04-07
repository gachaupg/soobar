import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const categories = [
  {
    id: "real-estate",
    name: "Real Estate",
    icon: "🏠",
    subcategories: [
      "Rent: House & Apartments",
      "Sale: House & Apartments",
      "Lands & Plots",
      "For Rent: Shops & Offices",
      "For Sale: Shops & Offices",
    ],
  },
  {
    id: "car",
    name: "Car",
    icon: "🚗",
    subcategories: ["Spare Parts", "Cars for Sale", "Cars for Rent"],
  },
  {
    id: "scooters",
    name: "Scooters",
    icon: "🛵",
    subcategories: ["Scooters for Sale", "Scooter Parts", "Scooter Rental"],
  },
  {
    id: "mobile-phones",
    name: "Mobile Phones",
    icon: "📱",
    subcategories: ["Mobile Phones", "Accessories", "Tablets"],
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: "🖥️",
    subcategories: ["TVs", "Laptops", "Gaming Consoles"],
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: "💼",
    subcategories: ["IT Jobs", "Sales Jobs", "Marketing Jobs"],
  },
  {
    id: "services",
    name: "Services",
    icon: "🔧",
    subcategories: [
      "Home Services",
      "Professional Services",
      "Electronics Repair",
    ],
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn("w-64 bg-white shadow-sm", className)}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">All Categories</h2>
        <nav>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.id}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export function CategoryContent({ categoryId }: { categoryId: string }) {
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="p-4">
        <p>Category not found</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.subcategories.map((subcategory) => (
          <Link
            key={subcategory}
            to={`/category/${category.id}/${subcategory
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold mb-2">{subcategory}</h3>
            <p className="text-sm text-gray-500">
              Browse listings in {subcategory}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
