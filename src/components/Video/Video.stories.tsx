// --------------------------------------------
//
// Video
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Video, { VideoProps } from "./Video";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta<VideoProps> = {
  title: "Components/Video",
  component: Video,
  parameters: {},
  argTypes: {
    src: { control: "text" },
    controls: { control: "boolean" },
    autoplay: { control: "boolean" },
    loop: { control: "boolean" },
    muted: { control: "boolean" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;

// ----- Individual Stories ----- //

type Story = StoryObj<VideoProps>;

export const Default: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: true,
    autoplay: false,
    loop: false,
    muted: false,
    width: "640",
    height: "360",
  },
};

export const Autoplay: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: true,
    autoplay: true,
    loop: false,
    muted: true,
    width: "640",
    height: "360",
  },
};

export const Looping: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: true,
    autoplay: false,
    loop: true,
    muted: false,
    width: "640",
    height: "360",
  },
};

export const Fullbleed: Story = {
  args: {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    controls: false,
    autoplay: true,
    loop: true,
    muted: false,
    width: "640",
    height: "360",
    fullbleed: true,
  },
};
