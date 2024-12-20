// --------------------------------------------
// TextInput Stories
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TextInput, { TextInputProps } from "./TextInput";

// --------------------------------------------
// Stories
// --------------------------------------------

const meta: Meta<TextInputProps> = {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    value: {
      control: { type: "text" },
      description: "The value of the text input field",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    type: {
      control: { type: "select" },
      options: ["text", "password", "email"],
      description: "Type of input field",
    },
    appearance: {
      control: { type: "select" },
      options: ["body-1", "body-2", "body-3"], // Add appearance options
      description: "Set the appearance of the text input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disable the input field",
    },
    message: {
      control: { type: "text" },
      description: "Message to display below the input",
    },
    invalid: {
      control: { type: "boolean" },
      description: "Marks the input as invalid (for styling)",
    },
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

// --------------------------------------------
// Helper function to handle state for controlled input
// --------------------------------------------

const ControlledInput = (args: TextInputProps) => {
  const [inputValue, setInputValue] = useState(args.value);

  return (
    <TextInput
      {...args}
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} // Update input value
    />
  );
};

// --------------------------------------------
// Individual Stories
// --------------------------------------------

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Enter text...",
    appearance: "body-2",
  },
  render: args => <ControlledInput {...args} />,
};

export const WithInvalidState: Story = {
  args: {
    value: "Invalid input",
    message: "Please enter a valid value",
    appearance: "body-2",
    invalid: true, // Mark the input as invalid
  },
  render: args => <ControlledInput {...args} />,
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    value: "",
    placeholder: "Enter password...",
    appearance: "body-2",
    message: "Make sure your password is secure.",
  },
  render: args => <ControlledInput {...args} />,
};

export const Disabled: Story = {
  args: {
    value: "Disabled input",
    disabled: true,
    appearance: "body-2",
    message: "This input is disabled.",
  },
  render: args => <ControlledInput {...args} />,
};
