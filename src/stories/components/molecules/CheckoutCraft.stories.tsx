import { ComponentMeta, ComponentStory } from "@storybook/react";

import CheckoutCrafts from "../../../components/molecules/checkoutCraft/CheckoutCraft";
import React from "react";

const crafts = [
  {
    _id: "63cebff9cf69906ea1ebeb38",
    name: "Spoon",
    material: "Husk",
    price: "100",
    description: "Description",
    photo: "http://www.spoon.com",
  },
  {
    _id: "63cebff9cf69906ea1ebeb38",
    name: "Spoon",
    material: "Husk",
    price: "100",
    description: "Description",
    photo: "http://www.spoon.com",
  },
  {
    _id: "63cebff9cf69906ea1ebeb38",
    name: "Spoon",
    material: "Husk",
    price: "100",
    description: "Description",
    photo: "http://www.spoon.com",
  },
];

export default {
  title: "Molecules/Checkout Craft",
  component: CheckoutCrafts,
} as ComponentMeta<typeof CheckoutCrafts>;

const Template: ComponentStory<typeof CheckoutCrafts> = (args) => (
  <CheckoutCrafts {...args} />
);

export const Component = Template.bind({});

Component.args = {
  items: crafts,
  id: "63cebff9cf69906ea1ebeb38",
};
