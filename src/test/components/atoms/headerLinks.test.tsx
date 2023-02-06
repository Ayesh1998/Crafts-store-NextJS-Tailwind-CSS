import { render, screen } from "@testing-library/react";

import HeaderLinks from "../../../components/atoms/headerLinks/HeaderLinks";

describe("Header Links", () => {
  it("renders a HeaderLinks component", () => {
    render(<HeaderLinks />);

    expect(screen.getByText("Analytics")).toBeInTheDocument();
  });
});
