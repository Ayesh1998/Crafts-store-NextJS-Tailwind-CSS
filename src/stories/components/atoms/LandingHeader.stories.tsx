import { ComponentMeta, ComponentStory } from "@storybook/react";

import LandingHeader from "../../../components/atoms/landingHeader/LandingHeader";
import React from "react";

export default {
  title: "Atoms/Landing Header",
  component: LandingHeader,
} as ComponentMeta<typeof LandingHeader>;

const Template: ComponentStory<typeof LandingHeader> = (args) => (
  <LandingHeader />
);
export const Component = Template.bind({});
