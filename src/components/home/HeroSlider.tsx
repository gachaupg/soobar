import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/pitz/image/upload/v1744116697/Rectangle_4181_1_stkjjs.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/pitz/image/upload/v1744116697/Rectangle_4181_2_wgj14c.png",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/pitz/image/upload/v1744116697/Rectangle_4181_jozyei.png",
  },
  {
    id: 4,
    image:"https://res.cloudinary.com/pitz/image/upload/v1744116942/Rectangle_4181_3_agkk8o.png"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[350px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          The Best Classifieds Portal In Somalia
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Search from over 15,00,000 classifieds & Post unlimited classifieds
          free!
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
