
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface LoginFormProps {
  onSubmit?: (email: string, password: string) => void;
  error?: string;
}

const LoginForm = ({ onSubmit, error }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email, password);
    }
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Welcome</h2>
      <p className="text-gray-600 mb-6">Please Login</p>
      
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 text-sm text-red-500">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full"
            required
          />
          {error && error.includes("email") && (
            <p className="mt-1 text-xs text-red-500">*Please enter a valid email address</p>
          )}
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Link to="/forgot-password" className="text-xs text-blue-500 hover:text-blue-700">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
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
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="mr-2" 
            />
            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
              Remember me
            </label>
          </div>
          
          <div className="flex items-center">
            <Checkbox id="robot" className="mr-2" />
            <label htmlFor="robot" className="text-sm text-gray-600 cursor-pointer">
              I am not a robot
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Checkbox id="terms" className="mt-1 mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              By clicking login, you agree to our <Link to="/terms" className="text-blue-500">terms of service</Link> and that you have read our <Link to="/privacy" className="text-blue-500">data use policy</Link>, including our <Link to="/cookies" className="text-blue-500">cookie use</Link>.
            </label>
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-sobaar-blue hover:bg-blue-600">
          Login
        </Button>
        
        <p className="text-center mt-4 text-sm">
          Don't have account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register now</Link>
        </p>
        
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600 mb-3">or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center w-8 h-8 rounded-full border">
              <img src="https://via.placeholder.com/20" alt="Google" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 rounded-full border">
              <img src="https://via.placeholder.com/20" alt="Facebook" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
