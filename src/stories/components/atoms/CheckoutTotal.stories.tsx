import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../../../components/atoms/button/Button';
import CheckoutTotal from '../../../components/atoms/checkoutTotal/CheckoutTotal';
import React from 'react';

export default {
  title: 'Atoms/Checkout Total',
  component: CheckoutTotal,
} as ComponentMeta<typeof CheckoutTotal>;

const Template: ComponentStory<typeof CheckoutTotal> = (args) => <CheckoutTotal {...args} />;

export const Component = Template.bind({});

Component.args = {
    basketTotal: 100,
};