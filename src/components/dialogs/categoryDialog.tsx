"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { categoryIcons } from "@/lib/data";
import { FC, ReactNode, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MdDoneOutline } from "react-icons/md";
import { createCategory, updateCategory } from "@/services/categoryService";

interface CategoryDialogProps {
  trigger?: ReactNode;
  edit?: boolean;
  categoryTitle?: string;
  icon?: string;
  categoryId?: string; // Add this to receive the category ID
  onSuccess?: () => void;
}

const CategoryDialog: FC<CategoryDialogProps> = ({
  trigger,
  categoryTitle = "",
  icon = "",
  categoryId = "",
  edit = false,
  onSuccess,
}) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string | null>();
  const [categoryName, setCategoryName] = useState<string>("");

  const [filteredIcons, setFilteredIcons] = useState<string[]>(categoryIcons);

  const handleIconSelect = (iconPath: string) => {
    setSelectedIcon(iconPath);
  };

  useEffect(() => {
    if (edit && categoryId) {
      setCategoryName(categoryTitle);
      setSelectedIcon(icon);
    }
  }, []);

  const handleSave = async () => {
    try {
      if (edit && categoryId) {
        // Update existing category
        await updateCategory(categoryId, {
          name: categoryName,
          icon: selectedIcon!,
        });

        toast({
          title: "ویرایش شد",
          description: "دسته بندی با موفقیت ویرایش شد",
          variant: "success",
          icon: <MdDoneOutline size={20} />,
        });
      } else {
        // Create new category
        await createCategory({
          name: categoryName,
          icon: selectedIcon!,
        });

        toast({
          title: "اضافه شد",
          description: "دسته بندی با موفقیت اضافه شد",
          variant: "success",
          icon: <MdDoneOutline size={20} />,
        });
      }

      // Call the success callback to refresh data
      if (onSuccess) {
        onSuccess();
      }

      // Close the dialog
      setOpen(false);
    } catch (error) {
      toast({
        title: "مشکلی پیش امده",
        description: "مشکلی پیش امده لطفا بعدا امتحان کنید",
        variant: "destructive",
        icon: <IoClose size={30} />,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <span>Open</span>}</DialogTrigger>
      <DialogContent
        darkMode={true}
        className="max-h-[600px] dark overflow-y-scroll font-iran-sans-regular"
      >
        <DialogHeader>
          <DialogTitle>
            {edit ? "ویرایش دسته بندی" : "افزودن دسته بندی"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex flex-col gap-5 pt-4" dir="rtl">
            <div className="flex-col mt-2">
              <Label htmlFor="name">نام دسته بندی</Label>
              <Input
                name="name"
                className="mt-2 "
                placeholder="مثال : کاپوچینو"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />

              <div className="mt-5 mb-6">
                <Label className="mb-2 block">آیکون دسته بندی</Label>

                <div className="border rounded-md  bg-darkPrimary p-2 overflow-y-auto h-48">
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 p-1">
                    {filteredIcons.map((icon, index) => (
                      <div
                        key={index}
                        onClick={() => handleIconSelect(icon)}
                        className={`
                          p-2 rounded-md cursor-pointer transition-all 
                          flex items-center justify-center h-16
                          ${
                            selectedIcon === icon
                              ? "bg-primary border border-stone-300"
                              : "bg-darkSecondary hover:bg-darkSecondary/30"
                          }
                        `}
                      >
                        <img
                          src={icon}
                          alt={`Category icon ${index + 1}`}
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                className="mt-6"
                onClick={handleSave}
                disabled={!selectedIcon || !categoryName.trim()}
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

export default CategoryDialog;
