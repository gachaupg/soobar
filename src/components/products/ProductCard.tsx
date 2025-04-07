
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/data/dummyData";

interface ProductCardProps {
  product: Product;
  showDescription?: boolean;
}

const ProductCard = ({ product, showDescription = true }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
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
          onClick={toggleFavorite}
        >
          <Heart
            size={20}
            className={cn(
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
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
        <h3 className="font-medium text-sm mb-1 truncate">{product.title}</h3>
        {showDescription && (
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description.substring(0, 60)}...</p>
        )}
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <MapPin size={12} className="mr-1" />
          <span>{product.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-base">${product.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500">{product.condition}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
