// --------------------------------------------
// Modal Stories
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import { useState } from "react";

import { Layout } from "../Layout";
import { Text } from "../Text";
import { Button, ButtonGroup } from "../Button";

// --------------------------------------------
// Meta Configuration
// --------------------------------------------

const meta: Meta<ModalProps> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Controls whether the modal is open",
    },
    isDialog: {
      control: { type: "boolean" },
      description:
        "Determines if the modal is in dialog mode (hides close button)",
    },
    onClose: {
      action: "closed",
      description: "Function to close the modal",
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

// --------------------------------------------
// Individual Size Stories
// --------------------------------------------

const Template: React.FC<ModalProps> = args => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  // Synchronize with Storybook control changes
  const handleClose = () => {
    setIsOpen(false);
    args.onClose?.();
  };

  return <Modal {...args} isOpen={isOpen} onClose={handleClose} />;
};

export const ExtraSmall: Story = {
  args: {
    isOpen: true,
    size: "xs",
    children: (
      <div>
        <Layout bottomGutter="xl">
          <Text tag="h2" appearance="heading-4">
            Extra Small Modal
          </Text>
          <Text>
            This is an extra small modal, suitable for displaying minimal
            content.
          </Text>
        </Layout>
        <ButtonGroup alignment="center">
          <Button>Agree</Button>
          <Button tier="secondary">Alternative</Button>
        </ButtonGroup>
      </div>
    ),
  },
  render: args => <Template {...args} />,
};

export const Small: Story = {
  args: {
    isOpen: true,
    size: "sm",
    children: (
      <div>
        <Layout bottomGutter="xl">
          <Text tag="h2" appearance="heading-4">
            Small Modal
          </Text>
          <Text>
            This is a small modal, suitable for brief messages or confirmations.
          </Text>
        </Layout>
        <ButtonGroup alignment="center">
          <Button>Agree</Button>
          <Button tier="secondary">Alternative</Button>
        </ButtonGroup>
      </div>
    ),
  },
  render: args => <Template {...args} />,
};

export const Medium: Story = {
  args: {
    isOpen: true,
    size: "md",
    children: (
      <div>
        <Layout bottomGutter="xl">
          <Text tag="h2" appearance="heading-4">
            Medium Modal
          </Text>
          <Text>
            This is a medium modal, offering a bit more space for content.
          </Text>
        </Layout>
        <ButtonGroup alignment="center">
          <Button>Agree</Button>
          <Button tier="secondary">Alternative</Button>
        </ButtonGroup>
      </div>
    ),
  },
  render: args => <Template {...args} />,
};

export const Large: Story = {
  args: {
    isOpen: true,
    size: "lg",
    children: (
      <div>
        <Layout bottomGutter="xl">
          <Text tag="h2" appearance="heading-4">
            Large Modal
          </Text>
          <Text>
            This is a large modal, ideal for showing more detailed information.
          </Text>
        </Layout>
        <ButtonGroup alignment="center">
          <Button>Agree</Button>
          <Button tier="secondary">Alternative</Button>
        </ButtonGroup>
      </div>
    ),
  },
  render: args => <Template {...args} />,
};

export const ExtraLarge: Story = {
  args: {
    isOpen: true,
    size: "xl",
    children: (
      <div>
        <Layout bottomGutter="xl">
          <Text tag="h2" appearance="heading-4">
            Extra Large Modal
          </Text>
          <Text>
            This is an extra-large modal, suitable for displaying a significant
            amount of content.
          </Text>
        </Layout>
        <ButtonGroup alignment="center">
          <Button>Agree</Button>
          <Button tier="secondary">Alternative</Button>
        </ButtonGroup>
      </div>
    ),
  },
  render: args => <Template {...args} />,
};
