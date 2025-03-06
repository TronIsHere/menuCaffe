"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FaSearch } from "react-icons/fa";

// Sample icons - replace or expand with your actual icons
const categoryIcons = [
  "/img/categoryIcons/bread.png",
  "/img/categoryIcons/breakfast.png",
  "/img/categoryIcons/cocoa.png",
  "/img/categoryIcons/cold-drink.png",
  "/img/categoryIcons/cookie.png",
  "/img/categoryIcons/croissant.png",
  "/img/categoryIcons/dessert.png",
  "/img/categoryIcons/diet.png",
  "/img/categoryIcons/discount.png",
  "/img/categoryIcons/donut.png",
  "/img/categoryIcons/drink.png",
  "/img/categoryIcons/drink2.png",
  "/img/categoryIcons/gelato.png",
  "/img/categoryIcons/hot-chocolate.png",
  "/img/categoryIcons/iced-coffee.png",
  "/img/categoryIcons/juice.png",
  "/img/categoryIcons/juice2.png",
  "/img/categoryIcons/juices.png",
  "/img/categoryIcons/latte-art.png",
  "/img/categoryIcons/panna-cotta.png",
  "/img/categoryIcons/sand1.png",
  "/img/categoryIcons/sand2.png",
  "/img/categoryIcons/sandwich.png",
  "/img/categoryIcons/smoothie.png",
  "/img/categoryIcons/special.png",
  "/img/categoryIcons/tea.png",
];

interface CategoryDialogProps {
  trigger?: ReactNode;
  edit?: boolean;
}

const CategoryDialog: FC<CategoryDialogProps> = ({ trigger, edit = true }) => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>();
  const [categoryName, setCategoryName] = useState<string>("");

  const [filteredIcons, setFilteredIcons] = useState<string[]>(categoryIcons);

  const handleIconSelect = (iconPath: string) => {
    setSelectedIcon(iconPath);
  };

  const handleSave = () => {
    // Here you would handle the save functionality
    console.log("Saving category:", { name: categoryName, icon: selectedIcon });
    // Close dialog after saving
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger || <span>Open</span>}</DialogTrigger>
      <DialogContent
        darkMode={true}
        className="max-h-[600px] dark overflow-y-scroll font-iran-sans-regular"
      >
        <DialogHeader>
          {edit ? (
            <DialogTitle>ویرایش دسته بندی</DialogTitle>
          ) : (
            <DialogTitle>افزودن دسته بندی</DialogTitle>
          )}
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
