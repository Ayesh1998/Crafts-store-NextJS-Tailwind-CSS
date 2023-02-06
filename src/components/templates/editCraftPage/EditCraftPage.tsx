import EditCraftForm from "../../organisms/editCraftForm/EditCraftForm";
import PageHead from "../../atoms/pageHead/PageHead";
import { selectCrafts } from "../../../redux/selectors/craftsSelector";
import { useSelector } from "react-redux";

interface Props {
  id?: string | string[];
}

//edit crafts component
const EditCraftPage = ({ id }: Props) => {
  const crafts = useSelector(selectCrafts);
  const craft = crafts.find((craft) => craft._id === id);

  return (
    <div className="bg-primary-background">
      <div className="add-edit-craft-form-wrapper">
        <PageHead icon="/logo.png" title="Edit Craft" />
        <EditCraftForm craft={craft} />
      </div>
    </div>
  );
};

export default EditCraftPage;
