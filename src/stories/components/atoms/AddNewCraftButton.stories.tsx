import { ComponentMeta, ComponentStory } from '@storybook/react';

import AddNewCraftButton from '../../../components/atoms/addNewCraftButton/AddNewCraftButton';
import React from 'react';

export default {
  title: 'Atoms/Add New Craft Button',
  component: AddNewCraftButton,
} as ComponentMeta<typeof AddNewCraftButton>;

const Template: ComponentStory<typeof AddNewCraftButton> = (args) => <AddNewCraftButton/>;

export const Component = Template.bind({});
