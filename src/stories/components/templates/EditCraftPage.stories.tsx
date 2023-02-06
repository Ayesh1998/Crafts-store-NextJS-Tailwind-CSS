import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect } from "react";

import EditCraftPage from "../../../components/templates/editCraftPage/EditCraftPage";
import { actionCreators } from "../../../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { login } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default {
  title: "Templates/Edit Craft Page",
  component: EditCraftPage,
} as ComponentMeta<typeof EditCraftPage>;

const Template: ComponentStory<typeof EditCraftPage> = (args) => {
  const dispatch = useDispatch();
  const { fetchCraftsLogic } = bindActionCreators(actionCreators, dispatch);
  dispatch(login());
  useEffect(() => {
    fetchCraftsLogic();
  }, []);
  return <EditCraftPage {...args} />;
};

export const Component = Template.bind({});

Component.args = {
  id: "63cebbf38b7dc46a100e8b35",
};
