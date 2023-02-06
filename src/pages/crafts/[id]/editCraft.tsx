import EditCraftPage from "../../../components/templates/editCraftPage/EditCraftPage";
import Footer from "../../../components/organisms/footer/Footer";
import Header from "../../../components/organisms/header/Header";
import { useRouter } from "next/router";

//crafts editing page
const EditCraft = () => {
    const router = useRouter();
    const { id } = router.query;
  return(
    <>
      <Header />
      <EditCraftPage id={id} />;
      <Footer/>
    </>
  );
  
  
};

export default EditCraft;
