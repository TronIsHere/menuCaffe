"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiChevronRight,
  FiChevronLeft,
  FiClock,
  FiTag,
  FiPercent,
  FiArrowRight,
} from "react-icons/fi";

// Define types for promotions
interface Promotion {
  id: number;
  title: string;
  description: string;
  regularPrice: number | null;
  discountedPrice: number | null;
  discount: string;
  image: string;
  backgroundColor: string;
  accentColor: string;
  endDate: string | null;
}

// Define props for the carousel component
interface PromotionsCarouselProps {
  promotions: Promotion[];
  onAddToCart: (item: any) => void;
}

// Enhanced special promotions/offers data
const specialPromotions: Promotion[] = [
  {
    id: 1,
    title: "پکیج صبحانه خانوادگی",
    description: "قهوه اسپرسو، کیک شکلاتی و کراسان",
    regularPrice: 150000,
    discountedPrice: 127500,
    discount: "15%",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    backgroundColor: "#f8f3eb",
    accentColor: "#8c6c40",
    endDate: "۱۴۰۴/۰۱/۳۰",
  },
  {
    id: 2,
    title: "کاپوچینو ویژه",
    description: "کاپوچینو با خامه مخصوص و دارچین تازه",
    regularPrice: 45000,
    discountedPrice: 35000,
    discount: "۱۰،۰۰۰ تومان",
    image: "https://images.unsplash.com/photo-1572286258217-215223af50e7?w=600",
    backgroundColor: "#f4ede5",
    accentColor: "#a84832",
    endDate: "۱۴۰۴/۰۱/۱۵",
  },
  {
    id: 3,
    title: "تخفیف ویژه عصرانه",
    description: "در ساعات ۱۵ تا ۱۷ از ۱۰٪ تخفیف بهره‌مند شوید",
    regularPrice: null,
    discountedPrice: null,
    discount: "تخفیف روزانه",
    image: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600",
    backgroundColor: "#eef2f7",
    accentColor: "#5a7ba0",
    endDate: null,
  },
];

// Redesigned Promotions Carousel Component
const PromotionsCarousel: React.FC<PromotionsCarouselProps> = ({
  promotions,
  onAddToCart,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef(0);

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveSlide((prev) => (prev + 1) % promotions.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [promotions.length, isAnimating]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide(
        (prev) => (prev - 1 + promotions.length) % promotions.length
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveSlide((prev) => (prev + 1) % promotions.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;

    // If swipe distance is significant, change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next slide
        handleNext();
      } else {
        // Swipe right, go to previous slide
        handlePrev();
      }
    }
  };

  const promotion = promotions[activeSlide];

  return (
    <div
      ref={carouselRef}
      className="mb-8 rounded-xl overflow-hidden shadow-lg relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        key={activeSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-[600px]"
        style={{ backgroundColor: promotion.backgroundColor }}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Text content */}
          <div className="w-full sm:w-1/2 p-5 sm:p-8 flex flex-col h-[300px] justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: promotion.accentColor }}
              >
                {promotion.regularPrice ? (
                  <FiPercent className="text-white" />
                ) : (
                  <FiTag className="text-white" />
                )}
              </div>
              <span
                className="text-sm font-medium rounded-full px-3 py-1"
                style={{
                  backgroundColor: `${promotion.accentColor}20`,
                  color: promotion.accentColor,
                }}
              >
                {promotion.discount} تخفیف
              </span>
            </div>

            <h2
              className="text-xl sm:text-2xl font-bold mb-2"
              style={{ color: promotion.accentColor }}
            >
              {promotion.title}
            </h2>

            <p className="text-sm sm:text-base text-stone-600 mb-4 sm:mb-6">
              {promotion.description}
            </p>

            {promotion.regularPrice && (
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="line-through text-stone-400 text-sm">
                    {promotion.regularPrice.toLocaleString()} تومان
                  </span>
                  <span className="bg-rose-100 text-rose-600 px-2 py-0.5 text-xs rounded-full">
                    {promotion.discount}
                  </span>
                </div>
                <div className="text-rose-600 font-bold text-lg">
                  {promotion.discountedPrice?.toLocaleString()} تومان
                </div>
              </div>
            )}

            {promotion.endDate && (
              <div className="flex items-center text-sm text-stone-500 mb-4">
                <FiClock className="ml-1" />
                <span>اعتبار تا: {promotion.endDate}</span>
              </div>
            )}

            <button
              onClick={() =>
                promotion.regularPrice &&
                onAddToCart({
                  id: `promo-${promotion.id}`,
                  name: promotion.title,
                  price: promotion.regularPrice,
                  discountedPrice: promotion.discountedPrice,
                  image: promotion.image,
                  description: promotion.description,
                  category: "promotion",
                })
              }
              className={`
                mt-2 px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold
                ${
                  promotion.regularPrice
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }
              `}
            >
              {promotion.regularPrice ? (
                <>
                  افزودن به سبد خرید
                  <FiShoppingBag />
                </>
              ) : (
                <>
                  مشاهده منو
                  <FiArrowRight />
                </>
              )}
            </button>
          </div>

          {/* Image */}
          <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
            <img
              src={promotion.image}
              alt={promotion.title}
              className="w-full h-[400px] object-cover sm:rounded-l-xl"
            />
            <div
              className="absolute inset-0 opacity-30 sm:opacity-50 hidden sm:block"
              style={{
                background: `linear-gradient(to left, transparent, ${promotion.backgroundColor})`,
              }}
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Navigation dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeSlide ? `w-4 bg-white shadow-md` : "bg-white/50"
            }`}
            aria-label={`پیشنهاد ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 w-8 h-8 flex items-center justify-center rounded-full shadow-md z-10"
        aria-label="قبلی"
      >
        <FiChevronRight size={16} />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-stone-800 w-8 h-8 flex items-center justify-center rounded-full shadow-md z-10"
        aria-label="بعدی"
      >
        <FiChevronLeft size={16} />
      </button>
    </div>
  );
};

export { PromotionsCarousel, specialPromotions };
export default PromotionsCarousel;
