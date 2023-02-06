import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

//add new craft button component
const AddNewCraftButton = () => {
  return (
    <Link href="/crafts/addCraft">
      <div className="add-new-craft-button-wrapper" data-testid="add-new-craft-button">
        <PlusIcon className="headerIcon h-8 w-8 text-secondary-text hover:h-9 hover:w-9" />
      </div>
    </Link>
  );
};

export default AddNewCraftButton;
