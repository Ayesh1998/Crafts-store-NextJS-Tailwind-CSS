import { render, screen } from "@testing-library/react";

import AnalyticsMostOrderedCraft from "../../../components/atoms/analyticsMostOrderedCraft/AnalyticsMostOrderedCraft";
import AnalyticsTopCard from "../../../components/atoms/analyticsTopCard/AnalyticsTopCard";

let expectedProps = {
  percentage: 10,
  value: "100",
  title: "Title",
};

describe("Analytics Top Card", () => {
  it("renders a AnalyticsTopCard component", () => {
    render(<AnalyticsTopCard {...expectedProps} />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
