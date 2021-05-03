import React from "react";

import { Button } from "./Button";
import {
  ArgTypesButton,
  ArgsButtonPrimary,
  ArgsButtonSecondary,
  ArgsButtonLarge,
  ArgsButtonSmall,
} from "./Button.story.config";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "React/Atoms/Button",
  component: Button,
  argTypes: ArgTypesButton,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = ArgsButtonPrimary;

export const Secondary = Template.bind({});
Secondary.args = ArgsButtonSecondary;

export const Large = Template.bind({});
Large.args = ArgsButtonLarge;

export const Small = Template.bind({});
Small.args = ArgsButtonSmall;
