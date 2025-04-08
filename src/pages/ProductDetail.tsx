import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allProducts, type Product, users, type User } from "@/data/dummyData";
import { fetchProductById } from "@/services/productService";
import {
  ChevronRight,
  Heart,
  MapPin,
  Phone,
  Mail,
  Share2,
  MessageCircle,
  Calendar,
  Fuel,
  Settings,
  Car,
  Gauge,
  Star,
  MessageSquare,
  Clock,
  CheckCircle2,
  Cpu,
  CircuitBoard,
  HardDrive,
  Monitor,
  BedDouble,
  Bath,
  SquareStack,
  Info,
} from "lucide-react";

interface Specification {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const getSpecifications = (product: Product): Specification[] => {
  if (product.category === "Cars") {
    return [
      {
        icon: <Fuel className="w-5 h-5" />,
        label: "Fuel",
        value: product.specifications?.fuel?.toString() || "-",
      },
      {
        icon: <Settings className="w-5 h-5" />,
        label: "Gear",
        value: product.specifications?.transmission?.toString() || "Automatic",
      },
      {
        icon: <Car className="w-5 h-5" />,
        label: "Car Type",
        value: "Sport",
      },
      {
        icon: <Gauge className="w-5 h-5" />,
        label: "Mileage",
        value: product.specifications?.mileage
          ? `${product.specifications.mileage.toLocaleString()} km`
          : "0 km",
      },
    ];
  } else if (product.category === "Electronics") {
    return [
      {
        icon: <Cpu className="w-5 h-5" />,
        label: "Processor",
        value: product.specifications?.processor?.toString() || "-",
      },
      {
        icon: <CircuitBoard className="w-5 h-5" />,
        label: "RAM",
        value: product.specifications?.ram?.toString() || "-",
      },
      {
        icon: <HardDrive className="w-5 h-5" />,
        label: "Storage",
        value: product.specifications?.storage?.toString() || "-",
      },
      {
        icon: <Monitor className="w-5 h-5" />,
        label: "Display",
        value: product.specifications?.display?.toString() || "-",
      },
    ];
  } else if (product.category === "Real Estate") {
    return [
      {
        icon: <BedDouble className="w-5 h-5" />,
        label: "Bedrooms",
        value: product.specifications?.bedrooms?.toString() || "-",
      },
      {
        icon: <Bath className="w-5 h-5" />,
        label: "Bathrooms",
        value: product.specifications?.bathrooms?.toString() || "-",
      },
      {
        icon: <SquareStack className="w-5 h-5" />,
        label: "Size",
        value: product.specifications?.size?.toString() || "-",
      },
      {
        icon: <Car className="w-5 h-5" />,
        label: "Parking",
        value: product.specifications?.parking ? "Yes" : "No",
      },
    ];
  }

  // Default specifications for other categories
  return Object.entries(product.specifications || {}).map(([key, value]) => ({
    icon: <Info className="w-5 h-5" />,
    label: key.charAt(0).toUpperCase() + key.slice(1),
    value: value.toString(),
  }));
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add this dummy data for similar ads
  const similarAds = [
    {
      id: "sim1",
      title: "Mercedes-Benz G-Class 2023",
      price: 180000,
      location: "Mogadishu",
      sellerRating: 4.9,
      images: ["/lovable-uploads/83cd274f-2167-4296-9148-001585b00f50.png"],
      category: "Cars",
    },
    {
      id: "sim2",
      title: "BMW X7 2023 White",
      price: 165000,
      location: "Mogadishu",
      sellerRating: 4.8,
      images: ["/lovable-uploads/513f8cc6-52d0-459b-8d64-8bfad9ef1a0e.png"],
      category: "Cars",
    },
    {
      id: "sim3",
      title: "Range Rover Sport 2023",
      price: 175000,
      location: "Mogadishu",
      sellerRating: 5.0,
      images: ["/lovable-uploads/9f930f86-d721-4f49-9ef8-6a85c08b5eac.png"],
      category: "Cars",
    },
    {
      id: "sim4",
      title: "Porsche Cayenne 2023",
      price: 190000,
      location: "Mogadishu",
      sellerRating: 4.9,
      images: ["/lovable-uploads/22985f38-ad0c-4cc3-9609-7b3545158631.png"],
      category: "Cars",
    },
  ];

  useEffect(() => {
    const loadProduct = async () => {
      if (!productId) return;

      setLoading(true);
      try {
        const fetchedProduct = await fetchProductById(productId);
        setProduct(fetchedProduct);
        const foundSeller = users.find(
          (u) => u.name === fetchedProduct.sellerName
        );
        setSeller(foundSeller || null);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
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

  const specifications = getSpecifications(product);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: window.location.href,
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            {/* Product Title */}
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Posted on {product.datePosted}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {product.location}
              </span>
              {product.condition && (
                <Badge variant="secondary" className="bg-blue-50 text-blue-600">
                  {product.condition}
                </Badge>
              )}
            </div>

            {/* Main Image and Thumbnails */}
            <div className="mb-6">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                {product.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/30 text-white hover:bg-black/50"
                      onClick={handlePrevImage}
                    >
                      <ChevronRight className="w-6 h-6 rotate-180" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/30 text-white hover:bg-black/50"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  </div>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden bg-gray-100 ${
                        currentImageIndex === index
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {currentImageIndex === index && (
                        <div className="absolute inset-0 bg-blue-500/10" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg text-center"
                >
                  <div className="text-gray-600">{spec.icon}</div>
                  <div>
                    <p className="text-sm text-gray-500">{spec.label}</p>
                    <p className="font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* Safety Tips */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Safety Tips</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Don't pay until you see the product</li>
                <li>• Meet with the seller at a safe public place</li>
                <li>• Check the item before you buy</li>
                <li>• Pay only after collecting the item</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Price, Seller Info, and Contact */}
        <div className="lg:col-span-1">
          {/* Price and Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-3xl font-bold text-blue-600">
                  ${product.price.toLocaleString()}
                </span>
                {product.isNew && (
                  <Badge className="ml-2 bg-green-50 text-green-600">New</Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handleShare}>
                  <Share2 className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart className={isFavorite ? "fill-current" : ""} />
                </Button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="border-t border-b py-4 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={product.sellerAvatar}
                  alt={product.sellerName}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{product.sellerName}</h3>
                    {seller?.isVerified && (
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{product.sellerRating}</span>
                    <span className="text-gray-500">
                      ({seller?.totalReviews || 0} reviews)
                    </span>
                  </div>
                  {seller?.memberSince && (
                    <p className="text-sm text-gray-500">
                      Member since {seller.memberSince}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              {seller?.phone && (
                <Button className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  {seller.phone}
                </Button>
              )}
              {seller?.email && (
                <Button variant="outline" className="w-full gap-2">
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              )}
              {seller?.whatsapp && (
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-green-50 hover:bg-green-100 text-green-600 border-green-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </Button>
              )}
              <Button variant="outline" className="w-full gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat
              </Button>
            </div>
          </div>

          {/* Location Map */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-semibold mb-4">Location</h3>
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Mogadishu,Somalia"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Ads Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">
          Ads From {product.sellerName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarAds.map((similarProduct) => (
            <Link
              key={similarProduct.id}
              to={`/product/${similarProduct.id}`}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <img
                  src={similarProduct.images[0]}
                  alt={similarProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2 line-clamp-1">
                  {similarProduct.title}
                </h3>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-blue-600 text-xl">
                    ${similarProduct.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {similarProduct.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{similarProduct.sellerRating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
