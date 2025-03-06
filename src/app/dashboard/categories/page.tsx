import { NextPage } from "next";
import { Button } from "@/components/ui/button";
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
import EditDialog from "@/components/dialogs/editDialog";
import { IoMdAdd } from "react-icons/io";
import CategoryDialog from "@/components/dialogs/categoryDialog";
interface CategoriesPageProps {}

const CategoriesPage: NextPage<CategoriesPageProps> = () => {
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
          {Array(10)
            .fill("")
            .map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center">نوشیدنی گرم</span>
                  </div>
                </TableCell>
                <TableCell>
                  <img
                    src="/img/categoryIcons/cocoa.png"
                    className="w-8 h-8 object-cover rounded-sm"
                  />
                </TableCell>
                <TableCell>
                  <span>12</span>
                </TableCell>
                <TableCell className="flex justify-end gap-3">
                  <CategoryDialog
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
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesPage;
