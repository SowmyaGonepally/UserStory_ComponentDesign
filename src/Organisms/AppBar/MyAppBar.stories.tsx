import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BrowserRouter } from "react-router-dom";
import MyAppBar from "./MyAppBar"
import React from 'react';

export default{

    title:'Organisms/AppBar',
    component:MyAppBar
} as ComponentMeta<typeof MyAppBar>;

const Template : ComponentStory<typeof MyAppBar> = (args) => <BrowserRouter> <MyAppBar {...args} /> </BrowserRouter>

export const BasicAppBar = Template.bind({});