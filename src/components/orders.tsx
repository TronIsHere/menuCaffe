import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag, FaTrash, FaCheck } from "react-icons/fa";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { Badge } from "@/components/ui/badge";

// Define types
interface OrderItem {
  id: number;
  name?: string; // Made optional since special offers use title
  title?: string; // For special offers
  price?: number; // For regular items
  regularPrice?: number; // For special offers
  quantity: number;
  image: string;
  isDiscounted?: boolean;
  discountedPrice?: number;
  type?: string; // For special offers (bundle, item, etc.)
  description?: string; // For special offers
  includes?: Array<{ name: string; quantity: number }>; // For bundle offers
}

const OrderComponent = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  // Listen for custom events when an item is added to cart
  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const item = event.detail;
      setOrderItems((prevItems) => {
        // Check if the item already exists in the cart
        const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

        if (existingItemIndex >= 0) {
          // Item exists, increment quantity
          const newItems = [...prevItems];
          newItems[existingItemIndex].quantity += 1;
          return newItems;
        } else {
          // Add new item with quantity 1
          return [...prevItems, { ...item, quantity: 1 }];
        }
      });
    };

    // Register the event listener
    window.addEventListener("addToCart", handleAddToCart as EventListener);

    // Clean up
    return () => {
      window.removeEventListener("addToCart", handleAddToCart as EventListener);
    };
  }, []);

  // Calculate total items and price
  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = orderItems.reduce((sum, item) => {
    let itemPrice;
    // Handle different item structures (menu items vs special offers)
    if (item.discountedPrice) {
      itemPrice = item.discountedPrice;
    } else if (item.regularPrice) {
      itemPrice = item.regularPrice;
    } else if (item.isDiscounted && item.price) {
      itemPrice = item.discountedPrice || item.price;
    } else {
      itemPrice = item.price || 0;
    }
    return sum + itemPrice * item.quantity;
  }, 0);

  // Handle quantity changes
  const updateQuantity = (id: number, change: number) => {
    setOrderItems(
      (prevItems) =>
        prevItems
          .map((item) => {
            if (item.id === id) {
              const newQuantity = Math.max(0, item.quantity + change);
              // If quantity becomes 0, we'll filter it out later
              return { ...item, quantity: newQuantity };
            }
            return item;
          })
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Handle order placement
  const placeOrder = () => {
    if (orderItems.length === 0) return;

    // Generate a random order number
    const newOrderNumber = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    // Reset after a delay
    setTimeout(() => {
      setOrderPlaced(false);
      setOrderItems([]);
      setIsCartOpen(false);
    }, 3000);
  };

  return (
    <div className="relative z-30">
      {/* Shopping Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 left-6 bg-primary-500 text-white p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors"
      >
        <FaShoppingBag size={24} />
        {totalItems > 0 && (
          <Badge
            variant="warning"
            className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center p-0"
          >
            {totalItems}
          </Badge>
        )}
      </button>

      {/* Cart Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setIsCartOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-darkPrimary shadow-xl z-50 overflow-auto flex flex-col"
              dir="rtl"
            >
              <div className="p-6 border-b border-stone-700 bg-darkSecondary">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FaShoppingBag className="text-primary-300" />
                    سبد سفارش
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-stone-400 hover:text-white p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-auto p-6">
                {orderItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-stone-400">
                    <FaShoppingBag size={48} className="mb-4 opacity-50" />
                    <p>سبد خرید شما خالی است</p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {orderItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center bg-darkSecondary p-3 rounded-lg border border-stone-700"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />

                        <div className="mr-3 flex-1">
                          <h3 className="font-bold text-white">
                            {item.name || item.title}
                          </h3>
                          <div className="text-stone-300">
                            {item.isDiscounted ? (
                              <div>
                                <span className="line-through text-stone-500 text-sm">
                                  {item.price?.toLocaleString()} تومان
                                </span>
                                <span className="block text-primary-300">
                                  {item.discountedPrice?.toLocaleString()} تومان
                                </span>
                              </div>
                            ) : item.regularPrice ? (
                              <div>
                                {item.discountedPrice ? (
                                  <>
                                    <span className="line-through text-stone-500 text-sm">
                                      {item.regularPrice.toLocaleString()} تومان
                                    </span>
                                    <span className="block text-primary-300">
                                      {item.discountedPrice.toLocaleString()}{" "}
                                      تومان
                                    </span>
                                  </>
                                ) : (
                                  <span>
                                    {item.regularPrice.toLocaleString()} تومان
                                  </span>
                                )}
                              </div>
                            ) : (
                              <span>
                                {(item.price || 0).toLocaleString()} تومان
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 bg-darkPrimary rounded text-stone-400 hover:text-white"
                          >
                            <IoMdRemove />
                          </button>

                          <span className="w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 bg-darkPrimary rounded text-stone-400 hover:text-white"
                          >
                            <IoMdAdd />
                          </button>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, -item.quantity)
                            }
                            className="mr-2 p-1 text-stone-400 hover:text-error-500"
                          >
                            <FaTrash size={14} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {orderItems.length > 0 && (
                <div className="p-6 border-t border-stone-700 bg-darkSecondary">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-300">تعداد اقلام:</span>
                    <span className="font-bold">{totalItems} عدد</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-stone-300">مجموع قیمت:</span>
                    <span className="font-bold text-lg text-primary-300">
                      {totalPrice.toLocaleString()} تومان
                    </span>
                  </div>

                  <button
                    onClick={placeOrder}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    {orderPlaced ? (
                      <>
                        <FaCheck />
                        <span>سفارش شما با موفقیت ثبت شد!</span>
                      </>
                    ) : (
                      <>
                        <span>ثبت سفارش</span>
                      </>
                    )}
                  </button>

                  {orderPlaced && orderNumber && (
                    <div className="mt-4 p-3 bg-success-500/20 border border-success-500/30 rounded-lg text-center">
                      <p className="text-success-400 text-sm">
                        شماره سفارش: {orderNumber}
                      </p>
                      <p className="text-stone-400 text-xs mt-1">
                        لطفاً شماره سفارش خود را به باریستا اعلام کنید
                      </p>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderComponent;
