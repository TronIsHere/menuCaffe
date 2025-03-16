"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import {
  MdCake,
  MdCoffee,
  MdLocalBar,
  MdLocalCafe,
  MdLocalOffer,
  MdOutlineBreakfastDining,
} from "react-icons/md";

// Import the shared data module
import { MENU_ITEMS, PROMOTIONS } from "@/lib/menu/menu-data";
import { CATEGORY_IDS, MENU_CATEGORIES } from "@/lib/menu/constants";
import { createAddToCartEvent } from "@/lib/utils";

// Map category IDs to icons used in this specific UI
const CATEGORY_ICONS_MD: Record<string, React.ReactNode> = {
  [CATEGORY_IDS.HOT_DRINKS]: <MdCoffee className="text-amber-700" />,
  [CATEGORY_IDS.COLD_DRINKS]: <MdLocalBar className="text-blue-500" />,
  [CATEGORY_IDS.DESSERTS]: <MdCake className="text-pink-500" />,
  [CATEGORY_IDS.BREAKFAST]: (
    <MdOutlineBreakfastDining className="text-yellow-600" />
  ),
  [CATEGORY_IDS.OFFERS]: <MdLocalOffer className="text-amber-500" />,
};

// Define interface for Item Modal
interface ItemModalProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
}

// Item Detail Modal Component
const ItemModal = ({ item, isOpen, onClose }: ItemModalProps) => {
  if (!isOpen || !item) return null;

  // Check if the item is a promotion or regular menu item
  const isPromotion = "title" in item;
  const name = isPromotion ? item.title : item.name;
  const price = isPromotion ? item.regularPrice : item.price;
  const discountedPrice = isPromotion
    ? item.discountedPrice
    : item.discountedPrice;
  const isDiscounted = isPromotion ? true : item.isDiscounted;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl overflow-hidden max-w-md w-full shadow-xl relative"
        dir="rtl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1"
        >
          <FiX size={24} />
        </button>

        <div className="h-48">
          <img
            src={item.image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-iran-sans-bold text-gray-800">{name}</h3>

          {item.description && (
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          )}

          {isPromotion && item.includes && (
            <div className="mt-3 bg-amber-50 p-3 rounded-lg">
              <p className="text-sm font-iran-sans-bold text-amber-800 mb-2">
                شامل:
              </p>
              <ul className="space-y-1">
                {item.includes.map((included: any, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs ml-2">
                      {included.quantity}
                    </span>
                    {included.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-3 flex justify-between items-center">
            {isDiscounted ? (
              <div>
                <span className="text-gray-500 line-through text-sm">
                  {price.toLocaleString()} تومان
                </span>
                <div className="text-xl text-amber-600">
                  {discountedPrice?.toLocaleString()} تومان
                </div>
              </div>
            ) : (
              <div className="text-xl text-gray-800">
                {price.toLocaleString()} تومان
              </div>
            )}
          </div>

          <button
            className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors"
            onClick={() => {
              createAddToCartEvent(item);
              onClose();
            }}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Collapsible menu section component
const MenuSection = ({
  category,
  onItemClick,
}: {
  category: string;
  onItemClick: (item: any) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Get category details
  const categoryDetails = MENU_CATEGORIES.find(
    (cat: any) => cat.id === category
  );

  // Get items for this category
  const categoryItems = MENU_ITEMS.filter((item) => item.category === category);

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-1"
      >
        <div className="flex items-center gap-2">
          {CATEGORY_ICONS_MD[category]}
          <span className="text-lg text-gray-800">{categoryDetails?.name}</span>
        </div>
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {isOpen && (
        <div className="pb-3 space-y-3">
          {categoryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item)}
              className="flex items-center justify-between cursor-pointer px-2 py-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="font-medium text-gray-800">{item.name}</span>
              </div>
              <div className="flex flex-col items-end">
                {item.isDiscounted ? (
                  <>
                    <span className="text-xs text-gray-500 line-through">
                      {item.price.toLocaleString()} تومان
                    </span>
                    <span className="text-amber-600 font-iran-sans-bold">
                      {item.discountedPrice?.toLocaleString()} تومان
                    </span>
                  </>
                ) : (
                  <span className="text-gray-800 font-iran-sans-bold">
                    {item.price.toLocaleString()} تومان
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Promotions carousel component
const SpecialOffersCarousel = ({
  onOfferClick,
}: {
  onOfferClick: (offer: any) => void;
}) => {
  return (
    <div className="relative safari-carousel">
      <h2 className="text-xl font-medium text-amber-700 mb-4 flex items-center gap-2 px-3">
        پیشنهادات ویژه
      </h2>

      <div className="overflow-x-auto pb-4 flex gap-4 px-3 w-full max-w-full safari-scroll">
        {PROMOTIONS.map((offer) => (
          <div
            key={offer.id}
            onClick={() => onOfferClick(offer)}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg flex-none overflow-hidden shadow-md border border-amber-200 safari-card"
            style={{
              width: "min(100%, 250px)",
              maxWidth: "90vw",
              flexShrink: 0,
              height: "280px", // Fixed height for all cards
            }}
          >
            <div className="relative h-32">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 bg-amber-600 text-white px-2 py-1 text-xs rounded-br-lg">
                {offer.discount} تخفیف
              </div>
            </div>

            {/* Using flex-col and h-full to create a fixed layout */}
            <div className="p-3 flex flex-col h-[148px]">
              {/* Title and description take available space */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{offer.title}</h3>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {offer.description}
                </p>
              </div>

              {/* Price section is fixed at the bottom */}
              <div className="flex justify-between items-center mt-2 text-sm pt-2 border-t border-amber-100">
                <span className="line-through text-gray-500">
                  {offer.regularPrice.toLocaleString()}
                </span>
                <span className="font-medium text-amber-700">
                  {offer.discountedPrice.toLocaleString()} تومان
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component
const AlternativeMenuPage = () => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Listen for add to cart events
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const newItem = event.detail;

      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (i) => String(i.id) === String(newItem.id)
        );

        if (existingItemIndex >= 0) {
          // Update quantity if item exists
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += 1;
          return updatedItems;
        } else {
          // Add new item
          return [...prevItems, { ...newItem, quantity: 1 }];
        }
      });
    };

    // Register event listener
    window.addEventListener("addToCart", handleAddToCart as EventListener);

    // Cleanup
    return () => {
      window.removeEventListener("addToCart", handleAddToCart as EventListener);
    };
  }, []);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 font-iran-sans-regular">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdLocalCafe size={24} />
            <h1 className="font-morabba-bold text-xl mt-2">مِنو کافه</h1>
          </div>

          <button
            className="p-2 relative"
            onClick={() => setCartVisible(true)}
            aria-label="سبد خرید"
          >
            <FiShoppingBag size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="container mx-auto pb-24" dir="rtl">
        {/* Special offers carousel */}
        <div className="mt-6 mb-8">
          <SpecialOffersCarousel onOfferClick={handleItemClick} />
        </div>

        {/* Menu sections */}
        <div className="bg-white rounded-t-xl shadow-md px-4 pb-4">
          <div className="flex items-center gap-2 py-4 border-b border-gray-200">
            <MdLocalCafe size={22} className="text-amber-600" />
            <h2 className="text-lg font-iran-sans-bold text-gray-800">
              منوی کافه
            </h2>
          </div>

          {/* Render menu sections for all categories except "all" and "offers" */}
          {MENU_CATEGORIES.filter(
            (cat) =>
              cat.id !== CATEGORY_IDS.ALL && cat.id !== CATEGORY_IDS.OFFERS
          ).map((category) => (
            <MenuSection
              key={category.id}
              category={category.id}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </main>

      {/* Cart button floating */}
      <button
        onClick={() => setCartVisible(true)}
        className="fixed bottom-6 left-6 bg-amber-600 text-white p-4 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
      >
        <FiShoppingBag size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Slide-in */}
      <AnimatePresence>
        {cartVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setCartVisible(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-y-0 left-0 w-full max-w-md bg-white z-40 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-bold text-lg">سبد خرید</h2>
                <button onClick={() => setCartVisible(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-stone-400">
                    <FiShoppingBag size={48} className="mb-4" />
                    <p>سبد خرید شما خالی است</p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-3 bg-stone-50 p-3 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />

                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-bold">{item.name}</h3>
                            <button
                              onClick={() => {
                                setCartItems((prev) =>
                                  prev.filter((i) => i.id !== item.id)
                                );
                              }}
                              className="text-stone-400 hover:text-rose-500"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>

                          <div className="text-stone-500 text-sm">
                            {item.discountedPrice ? (
                              <>
                                <span className="line-through">
                                  {item.price?.toLocaleString() ||
                                    item.regularPrice?.toLocaleString()}{" "}
                                  تومان
                                </span>
                                <span className="block text-rose-600 font-bold">
                                  {item.discountedPrice.toLocaleString()} تومان
                                </span>
                              </>
                            ) : (
                              <span>
                                {item.price?.toLocaleString() ||
                                  item.regularPrice?.toLocaleString()}{" "}
                                تومان
                              </span>
                            )}
                          </div>

                          <div className="flex justify-between items-center mt-2">
                            <div className="flex border rounded">
                              <button
                                onClick={() => {
                                  setCartItems((prev) =>
                                    prev.map((i) =>
                                      i.id === item.id
                                        ? {
                                            ...i,
                                            quantity: Math.max(
                                              1,
                                              i.quantity - 1
                                            ),
                                          }
                                        : i
                                    )
                                  );
                                }}
                                className="px-2 py-1 bg-stone-100"
                              >
                                <FiMinus size={14} />
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                onClick={() => {
                                  setCartItems((prev) =>
                                    prev.map((i) =>
                                      i.id === item.id
                                        ? { ...i, quantity: i.quantity + 1 }
                                        : i
                                    )
                                  );
                                }}
                                className="px-2 py-1 bg-stone-100"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>

                            <span className="font-bold">
                              {(
                                (item.discountedPrice ||
                                  item.price ||
                                  item.regularPrice) * item.quantity
                              ).toLocaleString()}{" "}
                              تومان
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t p-4">
                  <div className="flex justify-between mb-2">
                    <span>مجموع:</span>
                    <span className="font-bold">
                      {cartItems
                        .reduce((total, item) => {
                          const price =
                            item.discountedPrice ||
                            item.price ||
                            item.regularPrice;
                          return total + price * item.quantity;
                        }, 0)
                        .toLocaleString()}{" "}
                      تومان
                    </span>
                  </div>
                  <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-bold">
                    تکمیل سفارش
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Item detail modal */}
      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-white mt-10 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
          © ۱۴۰۴ مِنو کافه - تمام حقوق محفوظ است
        </div>
      </footer>
    </div>
  );
};

export default AlternativeMenuPage;
