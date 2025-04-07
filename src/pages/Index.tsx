import { useEffect, useState } from "react";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import ProductGrid from "@/components/home/ProductGrid";
import AppDownload from "@/components/home/AppDownload";
import { Product } from "@/data/dummyData";
import { fetchProducts } from "@/services/productService";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Partners } from "@/components/Partners";
import { HeroSlider } from "@/components/home/HeroSlider";

const categories = [
  {
    id: 1,
    title: "Classic Sports Cars",
    description: "Iconic performance vehicles from the golden age of motoring",
    image: "https://images.pexels.com/photos/3608542/pexels-photo-3608542.jpeg",
    count: 45,
  },
  {
    id: 2,
    title: "Vintage Luxury",
    description: "Elegant luxury automobiles from prestigious manufacturers",
    image: "https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg",
    count: 32,
  },
  {
    id: 3,
    title: "American Muscle",
    description: "Powerful American classics from the 60s and 70s",
    image: "https://images.pexels.com/photos/7034550/pexels-photo-7034550.jpeg",
    count: 28,
  },
  {
    id: 4,
    title: "European Classics",
    description: "Timeless European engineering and design",
    image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg",
    count: 37,
  },
  {
    id: 5,
    title: "Vintage Race Cars",
    description: "Historic racing vehicles and track-ready classics",
    image:
      "https://images.pexels.com/photos/12206326/pexels-photo-12206326.jpeg",
    count: 15,
  },
  {
    id: 6,
    title: "Pre-War Automobiles",
    description: "Rare and historic vehicles from before 1945",
    image: "https://images.pexels.com/photos/1054221/pexels-photo-1054221.jpeg",
    count: 12,
  },
];

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Filter products for different sections
  const electronics = products
    .filter((p) => p.category === "Electronics")
    .slice(0, 8);
  const fashion = products.filter((p) => p.category === "Fashion").slice(0, 8);
  const featured = products.filter((p) => p.isFeatured).slice(0, 8);
  const accessories = products
    .filter((p) => p.category === "Accessories")
    .slice(0, 8);

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Categories Section */}
      <FeaturedCategories />

      {/* Product Grids */}
      <div className="pb-10">
        {loading ? (
          <div className="text-center py-10">
            <p className="text-lg">Loading products...</p>
          </div>
        ) : (
          <>
            <ProductGrid
              products={featured}
              title="Featured Products"
              viewAllLink="/featured"
            />

            <ProductGrid
              products={electronics}
              title="Electronics"
              viewAllLink="/category/electronics"
            />

            <ProductGrid
              products={fashion}
              title="Fashion"
              viewAllLink="/category/fashion"
            />

            <ProductGrid
              products={accessories}
              title="Accessories"
              viewAllLink="/category/accessories"
            />
          </>
        )}

        {/* Partners Section */}
        <Partners showAllButton={true} />

        {/* App Download Section */}
        <AppDownload />
      </div>
    </>
  );
};

export default Index;
