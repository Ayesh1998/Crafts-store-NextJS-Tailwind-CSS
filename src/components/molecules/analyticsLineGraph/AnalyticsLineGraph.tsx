import {
  Chart as ChartJS,
  Legend,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import { Roles } from "../../../constants/enums";
import { lineGraphDataHandler } from "../../../utils/analyticsDataHandlers";
import { months } from "../../../constants/chartOptions";
import { selectRole } from "../../../redux/selectors/authSelector";
import { selectTransaction } from "../../../redux/selectors/transactionSelector";
import { useSelector } from "react-redux";

ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);

//Line graph component
const AnalyticsLineGraph = () => {
  const transactions = useSelector(selectTransaction);
  const role = useSelector(selectRole);
  
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    let label = ((role === Roles.ADMIN) ? "Sales" : "Orders")
    setChartData({
      labels: months,
      datasets: [
        {
          label:  label,
          data: lineGraphDataHandler(transactions),
          fill: "true",
          tension: 0.2,
          borderColor: "rgb(53, 162, 235, 0.4)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
          borderDashOffset: 0.0,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [transactions]);

  return (
    <div className="line-graph-wrapper">
      <h1>{role === Roles.ADMIN ? "Monthly Sales" : "Monthly Orders"}</h1>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default AnalyticsLineGraph;
