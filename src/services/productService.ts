import { Product } from "@/types/product-types";
import axios from "axios";
interface productsResponse {
  data: Product[];
}
export async function getProducts(): Promise<productsResponse> {
  const response = await axios.get("/api/products");
  return response.data;
}
