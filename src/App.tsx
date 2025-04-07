import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import SearchResults from "./pages/SearchResults";
import Categories from "./pages/Categories";
import PostAd from "./pages/PostAd";
import Login from "./pages/Login";
import Partners from "./pages/Partners";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="sobaar-theme">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<Categories />} />
          <Route
            path="/category/:categoryId/:subcategory"
            element={<ProductList />}
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/featured" element={<ProductList />} />
          <Route
            path="*"
            element={
              <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-600">
                  The page you're looking for doesn't exist.
                </p>
              </div>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
