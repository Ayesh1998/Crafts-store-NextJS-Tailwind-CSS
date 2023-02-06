import { ComponentMeta, ComponentStory } from "@storybook/react";

import CraftNamePrice from "../../../components/atoms/craftNamePrice/CraftNamePrice";
import FooterOption from "../../../components/atoms/footerOption/FooterOption";
import React from "react";

export default {
  title: "Atoms/Footer Option",
  component: FooterOption,
} as ComponentMeta<typeof FooterOption>;

const Template: ComponentStory<typeof FooterOption> = (args) => (
  <FooterOption {...args} />
);
export const Component = Template.bind({});

Component.args = {
  option: "Option",
};
