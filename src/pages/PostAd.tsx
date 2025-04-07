import { Button } from "@/components/ui/button";

export default function PostAd() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Post Your Ad</h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select a category</option>
              <option value="vehicles">Vehicles</option>
              <option value="electronics">Electronics</option>
              <option value="real-estate">Real Estate</option>
              <option value="mobile-phones">Mobile Phones</option>
              <option value="fashion">Fashion</option>
              <option value="furniture">Furniture</option>
              <option value="services">Services</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Enter ad title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-md h-32"
              placeholder="Describe your item or service"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              placeholder="Enter price"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Images</label>
            <div className="border-2 border-dashed rounded-md p-8 text-center">
              <p className="text-gray-500">
                Drop your images here or click to upload
              </p>
              <input type="file" multiple className="hidden" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select location</option>
              <option value="mogadishu">Mogadishu</option>
              <option value="hargeisa">Hargeisa</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Contact Information
            </label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md mb-4"
              placeholder="Phone number"
            />
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="Email address"
            />
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Post Ad
          </Button>
        </div>
      </div>
    </div>
  );
}
