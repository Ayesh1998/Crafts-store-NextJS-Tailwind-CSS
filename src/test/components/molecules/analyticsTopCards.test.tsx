import { render, screen } from "@testing-library/react";

import AnalyticsMostOrderedCraft from "../../../components/atoms/analyticsMostOrderedCraft/AnalyticsMostOrderedCraft";
import AnalyticsTopCards from "../../../components/molecules/analyticsTopCards/AnalyticsTopCards";

let expectedProps = {
  cardData: [{ percentage: 19, title: "Title", value: "190" }],
};

describe("Analytics Most Ordered Craft", () => {
  it("renders a AnalyticsMostOrderedCraft component", () => {
    render(<AnalyticsTopCards {...expectedProps} />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
