interface Props {
  percentage: number;
  value: string;
  title: string;
}

////Analytics top card component
const AnalyticsTopCard = ({ percentage, title, value }: Props) => {
  return (
    <div className="analytics-top-card-wrapper">
      <div className="flex w-full flex-col pb-4">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-primary-text-500">{title}</p>
      </div>
      <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
        <span className="text-lg text-green-700">{percentage}%</span>
      </p>
    </div>
  );
};

export default AnalyticsTopCard;
