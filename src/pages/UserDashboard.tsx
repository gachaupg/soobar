
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import SellerProfile from "@/components/products/SellerProfile";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allProducts, users } from "@/data/dummyData";

const UserDashboard = () => {
  // For demo, use first user
  const user = users[0];
  
  // Filter products by user
  const userProducts = allProducts.filter(p => p.sellerName === user.name);
  
  // For empty state demo
  const [showEmptyState, setShowEmptyState] = useState(false);
  const displayProducts = showEmptyState ? [] : userProducts;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - User Info */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <SellerProfile seller={user} showReviews={false} />
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <nav className="flex flex-col">
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  <span>My Ads</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>Wishlist</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>My Settings</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  <span>Support</span>
                </a>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">My ads</h2>
                  <p className="text-gray-500">{displayProducts.length} posts</p>
                </div>
                
                <Button onClick={() => setShowEmptyState(!showEmptyState)} variant="outline">
                  {showEmptyState ? "Show All Ads" : "Toggle Empty View"}
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all-ads">
              <TabsList className="mb-6 bg-white p-1 rounded-lg shadow-sm">
                <TabsTrigger value="all-ads" className="flex-1">All Ads</TabsTrigger>
                <TabsTrigger value="active-ads" className="flex-1">Active Ads</TabsTrigger>
                <TabsTrigger value="pending-ads" className="flex-1">Pending Ads</TabsTrigger>
                <TabsTrigger value="draft" className="flex-1">Draft</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all-ads">
                {displayProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {displayProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <div className="max-w-md mx-auto">
                      <img 
                        src="/lovable-uploads/1c70ac31-203f-46ff-8f05-af1ed3dac308.png"
                        alt="No ads found" 
                        className="w-48 h-48 object-contain mx-auto mb-6"
                      />
                      <h3 className="text-xl font-medium mb-2">My Ads</h3>
                      <p className="text-gray-500 mb-6">You currently have no active ads.</p>
                      <Button className="bg-sobaar-blue hover:bg-blue-600">
                        New Ad
                      </Button>
                    </div>
                  </div>
                )}
                
                {displayProducts.length > 0 && (
                  <div className="mt-8 text-center">
                    <Button>
                      Load More
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="active-ads">
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <img 
                      src="/lovable-uploads/1c70ac31-203f-46ff-8f05-af1ed3dac308.png"
                      alt="No active ads" 
                      className="w-48 h-48 object-contain mx-auto mb-6"
                    />
                    <h3 className="text-xl font-medium mb-2">Active Ads</h3>
                    <p className="text-gray-500 mb-6">You currently have no active ads.</p>
                    <Button className="bg-sobaar-blue hover:bg-blue-600">
                      New Ad
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="pending-ads">
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <img 
                      src="/lovable-uploads/1c70ac31-203f-46ff-8f05-af1ed3dac308.png"
                      alt="No pending ads" 
                      className="w-48 h-48 object-contain mx-auto mb-6"
                    />
                    <h3 className="text-xl font-medium mb-2">Pending Ads</h3>
                    <p className="text-gray-500 mb-6">You currently have no pending ads.</p>
                    <Button className="bg-sobaar-blue hover:bg-blue-600">
                      New Ad
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="draft">
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="max-w-md mx-auto">
                    <img 
                      src="/lovable-uploads/1c70ac31-203f-46ff-8f05-af1ed3dac308.png"
                      alt="No draft ads" 
                      className="w-48 h-48 object-contain mx-auto mb-6"
                    />
                    <h3 className="text-xl font-medium mb-2">Draft</h3>
                    <p className="text-gray-500 mb-6">You currently have no draft ads.</p>
                    <Button className="bg-sobaar-blue hover:bg-blue-600">
                      New Ad
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
