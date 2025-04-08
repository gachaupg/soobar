import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductFilter from "@/components/products/ProductFilter";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/dummyData";
import { fetchProducts, filterProducts } from "@/services/productService";
import { Product } from "@/data/dummyData";
import { Sidebar } from "@/components/layout/Sidebar";

interface FilterState {
  minPrice: number;
  maxPrice: number;
  condition: string;
  location: string;
}

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  const [showFilters, setShowFilters] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    minPrice: 0,
    maxPrice: 0,
    condition: "",
    location: "",
  });

  // Get category name from ID
  const category = categories.find((c) => c.id === categoryId);
  const categoryName = category?.name || "All Products";

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let fetchedProducts: Product[] = [];

        if (categoryId) {
          // Fetch all products and filter by category name
          fetchedProducts = await filterProducts(categoryName);
        } else {
          // Fetch all products if no category is specified
          fetchedProducts = await fetchProducts();
        }

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [categoryId, categoryName]);

  const handleApplyFilters = (filters: FilterState) => {
    setLoading(true);
    try {
      let filteredProducts = [...products];

      // Apply price filters
      if (filters.minPrice > 0) {
        filteredProducts = filteredProducts.filter(
          (p) => p.price >= filters.minPrice
        );
      }
      if (filters.maxPrice > 0) {
        filteredProducts = filteredProducts.filter(
          (p) => p.price <= filters.maxPrice
        );
      }

      // Apply condition filter
      if (filters.condition) {
        filteredProducts = filteredProducts.filter(
          (p) => p.condition === filters.condition
        );
      }

      // Apply location filter
      if (filters.location) {
        filteredProducts = filteredProducts.filter(
          (p) => p.location === filters.location
        );
      }

      setProducts(filteredProducts);
      setAppliedFilters(filters);
    } catch (error) {
      console.error("Error applying filters:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex gap-8">
          {/* <Sidebar className="flex-shrink-0" /> */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-6">
              {subcategory ? subcategory.split("-").join(" ") : categoryName}
            </h1>
            {loading ? (
              <div className="text-center py-10">
                <p className="text-lg">Loading products...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
