import { CommonInputs, Craft } from "../../../../typings";
import {
  CraftInputFieldsNames,
  CraftInputFieldsPlaceholders,
} from "../../../constants/enums";

import Button from "../../atoms/button/Button";
import FormHeader from "../../atoms/formHeader/FormHeader";
import Input from "../../atoms/input/Input";
import { SubmitHandler } from "react-hook-form/dist/types";
import { actionCreators } from "../../../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { craftsAddEditSchema } from "../../../utils/validations";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export interface CraftInputs extends CommonInputs {
  name: string;
  material: string;
  price: string;
  description: string;
  photo?: string;
  _id: string;
}

interface Props {
  craft: Craft | undefined;
}

//edit crafts form component
const EditCraftForm = ({ craft }: Props) => {
  const dispatch = useDispatch();
  const { updateCraftLogic } = bindActionCreators(actionCreators, dispatch);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CraftInputs>({
    resolver: yupResolver(craftsAddEditSchema),
    defaultValues: {
      name: craft?.name,
      material: craft?.material,
      price: craft?.price,
      description: craft?.description,
      photo: craft?.photo,
      _id: craft?._id,
    },
  });

  //edit crafts form submit handler
  const onSubmitHandler: SubmitHandler<CraftInputs> = async ({
    description,
    material,
    name,
    price,
    photo,
    _id,
  }) => {
    const priceString = price.toString();

    updateCraftLogic({
      description,
      material,
      name,
      price: priceString,
      photo,
      _id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="craft-form ">
      <FormHeader header="Update" />

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
        <Button title="Update Craft" />
      </div>
    </form>
  );
};

export default EditCraftForm;
