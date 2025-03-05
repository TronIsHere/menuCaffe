"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC, ReactNode } from "react";
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

interface EditDialogProps {
  trigger?: ReactNode;
}

const EditDialog: FC<EditDialogProps> = ({ trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger || <span>Open</span>}</DialogTrigger>
      <DialogContent
        darkMode={true}
        className="h-[500px] dark overflow-y-scroll font-iran-sans-regular"
      >
        <DialogHeader>
          <DialogTitle>ویرایش محصول</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex flex-col gap-5 pt-4 ">
            <ImageUploader onImageSelect={() => {}} />
            <div className=" flex-col mt-2 ">
              <Label htmlFor="name">نام محصول</Label>
              <Input
                name="name"
                className="mt-2 mb-4"
                placeholder="مثال : کاپوچینو"
              ></Input>
              <Label htmlFor="name" className="">
                دسته بندی
              </Label>
              <Select>
                <SelectTrigger className="w-full mt-2" dir="rtl">
                  <SelectValue placeholder="انتخاب دسته بندی" />
                </SelectTrigger>
                <SelectContent className="text-right" dir="rtl">
                  <SelectItem value="light">نوشیدنی گرم</SelectItem>
                  <SelectItem value="dark">غذا</SelectItem>
                  <SelectItem value="system">نوشیدنی سرد</SelectItem>
                </SelectContent>
              </Select>
              <Button variant={"default"} className="mt-10">
                ذخیره
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
