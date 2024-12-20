// --------------------------------------------
//
// TextInput
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import TextInput from "./TextInput";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("TextInput", () => {
  it("renders the TextInput component", () => {
    render(<TextInput value="test" onChange={() => {}} />);

    // Check if the input is in the document
    const inputElement = screen.getByDisplayValue("test");
    expect(inputElement).toBeInTheDocument();

    // Additional assertions can go here
    // Example: Check for placeholder text, etc.
  });
});
