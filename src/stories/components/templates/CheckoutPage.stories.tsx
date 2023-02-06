import { ComponentMeta, ComponentStory } from "@storybook/react";

import CheckoutPage from "../../../components/templates/checkoutPage/CheckoutPage";
import React from "react";

export default {
  title: "Templates/Checkout Page",
  component: CheckoutPage,
} as ComponentMeta<typeof CheckoutPage>;

const Template: ComponentStory<typeof CheckoutPage> = () => <CheckoutPage />;

export const Component = Template.bind({});
