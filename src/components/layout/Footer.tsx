
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Bell, 
  MapPin,
  Youtube,
  // Remove unavailable icons: Snapchat, TikTok
  Smartphone,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Logo and Social */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/9f930f86-d721-4f49-9ef8-6a85c08b5eac.png" alt="Sobaar" className="h-8 mr-2" />
              <span className="text-xl font-bold">
                Sobaar.com
              </span>
            </Link>
            <p className="text-sm mb-4">Find Anything!</p>
            
            <div className="mb-4">
              <h4 className="text-gray-300 text-sm mb-3">Follow us on</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle size={16} />
              </a>
              {/* Replace Snapchat with Bell */}
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-yellow-500 transition-colors">
                <Bell size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={16} />
              </a>
              {/* Replace TikTok with Youtube */}
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/support" className="block text-gray-400 hover:text-white text-sm">Support center</Link>
              <Link to="/category" className="block text-gray-400 hover:text-white text-sm">Category</Link>
              <Link to="/faq" className="block text-gray-400 hover:text-white text-sm">FAQ</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm">About us</Link>
              <Link to="/partners" className="block text-gray-400 hover:text-white text-sm">Our Partners</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact us</Link>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/blog" className="block text-gray-400 hover:text-white text-sm">Blog</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white text-sm">Careers</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white text-sm">About us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white text-sm">Contact us</Link>
              <Link to="/billing" className="block text-gray-400 hover:text-white text-sm">Billing Policy</Link>
            </div>
          </div>
          
          {/* Legal Policies */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Legal Policies</h4>
            <div className="space-y-2">
              <Link to="/terms" className="block text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="block text-gray-400 hover:text-white text-sm">Cookies Policy</Link>
              <Link to="/disclaimer" className="block text-gray-400 hover:text-white text-sm">Disclaimer Policy</Link>
              <Link to="/billing" className="block text-gray-400 hover:text-white text-sm">Billing Policy</Link>
            </div>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contact us</h4>
            <div className="space-y-2">
              <a href="tel:+252123456688" className="flex items-center text-gray-400 hover:text-white text-sm">
                <Phone size={16} className="mr-2" />
                <span>+252 123456688</span>
              </a>
              <a href="tel:+252123456688" className="flex items-center text-gray-400 hover:text-white text-sm">
                <Phone size={16} className="mr-2" />
                <span>+252 123456688</span>
              </a>
              <a href="mailto:info@sobaar.com" className="flex items-center text-gray-400 hover:text-white text-sm">
                <Mail size={16} className="mr-2" />
                <span>info@sobaar.com</span>
              </a>
              <a href="#" className="flex items-start text-gray-400 hover:text-white text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>K344, Mogadishu, Somalia</span>
              </a>
            </div>
            
            <h4 className="text-white font-medium text-lg mt-6 mb-3">Download App</h4>
            <div className="flex space-x-2">
              <a href="#" className="block">
                <img src="/lovable-uploads/ef23568b-918e-41bc-8a52-62320a1550c9.png" alt="Google Play" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="/lovable-uploads/1da8a23b-dad8-4e77-a8b2-af6715c4fdaa.png" alt="App Store" className="h-10" />
              </a>
            </div>
            
            <div className="flex space-x-4 mt-3">
              <div className="bg-white p-1 rounded">
                <img src="/lovable-uploads/0d47c1ce-3c3c-43c6-b5d9-08f869b6c406.png" alt="QR Code" className="h-16 w-16" />
              </div>
              <div className="bg-white p-1 rounded">
                <img src="/lovable-uploads/0d47c1ce-3c3c-43c6-b5d9-08f869b6c406.png" alt="QR Code" className="h-16 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-zinc-800 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-2 md:mb-0">
            Copyright © 2022. Sobaar.com. Powered By OMATA Technologies
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-400 mr-2">Language:</span>
            <div className="flex items-center space-x-1 bg-zinc-800 rounded-md px-3 py-1">
              <img src="/lovable-uploads/508ae6e2-a2ca-46c1-ad40-3a3925713bd8.png" alt="English" className="h-4 w-6" />
              <span className="text-xs">English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
