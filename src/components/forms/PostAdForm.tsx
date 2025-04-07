
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { categories } from "@/data/dummyData";

interface PostAdFormProps {
  onSubmit?: (formData: any) => void;
}

const PostAdForm = ({ onSubmit }: PostAdFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    currency: "USD",
    isPriceNegotiable: false,
    condition: "",
    fuel: "",
    color: "",
    year: "",
    transmission: "",
    mileage: "",
    modelYear: "",
    images: [] as File[]
  });
  
  const [isFree, setIsFree] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFormData({
        ...formData,
        images: [...formData.images, ...fileArray]
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Basic Information</h3>
          <Button type="button" variant="ghost" size="sm">-</Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title*
            </label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ad headline"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="" disabled>Select category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description (Maximum 6000 Characters)"
              rows={6}
              required
            />
          </div>
        </div>
      </div>
      
      {/* Photos and Videos */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Photos and video</h3>
          <Button type="button" variant="ghost" size="sm">-</Button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Photo
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
              <div className="flex justify-center">
                <Upload className="h-10 w-10 text-gray-400" />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Minimum size of 1024 x at most 5 MB
              </p>
              <p className="mt-1 text-xs text-gray-400">
                JPG, JPEG and PNG are accepted
              </p>
              <div className="mt-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md text-sm font-medium">
                    Choose Files
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-700 mb-1">
              Preview video (Optional)
            </label>
            <Input
              id="video"
              type="text"
              placeholder="Paste YouTube URL..."
            />
          </div>
        </div>
      </div>
      
      {/* Cost */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Cost*</h3>
          <Button type="button" variant="ghost" size="sm">-</Button>
        </div>
        
        <div className="space-y-4">
          <RadioGroup 
            value={isFree ? "free" : "price"}
            onValueChange={(value) => setIsFree(value === "free")}
            className="flex mb-4"
          >
            <div className="flex-1 flex items-center justify-center py-2 border rounded-l-md bg-gray-100">
              <RadioGroupItem value="free" id="option-free" className="mr-2" />
              <Label htmlFor="option-free">Free</Label>
            </div>
            <div className="flex-1 flex items-center justify-center py-2 border-t border-r border-b rounded-r-md bg-blue-100">
              <RadioGroupItem value="price" id="option-price" className="mr-2" />
              <Label htmlFor="option-price">Price</Label>
            </div>
          </RadioGroup>
          
          {!isFree && (
            <div className="flex items-center space-x-3">
              <Input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="10000"
                disabled={isFree}
                required={!isFree}
              />
              
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24"
                disabled={isFree}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="SOS">SOS</option>
              </select>
            </div>
          )}
          
          <div className="flex items-center">
            <Checkbox 
              id="negotiable" 
              checked={formData.isPriceNegotiable}
              onCheckedChange={(checked) => {
                setFormData({
                  ...formData,
                  isPriceNegotiable: checked as boolean
                });
              }}
              disabled={isFree}
              className="mr-2"
            />
            <label htmlFor="negotiable" className="text-sm text-gray-700">
              Price Negotiable
            </label>
          </div>
        </div>
      </div>
      
      {/* Details */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Details*</h3>
          <Button type="button" variant="ghost" size="sm">-</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
              Condition*
            </label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="" disabled>Select</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">
              Fuel*
            </label>
            <select
              id="fuel"
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="" disabled>Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year*
            </label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="" disabled>Select</option>
              {Array.from({ length: 30 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          
          <div>
            <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
              Transmission*
            </label>
            <select
              id="transmission"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              required
            >
              <option value="" disabled>Select</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
              Color*
            </label>
            <div className="relative">
              <select
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                required
              >
                <option value="" disabled>Select</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Silver">Silver</option>
                <option value="Gray">Gray</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
              </select>
              <div className="absolute top-0 right-0 h-full flex items-center pr-3">
                <div className={`w-3 h-3 rounded-full bg-${formData.color?.toLowerCase() || 'white'} border border-gray-300`}></div>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
              Mileage*
            </label>
            <Input
              id="mileage"
              name="mileage"
              type="number"
              value={formData.mileage}
              onChange={handleChange}
              placeholder="45000 - 50000"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pt-4">
        <Button type="submit" className="bg-sobaar-blue hover:bg-blue-600 min-w-[150px]">
          Post Ad
        </Button>
      </div>
    </form>
  );
};

export default PostAdForm;
