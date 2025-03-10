"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { categoryIcons } from "@/lib/data";
import { FC, ReactNode, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

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
