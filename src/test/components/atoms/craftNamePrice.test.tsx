import { render, screen } from "@testing-library/react";

import CheckoutTotal from "../../../components/atoms/checkoutTotal/CheckoutTotal";
import CraftNamePrice from "../../../components/atoms/craftNamePrice/CraftNamePrice";

let expectedProps = {
  name: "Product",
  price: "100",
};

describe("Craft Name Price", () => {
  it("renders a CraftNamePrice component", () => {
    render(<CraftNamePrice {...expectedProps} />);

    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});
