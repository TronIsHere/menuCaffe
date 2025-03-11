import { OfferStatus } from "@/types/offer-types";

const OfferStatusBadge = ({ status }: { status: OfferStatus }) => {
  const statusConfig = {
    active: { color: "bg-success-400 text-white", label: "فعال" },
    scheduled: { color: "bg-amber-600 text-white", label: "زمان‌بندی شده" },
    expired: { color: "bg-stone-500 text-white", label: "منقضی شده" },
    draft: { color: "bg-stone-700 text-white", label: "پیش‌نویس" },
  };

  const { color, label } = statusConfig[status];

  return (
    <span className={`px-2 py-1 text-xs rounded-md ${color}`}>{label}</span>
  );
};

export default OfferStatusBadge;
