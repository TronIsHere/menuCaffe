import { Category } from "@/types/category-types";
import axios from "axios";

interface categoryResponse {
  data: Category[];
}
export interface CreateCategoryInput {
  name: string;
  icon: string;
}

export async function getCategories(): Promise<categoryResponse> {
  const response = await fetch("/api/category");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function createCategory(
  categoryData: CreateCategoryInput
): Promise<Category> {
  try {
    const response = await axios.post("/api/category", categoryData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to create category"
      );
    }
    throw new Error("Failed to create category");
  }
}
export async function deleteCategory(id: string): Promise<void> {
  try {
    const response = await axios.delete("/api/category", {
      data: { _id: id },
    });

    if (!response.data.success) {
      throw new Error(response.data.error || "Failed to delete category");
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Failed to delete category");
    }
    throw new Error("Failed to delete category");
  }
}
