import React from 'react';

import { Heading } from './Heading';
import {
  ArgTypesHeading,
  ArgsHeadingMedium,
  ArgsHeadingLarge,
  ArgsHeadingSmall,
} from './Heading.story.config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'React/Atoms/Heading',
  component: Heading,
  argTypes: ArgTypesHeading,
};

const Template = (args) => <Heading {...args} />;

export const Large = Template.bind({});
Large.args = ArgsHeadingLarge;

export const Medium = Template.bind({});
Medium.args = ArgsHeadingMedium;

export const Small = Template.bind({});
Small.args = ArgsHeadingSmall;
