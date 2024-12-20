// --------------------------------------------
//
// Icon.stories.tsx
// -> Storybook
//
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: { control: "color" },
  },
} as Meta;

const Template: StoryFn<IconProps> = args => (
  <div style={{ color: "black" }}>
    <Icon {...args} />
  </div>
);

export const Arrow = Template.bind({});
Arrow.args = {
  name: "arrow",
};

export const Close = Template.bind({});
Close.args = {
  name: "close",
};

export const LinkedInLogo = Template.bind({});
LinkedInLogo.args = {
  name: "linkedin-logo",
};

export const XLogo = Template.bind({});
XLogo.args = {
  name: "x-logo",
};

export const BlueskyLogo = Template.bind({});
BlueskyLogo.args = {
  name: "bluesky-logo",
};

export const Menu = Template.bind({});
Menu.args = {
  name: "menu",
};
