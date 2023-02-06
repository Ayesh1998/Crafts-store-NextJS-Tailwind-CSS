import { ComponentMeta, ComponentStory } from "@storybook/react";

import CraftsListHeader from "../../../components/atoms/craftsListHeader/CraftsListHeader";
import React from "react";

export default {
  title: "Atoms/Crafts List Header",
  component: CraftsListHeader,
} as ComponentMeta<typeof CraftsListHeader>;

const Template: ComponentStory<typeof CraftsListHeader> = (args) => (
  <div className="flex w-full bg-black !text-black">
    <CraftsListHeader />
  </div>
);
export const Component = Template.bind({});

