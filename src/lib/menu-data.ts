import { MenuItem, PromotionItem } from "@/types/menu-types";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "اسپرسو",
    price: 35000,
    description: "قهوه تلخ و غلیظ",
    image:
      "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "hot-drinks",
  },
  {
    id: 2,
    name: "کاپوچینو",
    price: 45000,
    description: "شیر، اسپرسو، فوم شیر",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isDiscounted: true,
    discountedPrice: 35000,
    category: "hot-drinks",
  },
  {
    id: 3,
    name: "لاته",
    price: 50000,
    description: "شیر، اسپرسو",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "hot-drinks",
  },
  {
    id: 4,
    name: "موکا",
    price: 55000,
    description: "قهوه، شیر، شکلات",
    image:
      "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "hot-drinks",
  },
  {
    id: 5,
    name: "قهوه ترک",
    price: 40000,
    description: "قهوه دم شده به سبک ترکی",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "hot-drinks",
  },
  {
    id: 6,
    name: "آیس لاته",
    price: 60000,
    description: "شیر سرد، اسپرسو و یخ",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cold-drinks",
  },
  {
    id: 7,
    name: "آیس آمریکانو",
    price: 55000,
    description: "قهوه سرد و یخ",
    image:
      "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cold-drinks",
  },
  {
    id: 8,
    name: "شیک شکلات",
    price: 70000,
    description: "شیر، بستنی وانیلی، سس شکلات",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "cold-drinks",
  },
  {
    id: 9,
    name: "کیک شکلاتی",
    price: 65000,
    description: "کیک شکلاتی خانگی",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "desserts",
  },
  {
    id: 10,
    name: "کیک زنجبیلی",
    price: 55000,
    description: "کیک با طعم زنجبیل",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "desserts",
  },
  {
    id: 11,
    name: "تیرامیسو",
    price: 75000,
    description: "دسر ایتالیایی با طعم قهوه و پنیر ماسکارپونه",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "desserts",
  },
  {
    id: 12,
    name: "کراسان",
    price: 40000,
    description: "شیرینی لایه‌ای فرانسوی",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  {
    id: 13,
    name: "املت",
    price: 80000,
    description: "تخم مرغ، گوجه، فلفل دلمه و ادویه",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
  {
    id: 14,
    name: "صبحانه انگلیسی",
    price: 120000,
    description: "تخم مرغ، بیکن، لوبیا، قارچ و نان تست",
    image:
      "https://images.unsplash.com/photo-1588625436591-c6d853288b60?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "breakfast",
  },
];
export const PROMOTIONS: PromotionItem[] = [
  {
    id: 1,
    title: "صبحانه خانوادگی",
    description: "قهوه اسپرسو، کیک شکلاتی و کراسان با ۱۵٪ تخفیف",
    type: "bundle",
    discount: "15%",
    regularPrice: 150000,
    discountedPrice: 127500,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    backgroundColor: "#f8f3eb",
    accentColor: "#8c6c40",
    endDate: "۱۴۰۴/۰۱/۳۰",
    includes: [
      { name: "قهوه اسپرسو", quantity: 2 },
      { name: "کیک شکلاتی", quantity: 1 },
      { name: "کراسان", quantity: 2 },
    ],
  },
  {
    id: 2,
    title: "کاپوچینو ویژه",
    description: "کاپوچینو با خامه مخصوص و دارچین تازه",
    type: "item",
    discount: "۱۰٫۰۰۰ تومان",
    regularPrice: 45000,
    discountedPrice: 35000,
    image:
      "https://images.unsplash.com/photo-1462917882517-e150004895fa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundColor: "#f4ede5",
    accentColor: "#a84832",
    endDate: "۱۴۰۴/۰۱/۱۵",
  },
  {
    id: 3,
    title: "چای و کیک",
    description: "چای ماسالا همراه با کیک زنجبیلی",
    type: "bundle",
    discount: "20%",
    regularPrice: 85000,
    discountedPrice: 68000,
    image: "https://images.unsplash.com/photo-1595080623303-c5ae68d73e92?w=600",
    backgroundColor: "#eef2f7",
    accentColor: "#5a7ba0",
    endDate: null,
    includes: [
      { name: "چای ماسالا", quantity: 1 },
      { name: "کیک زنجبیلی", quantity: 1 },
    ],
  },
];
