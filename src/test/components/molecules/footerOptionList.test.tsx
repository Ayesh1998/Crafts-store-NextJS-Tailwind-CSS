import { render, screen } from "@testing-library/react";

import CheckoutTotal from "../../../components/atoms/checkoutTotal/CheckoutTotal";
import FooterOptionList from "../../../components/molecules/footerOptionList/FooterOptionList";

let expectedProps = {
  header: "Options",
  options: ["Option 1", "Option 2", "Option 3"],
};

describe("Footer Option List", () => {
  it("renders a FooterOptionList component", () => {
    render(<FooterOptionList {...expectedProps} />);

    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });
});
