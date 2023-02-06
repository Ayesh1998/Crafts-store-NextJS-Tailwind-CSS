import { ComponentMeta, ComponentStory } from "@storybook/react";

import CraftNamePrice from "../../../components/atoms/craftNamePrice/CraftNamePrice";
import PaginationButton from "../../../components/atoms/paginationButton/PaginationButton";
import React from "react";

export default {
  title: "Atoms/Pagination Button",
  component: PaginationButton,
} as ComponentMeta<typeof PaginationButton>;

const Template: ComponentStory<typeof PaginationButton> = (args) => (
    <PaginationButton {...args} />
);
export const Component = Template.bind({});

Component.args = {
  type: "prev",
};
