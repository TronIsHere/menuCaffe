import { FC } from "react";

interface AnalyticsBoxProps {
  title: string;
  percentage: number;
  data: string | number;
  subtitle: string;
}

const AnalyticsBox: FC<AnalyticsBoxProps> = ({
  title,
  percentage,
  subtitle,
  data,
}) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-lg shadow-md border text-right">
      <div className="flex ≈ß items-center justify-between">
        <h3 className="text-sm font-medium  text-stone-300">{title}</h3>
        <div className="min-h-[24px]">
          {percentage > 0 && (
            <span className="bg-amber-900 text-amber-200 text-xs font-medium px-2 py-1 rounded">
              {percentage}٪+
            </span>
          )}
        </div>
      </div>
      <p className="mt-3 text-3xl font-bold text-stone-100">{data}</p>
      <p className="mt-1 text-sm text-stone-400 ">{subtitle}</p>
    </div>
  );
};

export default AnalyticsBox;
