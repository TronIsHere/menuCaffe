import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const OfferStatCard = ({
  icon,
  title,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  count: number;
}) => (
  <Card className="bg-darkSecondary border text-white">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">{count}</p>
      <p className="text-xs text-stone-400">پیشنهاد فعال</p>
    </CardContent>
  </Card>
);

export default OfferStatCard;
