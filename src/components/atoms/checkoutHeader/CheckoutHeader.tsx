import Button from "../button/Button";
import { useRouter } from "next/router";

interface Props {
  itemsLength: number;
}

//checkout header component
const CheckoutHeader = ({ itemsLength }: Props) => {
  const router = useRouter();

  return (
    <div className={`px-5 ${itemsLength === 0 && 'min-h-[200px]' }`}>
      <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
        {itemsLength > 0 ? "Review your bag." : "Your bag is empty."}
      </h1>
      <p className="my-4">Free delivery and free returns.</p>

      {itemsLength === 0 && (
        <Button title="Continue Shopping" onClick={() => router.push("/")} />
      )}
    </div>
  );
};

export default CheckoutHeader;
