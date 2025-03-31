"use client";

import CategoryDialog from "@/components/dialogs/categoryDialog";
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
import { useToast } from "@/hooks/use-toast";
import { deleteCategory, getCategories } from "@/services/categoryService";
import { Category } from "@/types/category-types";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdDoneOutline } from "react-icons/md";
// interface CategoriesPageProps {}

const CategoriesPage: NextPage = () => {
  const [categoriesState, setCategoriesState] = useState<Category[]>([]);
  const { toast } = useToast();
  const getCategoriesData = async () => {
    const response = await getCategories();
    const data = response.data;
    setCategoriesState(data);
  };
  useEffect(() => {
    getCategoriesData();
  }, []);

  const handleDeleteCategory = async (id: string) => {
    await deleteCategory(id);
    try {
      toast({
        title: "حذف شد",
        description: "دسته بندی با موفقیت حذف شد",
        variant: "success",
        icon: <MdDoneOutline size={20} />,
      });
    } catch (error) {
      toast({
        title: "مشکلی پیش آمده",
        description: "حذف دسته بندی با مشکل مواجه شد. لطفا دوباره تلاش کنید",
        variant: "destructive",
        icon: <IoClose size={20} />,
        duration: 3000,
      });
    }
  };
  return (
    <div className="text-white font-iran-sans-regular" dir="rtl">
      <h1 className="font-bold text-3xl">محصولات</h1>
      <div className="flex mt-5 gap-3 ">
        <CategoryDialog
          edit={false}
          trigger={
            <Button variant="default">
              <IoMdAdd />
              افزودن دسته بندی
            </Button>
          }
        />
      </div>
      <Table className="mt-5">
        <TableCaption className="pt-10"> لیست دسته بندی ها 🍮</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-right">
              نام دسته بندی
            </TableHead>
            <TableHead className="text-right">ایکون</TableHead>
            <TableHead className="text-right">تعداد محصولات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoriesState.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span className="flex items-center">{item.name}</span>
                </div>
              </TableCell>
              <TableCell>
                <img
                  src={item.icon}
                  className="w-8 h-8 object-cover rounded-sm"
                />
              </TableCell>
              <TableCell>
                <span>12</span>
              </TableCell>
              <TableCell className="flex justify-end gap-3">
                <CategoryDialog
                  edit={true}
                  categoryTitle={item.name}
                  icon={item.icon}
                  categoryId={item._id}
                  trigger={
                    <Button variant="secondary" size={"sm"}>
                      ویرایش
                    </Button>
                  }
                />
                <Button
                  variant="destructive"
                  size={"sm"}
                  onClick={() => {
                    handleDeleteCategory(item._id);
                  }}
                >
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

export default CategoriesPage;
