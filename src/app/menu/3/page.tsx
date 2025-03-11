"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronRight,
  FiChevronLeft,
  FiShoppingBag,
  FiMenu,
  FiX,
  FiStar,
  FiTag,
  FiClock,
  FiHeart,
} from "react-icons/fi";

// Type definitions
interface ItemInclude {
  name: string;
  quantity: number;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  isDiscounted?: boolean;
  discountedPrice?: number;
  rating?: number;
  prepTime?: string;
  category: string;
}

interface OfferItem {
  id: number;
  title: string;
  description: string;
  type: string;
  discount: string;
  regularPrice: number;
  discountedPrice: number;
  image: string;
  includes?: ItemInclude[];
  banner?: boolean;
}

interface Category {
  id: string;
  name: string;
}

// Component prop types
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

interface FeaturedBannerProps {
  offer: OfferItem;
}

interface SpecialOffersProps {
  offers: OfferItem[];
}

interface MenuItemCardProps {
  item: MenuItem;
}

interface CategoryPillsProps {
  categories: Category[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

// Sample special offers data
const specialOffers: OfferItem[] = [
  {
    id: 1,
    title: "صبحانه خانوادگی",
    description: "یک پکیج کامل برای خانواده شامل قهوه، کیک و کراسان",
    type: "bundle",
    discount: "15%",
    regularPrice: 150000,
    discountedPrice: 127500,
    image:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: [
      { name: "قهوه اسپرسو", quantity: 2 },
      { name: "کیک شکلاتی", quantity: 1 },
      { name: "کراسان", quantity: 2 },
    ],
    banner: true,
  },
  {
    id: 2,
    title: "کاپوچینو ویژه",
    description: "با طعم خامه مخصوص و دارچین تازه",
    type: "item",
    discount: "۱۰٫۰۰۰ تومان",
    regularPrice: 45000,
    discountedPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "چای و کیک",
    description: "چای ماسالا همراه با کیک زنجبیلی",
    type: "bundle",
    discount: "20%",
    regularPrice: 85000,
    discountedPrice: 68000,
    image:
      "https://images.unsplash.com/photo-1595080623303-c5ae68d73e92?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: [
      { name: "چای ماسالا", quantity: 1 },
      { name: "کیک زنجبیلی", quantity: 1 },
    ],
  },
];

// Menu items data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "اسپرسو",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "یک اسپرسو با طعم قوی و کرمی، تهیه شده از دانه‌های تازه آسیاب شده",
    rating: 4.2,
    prepTime: "۵ دقیقه",
    category: "hot-drinks",
  },
  {
    id: 2,
    name: "کاپوچینو",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "ترکیبی متعادل از اسپرسو، شیر بخارپز و فوم شیر با تزئین پودر دارچین",
    isDiscounted: true,
    discountedPrice: 35000,
    rating: 4.7,
    prepTime: "۸ دقیقه",
    category: "hot-drinks",
  },
  {
    id: 3,
    name: "لاته",
    price: 50000,
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "اسپرسو با شیر بخارپز و مقدار کمی فوم، مناسب برای طعم ملایم‌تر",
    rating: 4.5,
    prepTime: "۸ دقیقه",
    category: "hot-drinks",
  },
  {
    id: 4,
    name: "موکا",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "ترکیبی از اسپرسو، شیر، و شکلات تلخ برای عاشقان شکلات",
    rating: 4.8,
    prepTime: "۱۰ دقیقه",
    category: "hot-drinks",
  },
  {
    id: 6,
    name: "آیس لاته",
    price: 60000,
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "لاته سرد و خنک کننده برای روزهای گرم با یخ فراوان",
    rating: 4.3,
    prepTime: "۸ دقیقه",
    category: "cold-drinks",
  },
  {
    id: 8,
    name: "شیک شکلات",
    price: 70000,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "میلک شیک غلیظ و خامه ای با طعم شکلات بلژیکی",
    rating: 4.9,
    prepTime: "۱۲ دقیقه",
    category: "cold-drinks",
  },
  {
    id: 9,
    name: "کیک شکلاتی",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "کیک شکلاتی نرم و مرطوب با لایه های گاناش شکلات تلخ",
    rating: 4.6,
    prepTime: "تازه",
    category: "desserts",
  },
  {
    id: 11,
    name: "تیرامیسو",
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "دسر کلاسیک ایتالیایی با لایه های نرم ماسکارپونه و بیسکویت قهوه",
    rating: 4.8,
    prepTime: "تازه",
    category: "desserts",
  },
];

// Menu categories
const categories = [
  { id: "all", name: "همه" },
  { id: "hot-drinks", name: "نوشیدنی گرم" },
  { id: "cold-drinks", name: "نوشیدنی سرد" },
  { id: "desserts", name: "دسرها" },
  { id: "breakfast", name: "صبحانه" },
];

// Mobile Menu Component
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-0 z-50 bg-white"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-bold">منو</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-gray-100"
              >
                <FiX />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(category.id);
                        onClose();
                      }}
                      className={`w-full text-right py-3 px-4 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? "bg-rose-100 text-rose-900 font-bold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Featured Banner Component
const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ offer }) => {
  return (
    <div
      className="relative h-96 w-full overflow-hidden rounded-xl"
      style={{
        backgroundImage: `url(${offer.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
        <span className="inline-block bg-rose-600 text-white text-sm px-3 py-1 rounded-full mb-3">
          {offer.discount} تخفیف
        </span>
        <h2 className="text-3xl font-bold mb-2">{offer.title}</h2>
        <p className="mb-4 text-gray-200">{offer.description}</p>

        <div className="flex justify-between items-center">
          <div>
            <span className="line-through text-gray-400 text-sm">
              {offer.regularPrice.toLocaleString()} تومان
            </span>
            <div className="text-xl font-bold">
              {offer.discountedPrice.toLocaleString()} تومان
            </div>
          </div>

          <button className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-lg">
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

// Special Offers Slider Component
const SpecialOffers: React.FC<SpecialOffersProps> = ({ offers }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FiTag className="text-rose-600" />
          پیشنهادات ویژه
        </h2>

        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 no-scrollbar pb-4"
      >
        {offers
          .filter((offer) => !offer.banner)
          .map((offer) => (
            <div
              key={offer.id}
              className="flex-none w-72 bg-white rounded-xl overflow-hidden border border-gray-200 transition-all hover:shadow-md"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-rose-600 text-white text-xs px-3 py-1 z-10 rounded-br-lg">
                  {offer.discount} تخفیف
                </div>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {offer.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {offer.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="line-through text-gray-400 text-xs">
                      {offer.regularPrice.toLocaleString()}
                    </span>
                    <div className="text-rose-600 font-bold">
                      {offer.discountedPrice.toLocaleString()} تومان
                    </div>
                  </div>

                  <button className="bg-rose-600 hover:bg-rose-700 text-white text-sm px-3 py-1 rounded-lg">
                    سفارش
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// Menu Item Card Component
const MenuItemCard = ({ item }: { item: any }) => {
  return (
    <div className="flex rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all">
      <div className="w-28 h-28 flex-shrink-0 relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.isDiscounted && (
          <div className="absolute bottom-0 left-0 right-0 bg-rose-600 text-white text-xs text-center py-1">
            {Math.round(
              ((item.price - item.discountedPrice) / item.price) * 100
            )}
            % تخفیف
          </div>
        )}
      </div>

      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between">
            <h3 className="font-bold text-gray-800">{item.name}</h3>
            <button className="text-gray-400 hover:text-rose-600">
              <FiHeart />
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm mt-1 text-gray-500">
            <div className="flex items-center">
              <FiStar className="text-amber-400 mr-1" />
              <span>{item.rating}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{item.prepTime}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div>
            {item.isDiscounted ? (
              <div>
                <span className="line-through text-gray-400 text-xs">
                  {item.price.toLocaleString()}
                </span>
                <div className="text-rose-600 font-bold">
                  {item.discountedPrice.toLocaleString()} تومان
                </div>
              </div>
            ) : (
              <div className="font-bold text-gray-800">
                {item.price.toLocaleString()} تومان
              </div>
            )}
          </div>

          <button className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-lg text-sm">
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

// Category Pills Component
const CategoryPills: React.FC<CategoryPillsProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-2 sticky top-16 bg-white z-10 shadow-sm no-scrollbar">
      <div className="flex gap-3 px-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
              activeCategory === category.id
                ? "bg-rose-600 text-white font-medium"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Magazine Style Menu Component
const MagazineStyleMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter menu items based on active category
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Get featured offer
  const featuredOffer = specialOffers.find((offer) => offer.banner);

  return (
    <div className="min-h-screen bg-gray-50 font-iran-sans-regular text-right">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            className="p-2 rounded-full text-gray-700 lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          <h1 className="font-morabba-bold text-2xl text-gray-800">
            مِنو کافه
          </h1>

          <div className="flex items-center gap-4">
            <button className="p-2 relative">
              <FiShoppingBag size={24} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-600 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Desktop Sidebar */}
      <div className="flex">
        <div className="hidden lg:block w-56 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r bg-white">
          <div className="py-6 px-4">
            <h2 className="text-lg font-bold mb-6 text-gray-800">
              دسته بندی‌ها
            </h2>

            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-right py-3 px-4 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? "bg-rose-100 text-rose-900 font-bold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-56">
          <div className="container mx-auto px-4 py-6">
            {/* Featured Banner */}
            {featuredOffer && <FeaturedBanner offer={featuredOffer} />}

            {/* Special Offers */}
            <SpecialOffers offers={specialOffers} />

            {/* Category Pills (Mobile & Tablet) */}
            <div className="lg:hidden">
              <CategoryPills
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            {/* Menu Items */}
            <div className="py-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">منوی ما</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="py-20 text-center text-gray-500">
                  <p>هیچ موردی یافت نشد</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Add CSS for no-scrollbar utility
const NoScrollbarStyle = () => (
  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

// Export main component
const MagazineStyleMenuPage = () => (
  <>
    <NoScrollbarStyle />
    <MagazineStyleMenu />
  </>
);

export default MagazineStyleMenuPage;
