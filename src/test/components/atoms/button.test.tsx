import { render, screen } from "@testing-library/react";

import Button from "../../../components/atoms/button/Button";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Button", () => {
  it("renders a button", () => {
    render(
      <Provider store={store}>
        <Button title="Login" />
      </Provider>
    );

    const button = screen.getByText("Login");

    expect(button).toBeInTheDocument();
  });
});
