import {
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Router from 'next/router'
import { logout } from "../../../redux/slices/authSlice";
import { selectAuth } from "../../../redux/selectors/authSelector";
import { selectBasketItems } from "../../../redux/selectors/basketSelector";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//header icons component
const HeaderIcons = () => {
  const loggedIn = useSelector(selectAuth);
  const itemsInBasket = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  //logout handler (dispatching logout action and also execute signOut function from next auth)
  const logoutHandler = () => {
    dispatch(logout());
    signOut();
    Router.push('/')
  };

  return (
    <div className="flex items-center justify-center gap-x-4 md:w-1/5">
      <MagnifyingGlassIcon className="headerIcon" />
      <Link href="/checkout">
        <div className="relative cursor-pointer">
          {itemsInBasket.length > 0 && (
            <span className="header-basket-count">{itemsInBasket.length}</span>
          )}
          <ShoppingBagIcon className="headerIcon" />
        </div>
      </Link>

      {loggedIn ? (
        <ArrowLeftOnRectangleIcon
          onClick={logoutHandler}
          className="headerIcon"
        />
      ) : (
        <Link href="/auth/login">
          <UserIcon className="headerIcon" />
        </Link>
      )}
    </div>
  );
};

export default HeaderIcons;
