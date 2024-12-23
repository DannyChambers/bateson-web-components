// --------------------------------------------
//
// PrimaryUtility
// -> Story
//
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import PrimaryUtility, { PrimaryUtilityProps } from "./PrimaryUtility";

export default {
  title: "Components/PrimaryUtility",
  component: PrimaryUtility,
  argTypes: {
    align: {
      control: { type: "radio" },
      options: ["left", "right", "center"],
    },
  },
} as Meta;

const Template: StoryFn<PrimaryUtilityProps> = args => (
  <PrimaryUtility {...args}>Example Utility Content</PrimaryUtility>
);

export const Default = Template.bind({});
Default.args = {
  align: "left",
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  align: "center",
};
