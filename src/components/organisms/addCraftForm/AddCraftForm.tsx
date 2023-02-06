import {
  CraftInputFieldsNames,
  CraftInputFieldsPlaceholders,
} from "../../../constants/enums";

import Button from "../../atoms/button/Button";
import { CommonInputs } from "../../../../typings";
import FormHeader from "../../atoms/formHeader/FormHeader";
import Input from "../../atoms/input/Input";
import { SubmitHandler } from "react-hook-form/dist/types";
import { actionCreators } from "../../../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { craftsAddEditSchema } from "../../../utils/validations";
import { selectCrafts } from "../../../redux/selectors/craftsSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

export interface CraftInputs extends CommonInputs {
  name: string;
  material: string;
  price: string;
  description: string;
  photo?: string;
}

//add crafts form component
const AddCraftForm = () => {
  const dispatch = useDispatch();
  const { addCraftLogic } = bindActionCreators(actionCreators, dispatch);

  const crafts = useSelector(selectCrafts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CraftInputs>({
    resolver: yupResolver(craftsAddEditSchema),
  });

  //adding crafts form submit handler
  const onSubmitHandler: SubmitHandler<CraftInputs> = async ({
    description,
    material,
    name,
    price,
    photo,
  }) => {
    console.log({
      description,
      material,
      name,
      price,
      photo,
    });
    const priceString = price.toString();

    addCraftLogic({ description, material, name, price: priceString, photo });
  };

  useEffect(() => {
    reset();
  }, [crafts]);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="craft-form ">
      <FormHeader header="Add" />

      <div className="space-y-4">
        <Input
          error={errors.name?.message}
          id={CraftInputFieldsNames.NAME}
          placeholder={CraftInputFieldsPlaceholders.NAME}
          register={register}
          registerName="name"
          type="text"
        />
        <Input
          error={errors.material?.message}
          id={CraftInputFieldsNames.MATERIAL}
          placeholder={CraftInputFieldsPlaceholders.MATERIAL}
          register={register}
          registerName="material"
          type="text"
        />
        <Input
          error={errors.price?.message}
          id={CraftInputFieldsNames.PRICE}
          placeholder={CraftInputFieldsPlaceholders.PRICE}
          register={register}
          registerName="price"
          type="number"
        />
        <Input
          error={errors.description?.message}
          id={CraftInputFieldsNames.DESCRIPTION}
          placeholder={CraftInputFieldsPlaceholders.DESCRIPTION}
          register={register}
          registerName="description"
          type="text"
        />
        <Input
          error={errors.photo?.message}
          id={CraftInputFieldsNames.PHOTO}
          placeholder={CraftInputFieldsPlaceholders.PHOTO}
          register={register}
          registerName="photo"
          type="text"
        />
      </div>

      <div className="flex justify-center">
        <Button title="Add Craft" />
      </div>
    </form>
  );
};

export default AddCraftForm;
