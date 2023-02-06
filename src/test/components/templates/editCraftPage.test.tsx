import { render, screen } from "@testing-library/react";

import EditCraftPage from "../../../components/templates/editCraftPage/EditCraftPage";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Edit Craft Page", () => {
  it("renders a EditCraftPage component", () => {
    render(
      <Provider store={store}>
        <EditCraftPage />
      </Provider>
    );

    expect(screen.getByText("Update")).toBeInTheDocument();
  });
});
