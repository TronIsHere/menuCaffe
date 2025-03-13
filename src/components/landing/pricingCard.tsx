import { CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  featured: boolean;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  featured,
}: PricingCardProps) => {
  return (
    <div
      className={`bg-darkPrimary rounded-xl overflow-hidden border ${
        featured
          ? "border-primary-500 shadow-lg shadow-primary-500/10"
          : "border-stone-700"
      } flex flex-col h-full`}
    >
      {featured && (
        <div className="bg-primary-500 py-1 text-center">
          <span className="text-white text-sm font-bold">پیشنهاد ویژه</span>
        </div>
      )}
      <div className="p-6 flex-1">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-stone-400 text-sm mb-4">{description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-stone-400"> تومان / {period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-300 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 pt-0">
        <Button
          className={`w-full ${
            featured
              ? "bg-primary-500 hover:bg-primary-600"
              : "bg-darkSecondary hover:bg-stone-700"
          }`}
          variant={featured ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default PricingCard;
