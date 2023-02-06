import { CommonInputs } from "../../../../typings";
import { UseFormRegister } from "react-hook-form";

interface Props {
  error: string | undefined;
  register?: UseFormRegister<CommonInputs>;
  type: string;
  id: string;
  registerName:
    | "email"
    | "password"
    | "name"
    | "material"
    | "price"
    | "description"
    | "photo";
  placeholder: string;
}

//input component
const Input = ({
  error,
  register,
  type,
  id,
  placeholder,
  registerName,
}: Props) => {
  return (
    <label className="inline-block w-full" htmlFor={id}>
      <input
        className={`input ${error && "border-b-2 border-orange-500"}`}
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(registerName)}
      />
      {error && (
        <p className="p-1 text-[13px] font-light  text-orange-500">{error}</p>
      )}
    </label>
  );
};

export default Input;
