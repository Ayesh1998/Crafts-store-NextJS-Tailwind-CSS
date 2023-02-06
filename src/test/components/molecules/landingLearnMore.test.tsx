import { render, screen } from "@testing-library/react";

import AnalyticsBestSellingCrafts from "../../../components/molecules/analyticsBestSellingCraft/AnalyticsBestSellingCraft";
import LandingLearnMore from "../../../components/molecules/landingLearnMore/LandingLearnMore";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Landing Learn More", () => {
  it("renders a LandingLearnMore component", () => {
    render(
      <Provider store={store}>
        <LandingLearnMore />
      </Provider>
    );

    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });
});
