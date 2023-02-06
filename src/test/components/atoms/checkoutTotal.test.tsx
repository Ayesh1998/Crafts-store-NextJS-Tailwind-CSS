import { render, screen } from "@testing-library/react";

import CheckoutTotal from "../../../components/atoms/checkoutTotal/CheckoutTotal";

let expectedProps = {
    basketTotal: 10,
};

describe("Checkout Total", () => {
  it("renders a CheckoutTotal component", () => {
    render(<CheckoutTotal {...expectedProps} />);

    expect(screen.getByText("Subtotal")).toBeInTheDocument();
  });
});
