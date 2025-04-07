
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categories, locations } from "@/data/dummyData";

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
}

interface ProductFilterProps {
  onApplyFilters: (filters: any) => void;
}

const ProductFilter = ({ onApplyFilters }: ProductFilterProps) => {
  const [filterSections, setFilterSections] = useState<FilterSection[]>([
    { id: "categories", title: "Categories", isOpen: true },
    { id: "locations", title: "Locations", isOpen: true },
    { id: "price", title: "Price", isOpen: true },
    { id: "filter", title: "Filter", isOpen: true },
  ]);
  
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFilters, setSelectedFilters] = useState({
    verifiedSellers: false,
    freeShipping: false,
    withPhotos: false
  });
  
  const toggleSection = (id: string) => {
    setFilterSections(
      filterSections.map(section => 
        section.id === id ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };
  
  const getSection = (id: string) => {
    return filterSections.find(section => section.id === id);
  };
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const toggleLocation = (locationId: string) => {
    setSelectedLocations(prev => 
      prev.includes(locationId)
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };
  
  const handleApply = () => {
    onApplyFilters({
      categories: selectedCategories,
      locations: selectedLocations,
      minPrice: priceRange.min ? parseInt(priceRange.min) : undefined,
      maxPrice: priceRange.max ? parseInt(priceRange.max) : undefined,
      ...selectedFilters
    });
  };
  
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedLocations([]);
    setPriceRange({ min: "", max: "" });
    setSelectedFilters({
      verifiedSellers: false,
      freeShipping: false,
      withPhotos: false
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="mb-4">
        <p className="font-medium text-sm mb-2">Filters selected</p>
        <div className="flex flex-wrap gap-2">
          {selectedCategories.length > 0 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
              Categories ({selectedCategories.length}) <button className="ml-1 text-gray-500" onClick={() => setSelectedCategories([])}>×</button>
            </span>
          )}
          {selectedLocations.length > 0 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
              Locations ({selectedLocations.length}) <button className="ml-1 text-gray-500" onClick={() => setSelectedLocations([])}>×</button>
            </span>
          )}
          {(priceRange.min || priceRange.max) && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
              Price <button className="ml-1 text-gray-500" onClick={() => setPriceRange({ min: "", max: "" })}>×</button>
            </span>
          )}
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="border-t pt-4 mt-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggleSection("categories")}
        >
          <h3 className="font-medium text-base">Categories</h3>
          {getSection("categories")?.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {getSection("categories")?.isOpen && (
          <div className="mt-2 space-y-1 max-h-60 overflow-y-auto">
            {categories.map(category => (
              <div key={category.id} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    className="mr-2"
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-gray-500">{category.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Locations Section */}
      <div className="border-t pt-4 mt-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggleSection("locations")}
        >
          <h3 className="font-medium text-base">Locations</h3>
          {getSection("locations")?.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {getSection("locations")?.isOpen && (
          <div className="mt-2 space-y-1">
            {locations.map(location => (
              <div key={location.id} className="flex items-center justify-between py-1">
                <div className="flex items-center">
                  <Checkbox 
                    id={`location-${location.id}`} 
                    className="mr-2"
                    checked={selectedLocations.includes(location.id)}
                    onCheckedChange={() => toggleLocation(location.id)}
                  />
                  <label htmlFor={`location-${location.id}`} className="text-sm cursor-pointer">
                    {location.name}
                  </label>
                </div>
                <span className="text-xs text-gray-500">{location.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Price Section */}
      <div className="border-t pt-4 mt-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-medium text-base">Price</h3>
          {getSection("price")?.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {getSection("price")?.isOpen && (
          <div className="mt-2">
            <div className="flex space-x-2 mb-2">
              <Input
                type="number"
                placeholder="Min"
                className="text-sm"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              />
              <span className="flex items-center">-</span>
              <Input
                type="number"
                placeholder="Max"
                className="text-sm"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center py-1">
                <Checkbox 
                  id="price-1" 
                  className="mr-2" 
                  checked={priceRange.min === "0" && priceRange.max === "50"}
                  onCheckedChange={() => setPriceRange({ min: "0", max: "50" })}
                />
                <label htmlFor="price-1" className="text-sm cursor-pointer">
                  $0 - $50
                </label>
              </div>
              <div className="flex items-center py-1">
                <Checkbox 
                  id="price-2" 
                  className="mr-2"
                  checked={priceRange.min === "50" && priceRange.max === "100"}
                  onCheckedChange={() => setPriceRange({ min: "50", max: "100" })}
                />
                <label htmlFor="price-2" className="text-sm cursor-pointer">
                  $50 - $100
                </label>
              </div>
              <div className="flex items-center py-1">
                <Checkbox 
                  id="price-3" 
                  className="mr-2"
                  checked={priceRange.min === "100" && priceRange.max === "500"}
                  onCheckedChange={() => setPriceRange({ min: "100", max: "500" })}
                />
                <label htmlFor="price-3" className="text-sm cursor-pointer">
                  $100 - $500
                </label>
              </div>
              <div className="flex items-center py-1">
                <Checkbox 
                  id="price-4" 
                  className="mr-2"
                  checked={priceRange.min === "500" && priceRange.max === "5000"}
                  onCheckedChange={() => setPriceRange({ min: "500", max: "5000" })}
                />
                <label htmlFor="price-4" className="text-sm cursor-pointer">
                  $500 - $5000
                </label>
              </div>
              <div className="flex items-center py-1">
                <Checkbox 
                  id="price-5" 
                  className="mr-2"
                  checked={priceRange.min === "5000" && priceRange.max === ""}
                  onCheckedChange={() => setPriceRange({ min: "5000", max: "" })}
                />
                <label htmlFor="price-5" className="text-sm cursor-pointer">
                  $5000 & Above
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Filter Section */}
      <div className="border-t pt-4 mt-4">
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={() => toggleSection("filter")}
        >
          <h3 className="font-medium text-base">Filter</h3>
          {getSection("filter")?.isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        
        {getSection("filter")?.isOpen && (
          <div className="mt-2 space-y-1">
            <div className="flex items-center py-1">
              <Checkbox 
                id="filter-1" 
                className="mr-2"
                checked={selectedFilters.verifiedSellers}
                onCheckedChange={(checked) => 
                  setSelectedFilters(prev => ({ ...prev, verifiedSellers: !!checked }))
                }
              />
              <label htmlFor="filter-1" className="text-sm cursor-pointer">
                Verified sellers only
              </label>
            </div>
            <div className="flex items-center py-1">
              <Checkbox 
                id="filter-2" 
                className="mr-2"
                checked={selectedFilters.freeShipping}
                onCheckedChange={(checked) => 
                  setSelectedFilters(prev => ({ ...prev, freeShipping: !!checked }))
                }
              />
              <label htmlFor="filter-2" className="text-sm cursor-pointer">
                Free shipping
              </label>
            </div>
            <div className="flex items-center py-1">
              <Checkbox 
                id="filter-3" 
                className="mr-2"
                checked={selectedFilters.withPhotos}
                onCheckedChange={(checked) => 
                  setSelectedFilters(prev => ({ ...prev, withPhotos: !!checked }))
                }
              />
              <label htmlFor="filter-3" className="text-sm cursor-pointer">
                With photos only
              </label>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 space-y-2">
        <Button 
          variant="default" 
          className="w-full bg-sobaar-blue hover:bg-blue-600"
          onClick={handleApply}
        >
          Apply
        </Button>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={clearFilters}
        >
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
