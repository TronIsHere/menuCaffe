import { Category } from "@/types/category-types";

interface categoryResponse {
  data: Category[];
}

export async function getCategories(): Promise<categoryResponse> {
  const response = await fetch("/api/category");
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}
