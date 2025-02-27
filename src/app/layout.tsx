import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { MdSpaceDashboard } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | Your App Name",
  description: "Your dashboard description",
};

const morabbaBold = localFont({
  src: "./fonts/Morabba-ExtraBold.ttf",
  variable: "--font-morabba-bold",
  weight: "700",
});
const iranSansLight = localFont({
  src: "./fonts/IRANSans-Reg.woff",
  variable: "--font-iran-sans-light",
  weight: "300",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${morabbaBold.variable} ${iranSansLight.variable} antialiased`}
      >
        <div className="flex flex-row-reverse min-h-screen dark">
          <aside className="flex-[2] text-center dark:bg-darkSecondary  border-r dark:text-white">
            {/* Sidebar content */}
            <h1 className="font-morabba-bold mt-8 pb-4 text-4xl border-b">
              مِنو کافه
            </h1>
            <ul className="mt-4 font-iran-sans-light px-4">
              <li>
                <Link
                  href={"#"}
                  className={`flex hover:bg-primary hover:text-white justify-end my-2 items-center py-3 px-5 rounded-lg cursor-pointer hover:bg-palletPurple-400 duration-500 `}
                >
                  <span className="pr-2 ">داشبورد</span>
                  <MdSpaceDashboard size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`flex hover:bg-primary hover:text-white justify-end my-2 items-center py-3 px-5 rounded-lg cursor-pointer hover:bg-palletPurple-400 duration-500 `}
                >
                  <span className="pr-2 ">محصولات </span>
                  <FaLayerGroup size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`flex hover:bg-primary hover:text-white justify-end my-2 items-center py-3 px-5 rounded-lg cursor-pointer hover:bg-palletPurple-400 duration-500 `}
                >
                  <span className="pr-2 ">دسته بندی ها</span>
                  <BiSolidCategoryAlt size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`flex hover:bg-primary hover:text-white justify-end my-2 items-center py-3 px-5 rounded-lg cursor-pointer hover:bg-palletPurple-400 duration-500 `}
                >
                  <span className="pr-2 ">پیشنهادات ویژه</span>
                  <BiSolidOffer size={18} />
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className={`flex hover:bg-primary hover:text-white justify-end my-2 items-center py-3 px-5 rounded-lg cursor-pointer hover:bg-palletPurple-400 duration-500 `}
                >
                  <span className="pr-2 ">تنظیمات </span>
                  <IoMdSettings size={18} />
                </Link>
              </li>
            </ul>
          </aside>
          <main className="flex-[8] p-4 px-6 min-h-[300px] bg-darkPrimary">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
