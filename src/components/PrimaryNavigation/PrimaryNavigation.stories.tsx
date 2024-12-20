// --------------------------------------------
//
// PrimaryNavigation
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import PrimaryNavigation, {
  PrimaryNavigationItem,
  PrimarySubNavigation,
  PrimarySubNavigationItem,
} from "./PrimaryNavigation";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta = {
  title: "Components/PrimaryNavigation",
  component: PrimaryNavigation,
  argTypes: {
    children: {
      control: "text",
      description: "The navigation items to render.",
      table: { disable: true },
    },
  },
};

export default meta;

// ----- Template for Primary Navigation Story ----- //

const Template = () => (
  <PrimaryNavigation>
    <PrimaryNavigationItem>
      <a href="#">Home</a>
    </PrimaryNavigationItem>
    <PrimaryNavigationItem>
      <span>About</span>
      <PrimarySubNavigation>
        <PrimarySubNavigationItem>
          <a href="#">Team</a>
        </PrimarySubNavigationItem>
        <PrimarySubNavigationItem>
          <a href="#">Mission</a>
        </PrimarySubNavigationItem>
      </PrimarySubNavigation>
    </PrimaryNavigationItem>
    <PrimaryNavigationItem>
      <a href="#">Contact</a>
    </PrimaryNavigationItem>
  </PrimaryNavigation>
);

// ----- Individual Stories ----- //

type Story = StoryObj;

export const Default: Story = {
  render: Template,
};
