import { actionCreators, salesActionCreators } from "../../../redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../../redux/selectors/basketSelector";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../../atoms/button/Button";
import CheckoutCrafts from "../../molecules/checkoutCraft/CheckoutCraft";
import CheckoutTotal from "../../atoms/checkoutTotal/CheckoutTotal";
import { Craft } from "../../../../typings";
import { Roles } from "../../../constants/enums";
import Router from "next/router";
import { bindActionCreators } from "@reduxjs/toolkit";
import { selectRole } from "../../../redux/selectors/authSelector";
import { useSession } from "next-auth/react";

//checkout list component
const CheckoutList = () => {
  const { status, data } = useSession();
  const items = useSelector(selectBasketItems);
  const role = useSelector(selectRole);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Craft[] }
  );
  const dispatch = useDispatch();
  const { updateSalesLogic } = bindActionCreators(
    salesActionCreators,
    dispatch
  );

  //grouping same items in basket
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id as string] = results[item._id as string] || []).push(
        item
      );
      return results;
    }, {} as { [key: string]: Craft[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const checkoutHandler = () => {
    if (role === Roles.USER) {
      const checkoutItems = {
        userId: data.user.id,
        crafts: items,
      };
      updateSalesLogic(checkoutItems);
    } else {
      Router.push("/auth/login");
    }
  };

  return (
    <>
      {items.length > 0 && (
        <div className="mx-5 md:mx-8">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <CheckoutCrafts key={key} items={items} id={key} />
          ))}

          <div className="my-12 mt-6 ml-auto max-w-3xl">
            <CheckoutTotal basketTotal={basketTotal} />
            <div className="flex justify-end pt-8" onClick={checkoutHandler}>
              <Button noIcon title="Check Out" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutList;
