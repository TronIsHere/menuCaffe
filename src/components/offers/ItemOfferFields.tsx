import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const ItemOfferFields = () => (
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
);

export default ItemOfferFields;
