import { Meta, StoryFn } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

// Meta setup for the Checkbox stories
const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

// Correct typing for the Story template
const Template: StoryFn<CheckboxProps> = (args: CheckboxProps) => (
  <Checkbox {...args} />
);

// Exporting the stories with explicit type annotations
export const Default: StoryFn<CheckboxProps> = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
};

export const Checked: StoryFn<CheckboxProps> = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled: StoryFn<CheckboxProps> = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};
