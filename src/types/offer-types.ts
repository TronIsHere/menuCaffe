export type OfferType = "item" | "bundle" | "category";
export type OfferStatus = "active" | "scheduled" | "expired" | "draft";

export interface OfferItem {
  name: string;
  quantity: number;
}

export interface Offer {
  id: number;
  title: string;
  type: OfferType;
  discount: string;
  includes: string[];
  startDate: string;
  endDate: string;
  status: OfferStatus;
}
