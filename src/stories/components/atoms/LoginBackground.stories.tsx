import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginSignUpButton from "../../../components/atoms/loginSignupButton/LoginSignupButton";
import React from "react";

export default {
  title: "Atoms/Login SignUp Button",
  component: LoginSignUpButton,
} as ComponentMeta<typeof LoginSignUpButton>;

const Template: ComponentStory<typeof LoginSignUpButton> = (args) => (
  <LoginSignUpButton />
);
export const Component = Template.bind({});
