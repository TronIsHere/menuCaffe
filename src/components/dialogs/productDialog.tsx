"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode, useState } from "react";
import ImageUploader from "../products/imageUploader";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Category } from "@/types/category-types";
import { CreateProductInput } from "@/types/product-types";
import { useToast } from "@/hooks/use-toast";
import { IoClose } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";
import { createProduct } from "@/services/productService";

interface ProductDialogProps {
  trigger?: ReactNode;
  edit?: boolean;
  categories?: Category[];
}

const ProductDialog: FC<ProductDialogProps> = ({
  trigger,
  edit = true,
  categories = [],
}) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState<CreateProductInput>({
    name: "",
    price: 0,
    categoryId: "",
    image:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "price") {
      // Convert Persian numerals to English numerals
      const englishValue = value.replace(/[۰-۹]/g, (d) =>
        String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))
      );
      setFormData((prev) => ({
        ...prev,
        [name]: englishValue ? parseFloat(englishValue) : 0,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, categoryId: value }));
  };
  const handleSave = async () => {
    if (!formData.name) {
      toast({
        title: "خطا",
        description: "نام محصول الزامی است",
        variant: "destructive",
        icon: <IoClose size={20} />,
      });
      return;
    }

    if (!formData.price || formData.price <= 0) {
      toast({
        title: "خطا",
        description: "قیمت محصول باید بیشتر از صفر باشد",
        variant: "destructive",
        icon: <IoClose size={20} />,
      });
      return;
    }

    if (!formData.categoryId) {
      toast({
        title: "خطا",
        description: "انتخاب دسته بندی الزامی است",
        variant: "destructive",
        icon: <IoClose size={20} />,
      });
      return;
    }
    try {
      await createProduct(formData);

      toast({
        title: "موفق",
        description: edit
          ? "محصول با موفقیت ویرایش شد"
          : "محصول با موفقیت اضافه شد",
        variant: "success",
        icon: <MdDoneOutline size={20} />,
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        price: 0,
        categoryId: "",
        image:
          "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "خطا",
        description: edit
          ? "خطا در ویرایش محصول. لطفا دوباره تلاش کنید"
          : "خطا در افزودن محصول. لطفا دوباره تلاش کنید",
        variant: "destructive",
        icon: <IoClose size={20} />,
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <span>Open</span>}</DialogTrigger>
      <DialogContent
        darkMode={true}
        className="h-[500px] dark overflow-y-scroll font-iran-sans-regular"
      >
        <DialogHeader>
          {edit ? (
            <DialogTitle>ویرایش محصول</DialogTitle>
          ) : (
            <DialogTitle>افزودن محصول</DialogTitle>
          )}
          <DialogDescription></DialogDescription>
          <div className="flex flex-col gap-5 pt-4 ">
            <ImageUploader onImageSelect={() => {}} />
            <div className=" flex-col mt-2 ">
              <Label htmlFor="name">نام محصول</Label>
              <Input
                name="name"
                className="mt-2 mb-4"
                placeholder="مثال : کاپوچینو"
                onChange={handleInputChange}
              ></Input>
              <Label htmlFor="name">قیمت محصول (تومان)</Label>
              <Input
                name="price"
                className="mt-2 mb-4"
                placeholder="مثال : 2000 تومان"
                onChange={handleInputChange}
              ></Input>
              <Label htmlFor="name" className="">
                دسته بندی
              </Label>
              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-full mt-2" dir="rtl">
                  <SelectValue placeholder="انتخاب دسته بندی" />
                </SelectTrigger>
                <SelectContent className="text-right" dir="rtl">
                  {categories.map((category) => (
                    <SelectItem key={category._id} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={"default"}
                className="mt-10"
                onClick={() => handleSave()}
              >
                ذخیره
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
