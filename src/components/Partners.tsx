import { cn } from "@/lib/utils";
import { Building2, MapPin, ShoppingBag, Users } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
}

interface PartnersProps {
  className?: string;
  showAllButton?: boolean;
}

const partners: Partner[] = [
  {
    name: "Dropbox",
    logo: "https://www.vectorlogo.zone/logos/dropbox/dropbox-icon.svg",
  },
  {
    name: "Nike",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Slack",
    logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
  },
  {
    name: "Airbnb",
    logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
  },
  {
    name: "Google",
    logo: "https://www.vectorlogo.zone/logos/google/google-icon.svg",
  },
  {
    name: "Uber",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Procter & Gamble",
    logo: "data:image/jpeg;base64,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",
  },
  {
    name: "Stripe",
    logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  },
  {
    name: "Adidas",
    logo: "https://www.vectorlogo.zone/logos/adidas/adidas-icon.svg",
  },
  {
    name: "Balenciaga",
    logo: "data:image/png;base64,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",
  },
];

export function Partners({ className, showAllButton = false }: PartnersProps) {
  return (
    <section className={cn("py-12 px-4", className)}>
      <section className="relative py-20 mb-12 bg-gray-900">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/pitz/image/upload/v1744117494/img-03_1_1_1_sfchdb.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-8 h-8 mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">9500K+</div>
              <div className="text-gray-200">Published Ads</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Users className="w-8 h-8 mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">361K+</div>
              <div className="text-gray-200">Sellers</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <Building2 className="w-8 h-8 mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">67K+</div>
              <div className="text-gray-200">Partners</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <MapPin className="w-8 h-8 mb-4 text-white" />
              <div className="text-3xl font-bold mb-2 text-white">150+</div>
              <div className="text-gray-200">City Location</div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Top Partners
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-32 mb-4 relative">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm">{partner.name}</p>
            </div>
          ))}
        </div>
        {showAllButton && (
          <div className="mt-12 text-center">
            <a
              href="/partners"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Our Partners
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
