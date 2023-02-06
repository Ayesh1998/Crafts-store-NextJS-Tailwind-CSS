import { render, screen } from "@testing-library/react";

import AnalyticsBestSellingCraft, {
} from "../../../components/atoms/analyticsBestSellingCraft/AnalyticsBestSellingCraft";

let expectedProps = {
  month: "January",
  craft: {
    _id: "63cebff9cf69906ea1ebeb38",
    name: "Spoon",
    material: "Husk",
    price: "100",
    description: "Description",
    photo: "http://www.spoon.com",
  },
};

describe("Analytics Best Selling Craft", () => {
  it("renders a AnalyticsBestSellingCraft component", () => {
    render(<AnalyticsBestSellingCraft {...expectedProps} />);

    expect(screen.getByText("January")).toBeInTheDocument();
  });
});
