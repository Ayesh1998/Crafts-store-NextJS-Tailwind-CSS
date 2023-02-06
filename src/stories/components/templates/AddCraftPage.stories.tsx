import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddCraftPage from "../../../components/templates/addCraftPage/AddCraftPage";
import React from "react";

export default {
  title: "Templates/Add Craft Page",
  component: AddCraftPage,
} as ComponentMeta<typeof AddCraftPage>;

const Template: ComponentStory<typeof AddCraftPage> = () => <AddCraftPage />;

export const Component = Template.bind({});
