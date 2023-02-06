import { ComponentMeta, ComponentStory } from "@storybook/react";

import CraftNamePrice from "../../../components/atoms/craftNamePrice/CraftNamePrice";
import React from "react";

export default {
  title: "Atoms/Craft Name and Price",
  component: CraftNamePrice,
} as ComponentMeta<typeof CraftNamePrice>;

const Template: ComponentStory<typeof CraftNamePrice> = (args) => (
  <div className="flex w-full bg-black !text-black">
    <CraftNamePrice {...args} />
  </div>
);
export const Component = Template.bind({});

Component.args = {
  name: "Spoon",
  price: 100,
};
