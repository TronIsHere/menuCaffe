"use client";

import { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoMdAdd } from "react-icons/io";
import { FaTag, FaBox, FaCalendarAlt, FaUserFriends } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Placeholder offer data
const sampleOffers = [
  {
    id: 1,
    title: "صبحانه خانوادگی",
    type: "bundle",
    discount: "15%",
    includes: ["قهوه اسپرسو", "کیک شکلاتی", "کراسان"],
    startDate: "۱۴۰۴/۰۱/۰۱",
    endDate: "۱۴۰۴/۰۱/۳۰",
    status: "active",
  },
  {
    id: 2,
    title: "تخفیف کاپوچینو",
    type: "item",
    discount: "۱۰٫۰۰۰ تومان",
    includes: ["کاپوچینو"],
    startDate: "۱۴۰۴/۰۱/۰۵",
    endDate: "۱۴۰۴/۰۱/۱۵",
    status: "active",
  },
  {
    id: 3,
    title: "چای و کیک",
    type: "bundle",
    discount: "20%",
    includes: ["چای ماسالا", "کیک زنجبیلی"],
    startDate: "۱۴۰۴/۰۱/۱۰",
    endDate: "۱۴۰۴/۰۲/۱۰",
    status: "scheduled",
  },
  {
    id: 4,
    title: "تخفیف نوشیدنی‌های سرد",
    type: "category",
    discount: "25%",
    includes: ["همه نوشیدنی‌های سرد"],
    startDate: "۱۴۰۳/۱۲/۱۰",
    endDate: "۱۴۰۳/۱۲/۲۹",
    status: "expired",
  },
];

// Badge component for offer status
const OfferStatus: React.FC<{ status: string }> = ({ status }) => {
  let color = "";
  let label = "";

  switch (status) {
    case "active":
      color = "bg-success-400 text-white";
      label = "فعال";
      break;
    case "scheduled":
      color = "bg-amber-600 text-white";
      label = "زمان‌بندی شده";
      break;
    case "expired":
      color = "bg-stone-500 text-white";
      label = "منقضی شده";
      break;
    case "draft":
      color = "bg-stone-700 text-white";
      label = "پیش‌نویس";
      break;
    default:
      color = "bg-stone-500";
      label = status;
  }

  return (
    <span className={`px-2 py-1 text-xs rounded-md ${color}`}>{label}</span>
  );
};

// New Offer Dialog component
const NewOfferDialog: React.FC<{ trigger: React.ReactNode }> = ({
  trigger,
}) => {
  const [offerType, setOfferType] = useState<string>("item");

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        darkMode={true}
        className="max-h-[80vh] dark overflow-y-scroll font-iran-sans-regular"
      >
        <DialogHeader>
          <DialogTitle>ایجاد پیشنهاد ویژه جدید</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-5 pt-4" dir="rtl">
          {/* Offer type selection */}
          <div className="grid grid-cols-1 gap-4">
            <Label>نوع پیشنهاد</Label>
            <div className="grid grid-cols-3 gap-4">
              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-all flex flex-col items-center gap-2 ${
                  offerType === "item"
                    ? "bg-primary border-primary-300"
                    : "hover:bg-darkSecondary"
                }`}
                onClick={() => setOfferType("item")}
              >
                <FaTag size={24} />
                <span>تخفیف محصول</span>
              </div>
              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-all flex flex-col items-center gap-2 ${
                  offerType === "bundle"
                    ? "bg-primary border-primary-300"
                    : "hover:bg-darkSecondary"
                }`}
                onClick={() => setOfferType("bundle")}
              >
                <FaBox size={24} />
                <span>بسته ترکیبی</span>
              </div>
              <div
                className={`p-4 border rounded-lg text-center cursor-pointer transition-all flex flex-col items-center gap-2 ${
                  offerType === "category"
                    ? "bg-primary border-primary-300"
                    : "hover:bg-darkSecondary"
                }`}
                onClick={() => setOfferType("category")}
              >
                <FaUserFriends size={24} />
                <span>تخفیف دسته‌بندی</span>
              </div>
            </div>
          </div>

          {/* Basic information */}
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="title">عنوان پیشنهاد</Label>
              <Input
                id="title"
                className="mt-2"
                placeholder="مثال: صبحانه ویژه"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">تاریخ شروع</Label>
                <Input id="start-date" type="date" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="end-date">تاریخ پایان</Label>
                <Input id="end-date" type="date" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="discount-type">نوع تخفیف</Label>
              <Select>
                <SelectTrigger className="mt-2" dir="rtl">
                  <SelectValue placeholder="انتخاب نوع تخفیف" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">درصدی</SelectItem>
                  <SelectItem value="fixed">مبلغ ثابت</SelectItem>
                  <SelectItem value="special-price">قیمت ویژه</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="discount-value">مقدار تخفیف</Label>
              <Input
                id="discount-value"
                className="mt-2"
                placeholder="مثال: ۱۵ یا ۱۰۰۰۰"
              />
            </div>
          </div>

          {/* Item or category selection based on offer type */}
          {offerType === "item" && (
            <div>
              <Label>انتخاب محصول</Label>
              <Select>
                <SelectTrigger className="mt-2" dir="rtl">
                  <SelectValue placeholder="انتخاب محصول" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cappuccino">کاپوچینو</SelectItem>
                  <SelectItem value="espresso">اسپرسو</SelectItem>
                  <SelectItem value="latte">لاته</SelectItem>
                  <SelectItem value="mocha">موکا</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {offerType === "category" && (
            <div>
              <Label>انتخاب دسته‌بندی</Label>
              <Select>
                <SelectTrigger className="mt-2" dir="rtl">
                  <SelectValue placeholder="انتخاب دسته‌بندی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hot-drinks">نوشیدنی گرم</SelectItem>
                  <SelectItem value="cold-drinks">نوشیدنی سرد</SelectItem>
                  <SelectItem value="desserts">دسرها</SelectItem>
                  <SelectItem value="breakfast">صبحانه</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {offerType === "bundle" && (
            <div className="space-y-4">
              <Label>انتخاب محصولات برای بسته</Label>
              <div className="border rounded-lg p-4 bg-darkPrimary space-y-3">
                {[1, 2].map((index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-1">
                      <Select>
                        <SelectTrigger dir="rtl">
                          <SelectValue placeholder="انتخاب محصول" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cappuccino">کاپوچینو</SelectItem>
                          <SelectItem value="espresso">اسپرسو</SelectItem>
                          <SelectItem value="croissant">کراسان</SelectItem>
                          <SelectItem value="cake">کیک</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-20">
                      <Input
                        type="number"
                        placeholder="تعداد"
                        min="1"
                        defaultValue="1"
                      />
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  <IoMdAdd />
                  افزودن محصول
                </Button>
              </div>

              <div className="bg-darkPrimary p-4 rounded-lg">
                <div className="flex justify-between">
                  <span>قیمت معمولی:</span>
                  <span>۱۳۰٫۰۰۰ تومان</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>قیمت با تخفیف:</span>
                  <span className="text-success-400">۱۱۰٫۵۰۰ تومان</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>میزان تخفیف:</span>
                  <span className="text-amber-400">۱۹٫۵۰۰ تومان (۱۵٪)</span>
                </div>
              </div>
            </div>
          )}

          <Button variant="default" className="mt-6">
            ذخیره پیشنهاد
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main offers page component
const OffersPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredOffers =
    activeTab === "all"
      ? sampleOffers
      : sampleOffers.filter((offer) => offer.status === activeTab);

  return (
    <div className="text-white font-iran-sans-regular" dir="rtl">
      <h1 className="font-bold text-3xl">پیشنهادات ویژه</h1>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-darkSecondary border text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FaTag className="text-primary-300" />
              <span>تخفیف محصول</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">۲</p>
            <p className="text-xs text-stone-400">پیشنهاد فعال</p>
          </CardContent>
        </Card>

        <Card className="bg-darkSecondary border text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FaBox className="text-primary-300" />
              <span>بسته ترکیبی</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">۳</p>
            <p className="text-xs text-stone-400">پیشنهاد فعال</p>
          </CardContent>
        </Card>

        <Card className="bg-darkSecondary border text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FaUserFriends className="text-primary-300" />
              <span>تخفیف دسته‌بندی</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">۱</p>
            <p className="text-xs text-stone-400">پیشنهاد فعال</p>
          </CardContent>
        </Card>

        <Card className="bg-darkSecondary border text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FaCalendarAlt className="text-primary-300" />
              <span>کل پیشنهادات</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{sampleOffers.length}</p>
            <p className="text-xs text-stone-400">در سیستم</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex mt-6 gap-3">
        <NewOfferDialog
          trigger={
            <Button variant="default">
              <IoMdAdd />
              افزودن پیشنهاد ویژه
            </Button>
          }
        />
      </div>

      <div className="mt-4 space-x-2 text-right">
        <Button
          variant={activeTab === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("all")}
        >
          همه
        </Button>
        <Button
          variant={activeTab === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("active")}
        >
          فعال
        </Button>
        <Button
          variant={activeTab === "scheduled" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("scheduled")}
        >
          زمان‌بندی شده
        </Button>
        <Button
          variant={activeTab === "expired" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveTab("expired")}
        >
          منقضی شده
        </Button>
      </div>

      <Table className="mt-5">
        <TableCaption className="pt-10">لیست پیشنهادات ویژه 🎁</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-right">
              عنوان پیشنهاد
            </TableHead>
            <TableHead className="text-right">نوع</TableHead>
            <TableHead className="text-right">تخفیف</TableHead>
            <TableHead className="text-right">شامل</TableHead>
            <TableHead className="text-right">تاریخ</TableHead>
            <TableHead className="text-right">وضعیت</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOffers.map((offer) => (
            <TableRow key={offer.id}>
              <TableCell className="font-medium">{offer.title}</TableCell>
              <TableCell>
                {offer.type === "bundle" && <span>بسته ترکیبی</span>}
                {offer.type === "item" && <span>تخفیف محصول</span>}
                {offer.type === "category" && <span>تخفیف دسته‌بندی</span>}
              </TableCell>
              <TableCell>{offer.discount}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {offer.includes.map((item, index) => (
                    <span
                      key={index}
                      className="bg-darkPrimary px-2 py-0.5 text-xs rounded whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <span className="text-xs whitespace-nowrap">
                  {offer.startDate} تا {offer.endDate}
                </span>
              </TableCell>
              <TableCell>
                <OfferStatus status={offer.status} />
              </TableCell>
              <TableCell className="flex justify-end gap-3">
                <Button variant="secondary" size={"sm"}>
                  ویرایش
                </Button>
                <Button variant="destructive" size={"sm"}>
                  حذف
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OffersPage;
