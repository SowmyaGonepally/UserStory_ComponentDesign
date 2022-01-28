import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BeyondEntrepreneurship from "./Bookdetail";
import React from 'react';
import BookDetail from "./Bookdetail";

export default{
    title:'Organisms/BeyondEntrepreneurship',
    component:BeyondEntrepreneurship
} as ComponentMeta<typeof BookDetail>;


const Template:ComponentStory<typeof BookDetail> = (args) => <BrowserRouter> <BookDetail {...args} /> </BrowserRouter> ;

export const aboutBeyond= Template.bind({});