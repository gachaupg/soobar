
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/data/dummyData";

interface SellerProfileProps {
  seller: User;
  showReviews?: boolean;
  showOpeningHours?: boolean;
  showAddListButton?: boolean;
  textColor?: string;
}

const SellerProfile = ({ 
  seller, 
  showReviews = true, 
  showOpeningHours = false,
  showAddListButton = false,
  textColor = "text-gray-800"
}: SellerProfileProps) => {
  return (
    <div className="flex flex-col items-center">
      <img 
        src={seller.avatar} 
        alt={seller.name}
        className="w-20 h-20 rounded-full object-cover mb-2"
      />
      
      <h3 className={`font-semibold text-lg ${textColor}`}>{seller.name}</h3>
      
      <div className="flex items-center mb-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i}
              size={14}
              className={i < Math.floor(seller.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-1">({seller.totalReviews} reviews)</span>
      </div>
      
      <p className="text-sm text-blue-500 mb-4">
        {seller.isVerified ? "Verified ✓" : "Not Verified"} · 
        <span className="text-gray-500"> Member since {seller.memberSince}</span>
      </p>
      
      {showAddListButton && (
        <Button variant="outline" size="sm" className="mb-4">
          Add List
        </Button>
      )}
      
      {showOpeningHours && (
        <div className="w-full mb-4">
          <h4 className="font-medium text-gray-700 mb-1">Opening hours</h4>
          <div className="flex justify-between items-center text-sm">
            <span className="text-green-500">Open now</span>
            <span>4PM - 11PM</span>
          </div>
        </div>
      )}
      
      {showReviews && (
        <div className="mb-4">
          <Link to={`/seller/${seller.id}/reviews`} className="text-sm text-blue-500">
            Reviews
          </Link>
        </div>
      )}
      
      <div className="w-full space-y-3">
        {seller.email && (
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Email</h4>
            <a 
              href={`mailto:${seller.email}`} 
              className="text-sm text-blue-500 block"
            >
              {seller.email}
            </a>
          </div>
        )}
        
        {seller.phone && (
          <div>
            <h4 className="font-medium text-gray-700 mb-1">Phone number</h4>
            <a 
              href={`tel:${seller.phone}`} 
              className="text-sm text-blue-500 block"
            >
              {seller.phone}
            </a>
          </div>
        )}
        
        {seller.whatsapp && (
          <div>
            <h4 className="font-medium text-gray-700 mb-1">WhatsApp</h4>
            <a 
              href={`https://wa.me/${seller.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`} 
              className="flex items-center text-sm text-green-500"
            >
              <span>Chat</span>
            </a>
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-gray-700 mb-1">Last time seen on the site</h4>
          <p className="text-sm">Today</p>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
