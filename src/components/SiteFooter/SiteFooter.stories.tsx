// --------------------------------------------
//
// SiteFooter
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import SiteFooter, { SiteFooterProps } from "./SiteFooter";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<SiteFooterProps> = {
  title: "Components/SiteFooter",
  component: SiteFooter,
  argTypes: {
    // Define your arg types here
    children: {
      control: "text",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<SiteFooterProps>;

export const Default: Story = {
  args: {
    // Define your args here
    children: "SiteFooter component",
  },
};
