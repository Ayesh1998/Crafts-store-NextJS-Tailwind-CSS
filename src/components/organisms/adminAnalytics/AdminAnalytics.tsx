import AnalyticsBestSellingCrafts from "../../molecules/analyticsBestSellingCraft/AnalyticsBestSellingCraft";
import AnalyticsLineGraph from "../../molecules/analyticsLineGraph/AnalyticsLineGraph";
import AnalyticsTopCards from "../../molecules/analyticsTopCards/AnalyticsTopCards";
import BarChart from "../../molecules/analyticsBarChart/AnalyticsBarChart";
import RecentOrdersSales from "../../molecules/analyticsRecentOrders/AnalyticsRecentOrdersSales";
import { adminTopCardsData } from "../../../data/data";
import { bindActionCreators } from "@reduxjs/toolkit";
import { salesActionCreators } from "../../../redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//Admin analytics component
const AdminAnalytics = () => {
  const dispatch = useDispatch();
  const { getAllSalesLogic } = bindActionCreators(
    salesActionCreators,
    dispatch
  );

  useEffect(() => {
    getAllSalesLogic();
  }, []);

  return (
    <>
      <AnalyticsTopCards cardData={adminTopCardsData} />
      <div className="grid grid-cols-1 gap-4 p-4  md:grid-cols-3">
        <BarChart />
        <RecentOrdersSales />
        <AnalyticsBestSellingCrafts />
        <AnalyticsLineGraph />
      </div>
    </>
  );
};

export default AdminAnalytics;
