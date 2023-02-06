import { ComponentMeta, ComponentStory } from "@storybook/react";

import FooterOptionList from "../../../components/molecules/footerOptionList/FooterOptionList";
import React from "react";

export default {
  title: "Molecules/Footer Option List",
  component: FooterOptionList,
} as ComponentMeta<typeof FooterOptionList>;

const Template: ComponentStory<typeof FooterOptionList> = (args) => (
  <FooterOptionList {...args} />
);

export const Component = Template.bind({});

Component.args = {
  header: "Header",
  options: ["Option 1", " Option 2", "Option 3"],
};
