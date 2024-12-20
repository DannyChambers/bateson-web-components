// --------------------------------------------
//
// List Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import List, { ListProps } from "./List";

// --------------------------------------------
// Story Configuration
// --------------------------------------------

const meta: Meta<ListProps> = {
  title: "Components/List",
  component: List,
  argTypes: {
    marker: {
      control: { type: "boolean" },
      description: "Should the list have a marker",
    },
    appearance: {
      control: { type: "select" },
      options: ["body-1", "body-2", "body-3"],
      description: "The appearance or typography style of the list",
    },
    inline: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "The alignment of the inline list",
    },
    tag: {
      control: { type: "select" },
      options: ["ul", "ol"],
      description: "The HTML tag to use (unordered list or ordered list)",
    },
    children: {
      control: "text",
      description: "The list items as child elements",
    },
  },
};

export default meta;

// --------------------------------------------
// Stories
// --------------------------------------------

export const Unordered: StoryObj<ListProps> = {
  args: {
    tag: "ul",
    children: (
      <>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </>
    ),
  },
};

export const Ordered: StoryObj<ListProps> = {
  args: {
    tag: "ol",
    children: (
      <>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </>
    ),
  },
};

export const NoMarker: StoryObj<ListProps> = {
  args: {
    tag: "ol",
    marker: false,
    children: (
      <>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </>
    ),
  },
};

export const Inline: StoryObj<ListProps> = {
  args: {
    tag: "ul",
    marker: false,
    inline: "left",
    children: (
      <>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </>
    ),
  },
};
