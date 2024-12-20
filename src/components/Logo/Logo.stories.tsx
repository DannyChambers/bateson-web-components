// --------------------------------------------
//
// Logo
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Logo, { LogoProps } from "./Logo";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<LogoProps> = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    // Define your arg types here
    children: {
      control: "text",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<LogoProps>;

export const Default: Story = {
  args: {
    // Define your args here
    children: "Logo component",
  },
};
