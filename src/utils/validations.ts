import * as yup from "yup";

import { CraftInputFieldsErrors, LoginInputFieldsErrors } from "../constants/enums";

//yup validation schema for crafts form
export const craftsAddEditSchema = yup.object({
  name: yup
    .string()
    .required(CraftInputFieldsErrors.NAME_REQUIRED_ERROR)
    .min(3, CraftInputFieldsErrors.NAME_MIN_ERROR),
  description: yup
    .string()
    .required(CraftInputFieldsErrors.DESCRIPTION_REQUIRED_ERROR)
    .min(10, CraftInputFieldsErrors.DESCRIPTION_MIN_ERROR),
  material: yup
    .string()
    .required(CraftInputFieldsErrors.MATERIAL_REQUIRED_ERROR),
  price: yup.string().required(CraftInputFieldsErrors.PRICE_REQUIRED_ERROR),
  photo: yup.string(),
});

//yup validation schema for login form
export const loginSchema = yup.object({
  email: yup
    .string()
    .email(LoginInputFieldsErrors.EMAIL_INVALID_ERROR)
    .required(LoginInputFieldsErrors.EMAIL_REQUIRED_ERROR),
  password: yup
    .string()
    .required(LoginInputFieldsErrors.PASSWORD_REQUIRED_ERROR)
    .min(4, LoginInputFieldsErrors.PASSWORD_MIN_ERROR),
});
