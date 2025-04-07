import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allProducts } from "@/data/dummyData";
import { ChevronRight, Heart, MapPin, Phone, Mail } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const foundProduct = allProducts.find((p) => p.id === productId);
      setProduct(foundProduct || null);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <p className="text-lg text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-sobaar-blue">
          Home
        </Link>
        <ChevronRight size={16} />
        <Link
          to={`/category/${product.category.toLowerCase()}`}
          className="hover:text-sobaar-blue"
        >
          {product.category}
        </Link>
        <ChevronRight size={16} />
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-4">
            {[product.image, ...Array(3)].map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden bg-gray-100"
              >
                <img
                  src={img || product.image}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={isFavorite ? "text-red-500" : ""}
              >
                <Heart className={isFavorite ? "fill-current" : ""} />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-sobaar-blue">
                ${product.price.toLocaleString()}
              </span>
              {product.isNew && <Badge variant="secondary">New</Badge>}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={20} />
            <span>{product.location}</span>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Condition:</span>{" "}
                  {product.condition}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Brand:</span> {product.brand}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Category:</span>{" "}
                  {product.category}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Listed:</span>{" "}
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Seller Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={product.sellerAvatar || "/placeholder-avatar.png"}
                  alt={product.sellerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{product.sellerName}</h3>
                <p className="text-sm text-gray-600">
                  Member since {new Date().getFullYear()}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full gap-2">
                <Phone size={20} />
                Contact Seller
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Mail size={20} />
                Message Seller
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
