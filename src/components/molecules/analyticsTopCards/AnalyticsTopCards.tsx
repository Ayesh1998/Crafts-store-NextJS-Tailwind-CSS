import AnalyticsTopCard from "../../atoms/analyticsTopCard/AnalyticsTopCard";
import React from "react";

interface Card {
  percentage: number;
  title: string;
  value: string;
}

interface Props {
  cardData: Card[];
}

//analytics top cards component
const AnalyticsTopCards = ({ cardData }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3 lg:grid-cols-3">
      {cardData?.map((card, index) => (
        <AnalyticsTopCard
          key={index}
          percentage={card.percentage}
          title={card.title}
          value={card.value}
        />
      ))}
    </div>
  );
};

export default AnalyticsTopCards;
