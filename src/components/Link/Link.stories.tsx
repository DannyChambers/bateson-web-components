// --------------------------------------------
//
// Link
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Link, { LinkProps } from "./Link";
import { Text } from "../Text";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<LinkProps> = {
  title: "Components/Link",
  component: Link,
  argTypes: {
    appearance: {
      control: { type: "select" },
      options: ["body-1", "body-2", "body-3"],
    },
    url: {
      control: "text",
      description: "The URL the link points to",
    },
    external: {
      control: { type: "boolean" },
      description: "Whether or not the link is external",
    },
    children: {
      control: "text",
      description: "The link text or children",
    },
  },
};

export default meta;

// ----- Template ----- //

const Template = (args: LinkProps) => (
  <Text appearance={args.appearance}>
    The quick brown fox
    <Link {...args}>{args.children}</Link>
    over the lazy dog
  </Text>
);

// ----- Individual Stories ----- //

type Story = StoryObj<LinkProps>;

export const Inline: Story = {
  render: Template,
  args: {
    appearance: "body-2",
    url: "https://www.yahoo.co.uk",
    children: "jumps",
  },
};

export const Standalone: Story = {
  args: {
    appearance: "body-2",
    url: "https://www.yahoo.co.uk",
    children: "Visit Yahoo website",
  },
};
