import AddCraftForm from "../../organisms/addCraftForm/AddCraftForm";
import PageHead from "../../atoms/pageHead/PageHead";

//adding crafts component
const AddCraftPage = () => {
  return (
    <div className="bg-primary-background">
      <div className="add-edit-craft-form-wrapper">
        <PageHead icon="/logo.png" title="Add Craft" />
        <AddCraftForm />
      </div>
    </div>
  );
};

export default AddCraftPage;
