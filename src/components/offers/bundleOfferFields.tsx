import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoMdAdd } from "react-icons/io";

const BundleOfferFields = () => {
  const [items, setItems] = useState([
    { id: 1, product: "", quantity: 1 },
    { id: 2, product: "", quantity: 1 },
  ]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, product: "", quantity: 1 }]);
  };

  return (
    <div className="space-y-4">
      <Label>انتخاب محصولات برای بسته</Label>
      <div className="border rounded-lg p-4 bg-darkPrimary space-y-3">
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center gap-3">
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
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full"
          onClick={addItem}
        >
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
  );
};
export default BundleOfferFields;
