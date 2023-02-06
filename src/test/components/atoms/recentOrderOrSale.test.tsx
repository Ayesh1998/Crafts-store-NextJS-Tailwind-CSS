import { render, screen } from "@testing-library/react";

import RecentOrderOrSale from "../../../components/atoms/recentOrderOrSale/RecentOrderOrSale";

let expectedProps = {
  price: "100",
  role: "user",
  firstName: "kurt",
  prodName: "Broom",
  date: "01/02/2023",
};

describe("Recent Order or Sales", () => {
  it("renders a RecentOrderOrSale component", () => {
    render(<RecentOrderOrSale {...expectedProps} />);

    expect(screen.getByText("Broom")).toBeInTheDocument();
  });
});
