import React from 'react';
import { action } from '@storybook/addon-actions';
import { Navbar } from '../components/molecules/navbar';
import { Tab } from '../components/atoms/tab';
import { withKnobs, text } from "@storybook/addon-knobs";

import { Meta, Story, Preview } from '@storybook/addon-docs/blocks';



export default {
    title: 'NavBar',
    component: Navbar,
    decorators: [withKnobs],
    subcomponents: { Tab },
    parameters: {
      componentSubtitle: 'Dynamic Nav',
    }
};

export const NavBar = () => <Navbar navbarContents={[
  text("First", "Active"),
  text("Second", "Inactive"),
  text("Third", "Inactive"),
  text("Fourth", "Inactive"),
  text("Fifth", "Inactive"),

]}/>;

export const ActiveTab = () => <Tab content={text("Text", "Active")} navActive={1} index={1}/>;

export const InactiveTab = () => <Tab content={text("Text", "Inactive")} navActive={1} index={2}/>;

