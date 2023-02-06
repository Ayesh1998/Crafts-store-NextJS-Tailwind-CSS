import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { Roles } from "../../../constants/enums";
import { barGraphDataHandler } from "../../../utils/analyticsDataHandlers";
import { months } from "../../../constants/chartOptions";
import { selectRole } from "../../../redux/selectors/authSelector";
import { selectTransaction } from "../../../redux/selectors/transactionSelector";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//Bar chart component
const BarChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const transactions = useSelector(selectTransaction);
  const role = useSelector(selectRole);

  useEffect(() => {
    setChartData({
      labels: months,
      datasets: [
        {
          label: "Sales Rs.",
          data: barGraphDataHandler(transactions),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
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
    <>
      <div className="bar-chart-wrapper">
        <h1>{role === Roles.ADMIN ? "Monthly Revenue" : "Monthly Expenditure"}</h1>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
