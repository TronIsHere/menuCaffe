export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}
export interface CreateProductInput {
  name: string;
  price: number;
  categoryId: string;
  image?: string;
}
