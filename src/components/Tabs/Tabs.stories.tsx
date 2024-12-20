// --------------------------------------------
//
// Tabs
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";
import { Layout } from "@/components/Layout";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    children: {
      control: "object",
      description: "The tab components with their content",
    },
  },
};

export default meta;

// ----- Template for Tabs Story ----- //

const Template = (args: any) => (
  <Tabs {...args}>
    <Tabs.Panel label="Home">
      <div>
        <h1>Home Page</h1>
        <p>This is the content for the home page.</p>
      </div>
    </Tabs.Panel>
    <Tabs.Panel label="About">
      <div>
        <h1>About Us</h1>
        <p>This is the content for the about page.</p>
      </div>
    </Tabs.Panel>
    <Tabs.Panel label="Contact">
      <div>
        <h1>Contact Us</h1>
        <p>This is the content for the contact page.</p>
      </div>
    </Tabs.Panel>
  </Tabs>
);

// ----- Individual Stories ----- //

type Story = StoryObj;

export const Default: Story = {
  render: args => (
    <Tabs {...args}>
      <Tabs.Panel label="Overview">
        <Layout topGutter="lg">
          <h2>Overview Section</h2>
          <p>Here is some extensive content for the Overview tab.</p>
        </Layout>
      </Tabs.Panel>
      <Tabs.Panel label="Details">
        <Layout topGutter="lg">
          <h2>Details Section</h2>
          <p>Here is some detailed content for the Details tab.</p>
        </Layout>
      </Tabs.Panel>
      <Tabs.Panel label="Settings">
        <Layout topGutter="lg">
          <h2>Settings Section</h2>
          <p>Here is the content for Settings.</p>
        </Layout>
      </Tabs.Panel>
    </Tabs>
  ),
};
