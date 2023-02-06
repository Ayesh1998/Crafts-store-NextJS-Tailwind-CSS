import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "../../../components/molecules/pagination/Pagination";
import React from "react";

export default {
  title: "Molecules/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Component = Template.bind({});

Component.args = {
  currentPage:1,
  pages:[1,2,3,4,5,6,7,8,9,10]
};
