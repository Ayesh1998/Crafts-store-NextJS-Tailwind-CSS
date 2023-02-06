import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  header: string;
}

//form header component
const FormHeader = ({ header }: Props) => {
  return (
    <div className="flex justify-between">
      <h1 className=" text-4xl font-semibold">{header}</h1>
      <Link href="/">
        <ArrowLeftCircleIcon className="h-8 w-8  cursor-pointer text-secondary-text" />
      </Link>
    </div>
  );
};

export default FormHeader;
