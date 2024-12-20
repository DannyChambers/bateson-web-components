// --------------------------------------------
//
// Flyout
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Flyout from "./Flyout";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Flyout", () => {
  it("renders the Flyout component", () => {
    render(
      <Flyout position="left">
        <p>This is the content of the flyout.</p>
      </Flyout>,
    );
    screen.debug();
  });

  it("toggles the flyout on button click", () => {
    render(
      <Flyout position="left">
        <p>This is the content of the flyout.</p>
      </Flyout>,
    );

    // Assert the flyout is initially closed (you may need to adjust this based on your implementation)
    expect(
      screen.queryByText("This is the content of the flyout."),
    ).not.toBeInTheDocument();

    // Click the button to open the flyout
    screen.getByText("Open Flyout").click();

    // Assert the flyout content is now visible
    expect(
      screen.getByText("This is the content of the flyout."),
    ).toBeInTheDocument();
  });
});
