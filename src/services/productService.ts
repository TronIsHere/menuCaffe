import { CreateProductInput, Product } from "@/types/product-types";
import axios from "axios";
interface productsResponse {
  data: Product[];
}

export async function getProducts(): Promise<productsResponse> {
  const response = await axios.get("/api/products");

  return response;
}
export async function createProduct(
  productData: CreateProductInput
): Promise<Product> {
  try {
    const response = await axios.post("/api/products", productData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || "Failed to create product");
    }
    throw new Error("Failed to create product");
  }
}
