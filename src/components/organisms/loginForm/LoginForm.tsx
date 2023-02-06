import {
  LoginInputFieldsNames,
  LoginInputFieldsPlaceholders,
} from "../../../constants/enums";

import Button from "../../atoms/button/Button";
import { CommonInputs } from "../../../../typings";
import FormHeader from "../../atoms/formHeader/FormHeader";
import Input from "../../atoms/input/Input";
import LoginSignUpButton from "../../atoms/loginSignupButton/LoginSignupButton";
import { SubmitHandler } from "react-hook-form/dist/types";
import { login } from "../../../redux/slices/authSlice";
import { loginSchema } from "../../../utils/validations";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";

export interface Inputs extends CommonInputs {
  email: string;
  password: string;
}

//login form component
const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  });

  //login form submit handler
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then((res) => {
      if (res?.ok) {
        router.push("/");
      } else {
        toast.error("Login unsuccessful");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <FormHeader header="Login" />

      <div className="space-y-4">
        <Input
          error={errors.email?.message}
          id={LoginInputFieldsNames.EMAIL}
          placeholder={LoginInputFieldsPlaceholders.EMAIL}
          register={register}
          registerName="email"
          type="text"
        />
        <Input
          error={errors.password?.message}
          id={LoginInputFieldsNames.PASSWORD}
          placeholder={LoginInputFieldsPlaceholders.PASSWORD}
          register={register}
          registerName="password"
          type="password"
        />
      </div>

      <Button title="Sign In" />
      <LoginSignUpButton />
    </form>
  );
};

export default LoginForm;
