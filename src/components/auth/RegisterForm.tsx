
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RegisterFormProps {
  onSubmit?: (data: RegisterFormData) => void;
}

interface RegisterFormData {
  userType: "personal" | "company";
  fullName: string;
  email: string;
  mobile: string;
  whatsapp: boolean;
  password: string;
  confirmPassword: string;
  termsAgreed: boolean;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    userType: "personal",
    fullName: "",
    email: "",
    mobile: "",
    whatsapp: false,
    password: "",
    confirmPassword: "",
    termsAgreed: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  
  const handleRadioChange = (value: "personal" | "company") => {
    setFormData(prev => ({
      ...prev,
      userType: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Registration</h2>
      <p className="text-gray-600 mb-6">Please fill the required information below</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <RadioGroup
            value={formData.userType}
            onValueChange={(value) => handleRadioChange(value as "personal" | "company")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal">Personal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company">Company</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Amina Hassan"
            className="w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="aminahassan@gmail.com"
            className="w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
            Mobile*
          </label>
          <div className="flex">
            <select className="text-sm border border-r-0 rounded-l-md px-2 py-2 bg-white">
              <option>+252</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="123456789"
              className="w-full rounded-l-none"
              required
            />
          </div>
          <div className="mt-1 flex items-center">
            <Checkbox 
              id="whatsapp" 
              name="whatsapp"
              checked={formData.whatsapp}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, whatsapp: checked as boolean }))}
              className="mr-2" 
            />
            <label htmlFor="whatsapp" className="text-sm text-gray-600">
              I use same number with my WhatsApp
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password*
          </label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password*
          </label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-start">
            <Checkbox 
              id="terms" 
              name="termsAgreed"
              checked={formData.termsAgreed}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAgreed: checked as boolean }))}
              className="mt-1 mr-2" 
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By clicking register, you agree to our <Link to="/terms" className="text-blue-500">terms of service</Link> and that you have read our <Link to="/privacy" className="text-blue-500">data use policy</Link>, including our <Link to="/cookies" className="text-blue-500">cookie use</Link>.
            </label>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-sobaar-blue hover:bg-blue-600">
          Register
        </Button>
        
        <p className="text-center mt-4 text-sm">
          Already a Member? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login now</Link>
        </p>
        
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-3">or sign up with</p>
          <div className="flex justify-center space-x-4">
            <button type="button" className="flex items-center justify-center w-8 h-8 rounded-full border">
              <img src="https://via.placeholder.com/20" alt="Google" />
            </button>
            <button type="button" className="flex items-center justify-center w-8 h-8 rounded-full border">
              <img src="https://via.placeholder.com/20" alt="Facebook" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
