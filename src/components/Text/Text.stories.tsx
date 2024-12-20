// --------------------------------------------
//
// Text
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Text, { TextProps } from "./Text";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<TextProps> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      description: "The semantic (HTML) tag",
    },
    appearance: {
      control: { type: "select" },
      options: [
        "heading-1",
        "heading-2",
        "heading-3",
        "heading-4",
        "heading-5",
        "heading-6",
        "heading-7",
        "body-1",
        "body-2",
        "body-3",
      ],
      description: "The visual appearance of the text",
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "right", "center"],
      description: "The text alignment",
    },
    layout: { control: { type: "boolean" } },
    color: {
      control: "text",
      description: "The color of the text",
    },
    children: {
      control: "text",
      description: "Child elements/components",
      table: { disable: true },
    },
  },
};

export default meta;

// ----- Template for Pairing Story ----- //

const Template = (args: TextProps) => (
  <>
    <Text {...args} appearance="heading-1" tag="h1">
      This is a heading one
    </Text>
    <Text {...args} appearance="body-1">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-2" tag="h2">
      This is a heading two
    </Text>
    <Text {...args} appearance="body-1">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-3" tag="h3">
      This is a heading three
    </Text>
    <Text {...args} appearance="body-1">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-4" tag="h4">
      This is a heading four
    </Text>
    <Text {...args} appearance="body-2">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-5" tag="h5">
      This is a heading five
    </Text>
    <Text {...args} appearance="body-2">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-6" tag="h6">
      This is a heading six
    </Text>
    <Text {...args} appearance="body-3">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>

    <Text {...args} appearance="heading-7" tag="h6">
      This is a heading six
    </Text>
    <Text {...args} appearance="body-3">
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog The quick brown
      fox jumps over the lazy dog The quick brown fox jumps over the lazy dog
      The quick brown fox jumps over the lazy dog The quick brown fox jumps over
      the lazy dog The quick brown fox jumps over the lazy dog.,
    </Text>
  </>
);

const Template2 = (args: TextProps) => (
  <Text tag="h2">
    <Text tag="span" appearance="heading-6" font="heading">
      What is a
    </Text>
    <Text tag="span" appearance="heading-2">
      Design Technologist?
    </Text>
  </Text>
);

// ----- Individual Stories ----- //

type Story = StoryObj<TextProps>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    appearance: "heading-1",
    alignment: "left",
    layout: true,
  },
};

// ----- Pairing Story ----- //

export const Pairing: Story = {
  render: Template,
  args: {
    alignment: "left",
    layout: true,
  },
};

// ----- Lockup ----- //

export const Lockup: Story = {
  render: Template2,
  args: {
    alignment: "left",
    layout: true,
  },
};
