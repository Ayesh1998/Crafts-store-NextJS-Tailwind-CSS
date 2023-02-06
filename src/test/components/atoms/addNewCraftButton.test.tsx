import { render, screen } from "@testing-library/react";

import AddNewCraftButton from "../../../components/atoms/addNewCraftButton/AddNewCraftButton";

describe("Add new craft button", () => {
  it("renders a AddNewCraftButton component", () => {
    render(
        <AddNewCraftButton/>
    );

    expect(screen.queryByTestId("add-new-craft-button")).toBeInTheDocument();
  });
});
