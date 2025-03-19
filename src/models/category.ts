import { Document, model, models, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  icon: string;
}
const CategorySchema: Schema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: [true, "Please provide a category name"],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "Please provide an icon path"],
    },
  },
  {
    timestamps: true,
  }
);
export const Category =
  models.Category || model<ICategory>("Category", CategorySchema);
