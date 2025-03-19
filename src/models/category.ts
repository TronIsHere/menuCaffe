import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  icon: string;
}
const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "نام دسته‌بندی الزامی است"],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "آیکون دسته‌بندی الزامی است"],
    },
  },
  {
    timestamps: true,
  }
);
export const Category =
  models.Category || model<ICategory>("Category", CategorySchema);
