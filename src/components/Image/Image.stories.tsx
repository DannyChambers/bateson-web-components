// --------------------------------------------
//
// Image
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Image, { ImageProps } from "./Image";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<ImageProps> = {
  title: "Components/Image",
  component: Image,
  parameters: {},
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    fluid: { control: "boolean" },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/800x400",
    alt: "Placeholder image",
    width: "800",
    height: "400",
  },
};

export const Fluid: Story = {
  args: {
    src: "https://picsum.photos/1920/1080",
    alt: "Placeholder image",
    width: "1920",
    height: "1080",
    fluid: true,
  },
};
