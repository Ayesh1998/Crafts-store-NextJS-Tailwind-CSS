import AddNewCraftButton from "../../atoms/addNewCraftButton/AddNewCraftButton";
import BasketFloatingButton from "../../atoms/basketFloatingButton/BasketFloatingButton";
import CraftsPanel from "../../organisms/craftsPanel/CraftsPanel";
import Footer from "../../organisms/footer/Footer";
import Header from "../../organisms/header/Header";
import Landing from "../../organisms/landing/Landing";
import PageHead from "../../atoms/pageHead/PageHead";
import { Roles } from "../../../constants/enums";
import { selectRole } from "../../../redux/selectors/authSelector";
import { useSelector } from "react-redux";

//adding crafts component
const LandingPage = () => {
  const role = useSelector(selectRole);

  return (
    <div>
      <PageHead icon="/logo.png" title="Crafts Council" />
      <Header />

      {role === Roles.ADMIN ? (
        <AddNewCraftButton />
      ) : (
        <>
          <BasketFloatingButton />
          <main className="relative h-[200vh] bg-[#f8f8f6]">
            <Landing />
          </main>
        </>
      )}

      <CraftsPanel />
      <Footer />
    </div>
  );
};

export default LandingPage;
