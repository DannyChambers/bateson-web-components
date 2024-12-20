// --------------------------------------------
//
// Modal
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Modal", () => {
  it("renders the Modal component when open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}} isDialog={true}>
        <div>Modal Content</div>
      </Modal>,
    );

    // Check that the modal content is displayed
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render the Modal component when closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}} isDialog={true}>
        <div>Modal Content</div>
      </Modal>,
    );

    // Check that the modal content is not displayed
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("calls the onClose function when the close button is clicked", () => {
    const handleClose = jest.fn(); // Create a mock function for onClose

    render(
      <Modal isOpen={true} onClose={handleClose} isDialog={true}>
        <div>Modal Content</div>
        <button onClick={handleClose}>Close</button>
      </Modal>,
    );

    // Click the close button
    fireEvent.click(screen.getByText("Close"));

    // Ensure the onClose function was called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
