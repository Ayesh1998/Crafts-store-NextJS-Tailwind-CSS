import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginPage from "../../../components/templates/login/LoginPage";
import React from "react";

export default {
  title: "Templates/Login Page",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

const Template: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const Component = Template.bind({});
