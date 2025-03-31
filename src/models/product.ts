import mongoose from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  categoryId: mongoose.Types.ObjectId;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "نام محصول الزامی است"],
    },
    price: {
      type: Number,
      required: [true, "قیمت محصول الزامی است"],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "دسته‌بندی محصول الزامی است"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
