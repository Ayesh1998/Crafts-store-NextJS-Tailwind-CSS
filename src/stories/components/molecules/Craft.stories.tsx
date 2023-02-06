import { ComponentMeta, ComponentStory } from '@storybook/react';

import Craft from '../../../components/molecules/craft/Craft';
import React from 'react';

export default {
  title: 'Molecules/Craft',
  component: Craft,
} as ComponentMeta<typeof Craft>;

const Template: ComponentStory<typeof Craft> = (args) => <Craft {...args} />;

export const Component = Template.bind({});

Component.args = {
    craft: {
        description:"Description",
        material: "Material",
        name: "craft",
        price:12,
    },
  
};