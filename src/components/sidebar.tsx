"use client";

import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    label: "داشبورد",
    href: "/dashboard",
    icon: <MdSpaceDashboard size={18} />,
  },
  {
    label: "محصولات",
    href: "/dashboard/items",
    icon: <FaLayerGroup size={18} />,
  },
  {
    label: "دسته بندی ها",
    href: "/dashboard/categories",
    icon: <BiSolidCategoryAlt size={18} />,
  },
  {
    label: "پیشنهادات ویژه",
    href: "/dashboard/offers",
    icon: <BiSolidOffer size={18} />,
  },
  {
    label: "تنظیمات",
    href: "/dashboard/settings",
    icon: <IoMdSettings size={18} />,
  },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when screen size increases beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-darkSecondary p-2 rounded-md border border-stone-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <HiX size={24} className="text-white" />
        ) : (
          <HiMenu size={24} className="text-white" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - transforms on mobile */}
      <aside
        className={`
          flex-[2] flex flex-col dark:bg-darkSecondary border-r dark:text-white
          fixed md:relative inset-y-0 right-0 z-40 md:z-auto
          w-64 md:w-auto
          transform ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full md:translate-x-0"
          } 
          transition-transform duration-200 ease-in-out
        `}
      >
        <h1 className="font-morabba-bold text-right mt-6 pb-3 pr-8 text-3xl border-b">
          مِنو کافه
        </h1>
        <nav className="mt-4 px-4">
          <ul className="font-iran-sans-regular space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex hover:bg-primary-500 hover:text-white items-center py-3 px-5 rounded-lg
                    cursor-pointer transition-colors duration-300
                    ${
                      pathname === item.href ||
                      (item.href !== "/dashboard" &&
                        pathname.startsWith(item.href))
                        ? "bg-primary-500 text-white"
                        : ""
                    }
                  `}
                >
                  {item.icon}
                  <span className="pr-2">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
