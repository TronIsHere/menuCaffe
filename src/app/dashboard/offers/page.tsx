"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import NewOfferDialog from "@/components/dialogs/newOfferDialog";
import FilterButton from "@/components/offers/filterButton";
import OfferStatCard from "@/components/offers/offerStatCard";
import OfferStatusBadge from "@/components/offers/offerStatusBadge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OFFER_DATA, OFFER_TYPE_COUNT } from "@/lib/data";
import { OfferType } from "@/types/offer-types";
import { FaBox, FaCalendarAlt, FaTag, FaUserFriends } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredOffers =
    activeTab === "all"
      ? OFFER_DATA
      : OFFER_DATA.filter((offer) => offer.status === activeTab);

  const getOfferTypeLabel = (type: OfferType): string => {
    const labels = {
      bundle: "بسته ترکیبی",
      item: "تخفیف محصول",
      category: "تخفیف دسته‌بندی",
    };
    return labels[type];
  };

  return (
    <div className="text-white font-iran-sans-regular" dir="rtl">
      <h1 className="font-bold text-3xl">پیشنهادات ویژه</h1>

      {/* Stats Cards */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
        <OfferStatCard
          icon={<FaTag className="text-primary-300" />}
          title="تخفیف محصول"
          count={OFFER_TYPE_COUNT.item}
        />
        <OfferStatCard
          icon={<FaBox className="text-primary-300" />}
          title="بسته ترکیبی"
          count={OFFER_TYPE_COUNT.bundle}
        />
        <OfferStatCard
          icon={<FaUserFriends className="text-primary-300" />}
          title="تخفیف دسته‌بندی"
          count={OFFER_TYPE_COUNT.category}
        />
        <OfferStatCard
          icon={<FaCalendarAlt className="text-primary-300" />}
          title="کل پیشنهادات"
          count={OFFER_TYPE_COUNT.total}
        />
      </div>

      {/* Action Buttons */}
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

      {/* Filters */}
      <div className="mt-4 flex gap-2 text-right">
        <FilterButton
          active={activeTab === "all"}
          onClick={() => setActiveTab("all")}
          label="همه"
        />
        <FilterButton
          active={activeTab === "active"}
          onClick={() => setActiveTab("active")}
          label="فعال"
        />
        <FilterButton
          active={activeTab === "scheduled"}
          onClick={() => setActiveTab("scheduled")}
          label="زمان‌بندی شده"
        />
        <FilterButton
          active={activeTab === "expired"}
          onClick={() => setActiveTab("expired")}
          label="منقضی شده"
        />
      </div>

      {/* Offers Table */}
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
              <TableCell>{getOfferTypeLabel(offer.type)}</TableCell>
              <TableCell>{offer.discount}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {offer.includes.map((item: string, index: number) => (
                    <span
                      key={index}
                      className="bg-darkSecondary px-2 py-0.5 text-xs rounded whitespace-nowrap"
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
                <OfferStatusBadge status={offer.status} />
              </TableCell>
              <TableCell className="flex justify-end gap-3">
                <Button variant="secondary" size="sm">
                  ویرایش
                </Button>
                <Button variant="destructive" size="sm">
                  حذف
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
