import { MenuItem, PromotionItem } from "@/types/menu-types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function createAddToCartEvent(item: MenuItem | PromotionItem) {
  // Normalize data to ensure consistent structure regardless of item type
  const isPromotion = "title" in item;

  const itemToAdd = {
    id: item.id,
    name: isPromotion ? item.title : item.name,
    price: isPromotion ? item.regularPrice : item.price,
    regularPrice: isPromotion ? item.regularPrice : undefined,
    discountedPrice: isPromotion
      ? item.discountedPrice
      : (item as MenuItem).discountedPrice,
    isDiscounted: isPromotion ? true : (item as MenuItem).isDiscounted,
    image: item.image,
    quantity: 1, // Default quantity
    type: isPromotion ? (item as PromotionItem).type : undefined,
    description: item.description,
    includes: isPromotion ? (item as PromotionItem).includes : undefined,
  };

  // Create the custom event
  const event = new CustomEvent("addToCart", { detail: itemToAdd });
  window.dispatchEvent(event);
}
