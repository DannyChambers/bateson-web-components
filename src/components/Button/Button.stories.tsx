// --------------------------------------------
//
// Button
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps, ButtonGroup } from "../Button";
import { Card } from "../Card";

// ----- Setup ----- //

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    appearance: { control: "select", options: ["body-1", "body-2", "body-3"] },
    type: { control: "select", options: ["button", "submit", "reset"] },
    tier: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
  args: {
    children: "Button Text",
    disabled: false,
    appearance: "body-2",
    type: "button",
    tier: "primary",
  },
};

export default meta;

// ----- Individual Stories ----- //

// Template for individual stories
const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

// Primary button story
export const Primary: StoryFn<ButtonProps> = Template.bind({});
Primary.args = {
  tier: "primary",
};

// Secondary button story
export const Secondary: StoryFn<ButtonProps> = Template.bind({});
Secondary.args = {
  tier: "secondary",
};

// Tertiary button story
export const Tertiary: StoryFn<ButtonProps> = Template.bind({});
Tertiary.args = {
  tier: "tertiary",
};

export const GroupedButton: StoryFn<{
  alignment: "left" | "center" | "right";
}> = args => (
  <ButtonGroup alignment={args.alignment}>
    <Button onClick={() => console.log("Button 1 clicked")}>
      Primary Button
    </Button>
    <Button tier="secondary" onClick={() => console.log("Button 2 clicked")}>
      Secondary Button
    </Button>
    <Button tier="tertiary" onClick={() => console.log("Button 3 clicked")}>
      Tertiary Button
    </Button>
  </ButtonGroup>
);

GroupedButton.storyName = "Button Group";

// Stretch button story
export const Stretch: StoryFn = () => (
  <Card>
    <Card.Body>
      <Button
        tier="tertiary"
        stretch
        onClick={() => console.log("Button 1 clicked")}
      >
        Primary Button
      </Button>
    </Card.Body>
  </Card>
);
