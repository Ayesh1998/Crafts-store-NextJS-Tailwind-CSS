import { render, screen } from "@testing-library/react";

import FooterOption from "../../../components/atoms/footerOption/FooterOption";

let expectedProps = {
  option: "option1",
};

describe("Footer Option", () => {
  it("renders a FooterOption component", () => {
    render(<FooterOption {...expectedProps} />);

    expect(screen.getByText("option1")).toBeInTheDocument();
  });
});
