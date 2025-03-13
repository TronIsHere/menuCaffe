interface FaqItemProps {
  question: string;
  answer: string;
}
// FAQ Item Component
const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <div className="bg-primary-500/20 text-primary-300 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm">؟</span>
        </div>
        {question}
      </h3>
      <p className="text-stone-300">{answer}</p>
    </div>
  );
};
export default FaqItem;
