import CraftFunctionIcons from "../../atoms/craftFunctionIcons/CraftFunctionIcons";
import CraftNamePrice from "../../atoms/craftNamePrice/CraftNamePrice";
import Image from "next/image";
import { actionCreators } from "../../../redux";
import { addToBasket } from "../../../redux/slices/basketSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Craft } from "../../../../typings";
import Modal from "../modal/Modal";
import { useState } from "react";

interface Props {
  craft: Craft;
}

//single craft component
const Craft = ({ craft }: Props) => {
  const dispatch = useDispatch();
  const { removeCraftLogic } = bindActionCreators(actionCreators, dispatch);
  const [isOpen, setIsOpen] = useState(false);

  //add crafts to basket handler
  const addItemToBasketHandler = () => {
    dispatch(addToBasket(craft));
    toast.success(`${craft.name} added to basket`, {
      position: "bottom-center",
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //delete crafts handler
  const deleteCraftHandler = () => {
    removeCraftLogic(craft);
  };

  return (
    <div className="single-craft-wrapper ">
      <div className="relative h-64 w-full md:h-72">
        <Image
        fill
          style={{ objectFit: "contain",  }}
          alt=""
          src={craft.photo.includes("http") ? craft.photo : "/no-image.png"}
        />
      </div>
      <Modal
        isOpen={isOpen}
        deleteCraftHandler={deleteCraftHandler}
        handleClose={handleClose}
      />
      <div className="flex flex-1 items-center justify-between space-x-3">
        <CraftNamePrice name={craft.name} price={craft.price} />
        <CraftFunctionIcons
          addItemToBasket={addItemToBasketHandler}
          deleteCraft={handleOpen}
          id={craft._id}
        />
      </div>
    </div>
  );
};

export default Craft;
