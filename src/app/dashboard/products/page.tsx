"use client";

import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { FaEye } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductDialog from "@/components/dialogs/productDialog";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import { Product } from "@/types/product-types";
import { Category } from "@/types/category-types";
import { getCategories } from "@/services/categoryService";

const itemsPage: NextPage = () => {
  const [productsState, setProductsState] = useState<Product[]>([]);
  const [categoriesState, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const getProductsData = async () => {
    const response = await getProducts();
    const data = response.data;
    setProductsState(data);
  };
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    getProductsData();
  }, []);
  return (
    <div className="text-white font-iran-sans-regular" dir="rtl">
      <h1 className="font-bold text-3xl">محصولات</h1>
      <div className="flex mt-5 gap-3 ">
        <ProductDialog
          edit={false}
          categories={categoriesState}
          trigger={
            <Button variant="default">
              <IoMdAdd />
              افزودن محصول
            </Button>
          }
        />
        <Link href={"/menu"} className="flex">
          <Button variant="outline">
            <FaEye />
            پیش نمایش منو
          </Button>
        </Link>
      </div>
      <Table className="mt-5">
        <TableCaption className="pt-10"> لیست محصولات 🍮</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px] text-right">نام محصولات</TableHead>
            <TableHead className="text-right">دسته بندی محصولات</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productsState && productsState.length > 0 ? (
            productsState.map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="کاپوچینو"
                      className="w-8 h-8 object-cover rounded-sm"
                    />
                    <span className="flex items-center">فرامپاچینو و کیک</span>
                  </div>
                </TableCell>
                <TableCell>نوشیدنی گرم</TableCell>
                <TableCell className="flex justify-end gap-3">
                  <ProductDialog
                    trigger={
                      <Button variant="secondary" size={"sm"}>
                        ویرایش
                      </Button>
                    }
                  />
                  <Button variant="destructive" size={"sm"}>
                    حذف
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-6 text-gray-500">
                محصولی یافت نشد
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default itemsPage;
