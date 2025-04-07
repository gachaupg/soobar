import { Link } from "react-router-dom";
import { Car, Smartphone, Tv, Home, Briefcase, ShoppingBag, Bed, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "vehicles",
    name: "Vehicles",
    icon: <Car className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/5e7a4db1-4358-483a-9fd4-3969e1295d76.png",
    count: 87242
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Tv className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1da8a23b-dad8-4e77-a8b2-af6715c4fdaa.png",
    count: 87242
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: <Home className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/1eb8747c-8b03-4731-889b-7b8275277b2c.png",
    count: 87242
  },
  {
    id: "mobile-phones",
    name: "Mobile Phones",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: <ShoppingBag className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/6e39c0d9-6c24-4176-9411-7a5f76cb8373.png",
    count: 87242
  },
  {
    id: "furniture",
    name: "Furniture",
    icon: <Bed className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/c8c7341f-20f2-4536-8eb5-d1316ce998ba.png",
    count: 87242
  },
  {
    id: "services",
    name: "Services",
    icon: <Wrench className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/ef23568b-918e-41bc-8a52-62320a1550c9.png",
    count: 87242
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: <Smartphone className="w-8 h-8 text-sobaar-blue" />,
    image: "/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png",
    count: 87242
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 relative">
          Popular Categories
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sobaar-blue"></span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="w-full h-40 overflow-hidden">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count.toLocaleString()} Ads</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            <Link to="/categories">See More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
