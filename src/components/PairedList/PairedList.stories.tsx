// --------------------------------------------
//
// PairedList
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import PairedList, { PairedListProps } from "./PairedList";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<PairedListProps> = {
  title: "Components/PairedList",
  component: PairedList,
  argTypes: {
    // Define your arg types here
    children: {
      control: "text",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<PairedListProps>;

export const Default: Story = {
  args: {
    // Define your args here
    children: "PairedList component",
  },
};
