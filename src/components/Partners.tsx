import { cn } from "@/lib/utils";

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
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Nike_logo-512.png",
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
    logo: "https://www.vectorlogo.zone/logos/uber/uber-icon.svg",
  },
  {
    name: "Procter & Gamble",
    logo: "https://companieslogo.com/img/orig/PG-0bfa740c.png?t=1633517885",
  },
  {
    name: "Stripe",
    logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  },
  {
    name: "Adidas",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/3_Adidas_logo-512.png",
  },
  {
    name: "Balenciaga",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Balenciaga_logo.svg/2560px-Balenciaga_logo.svg.png",
  },
];

export function Partners({ className, showAllButton = false }: PartnersProps) {
  return (
    <section className={cn("py-12 px-4", className)}>
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
