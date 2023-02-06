import { render, screen } from "@testing-library/react";

import EditCraftForm from "../../../components/organisms/editCraftForm/EditCraftForm";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

let expectedProps = {
  craft: {
    _id: "63cebff9cf69906ea1ebeb38",
    name: "Spoon",
    material: "Husk",
    price: "100",
    description: "Description",
    photo: "http://www.spoon.com",
  },
};

describe("Edit Craft Form", () => {
  it("renders a EditCraftForm component", () => {
    render(
      <Provider store={store}>
        <EditCraftForm {...expectedProps} />
      </Provider>
    );

    expect(screen.getByText("Update")).toBeInTheDocument();
  });
});
