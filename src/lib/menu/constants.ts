import { Category } from "@/types/menu-types";

export const CATEGORY_IDS = {
  ALL: "all",
  HOT_DRINKS: "hot-drinks",
  COLD_DRINKS: "cold-drinks",
  DESSERTS: "desserts",
  BREAKFAST: "breakfast",
  OFFERS: "offers",
};
export const MENU_CATEGORIES: Category[] = [
  { id: CATEGORY_IDS.ALL, name: "همه" },
  { id: CATEGORY_IDS.HOT_DRINKS, name: "نوشیدنی گرم" },
  { id: CATEGORY_IDS.COLD_DRINKS, name: "نوشیدنی سرد" },
  { id: CATEGORY_IDS.DESSERTS, name: "دسرها" },
  { id: CATEGORY_IDS.BREAKFAST, name: "صبحانه" },
];
export const OFFERS_CATEGORY: Category = {
  id: CATEGORY_IDS.OFFERS,
  name: "پیشنهادات ویژه",
};
