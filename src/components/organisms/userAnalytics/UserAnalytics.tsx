import { useDispatch, useSelector } from "react-redux";

import AnalyticsLineGraph from "../../molecules/analyticsLineGraph/AnalyticsLineGraph";
import AnalyticsMostOrderedCrafts from "../../molecules/analyticsBestOrderedCraft/AnalyticsMostOrderedCraft";
import AnalyticsTopCards from "../../molecules/analyticsTopCards/AnalyticsTopCards";
import BarChart from "../../molecules/analyticsBarChart/AnalyticsBarChart";
import RecentOrdersSales from "../../molecules/analyticsRecentOrders/AnalyticsRecentOrdersSales";
import { bindActionCreators } from "@reduxjs/toolkit";
import { salesActionCreators } from "../../../redux";
import { selectId } from "../../../redux/selectors/authSelector";
import { useEffect } from "react";
import { userTopCardsData } from "../../../data/data";

const UserAnalytics = () => {
  const dispatch = useDispatch();
  const { getAllTransactionsLogic } = bindActionCreators(
    salesActionCreators,
    dispatch
  );
  const id = useSelector(selectId);

  useEffect(() => {
    id && getAllTransactionsLogic(id);
  }, [id]);

  return (
    <>
      <AnalyticsTopCards cardData={userTopCardsData} />
      <div className="grid grid-cols-1 gap-4 p-4  md:grid-cols-3">
        <BarChart />
        <RecentOrdersSales />
        <AnalyticsMostOrderedCrafts />
        <AnalyticsLineGraph />
      </div>
    </>
  );
};

export default UserAnalytics;
