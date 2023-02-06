import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../../../components/atoms/button/Button';
import React from 'react';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Component = Template.bind({});

Component.args = {
    title: "Login",
    noIcon: true,
};