// --------------------------------------------
//
// Stage
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import Stage, { StageProps } from "./Stage";
import { Meta, StoryFn } from "@storybook/react";
import { PageSection } from "../PageSection";
import { Layout } from "../Layout";
import { Text } from "../Text";
import { color } from "@/foundation/color/color";

// --------------------------------------------
// Stories
// --------------------------------------------

export default {
  title: "Components/Stage",
  component: Stage,
  parameters: { layout: "fullscreen" },
  argTypes: {
    children: {
      control: "text",
      description: "The content inside the Stage",
    },
  },
} as Meta<StageProps>;

// --------------------------------------------
// Templates
// --------------------------------------------

const Template: StoryFn<StageProps> = (args: StageProps) => (
  <Stage {...args}>
    <Text>{args.children}</Text>
  </Stage>
);

const Template1: StoryFn<StageProps> = (args: StageProps) => (
  <PageSection backgroundColor={color.almond.value} screen="full">
    <Layout container verticalAlign="middle">
      <Stage {...args}>
        <Text>{args.children}</Text>
      </Stage>
    </Layout>
  </PageSection>
);

// ----- Individual Stories ----- //

export const Default: StoryFn<StageProps> = Template.bind({});
Default.args = {
  children: "This is a Stage.",
};

export const InAFullscreenPageSection: StoryFn<StageProps> = Template1.bind({});
InAFullscreenPageSection.args = {
  children: "This is a Stage in a fullscreen PageSection.",
};
