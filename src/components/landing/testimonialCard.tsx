import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}
// Testimonial Card Component
const TestimonialCard = ({
  quote,
  author,
  role,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-xl border border-stone-700">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "text-amber-400" : "text-stone-600"
            }`}
          />
        ))}
      </div>
      <p className="text-stone-300 mb-6">"{quote}"</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-stone-400 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
