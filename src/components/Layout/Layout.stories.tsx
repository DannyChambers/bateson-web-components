// --------------------------------------------
//
// Layout Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Layout, { LayoutProps } from "./Layout";

// --------------------------------------------
// Stories
// --------------------------------------------

const meta: Meta<LayoutProps> = {
  title: "Components/Layout",
  component: Layout,
  argTypes: {
    container: {
      control: { type: "boolean" },
      description: "Whether the Layout should act as a container",
    },
    tag: {
      control: { type: "select" },
      options: ["div", "ul"],
      description: "Specify the tag to use for the layout",
    },
    grid: {
      control: { type: "select" },
      options: [
        "80_20",
        "70_30",
        "66_33",
        "60_40",
        "40_60",
        "50_50",
        "33_33_33",
        "25_25_25_25",
      ],
      description: "Specify the grid",
    },
    gap: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Specify the gap between child Columns",
    },
    horizontalAlign: {
      control: { type: "select" },
      options: ["left", "middle", "right"],
      description: "Specify the horizontal alignment of the content",
    },
    verticalAlign: {
      control: { type: "select" },
      options: ["top", "middle", "bottom"],
      description: "Specify the vertical alignment of the content",
    },
  },
};

export default meta;

type Story = StoryObj<LayoutProps>;

// --------------------------------------------
// Individual Stories with Columns
// --------------------------------------------

export const Container: Story = {
  args: {
    container: true,
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
    </Layout>
  ),
};

export const Grid_50_50: Story = {
  args: {
    grid: "50_50",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
    </Layout>
  ),
};

export const Grid_66_33: Story = {
  args: {
    grid: "66_33",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
    </Layout>
  ),
};

export const Grid_70_30: Story = {
  args: {
    grid: "70_30",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
    </Layout>
  ),
};

export const Grid_80_20: Story = {
  args: {
    grid: "80_20",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
    </Layout>
  ),
};

// Three columns for 33_33_33
export const Grid_33_33_33: Story = {
  args: {
    grid: "33_33_33",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
      <Layout.Column>Column 3</Layout.Column>
    </Layout>
  ),
};

// Four columns for 25_25_25_25
export const Grid_25_25_25_25: Story = {
  args: {
    grid: "25_25_25_25",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
      <Layout.Column>Column 2</Layout.Column>
      <Layout.Column>Column 3</Layout.Column>
      <Layout.Column>Column 4</Layout.Column>
    </Layout>
  ),
};

// --------------------------------------------
// BottomGutter Story
// --------------------------------------------

export const BottomGutter: Story = {
  args: {
    bottomGutter: "md",
    showGrid: true,
  },
  render: args => (
    <div>
      <Layout {...args}>
        <Layout.Column>Column 1</Layout.Column>
      </Layout>
      <Layout {...args}>
        <Layout.Column>Column 1</Layout.Column>
      </Layout>
    </div>
  ),
};

// --------------------------------------------
// Horizontal and vertical alignment Story
// --------------------------------------------

export const HorizontalAndVerticalAlign: Story = {
  args: {
    horizontalAlign: "middle",
    verticalAlign: "middle",
    showGrid: true,
  },
  render: args => (
    <Layout {...args}>
      <Layout.Column>Column 1</Layout.Column>
    </Layout>
  ),
};
