import { render, screen } from "@testing-library/react";

import Header from "../../../components/organisms/header/Header";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Header", () => {
  it("renders a Header component", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByText("Explore")).toBeInTheDocument();
  });
});
