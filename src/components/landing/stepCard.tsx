const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-darkSecondary p-6 rounded-xl border border-stone-700 relative">
      <div className="absolute top-4 left-4 bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="font-bold text-xl mb-4 mt-2">{title}</h3>
      <p className="text-stone-300">{description}</p>
    </div>
  );
};
export default StepCard;
