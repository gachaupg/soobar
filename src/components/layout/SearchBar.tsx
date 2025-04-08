
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex relative w-full">
      <Input 
        type="text"
        placeholder="Search here..."
        className="w-full h-9 pl-3 pr-10 text-sm border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button 
        type="submit"
        size="icon" 
        variant="default" 
        className="absolute right-1 top-1 h-7 w-7 bg-sobaar-darkBlue"
      >
        <Search size={18} />
      </Button>
    </form>
  );
};

export default SearchBar;
