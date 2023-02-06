import { render, screen } from "@testing-library/react";

import BarChart from "../../../components/molecules/analyticsBarChart/AnalyticsBarChart";
import { Provider } from "react-redux";
import RecentOrdersSales from "../../../components/molecules/analyticsRecentOrders/AnalyticsRecentOrdersSales";
import { store } from "../../../redux/store";

describe("Recent Orders Sales", () => {
  it("renders a RecentOrdersSales component", () => {
    render(
      <Provider store={store}>
        <RecentOrdersSales />
      </Provider>
    );

    expect(screen.getByText("Recent Orders")).toBeInTheDocument();
  });
});
