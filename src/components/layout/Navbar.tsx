import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { categories } from "@/data/dummyData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState("All Somalia");
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
    setMobileMenuOpen(false);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Navbar */}
      <div className="bg-zinc-800">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center mr-2 space-x-2">
              <img
                src="https://res.cloudinary.com/pitz/image/upload/v1744022670/g28_ebvsop.png"
                alt="Sobaar"
                className="h-8"
              />
            </Link>

            {/* Location Selector */}
            <div className="hidden md:flex items-center border border-zinc-600 rounded-md overflow-hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-9 px-2 flex items-center gap-1 text-white hover:text-white hover:bg-zinc-700"
                  >
                    <MapPin size={16} />
                    <span className="text-sm font-medium">{location}</span>
                    <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 bg-white">
                  <DropdownMenuItem onClick={() => setLocation("All Somalia")}>
                    All Somalia
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocation("Mogadishu")}>
                    Mogadishu
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocation("Hargeisa")}>
                    Hargeisa
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-4 relative">
              <SearchBar />
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-1">
              {/* Post Ad Button */}
              <Link to="/post-ad">
                <Button
                  variant="outline"
                  className="hidden md:flex items-center justify-center gap-2 text-sm h-9 border-white bg-white text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 hover:border-zinc-200"
                >
                  Post Ads
                </Button>
              </Link>

              {/* Login Button */}
              <Link to="/login">
                <Button className="h-9 bg-sobaar-blue hover:bg-blue-600 text-sm text-white">
                  Login
                </Button>
              </Link>

              {/* English Button */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 text-white hover:text-white hover:bg-zinc-700"
                  >
                    Eng <ChevronDown size={14} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-24 bg-white">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Somali</DropdownMenuItem>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 text-white hover:text-white hover:bg-zinc-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <nav className="bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex items-center space-x-4 h-10 overflow-x-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-full px-3 text-sm font-medium flex items-center text-zinc-800 hover:text-zinc-900 hover:bg-gray-100"
                >
                  All Categories <ChevronDown size={14} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 bg-white">
                {categories.map((category) => (
                  <DropdownMenuSub key={category.id}>
                    <DropdownMenuSubTrigger className="flex items-center justify-between w-full">
                      <span>{category.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-48">
                      {category.subcategories.map((subcategory) => (
                        <DropdownMenuItem
                          key={subcategory.id}
                          onClick={() =>
                            handleCategorySelect(
                              `${category.id}/${subcategory.id}`
                            )
                          }
                        >
                          {subcategory.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {categories.map((category) => (
              <DropdownMenu key={category.id}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-full px-3 text-sm font-medium flex items-center text-zinc-800 hover:text-zinc-900 hover:bg-gray-100 whitespace-nowrap"
                  >
                    {category.name} <ChevronDown size={14} className="ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white">
                  {category.subcategories.map((subcategory) => (
                    <DropdownMenuItem
                      key={subcategory.id}
                      onClick={() =>
                        handleCategorySelect(`${category.id}/${subcategory.id}`)
                      }
                    >
                      {subcategory.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            <Link
              to="/partners"
              className="text-sm font-medium text-sobaar-blue hover:text-blue-600 whitespace-nowrap"
            >
              Our Partners
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 transform",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-sobaar-blue">
              <span className="text-sobaar-darkBlue">S</span>obaar.com
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          <div className="p-4 border-b">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin size={18} />
              <span className="font-medium">{location}</span>
            </div>
            <div className="relative">
              <SearchBar />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 space-y-4">
              <div className="font-semibold text-lg">Categories</div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900"
                    >
                      <span>{category.name}</span>
                      {expandedCategories[category.id] ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedCategories[category.id] && (
                      <div className="pl-4 space-y-1 py-2">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.id}
                            to={`/category/${category.id}/${subcategory.id}`}
                            className="block py-1 text-sm text-gray-600 hover:text-gray-900"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t space-y-2">
            <Link
              to="/login"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-sobaar-blue hover:bg-blue-600">
                Login
              </Button>
            </Link>
            <Link
              to="/post-ad"
              className="block"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full">
                Post Ad
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
