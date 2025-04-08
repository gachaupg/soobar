import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/data/dummyData";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  category?: string;
  viewAllLink?: string;
  showViewAll?: boolean;
}

const ProductGrid = ({
  products,
  title,
  subtitle,
  category,
  viewAllLink = "/ads",
  showViewAll = true,
}: ProductGridProps) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        {title && (
          <div className="mb-6 flex flex-col items-center">
            {category && (
              <div className="mb-2 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
                <img
                  src={`https://via.placeholder.com/40?text=${category[0]}`}
                  alt={category}
                  className="w-6 h-6"
                />
              </div>
            )}
            <h2 className="text-2xl font-bold text-center">{title}</h2>
            {subtitle && (
              <p className="text-gray-500 text-center mt-1">{subtitle}</p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="product-card bg-white relative group"
            >
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  className="favorite-button"
                  onClick={(e) => toggleFavorite(product.id, e)}
                >
                  <Heart
                    size={20}
                    className={cn(
                      favorites[product.id]
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    )}
                  />
                </button>
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-1 truncate">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-2">
                  {product.description.substring(0, 60)}...
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <MapPin size={12} className="mr-1" />
                  <span>{product.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-base">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">
                    {product.condition}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-8">
            <Link to={viewAllLink}>
              <Button variant="outline" className="mx-auto">
                See More
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
