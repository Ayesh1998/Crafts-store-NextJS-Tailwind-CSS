import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { selectBasketItems } from "../../../redux/selectors/basketSelector";
import { useSelector } from "react-redux";

//basket floating button component
const BasketFloatingButton = () => {
  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">
      <div className="basket-button-wrapper">
        {items.length > 0 && (
          <span className="basket-button-span">{items.length}</span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
};

export default BasketFloatingButton;
