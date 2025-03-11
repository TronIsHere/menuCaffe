import { OfferType } from "@/types/offer-types";
import { useState } from "react";
import { Label } from "../ui/label";
import { FaBox, FaTag, FaUserFriends } from "react-icons/fa";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import ItemOfferFields from "../offers/ItemOfferFields";
import CategoryOfferFields from "../offers/categoryOfferFields";
import BundleOfferFields from "../offers/bundleOfferFields";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface NewOfferDialogProps {
  trigger: React.ReactNode;
}

const NewOfferDialog = ({ trigger }: NewOfferDialogProps) => {
  const [open, setOpen] = useState(false);
  const [offerType, setOfferType] = useState<OfferType>("item");
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    discountType: "percentage",
    discountValue: "",
  });

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Here you would typically handle form submission with API calls
    console.log("Submitting offer:", { type: offerType, ...formData });

    // Close the dialog after submission
    setOpen(false);
  };

  const isFormValid = formData.title && formData.discountValue;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">تاریخ شروع</Label>
                <Input
                  id="start-date"
                  type="date"
                  className="mt-2"
                  value={formData.startDate}
                  onChange={(e) => handleChange("startDate", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="end-date">تاریخ پایان</Label>
                <Input
                  id="end-date"
                  type="date"
                  className="mt-2"
                  value={formData.endDate}
                  onChange={(e) => handleChange("endDate", e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="discount-type">نوع تخفیف</Label>
              <Select
                value={formData.discountType}
                onValueChange={(value) => handleChange("discountType", value)}
              >
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
                value={formData.discountValue}
                onChange={(e) => handleChange("discountValue", e.target.value)}
              />
            </div>
          </div>

          {/* Type-specific controls */}
          {offerType === "item" && <ItemOfferFields />}
          {offerType === "category" && <CategoryOfferFields />}
          {offerType === "bundle" && <BundleOfferFields />}

          <DialogFooter className="flex mt-6 gap-3">
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              ذخیره پیشنهاد
            </Button>
            <DialogClose asChild>
              <Button variant="outline">انصراف</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewOfferDialog;
