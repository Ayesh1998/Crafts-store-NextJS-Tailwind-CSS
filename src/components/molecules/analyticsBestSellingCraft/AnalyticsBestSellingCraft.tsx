import React, { useEffect, useState } from "react";

import AnalyticsBestSellingCraft from "../../atoms/analyticsBestSellingCraft/AnalyticsBestSellingCraft";
import { Craft } from "../../../../typings";
import { bestSellingOrOrderedCraftDataHandler } from "../../../utils/analyticsDataHandlers";
import { months } from "../../../constants/chartOptions";
import { selectTransaction } from "../../../redux/selectors/transactionSelector";
import { useSelector } from "react-redux";

//best selling craft component
const AnalyticsBestSellingCrafts = () => {
  const transactions = useSelector(selectTransaction);
  const [bestSellingData, setBestSellingData] = useState<Craft[]>([]);

  useEffect(() => {
    setBestSellingData(bestSellingOrOrderedCraftDataHandler(transactions));
  }, [transactions]);

  return (
    <div className="analytics-recent-orders-sales-wrapper">
      <h1>Best Sales</h1>
      <ul>
        {bestSellingData.map((craft, index) => (
          <AnalyticsBestSellingCraft
            craft={craft}
            month={months[index]}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default AnalyticsBestSellingCrafts;
