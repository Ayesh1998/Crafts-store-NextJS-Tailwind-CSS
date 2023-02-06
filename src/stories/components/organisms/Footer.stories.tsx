import { ComponentMeta, ComponentStory } from "@storybook/react";

import Footer from "../../../components/organisms/footer/Footer";
import React from "react";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Component = Template.bind({});
