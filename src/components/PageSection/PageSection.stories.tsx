// --------------------------------------------
//
// PageSection
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryFn } from "@storybook/react";

import PageSection, { PageSectionProps } from "./PageSection";
import { Text } from "../Text";

import { useTheme } from "@/components/ThemeProvider";
const { color } = useTheme();

// --------------------------------------------
// Stories
// --------------------------------------------

export default {
  title: "Components/PageSection",
  component: PageSection,
  parameters: { layout: "fullscreen" },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      description: "Sets the background color of the section",
    },
    backgroundImage: {
      control: "text",
      description: "Sets a background image URL for the section",
    },
    screen: {
      control: "select",
      options: ["half", "full"],
      description: "Should the pageSection fill the full screen or half",
    },
    tag: {
      control: { type: "select" },
      options: ["div", "section"],
      description: "Sets the HTML tag to be used for the section",
    },
    children: {
      control: "text",
      description: "The content inside the section",
    },
  },
} as Meta<PageSectionProps>;

// --------------------------------------------
// Templates
// --------------------------------------------
const Template: StoryFn<PageSectionProps> = (args: PageSectionProps) => {
  return (
    <PageSection {...args}>
      <Text>{args.children}</Text>
    </PageSection>
  );
};

// ----- Individual Stories ----- //

export const Default: StoryFn<PageSectionProps> = Template.bind({});
Default.args = {
  backgroundColor: color.warmGray.value,
  padding: "md",
  children: "This is a page section.",
};

export const WithBackgroundImage: StoryFn<PageSectionProps> = Template.bind({});
WithBackgroundImage.args = {
  backgroundColor: "transparent",
  backgroundImage: "https://via.placeholder.com/1920x600",
  padding: "md",
  children: "Page section with background image.",
};

export const FullScreen: StoryFn<PageSectionProps> = Template.bind({});
FullScreen.args = {
  backgroundColor: color.warmGray.value,
  screen: "full",
  padding: "md",
  children: "Page section full screen",
};
