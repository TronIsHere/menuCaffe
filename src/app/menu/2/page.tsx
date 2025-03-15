"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MdRestaurantMenu,
  MdCoffee,
  MdLocalCafe,
  MdLocalBar,
  MdCake,
  MdOutlineBreakfastDining,
} from "react-icons/md";
import {
  IoChevronDown,
  IoChevronForward,
  IoStar,
  IoStarOutline,
  IoCloseOutline,
} from "react-icons/io5";
import OrderComponent from "@/components/orders";

// Define interfaces for data structures
interface ItemInclude {
  name: string;
  quantity: number;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  isDiscounted?: boolean;
  discountedPrice?: number;
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
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

// Component Props interfaces
interface ItemModalProps {
  item: MenuItem | OfferItem | null;
  isOpen: boolean;
  onClose: () => void;
}

interface MenuSectionProps {
  category: Category;
  onItemClick: (item: MenuItem) => void;
}

interface SpecialOffersCarouselProps {
  offers: OfferItem[];
  onOfferClick: (offer: OfferItem) => void;
}

// Sample offer data
const specialOffers: OfferItem[] = [
  {
    id: 1,
    title: "صبحانه خانوادگی",
    description: "یک پکیج کامل برای خانواده شامل قهوه، کیک و کراسان",
    type: "bundle",
    discount: "15%",
    regularPrice: 150000,
    discountedPrice: 127500,
    includes: [
      { name: "قهوه اسپرسو", quantity: 2 },
      { name: "کیک شکلاتی", quantity: 1 },
      { name: "کراسان", quantity: 2 },
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    includes: [
      { name: "چای ماسالا", quantity: 1 },
      { name: "کیک زنجبیلی", quantity: 1 },
    ],
    image:
      "https://images.unsplash.com/photo-1595080623303-c5ae68d73e92?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Menu categories and items
const menuCategories: Category[] = [
  {
    id: "hot-drinks",
    name: "نوشیدنی گرم",
    icon: <MdCoffee className="text-amber-700" />,
    items: [
      {
        id: 1,
        name: "اسپرسو",
        price: 35000,
        image:
          "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        name: "کاپوچینو",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isDiscounted: true,
        discountedPrice: 35000,
      },
      {
        id: 3,
        name: "لاته",
        price: 50000,
        image:
          "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        name: "موکا",
        price: 55000,
        image:
          "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 5,
        name: "قهوه ترک",
        price: 40000,
        image:
          "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "cold-drinks",
    name: "نوشیدنی سرد",
    icon: <MdLocalBar className="text-blue-500" />,
    items: [
      {
        id: 6,
        name: "آیس لاته",
        price: 60000,
        image:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 7,
        name: "آیس آمریکانو",
        price: 55000,
        image:
          "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 8,
        name: "شیک شکلات",
        price: 70000,
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "desserts",
    name: "دسرها",
    icon: <MdCake className="text-pink-500" />,
    items: [
      {
        id: 9,
        name: "کیک شکلاتی",
        price: 65000,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 10,
        name: "کیک زنجبیلی",
        price: 55000,
        image:
          "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 11,
        name: "تیرامیسو",
        price: 75000,
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: "breakfast",
    name: "صبحانه",
    icon: <MdOutlineBreakfastDining className="text-yellow-600" />,
    items: [
      {
        id: 12,
        name: "کراسان",
        price: 40000,
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 13,
        name: "املت",
        price: 80000,
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 14,
        name: "صبحانه انگلیسی",
        price: 120000,
        image:
          "https://images.unsplash.com/photo-1588625436591-c6d853288b60?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

// Modal for item details
const ItemModal = ({ item, isOpen, onClose }: ItemModalProps) => {
  if (!isOpen || !item) return null;

  // Check if the item is a MenuItem or an OfferItem
  const isOffer = "title" in item;
  const name = isOffer ? item.title : item.name;
  const price = isOffer ? item.regularPrice : item.price;
  const discountedPrice = isOffer ? item.discountedPrice : item.discountedPrice;
  const isDiscounted = isOffer ? true : item.isDiscounted;

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
          <IoCloseOutline size={24} />
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

          {isOffer && "description" in item && (
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          )}

          {isOffer && "includes" in item && item.includes && (
            <div className="mt-3 bg-amber-50 p-3 rounded-lg">
              <p className="text-sm font-iran-sans-bold text-amber-800 mb-2">
                شامل:
              </p>
              <ul className="space-y-1">
                {item.includes.map((included, idx) => (
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
                <div className="text-xl  text-amber-600">
                  {discountedPrice?.toLocaleString()} تومان
                </div>
              </div>
            ) : (
              <div className="text-xl  text-gray-800">
                {price.toLocaleString()} تومان
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center">
              <span className="text-gray-600 ml-2">درجه تندی:</span>
              <div className="flex">
                <IoStar className="text-amber-500" />
                <IoStar className="text-amber-500" />
                <IoStarOutline className="text-amber-500" />
                <IoStarOutline className="text-amber-500" />
                <IoStarOutline className="text-amber-500" />
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-gray-600 ml-2">زمان آماده سازی:</span>
              <span>۱۰-۱۵ دقیقه</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg transition-colors ">
            افزودن به سبد خرید
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Collapsible menu section component
const MenuSection = ({ category, onItemClick }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-1"
      >
        <div className="flex items-center gap-2">
          {category.icon}
          <span className=" text-lg text-gray-800">{category.name}</span>
        </div>
        {isOpen ? <IoChevronDown /> : <IoChevronForward />}
      </button>

      {isOpen && (
        <div className="pb-3 space-y-3">
          {category.items.map((item) => (
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
                  <span className=" text-gray-800 font-iran-sans-bold">
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

const SpecialOffersCarousel = ({
  offers,
  onOfferClick,
}: SpecialOffersCarouselProps) => {
  return (
    <div className="relative safari-carousel">
      <h2 className="text-xl font-medium text-amber-700 mb-4 flex items-center gap-2 px-3">
        پیشنهادات ویژه
      </h2>

      <div className="overflow-x-auto pb-4 flex gap-4 px-3 w-full max-w-full safari-scroll">
        {offers.map((offer) => (
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

const AlternativeMenuPage = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | OfferItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: MenuItem | OfferItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-iran-sans-regular">
      {/* Header */}
      <header className="bg-amber-600 text-white py-4 sticky top-0 z-30 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdLocalCafe size={24} />
            <h1 className="font-morabba-bold text-xl mt-2">مِنو کافه</h1>
          </div>

          <button className="bg-white text-amber-600 px-4 py-1 rounded-full text-sm font-iran-sans-bold">
            سبد خرید
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto pb-24" dir="rtl">
        {/* Special offers carousel */}
        <div className="mt-6 mb-8">
          <SpecialOffersCarousel
            offers={specialOffers}
            onOfferClick={(offer) => handleItemClick(offer)}
          />
        </div>

        {/* Menu sections */}
        <div className="bg-white rounded-t-xl shadow-md px-4 pb-4">
          <div className="flex items-center gap-2 py-4 border-b border-gray-200">
            <MdRestaurantMenu size={22} className="text-amber-600" />
            <h2 className="text-lg font-iran-sans-bold text-gray-800">
              منوی کافه
            </h2>
          </div>

          {menuCategories.map((category) => (
            <MenuSection
              key={category.id}
              category={category}
              onItemClick={handleItemClick}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-lg py-3 px-4 z-20">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <a
            href="#"
            className="flex flex-col items-center gap-1 text-amber-600"
          >
            <MdLocalCafe size={24} />
            <span className="text-xs">منو</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <MdOutlineBreakfastDining size={24} />
            <span className="text-xs">پیشنهادات</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <IoStar size={24} />
            <span className="text-xs">علاقه‌مندی‌ها</span>
          </a>
        </div>
      </footer> */}

      {/* Item detail modal */}
      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AlternativeMenuPage;
