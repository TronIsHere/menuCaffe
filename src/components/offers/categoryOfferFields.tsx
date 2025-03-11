import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategoryOfferFields = () => (
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
);

export default CategoryOfferFields;
