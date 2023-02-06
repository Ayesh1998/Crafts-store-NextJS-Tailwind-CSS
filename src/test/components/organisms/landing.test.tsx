import { render, screen } from "@testing-library/react";

import Landing from "../../../components/organisms/landing/Landing";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Landing", () => {
  it("renders a Landing component", () => {
    render(
      <Provider store={store}>
        <Landing />
      </Provider>
    );

    expect(screen.getByText("What does")).toBeInTheDocument();
  });
});
