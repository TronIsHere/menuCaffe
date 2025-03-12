import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Define types for promotions and the component props
interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  badge?: string;
  regularPrice?: number | null;
  discountedPrice?: number | null;
  endDate?: string | null;
}

interface PromotionsCarouselProps {
  promotions: Promotion[];
  onAddToCart: (item: {
    id: number;
    name: string;
    price: number;
    discountedPrice?: number;
    image: string;
    description: string;
    category: string;
  }) => void;
}

// Promotions Carousel Component
const PromotionsCarousel = ({
  promotions,
  onAddToCart,
}: PromotionsCarouselProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promotions.length]);

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + promotions.length) % promotions.length
    );
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % promotions.length);
  };

  return (
    <div className="mb-8 relative rounded-lg overflow-hidden shadow-md bg-white">
      {/* Slides */}
      <div className="relative h-64 sm:h-80">
        {promotions.map((promotion: Promotion, index: number) => (
          <motion.div
            key={promotion.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: index === activeSlide ? "block" : "none" }}
          >
            <div className="absolute inset-0 flex">
              {/* Left content side */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                {promotion.badge && (
                  <span className="inline-block bg-rose-600 text-white px-2 py-1 text-sm rounded-full mb-3">
                    {promotion.badge}
                  </span>
                )}
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {promotion.title}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 mb-4">
                  {promotion.description}
                </p>

                {promotion.regularPrice !== null && (
                  <div className="mb-4">
                    <span className="line-through text-stone-400 text-sm">
                      {promotion.regularPrice?.toLocaleString()} تومان
                    </span>
                    <div className="text-rose-600 font-bold text-lg">
                      {promotion.discountedPrice?.toLocaleString()} تومان
                    </div>
                  </div>
                )}

                {promotion.endDate && (
                  <div className="text-sm text-stone-500 mb-4">
                    اعتبار تا: {promotion.endDate}
                  </div>
                )}

                <button
                  onClick={() =>
                    promotion.regularPrice !== null &&
                    onAddToCart({
                      id: promotion.id,
                      name: promotion.title,
                      price: promotion.regularPrice || 0,
                      discountedPrice: promotion.discountedPrice ?? undefined,
                      image: promotion.image,
                      description: promotion.description,
                      category: "promotion",
                    })
                  }
                  className={`mt-2 bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg w-full sm:w-auto ${
                    promotion.regularPrice === null
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={promotion.regularPrice === null}
                >
                  {promotion.regularPrice !== null
                    ? "افزودن به سبد خرید"
                    : "مشاهده منو"}
                </button>
              </div>

              {/* Right image side */}
              <div className="hidden sm:block sm:w-1/2 relative">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {promotions.map((_: unknown, index: number) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === activeSlide ? "bg-rose-600 w-5" : "bg-stone-300"
            }`}
            aria-label={`پیشنهاد ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-stone-800 p-2 rounded-full shadow"
        aria-label="قبلی"
      >
        <FiChevronRight size={16} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-stone-800 p-2 rounded-full shadow"
        aria-label="بعدی"
      >
        <FiChevronLeft size={16} />
      </button>
    </div>
  );
};
export default PromotionsCarousel;
