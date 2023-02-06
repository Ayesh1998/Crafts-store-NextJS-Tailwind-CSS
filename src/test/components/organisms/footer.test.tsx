import { render, screen } from "@testing-library/react";

import AddCraftForm from "../../../components/organisms/addCraftForm/AddCraftForm";
import Footer from "../../../components/organisms/footer/Footer";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("Footer", () => {
  it("renders a Footer component", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

    expect(screen.getByText("Ayesh Web Arts")).toBeInTheDocument();
  });
});
