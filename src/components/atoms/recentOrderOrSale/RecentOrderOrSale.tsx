import React from "react";
import { Roles } from "../../../constants/enums";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface Props {
  price: string;
  role: string;
  firstName: string;
  prodName: string;
  date: string;
}

//recent single order or sale component
const RecentOrderOrSale = ({ date, firstName, price, role, prodName }: Props) => {
  return (
    <li className="analytics-recent-single-order-sale-wrapper">
      <div className="rounded-lg bg-purple-100 p-3">
        <ShoppingBagIcon className="text-purple-800" />
      </div>
      <div className="pl-4">
        <p className="font-bold text-primary-text-800">Rs.{price}</p>
        <p className="text-sm text-primary-text-500">
          {role === Roles.ADMIN ? firstName : prodName}
        </p>
      </div>
      <p className="absolute right-6 text-sm md:hidden lg:flex">{date}</p>
    </li>
  );
};

export default RecentOrderOrSale;
