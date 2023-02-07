import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Craft } from "../../../../typings";
import Image from "next/image";
import { removeFromBasket } from "../../../redux/slices/basketSlice";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

interface Props {
  items: Craft[];
  id: string;
}

//checkout crafts component
const CheckoutCrafts = ({ items, id }: Props) => {
  const dispatch = useDispatch();

  // remove items from basket handler
  const removeItemFromBasketHandler = () => {
    dispatch(removeFromBasket({ id }));
    toast.error(`${items[0].name} removed from basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="checkout-crafts-wrapper">
      <div className="relative h-44 w-44">
        <img
          src={
            items[0].photo.includes("http") ? items[0].photo : "/no-image-black.png"
          }
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl ">
            <h4 className="font-semibold lg:w-96">{items[0].name}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              {items.length}
              <ChevronDownIcon className="h-6 w-6 text-blue-500" />
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show product details
            <ChevronDownIcon className="h-6 w-6" />
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            ${items.reduce((total, item) => total + parseInt(item.price), 0)}.00
          </h4>
          <button
            onClick={removeItemFromBasketHandler}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCrafts;
