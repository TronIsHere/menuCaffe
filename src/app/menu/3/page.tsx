"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiTrash2,
} from "react-icons/fi";
import PromotionsCarousel from "@/components/menu/promotionSlider";
import { Promotion } from "@/types/menu-types";

// Simple type definitions
interface MenuItem {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  image: string;
  description?: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

// Categories for the menu
const categories = [
  { id: "all", name: "همه" },
  { id: "hot-drinks", name: "نوشیدنی گرم" },
  { id: "cold-drinks", name: "نوشیدنی سرد" },
  { id: "desserts", name: "دسرها" },
];

// Sample menu items
const specialPromotions: Promotion[] = [
  {
    id: 1,
    title: "پکیج صبحانه خانوادگی",
    description: "قهوه اسپرسو، کیک شکلاتی و کراسان با ۱۵٪ تخفیف",
    regularPrice: 150000,
    discountedPrice: 127500,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    badge: "۱۵٪ تخفیف",
    endDate: "۱۴۰۴/۰۱/۳۰",
  },
  {
    id: 2,
    title: "کیک شکلاتی",
    description: "کیک شکلاتی با خامه تازه تولید روز",
    regularPrice: 45000,
    discountedPrice: 35000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    badge: "۱۰٫۰۰۰ تومان تخفیف",
    endDate: "۱۴۰۴/۰۱/۱۵",
  },
];
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "اسپرسو",
    price: 35000,
    image: "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400",
    description: "قهوه تلخ و غلیظ",
    category: "hot-drinks",
  },
  {
    id: 2,
    name: "کاپوچینو",
    price: 45000,
    discountedPrice: 38000,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
    description: "شیر، اسپرسو، فوم شیر",
    category: "hot-drinks",
  },
  {
    id: 3,
    name: "لاته",
    price: 48000,
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400",
    description: "شیر، اسپرسو",
    category: "hot-drinks",
  },
  {
    id: 4,
    name: "آیس لاته",
    price: 55000,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400",
    description: "شیر سرد، اسپرسو و یخ",
    category: "cold-drinks",
  },
  {
    id: 5,
    name: "آب پرتقال",
    price: 40000,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400",
    description: "آب پرتقال تازه و طبیعی",
    category: "cold-drinks",
  },
  {
    id: 6,
    name: "کیک شکلاتی",
    price: 65000,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "کیک شکلاتی خانگی",
    category: "desserts",
  },
];

const SimpleMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Filter items based on selected category
  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  // Add item to cart
  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingIndex >= 0) {
        // Increase quantity if already in cart
        const newItems = [...prev];
        newItems[existingIndex].quantity += 1;
        return newItems;
      } else {
        // Add new item
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + delta);
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Calculate cart totals
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => {
    const price = item.discountedPrice || item.price;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="bg-stone-50 min-h-screen font-iran-sans-regular" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            className="p-2 lg:hidden"
            onClick={() => setShowMobileMenu(true)}
            aria-label="منو"
          >
            <FiMenu size={24} />
          </button>

          <h1 className="text-xl font-bold font-morabba-bold mt-4">
            مِنو کافه
          </h1>

          <button
            className="p-2 relative"
            onClick={() => setShowCart(true)}
            aria-label="سبد خرید"
          >
            <FiShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setShowMobileMenu(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-y-0 right-0 w-64 bg-white z-40 p-4"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-lg">دسته‌بندی‌ها</h2>
                <button onClick={() => setShowMobileMenu(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowMobileMenu(false);
                      }}
                      className={`w-full text-right py-2 px-3 rounded transition ${
                        activeCategory === category.id
                          ? "bg-rose-100 text-rose-700 font-medium"
                          : "hover:bg-stone-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Cart Slide-in */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30"
              onClick={() => setShowCart(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              className="fixed inset-y-0 left-0 w-full max-w-md bg-white z-40 flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="font-bold text-lg">سبد خرید</h2>
                <button onClick={() => setShowCart(false)}>
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
                              onClick={() => removeFromCart(item.id)}
                              className="text-stone-400 hover:text-rose-500"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </div>

                          <div className="text-stone-500 text-sm">
                            {item.discountedPrice ? (
                              <>
                                <span className="line-through">
                                  {item.price.toLocaleString()} تومان
                                </span>
                                <span className="block text-rose-600 font-bold">
                                  {item.discountedPrice.toLocaleString()} تومان
                                </span>
                              </>
                            ) : (
                              <span>{item.price.toLocaleString()} تومان</span>
                            )}
                          </div>

                          <div className="flex justify-between items-center mt-2">
                            <div className="flex border rounded">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-2 py-1 bg-stone-100"
                              >
                                <FiMinus size={14} />
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-2 py-1 bg-stone-100"
                              >
                                <FiPlus size={14} />
                              </button>
                            </div>

                            <span className="font-bold">
                              {(
                                (item.discountedPrice || item.price) *
                                item.quantity
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
                      {cartTotal.toLocaleString()} تومان
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

      <main className="container mx-auto px-4 py-6">
        <PromotionsCarousel
          promotions={specialPromotions}
          onAddToCart={addToCart}
        />
        {/* Desktop Category Nav */}
        <div className="hidden lg:block mb-8">
          <ul className="flex gap-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition ${
                    activeCategory === category.id
                      ? "bg-rose-600 text-white"
                      : "bg-white hover:bg-stone-100"
                  }`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Category Tabs */}
        <div className="lg:hidden mb-6 overflow-x-auto flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap text-sm transition ${
                activeCategory === category.id
                  ? "bg-rose-600 text-white"
                  : "bg-white hover:bg-stone-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-stone-500 text-sm mt-1">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    {item.discountedPrice ? (
                      <>
                        <span className="line-through text-stone-400 text-sm">
                          {item.price.toLocaleString()} تومان
                        </span>
                        <div className="text-rose-600 font-bold">
                          {item.discountedPrice.toLocaleString()} تومان
                        </div>
                      </>
                    ) : (
                      <div className="font-bold">
                        {item.price.toLocaleString()} تومان
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded transition"
                  >
                    سفارش
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-stone-500">
            <p>هیچ موردی یافت نشد</p>
          </div>
        )}
      </main>

      <footer className="bg-white mt-10 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-stone-500 text-sm">
          © ۱۴۰۴ مِنو کافه - تمام حقوق محفوظ است
        </div>
      </footer>
    </div>
  );
};

export default SimpleMenu;
