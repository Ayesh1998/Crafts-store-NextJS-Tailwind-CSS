import { ComponentMeta, ComponentStory } from "@storybook/react";

import FooterContact from "../../../components/atoms/footerContact/FooterContact";
import React from "react";

export default {
  title: "Atoms/Footer Contact",
  component: FooterContact,
} as ComponentMeta<typeof FooterContact>;

const Template: ComponentStory<typeof FooterContact> = (args) => (
  <FooterContact />
);
export const Component = Template.bind({});
