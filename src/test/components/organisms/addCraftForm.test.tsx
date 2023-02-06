import { render, screen } from "@testing-library/react";

import AddCraftForm from "../../../components/organisms/addCraftForm/AddCraftForm";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Add Craft Form", () => {
  it("renders a AddCraftForm component", () => {
    render(
      <Provider store={store}>
        <AddCraftForm />
      </Provider>
    );

    expect(screen.getByText("Add")).toBeInTheDocument();
  });
});
