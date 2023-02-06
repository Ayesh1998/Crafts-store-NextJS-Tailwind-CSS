import LandingPage from "../components/templates/landingPage/LandingPage";
import type { NextPage } from "next";
import { Roles } from "../constants/enums";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { login } from "../redux/slices/authSlice";
import { resetBasket } from "../redux/slices/basketSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

//index page
const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { fetchCraftsLogic } = bindActionCreators(actionCreators, dispatch);
  const { status, data } = useSession();

  //dispatch login if user is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      dispatch(login({ role: data?.user?.role, id: data?.user?.id }));
      data?.user?.role === Roles.ADMIN && dispatch(resetBasket());
    }
  }, [status]);

  //fetching crafts
  useEffect(() => {
    fetchCraftsLogic();
  }, []);

  return <LandingPage />;
};

export default Home;
