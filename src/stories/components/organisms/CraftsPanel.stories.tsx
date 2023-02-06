import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect } from "react";

import CraftsPanel from "../../../components/organisms/craftsPanel/CraftsPanel";
import { actionCreators } from "../../../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { login } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default {
  title: "Organisms/Crafts Panel",
  component: CraftsPanel,
} as ComponentMeta<typeof CraftsPanel>;

const Template: ComponentStory<typeof CraftsPanel> = (args) => {
  const dispatch = useDispatch();
  const { fetchCraftsLogic } = bindActionCreators(actionCreators, dispatch);
  dispatch(login());
  useEffect(() => {
    fetchCraftsLogic();
  }, []);
  return <CraftsPanel />;
};

export const Component = Template.bind({});
