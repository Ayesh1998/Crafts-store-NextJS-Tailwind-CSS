import React, { useEffect, useState } from "react";

import AnalyticsMostOrderedCraft from "../../atoms/analyticsMostOrderedCraft/AnalyticsMostOrderedCraft";
import { Craft } from "../../../../typings";
import { bestSellingOrOrderedCraftDataHandler } from "../../../utils/analyticsDataHandlers";
import { months } from "../../../constants/chartOptions";
import { selectTransaction } from "../../../redux/selectors/transactionSelector";
import { useSelector } from "react-redux";

//Analytics most ordered crafts component
const AnalyticsMostOrderedCrafts = () => {
  const transactions = useSelector(selectTransaction);
  const [mostOrderedData, setMostOrderedData] = useState<Craft[]>([]);

  useEffect(() => {
    setMostOrderedData(bestSellingOrOrderedCraftDataHandler(transactions));
  }, [transactions]);

  return (
    <div className="analytics-recent-orders-sales-wrapper">
      <h1>Most Ordered Crafts</h1>
      <ul>
        {mostOrderedData.map((craft, index) => (
          <AnalyticsMostOrderedCraft
            craft={craft}
            month={months[index]}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsMostOrderedCrafts;
