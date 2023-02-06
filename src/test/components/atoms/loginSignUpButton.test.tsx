import { render, screen } from "@testing-library/react";

import LoginSignUpButton from "../../../components/atoms/loginSignupButton/LoginSignupButton";

describe("Header Links", () => {
  it("renders a HeaderLinks component", () => {
    render(<LoginSignUpButton />);

    expect(screen.getByText("Sign Up Now")).toBeInTheDocument();
  });
});
