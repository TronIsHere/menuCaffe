import { ReactNode } from "react";
import {
  MdCoffee,
  MdLocalCafe,
  MdLocalBar,
  MdCake,
  MdOutlineBreakfastDining,
} from "react-icons/md";
import { FaHotjar, FaCocktail, FaBirthdayCake } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";

export interface Promotion {
  id: number;
  title: string;
  description: string;
  regularPrice: number | null;
  discountedPrice: number | null;
  discount?: string;
  image: string;
  backgroundColor?: string;
  accentColor?: string;
  endDate: string | null;
  badge?: string;
}
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  isDiscounted?: boolean;
  discountedPrice?: number;
  category: string;
}

export interface ItemInclude {
  name: string;
  quantity: number;
}

export interface PromotionItem {
  id: number;
  title: string;
  description: string;
  type: "item" | "bundle" | "category";
  discount: string;
  regularPrice: number;
  discountedPrice: number;
  image: string;
  includes?: ItemInclude[];
  backgroundColor?: string;
  accentColor?: string;
  endDate: string | null;
  badge?: string;
}

export interface CategoryDisplay {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface CategoryData extends CategoryDisplay {
  items: MenuItem[];
}
export interface Category {
  id: string;
  name: string;
  icon?: ReactNode;
}
