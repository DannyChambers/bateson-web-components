// --------------------------------------------
//
// Flyout
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Flyout, { FlyoutProps } from "./Flyout";
import { Text } from "@/components/Text";
import { SchemeProvider } from "@/components/SchemeProvider";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<FlyoutProps> = {
  title: "Components/Flyout",
  component: Flyout,
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["left", "right", "bottom"],
      description: "Position of the flyout when hidden.",
    },
    loadOpen: {
      control: { type: "boolean" },
      description: "If true, the flyout will be open on initial load.",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<FlyoutProps>;

export const LeftFlyout: Story = {
  args: {
    position: "left",
    loadOpen: false,
    backgroundColor: "white",
  },
  render: args => (
    <Flyout {...args}>
      <Text>This is the content of the flyout.</Text>
    </Flyout>
  ),
};

export const RightFlyout: Story = {
  args: {
    position: "right",
    loadOpen: false,
    backgroundColor: "white",
  },
  render: args => (
    <Flyout {...args}>
      <Text>This is the content of the flyout.</Text>
    </Flyout>
  ),
};

export const OpenOnLoadFlyout: Story = {
  args: {
    position: "right",
    loadOpen: true,
    backgroundColor: "white",
  },
  render: args => (
    <Flyout {...args}>
      <Text>This flyout is open on load.</Text>
    </Flyout>
  ),
};
