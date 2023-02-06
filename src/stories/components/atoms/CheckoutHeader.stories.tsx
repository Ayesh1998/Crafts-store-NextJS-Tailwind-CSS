import { ComponentMeta, ComponentStory } from "@storybook/react";

import CheckoutHeader from "../../../components/atoms/checkoutHeader/CheckoutHeader";
import React from "react";

export default {
  title: "Atoms/Checkout Header",
  component: CheckoutHeader,
} as ComponentMeta<typeof CheckoutHeader>;

const Template: ComponentStory<typeof CheckoutHeader> = (args) => (
  <CheckoutHeader {...args} />
);

export const Component = Template.bind({});

Component.args = {
  itemsLength: 10,
};
