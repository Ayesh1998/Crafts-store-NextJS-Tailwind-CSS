import { ComponentMeta, ComponentStory } from "@storybook/react";

import LandingLearnMore from "../../../components/molecules/landingLearnMore/LandingLearnMore";
import React from "react";

export default {
  title: "Molecules/Landing Learn More",
  component: LandingLearnMore,
} as ComponentMeta<typeof LandingLearnMore>;

const Template: ComponentStory<typeof LandingLearnMore> = (args) => <LandingLearnMore />;

export const Component = Template.bind({});
