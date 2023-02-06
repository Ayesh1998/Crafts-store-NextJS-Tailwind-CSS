import { Craft } from "../../../../typings";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface Props {
  month: string;
  craft?: Craft;
}

//Analytics best selling craft component
const AnalyticsBestSellingCraft = ({ craft, month }: Props) => {
  return (
    <li className="analytics-best-selling-craft-wrapper">
      <div className="rounded-lg bg-purple-100 p-3">
        <ShoppingBagIcon className="text-purple-800" />
      </div>
      <div className="pl-4">
        <p className="font-bold text-primary-text-800">{month}</p>
      </div>
      <p
        className={`absolute right-6 text-sm font-semibold md:hidden lg:flex ${
          !craft && "!font-sans text-primary-text-500"
        }`}
      >
        {craft ? craft.name : "No data"}{" "}
      </p>
    </li>
  );
};

export default AnalyticsBestSellingCraft;
