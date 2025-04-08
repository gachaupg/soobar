import { UserCircle2, FileText, Package } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const Step = ({ icon, number, title, description }: StepProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start space-x-4">
        <div className="text-primary">{icon}</div>
        <div className="flex-1">
          <div className="text-blue-300 text-lg mb-2">{number}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export function HowItWorks() {
  const steps = [
    {
      icon: <UserCircle2 className="w-6 h-6" />,
      number: "01",
      title: "Create Account",
      description:
        "Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      number: "02",
      title: "Post Ads",
      description:
        "Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      number: "03",
      title: "Start Selling",
      description:
        "Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
