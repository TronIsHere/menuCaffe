"use client";

import AnalyticsBox from "@/components/dashboard/analyticsBox";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { FaArrowLeft, FaEye, FaPlusCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

import ViewChart from "@/components/dashboard/viewChart";
import Link from "next/link";

const DashboardPage: NextPage = () => {
  return (
    <div className="text-white space-y-6 font-iran-sans-regular" dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
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
        <h4 className="font-bold mt-10 text-2xl">اقدامات سریع</h4>
        <div className="flex flex-col md:flex-row   mt-5 gap-3 ">
          <Button variant="outline">
            <IoMdAdd />
            افزودن محصول
          </Button>
          {/* <Button variant="outline">
            <FiEdit size={40} />
            ویرایش منو
          </Button> */}
          <Button variant="outline">
            <FaPlusCircle />
            افزودن پیشنهاد ویژه
          </Button>
          <Link href={"/menu"}>
            <Button variant="outline" className="w-full">
              <FaEye />
              پیش نمایش منو
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-2xl mt-10">آنالیز بازدید ها</h4>
        <div className=" mt-3 ">
          <ViewChart />
        </div>
      </div>
      <div>
        <h4 className="font-bold mt-10 text-2xl">اطلاعیه ها و پشتیبانی</h4>
        <div className="bg-darkSecondary p-6 rounded-lg mt-5 border ">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-amber-800 mb-1">اپدیت سیستم</h4>
            <p className="text-sm text-amber-700">برای ۴ اردیبهشت ساعت ۱۲ شب</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-medium ">به کمک نیاز دارید؟</h4>
              <Button variant="default" className="flex items-center gap-2">
                <span className="text-sm text-white">به مرکز کمک برو</span>
                <FaArrowLeft />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
