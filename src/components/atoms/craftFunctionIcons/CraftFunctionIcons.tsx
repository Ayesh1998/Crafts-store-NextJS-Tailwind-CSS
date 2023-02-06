import {
  PencilSquareIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { Roles } from "../../../constants/enums";
import { selectRole } from "../../../redux/selectors/authSelector";
import { useSelector } from "react-redux";

interface Props {
  id?: string;
  deleteCraft: () => void;
  addItemToBasket: () => void;
}

//craft functional icons component
const CraftFunctionIcons = ({ id, addItemToBasket, deleteCraft }: Props) => {
  const role = useSelector(selectRole);

  return (
    <>
      {role === Roles.ADMIN ? (
        <div className="flex justify-end space-x-3">
          <Link
            href={`/crafts/${id}/editCraft`}
            className="crafts-icons-wrapper bg-gray-500"
          >
            <PencilSquareIcon className="craft-edit-delete-icons" />
          </Link>
          <div
            className="crafts-icons-wrapper bg-red-500"
            onClick={deleteCraft}
          >
            <TrashIcon className="craft-edit-delete-icons" />
          </div>
        </div>
      ) : (
        <div className="craft-shopping-icon" onClick={addItemToBasket}>
          <ShoppingCartIcon className="h-8 w-8 text-secondary-text" />
        </div>
      )}
    </>
  );
};

export default CraftFunctionIcons;
