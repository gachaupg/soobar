import { Product } from "@/data/dummyData";

// Define a type for the API response
interface ApiProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Transform API product to our product format
const transformProduct = (apiProduct: ApiProduct): Product => {
  return {
    id: apiProduct.id.toString(),
    title: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    currency: "USD",
    category: mapCategory(apiProduct.category),
    condition: "New",
    location: "Mogadishu",
    images: [apiProduct.image],
    isNew: true,
    isFeatured: apiProduct.rating.rate > 4,
    createdAt: new Date().toISOString(),
    datePosted: new Date().toISOString(),
    sellerName: "Default Seller",
    sellerRating: 4.5,
    sellerAvatar: "/public/placeholder.svg",
  };
};

// Map API categories to our categories
const mapCategory = (apiCategory: string): string => {
  const categoryMap: Record<string, string> = {
    electronics: "Electronics",
    jewelery: "Accessories",
    "men's clothing": "Fashion",
    "women's clothing": "Fashion",
  };

  return categoryMap[apiCategory] || "Other";
};

// Fetch products from fake API
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = (await response.json()) as ApiProduct[];
    return data.map(transformProduct);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const API_BASE_URL = "http://localhost:8000"; // Update this with your FastAPI server URL

export const fetchProductsByCategory = async (
  categoryId: string
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/products/category/${categoryId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

// Search products by query
export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const allProducts = await fetchProducts();
    const lowercaseQuery = query.toLowerCase();

    return allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.description.toLowerCase().includes(lowercaseQuery) ||
        product.category.toLowerCase().includes(lowercaseQuery)
    );
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

// Filter products by multiple criteria
export const filterProducts = async (
  category?: string,
  minPrice?: number,
  maxPrice?: number,
  condition?: string,
  location?: string
): Promise<Product[]> => {
  try {
    let products = await fetchProducts();

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    if (minPrice !== undefined) {
      products = products.filter((product) => product.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      products = products.filter((product) => product.price <= maxPrice);
    }

    if (condition) {
      products = products.filter((product) => product.condition === condition);
    }

    if (location) {
      products = products.filter((product) => product.location === location);
    }

    return products;
  } catch (error) {
    console.error("Error filtering products:", error);
    return [];
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    // Fetch from fake store API
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const apiProduct = (await response.json()) as ApiProduct;

    // Transform the API product to our format
    return {
      id: apiProduct.id.toString(),
      title: apiProduct.title,
      description: apiProduct.description,
      price: apiProduct.price,
      currency: "USD",
      category: mapCategory(apiProduct.category),
      condition: "New",
      location: "Mogadishu",
      images: [apiProduct.image],
      isNew: true,
      isFeatured: apiProduct.rating.rate > 4,
      createdAt: new Date().toISOString(),
      datePosted: new Date().toISOString(),
      sellerName: "Default Seller",
      sellerRating: apiProduct.rating.rate,
      sellerAvatar: "/public/placeholder.svg",
      specifications: {
        rating: apiProduct.rating.rate,
        reviews: apiProduct.rating.count,
      },
    };
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
