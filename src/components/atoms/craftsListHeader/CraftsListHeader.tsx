import { Roles } from "../../../constants/enums";
import { selectRole } from "../../../redux/selectors/authSelector";
import { useSelector } from "react-redux";

//crafts list header component
const CraftsListHeader = () => {
  const role = useSelector(selectRole);
  
  return (
    <h1 className="text-center text-4xl font-medium tracking-wide text-secondary-text md:text-5xl">
      {role === Roles.ADMIN ? "Crafts List" : "Buy your Craft Now"}
    </h1>
  );
};

export default CraftsListHeader;
