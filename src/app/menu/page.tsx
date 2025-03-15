"use client";

import PhoneVerificationDiscount from "@/components/menu/phoneVerification";
import OrderComponent from "@/components/orders";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import icons
import { FaHotjar, FaCocktail, FaBirthdayCake } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLocalOffer } from "react-icons/md";

// Import the centralized data
import {
  CATEGORY_IDS,
  MENU_CATEGORIES,
  OFFERS_CATEGORY,
} from "@/lib/menu/constants";
import { MENU_ITEMS, PROMOTIONS } from "@/lib/menu-data";
import { createAddToCartEvent } from "@/lib/utils";

// Map for category icons
const CATEGORY_ICONS = {
  [CATEGORY_IDS.HOT_DRINKS]: <FaHotjar />,
  [CATEGORY_IDS.COLD_DRINKS]: <FaCocktail />,
  [CATEGORY_IDS.DESSERTS]: <FaBirthdayCake />,
  [CATEGORY_IDS.BREAKFAST]: <IoFastFoodOutline />,
  [CATEGORY_IDS.OFFERS]: <MdLocalOffer />,
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORY_IDS.OFFERS
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  // Handle scroll behavior for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter items based on active category
  const displayedItems =
    activeCategory === CATEGORY_IDS.OFFERS
      ? []
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  // Handle add to cart animation
  const handleAddToCart = (item: any) => {
    createAddToCartEvent(item);

    // Add item ID to the set of added items for animation
    setAddedItems(new Set(addedItems.add(item.id)));

    // Remove animation class after animation completes
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 1000);
  };

  // Helper function to get icon for a category
  const getCategoryIcon = (categoryId: string) => {
    return CATEGORY_ICONS[categoryId as keyof typeof CATEGORY_ICONS] || null;
  };

  return (
    <div className="min-h-screen bg-darkPrimary text-white font-iran-sans-regular">
      {/* Cafe Header with Logo */}
      <header
        className={`w-full bg-darkSecondary z-10 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 shadow-lg" : ""
        }`}
      >
        <div
          className="container mx-auto py-2 px-6 flex justify-center items-center"
          dir="rtl"
        >
          <h1 className="font-morabba-bold text-3xl mt-4">مِنو کافه رز</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6" dir="rtl">
        <div className={`${isScrolled ? "mt-16" : ""}`}>
          <PhoneVerificationDiscount />
          {/* Hero Banner for Most Popular Offer */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <div className="absolute bottom-0 right-0 left-0 p-6 z-20">
              <Badge variant="warning" className="mb-2">
                پیشنهاد ویژه
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold">
                صبحانه خانوادگی
              </h2>
              <p className="text-sm md:text-base opacity-90 mt-1">
                با ۱۵٪ تخفیف ویژه
              </p>
            </div>
          </div>

          {/* Categories Navigation */}
          <nav className="mb-8 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex gap-2 min-w-max">
              <button
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  activeCategory === CATEGORY_IDS.OFFERS
                    ? "bg-primary-500 text-white"
                    : "bg-darkSecondary hover:bg-darkSecondary/70"
                }`}
                onClick={() => setActiveCategory(CATEGORY_IDS.OFFERS)}
              >
                {getCategoryIcon(CATEGORY_IDS.OFFERS)}
                <span>{OFFERS_CATEGORY.name}</span>
              </button>

              {MENU_CATEGORIES.filter(
                (cat: any) => cat.id !== CATEGORY_IDS.ALL
              ).map((category: any) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary-500 text-white"
                      : "bg-darkSecondary hover:bg-darkSecondary/70"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {getCategoryIcon(category.id)}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Special Offers Section */}
          {activeCategory === CATEGORY_IDS.OFFERS && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {getCategoryIcon(CATEGORY_IDS.OFFERS)}
                <span className="text-primary-300">{OFFERS_CATEGORY.name}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROMOTIONS.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-darkSecondary rounded-xl overflow-hidden border border-stone-700 shadow-lg flex flex-col h-full"
                  >
                    <div className="relative h-48">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${offer.image}')` }}
                      ></div>
                      <div className="absolute top-0 left-0 bg-primary-500 text-white px-3 py-1 rounded-br-lg">
                        {offer.discount} تخفیف
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{offer.title}</h3>
                        <p className="text-stone-300 text-sm mt-1">
                          {offer.description}
                        </p>
                        {offer.type === "bundle" && offer.includes && (
                          <div className="mt-3 text-sm">
                            <p className="text-stone-400 mb-1">شامل:</p>
                            <ul className="space-y-1">
                              {offer.includes.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="bg-primary-500/20 text-primary-300 rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">
                                    {item.quantity}
                                  </span>
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex justify-between items-center pt-4 border-stone-700">
                        <div>
                          <span className="text-stone-400 line-through text-sm">
                            {offer.regularPrice.toLocaleString()} تومان
                          </span>
                          <div className="text-xl font-bold text-white">
                            {offer.discountedPrice.toLocaleString()} تومان
                          </div>
                        </div>
                        <button
                          className={`bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors ${
                            addedItems.has(offer.id)
                              ? "animate-pulse bg-success-400"
                              : ""
                          }`}
                          onClick={() => handleAddToCart(offer)}
                        >
                          {addedItems.has(offer.id) ? "اضافه شد" : "سفارش"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Regular Menu Items */}
          {activeCategory !== CATEGORY_IDS.OFFERS && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {getCategoryIcon(activeCategory)}
                <span>
                  {
                    MENU_CATEGORIES.find(
                      (cat: any) => cat.id === activeCategory
                    )?.name
                  }
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-darkSecondary rounded-xl overflow-hidden border border-stone-700 shadow-lg flex flex-col h-full"
                  >
                    <div className="relative h-48">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                      {item.isDiscounted && (
                        <div className="absolute top-0 left-0 bg-primary-500 text-white px-3 py-1 rounded-br-lg">
                          تخفیف ویژه
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        {item.description && (
                          <p className="text-stone-300 text-sm mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 flex justify-between items-center pt-4 ">
                        <div className="flex flex-col h-14 justify-end">
                          {item.isDiscounted ? (
                            <>
                              <span className="text-stone-400 line-through text-sm">
                                {item.price.toLocaleString()} تومان
                              </span>
                              <div className="text-xl font-bold text-white">
                                {item.discountedPrice?.toLocaleString()} تومان
                              </div>
                            </>
                          ) : (
                            <div className="text-xl font-bold text-white mt-auto">
                              {item.price.toLocaleString()} تومان
                            </div>
                          )}
                        </div>
                        <button
                          className={`bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors ${
                            addedItems.has(item.id)
                              ? "animate-pulse bg-success-400"
                              : ""
                          }`}
                          onClick={() => handleAddToCart(item)}
                        >
                          {addedItems.has(item.id) ? "اضافه شد" : "سفارش"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Order Component */}
      <OrderComponent />

      {/* Footer */}
      <footer className="bg-darkSecondary py-8 mt-12">
        <div className="container mx-auto px-6" dir="rtl">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-morabba-bold text-2xl mb-4">مِنو کافه</h3>
              <p className="text-stone-300 max-w-xs">
                مکانی دنج و آرام برای لذت بردن از نوشیدنی‌های گرم و سرد همراه با
                دسرهای خوشمزه
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">ساعات کاری</h4>
              <div className="text-stone-300">
                <p>شنبه تا چهارشنبه: ۸ صبح تا ۱۰ شب</p>
                <p>پنجشنبه و جمعه: ۸ صبح تا ۱۲ شب</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">تماس با ما</h4>
              <div className="text-stone-300">
                <p>تهران، خیابان ولیعصر، کوچه بهار</p>
                <p className="mt-2">۰۲۱-۱۲۳۴۵۶۷۸</p>
                <p>info@menucafe.ir</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-700 mt-8 pt-6 text-center text-stone-400 text-sm">
            © ۱۴۰۴ مِنو کافه - تمامی حقوق محفوظ است
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MenuPage;
