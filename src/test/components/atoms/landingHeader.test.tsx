import { render, screen } from "@testing-library/react";

import LandingHeader from "../../../components/atoms/landingHeader/LandingHeader";

describe("Landing Header", () => {
  it("renders a LandingHeader component", () => {
    render(<LandingHeader />);

    expect(screen.getByText("Crafts")).toBeInTheDocument();
  });
});
