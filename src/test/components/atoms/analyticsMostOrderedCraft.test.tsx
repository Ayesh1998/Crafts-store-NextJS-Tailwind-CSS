import { render, screen } from "@testing-library/react";

import AnalyticsMostOrderedCraft from "../../../components/atoms/analyticsMostOrderedCraft/AnalyticsMostOrderedCraft";

let expectedProps = {
  month: "January",
  craft: null
};

describe("Analytics Most Ordered Craft", () => {
  it("renders a AnalyticsMostOrderedCraft component", () => {
    render(<AnalyticsMostOrderedCraft {...expectedProps} />);

    expect(screen.getByText("No data")).toBeInTheDocument();
  });
});
