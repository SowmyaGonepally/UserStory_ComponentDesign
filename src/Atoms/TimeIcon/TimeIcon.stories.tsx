import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimeIcon from "./TimeIcon"
import React from 'react';

export default{
   title:'Atoms/TimeIcon',
   component:TimeIcon
} as ComponentMeta<typeof TimeIcon>;

const Template : ComponentStory<typeof TimeIcon> = (args) => <TimeIcon {...args} />

export const BasicTimeIcon = Template.bind({});

