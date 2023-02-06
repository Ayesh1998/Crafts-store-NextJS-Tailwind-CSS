import { ComponentMeta, ComponentStory } from "@storybook/react";

import EditCraftForm from "../../../components/organisms/editCraftForm/EditCraftForm";
import React from "react";

export default {
  title: "Organisms/Edit Craft Form",
  component: EditCraftForm,
} as ComponentMeta<typeof EditCraftForm>;

const Template: ComponentStory<typeof EditCraftForm> = (args) => (
  <div className="text-secondary-text">
    <EditCraftForm {...args} />
  </div>
);

export const Component = Template.bind({});

Component.args = {
  craft: {
    description: "Description",
    material: "Material",
    name: "craft",
    price: 120,
    photo:"photo"
  },
};
