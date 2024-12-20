// --------------------------------------------
//
// PageHeader
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import PageHeader, { PageHeaderProps } from "./PageHeader";
import { Text } from "@/components/Text"; // Assuming you want to use Text component for children

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<PageHeaderProps> = {
  title: "Components/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      control: "text",
      description: "The content inside the PageHeader component",
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<PageHeaderProps>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text tag="h1" appearance="heading-1">
          Page Title
        </Text>
        <Text appearance="body-1">
          This is a description or subtitle for the page header. You can pass
          any content you like as children.
        </Text>
      </>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <>
        <Text tag="h1" appearance="heading-2">
          Custom Header
        </Text>
        <Text appearance="body-1">
          This example demonstrates the flexibility of the PageHeader component
          by allowing any React nodes as children.
        </Text>
        <Text appearance="body-2">
          Here's some additional information or content.
        </Text>
      </>
    ),
  },
};
