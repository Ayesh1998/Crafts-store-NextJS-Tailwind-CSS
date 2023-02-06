import { render, screen } from "@testing-library/react";

import AddCraftPage from "../../../components/templates/addCraftPage/AddCraftPage";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Add Craft Page", () => {
  it("renders a AddCraftPage component", () => {
    render(
      <Provider store={store}>
        <AddCraftPage />
      </Provider>
    );

    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
