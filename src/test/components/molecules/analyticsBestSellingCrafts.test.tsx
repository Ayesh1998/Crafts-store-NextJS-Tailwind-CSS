import { render, screen } from "@testing-library/react";

import AnalyticsBestSellingCrafts from "../../../components/molecules/analyticsBestSellingCraft/AnalyticsBestSellingCraft";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Analytics Best Selling Crafts", () => {
  it("renders a AnalyticsBestSellingCrafts component", () => {
    render(
      <Provider store={store}>
        <AnalyticsBestSellingCrafts />
      </Provider>
    );

    expect(screen.getByText("Best Sales")).toBeInTheDocument();
  });
});
