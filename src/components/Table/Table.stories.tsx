// --------------------------------------------
// Table -> Stories
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import { Table, TableProps } from "@/components/Table";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<TableProps> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    headers: {
      control: { type: "object" },
      description: "The headers for the table columns.",
    },
    data: {
      control: { type: "object" },
      description: "An array of objects representing the table data.",
    },
    hideHeaders: {
      control: { type: "boolean" },
      description: "Whether to visually hide the table headers.",
      defaultValue: false,
    },
    appearance: {
      control: { type: "select" },
      options: ["body-1", "body-2", "body-3"],
      description: "Sets the typography appearance of the table.",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<TableProps>;

// Default Story with static data for preview
export const Default: Story = {
  args: {
    headers: ["Title", "Description"],
    data: [
      { Title: "Row 1", Description: "This is row 1" },
      { Title: "Row 2", Description: "This is row 2" },
    ],
    hideHeaders: false,
    appearance: "body-2",
  },
};
