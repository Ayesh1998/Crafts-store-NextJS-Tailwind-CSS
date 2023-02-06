import { ComponentMeta, ComponentStory } from "@storybook/react";

import Header from "../../../components/organisms/header/Header";
import React from "react";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Component = Template.bind({});
