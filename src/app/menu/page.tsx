"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaLeaf,
  FaHotjar,
  FaIceCream,
  FaBirthdayCake,
  FaCoffee,
  FaCocktail,
} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

// Sample offer data (would come from your database)
const specialOffers = [
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
const menuCategories = [
  {
    id: "hot-drinks",
    name: "نوشیدنی گرم",
    icon: <FaHotjar />,
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
          "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dص",
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
    icon: <FaCocktail />,
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
    icon: <FaBirthdayCake />,
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
    icon: <IoFastFoodOutline />,
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

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("offers");
  const [isScrolled, setIsScrolled] = useState(false);

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
    activeCategory === "offers"
      ? []
      : menuCategories.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-darkPrimary text-white font-iran-sans-regular">
      {/* Cafe Header with Logo */}
      <header
        className={`w-full bg-darkSecondary z-10 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="font-morabba-bold text-3xl">مِنو کافه</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="hover:text-primary-300 transition-colors"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary-300 transition-colors"
            >
              تماس
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6" dir="rtl">
        <div className={`${isScrolled ? "mt-16" : ""}`}>
          {/* Hero Banner for Most Popular Offer */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent "></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            ></div>
            <div className="absolute bottom-0 right-0 left-0 p-6 ">
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
                  activeCategory === "offers"
                    ? "bg-primary-500 text-white"
                    : "bg-darkSecondary hover:bg-darkSecondary/70"
                }`}
                onClick={() => setActiveCategory("offers")}
              >
                <MdLocalOffer />
                <span>پیشنهادات ویژه</span>
              </button>
              {menuCategories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary-500 text-white"
                      : "bg-darkSecondary hover:bg-darkSecondary/70"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </nav>

          {/* Special Offers Section */}
          {activeCategory === "offers" && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MdLocalOffer className="text-primary-300" />
                پیشنهادات ویژه
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialOffers.map((offer, index) => (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-darkSecondary rounded-xl overflow-hidden border border-stone-700 shadow-lg"
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
                    <div className="p-4">
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

                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-stone-400 line-through text-sm">
                            {offer.regularPrice.toLocaleString()} تومان
                          </span>
                          <div className="text-xl font-bold text-white">
                            {offer.discountedPrice.toLocaleString()} تومان
                          </div>
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
                          سفارش
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Regular Menu Items */}
          {activeCategory !== "offers" && (
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {menuCategories.find((cat) => cat.id === activeCategory)?.icon}
                {menuCategories.find((cat) => cat.id === activeCategory)?.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-darkSecondary rounded-xl overflow-hidden border border-stone-700 shadow-lg"
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
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{item.name}</h3>

                      <div className="mt-4 flex justify-between items-center">
                        <div>
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
                            <div className="text-xl font-bold text-white">
                              {item.price.toLocaleString()} تومان
                            </div>
                          )}
                        </div>
                        <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors">
                          سفارش
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
