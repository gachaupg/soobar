
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "The Best Classifieds Portal",
    subtitle: "In Somalia",
    image: "/lovable-uploads/5e7a4db1-4358-483a-9fd4-3969e1295d76.png",
    ctaText: "BROWSE ADS",
    ctaLink: "/ads"
  },
  {
    id: 2,
    title: "Find Popular Items",
    subtitle: "Sobaar.com offers thousands of listings near you",
    image: "/lovable-uploads/46c3880d-784d-454b-911e-b38f228aeb60.png",
    ctaText: "VIEW MORE",
    ctaLink: "/category/electronics"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-[400px] md:h-[380px] relative">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 max-w-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-white/90 mb-6">
                {slide.subtitle}
              </p>
              {slide.ctaText && (
                <div>
                  <Button 
                    variant="outline" 
                    className="text-white border-white hover:bg-white hover:text-sobaar-darkBlue"
                  >
                    {slide.ctaText}
                  </Button>
                </div>
              )}
            </div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
