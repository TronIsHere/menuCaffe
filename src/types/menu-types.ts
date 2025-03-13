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
