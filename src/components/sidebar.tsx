import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
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
  return (
    <aside className="flex-[2] flex flex-col dark:bg-darkSecondary border-r dark:text-white">
      <h1 className="font-morabba-bold text-right mt-6 pb-3 pr-8 text-3xl border-b ">
        مِنو کافه
      </h1>
      <nav className="mt-4 px-4">
        <ul className="font-iran-sans-regular space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex hover:bg-primary hover:text-white justify-end items-center py-3 px-5 rounded-lg cursor-pointer transition-colors duration-300"
              >
                <span className="pr-2">{item.label}</span>
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
