"use client";

import AnalyticsBox from "@/components/dashboard/analyticsBox";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
const DashboardPage: NextPage = () => {
  return (
    <div className="text-white space-y-6 font-iran-sans-light" dir="rtl">
      <div className="grid grid-cols-3 gap-5 ">
        {" "}
        <AnalyticsBox
          title="بازدید های امروز شما"
          percentage={20}
          data={"۲۴۸۱"}
          subtitle="۱۸۶ تا بیشتر از دیروز"
        />{" "}
        <AnalyticsBox
          title="پرطرفدار ترین آیتم"
          percentage={0}
          data={"کاپوچینو"}
          subtitle="مورد علاقه ۱۸۰ نفر"
        />{" "}
        <AnalyticsBox
          title="بیشترین بازدید از دسته بندی"
          percentage={0}
          data={"نوشیدنی گرم"}
          subtitle=""
        />
      </div>
      <div>
        <h4 className="font-bold text-2xl">اقدامات سریع</h4>
        <div className="flex mt-3 gap-3 ">
          <Button variant="outline">
            <IoMdAdd />
            افزودن محصول
          </Button>
          <Button variant="outline">
            <FiEdit size={40} />
            ویرایش منو
          </Button>
          <Button variant="outline">
            <FaPlusCircle />
            افزودن پیشنهاد ویژه
          </Button>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-2xl">بازدید ها</h4>
        <div className="flex mt-3 gap-3 ">
          <ChartContainer config={chartConfig} className="h-[300px] w-full ">
            <BarChart accessibilityLayer data={chartData}>
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-2xl">اطلاعیه ها و پشتیبانی</h4>
        <div className="bg-darkSecondary p-6 rounded-lg mt-3 border ">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-amber-800 mb-1">اپدیت سیستم</h4>
            <p className="text-sm text-amber-700">برای ۴ اردیبهشت ساعت ۱۲ شب</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium ">به کمک نیاز دارید؟</h4>
              <Link
                href={"#"}
                className="text-xs text-amber-600 hover:text-amber-800"
              >
                تماس با پشتیبانی
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-200">
            <Button variant="default" className="flex items-center gap-2">
              <span className="text-sm text-white">به مرکز کمک برو</span>
              <FaArrowLeft />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
