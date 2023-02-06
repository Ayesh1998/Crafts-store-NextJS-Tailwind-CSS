import { ComponentMeta, ComponentStory } from "@storybook/react";

import HeaderIcons from "../../../components/molecules/headerIcons/HeaderIcons";
import React from "react";

export default {
  title: "Molecules/Header Icons",
  component: HeaderIcons,
} as ComponentMeta<typeof HeaderIcons>;

const Template: ComponentStory<typeof HeaderIcons> = (args) => <HeaderIcons />;

export const Component = Template.bind({});
