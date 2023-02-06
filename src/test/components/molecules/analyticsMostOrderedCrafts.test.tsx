import { render, screen } from "@testing-library/react";

import AnalyticsMostOrderedCrafts from "../../../components/molecules/analyticsBestOrderedCraft/AnalyticsMostOrderedCraft";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Analytics Most Ordered Crafts", () => {
  it("renders a AnalyticsMostOrderedCrafts component", () => {
    render(
      <Provider store={store}>
        <AnalyticsMostOrderedCrafts />
      </Provider>
    );

    expect(screen.getByText("Most Ordered Crafts")).toBeInTheDocument();
  });
});
