import { ComponentMeta, ComponentStory } from "@storybook/react";

import AddCraftForm from "../../../components/organisms/addCraftForm/AddCraftForm";
import React from "react";

export default {
  title: "Organisms/Add Craft Form",
  component: AddCraftForm,
} as ComponentMeta<typeof AddCraftForm>;

const Template: ComponentStory<typeof AddCraftForm> = (args) => (
  <div className="text-secondary-text">
    <AddCraftForm />
  </div>
);

export const Component = Template.bind({});
