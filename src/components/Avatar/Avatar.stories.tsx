// --------------------------------------------
//
// Avatar
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Avatar, { AvatarProps } from "./Avatar";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: "text",
      description: "The source of the avatar image",
    },
    username: {
      control: "text",
      description: "The username to display below the avatar",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the avatar",
    },
    onImageUpload: {
      action: "image uploaded",
      description: "Function to handle image upload",
      table: { disable: true }, // Hide in controls
    },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<AvatarProps>;

// Utility function to simulate file upload
const simulateImageUpload = (file: File) => {
  console.log("Image uploaded:", file);
};

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/100",
    username: "John Doe",
    size: "md", // Default size
    onImageUpload: simulateImageUpload,
  },
};

export const WithoutImage: Story = {
  args: {
    username: "John Doe",
    size: "md", // Default size
    onImageUpload: simulateImageUpload,
  },
};

export const WithoutOnImageUpload: Story = {
  args: {
    src: "https://via.placeholder.com/100",
    username: "Jane Doe",
    size: "md",
    onImageUpload: undefined, // No onImageUpload function provided
  },
};
