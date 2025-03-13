const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-darkPrimary p-6 rounded-xl border border-stone-700 hover:border-primary-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-stone-300">{description}</p>
    </div>
  );
};
export default FeatureCard;
