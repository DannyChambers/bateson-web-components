// --------------------------------------------
//
// Checkbox.test.tsx
// -> Unit Test
//
// --------------------------------------------

import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox Component", () => {
  test("renders correctly with label", () => {
    render(<Checkbox label="Test Label" checked={false} onChange={() => {}} />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("fires onChange event when clicked", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox label="Test Label" checked={false} onChange={handleChange} />,
    );

    const checkboxElement = screen.getByLabelText(
      "Test Label",
    ) as HTMLInputElement;
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("displays as checked when passed checked prop", () => {
    render(<Checkbox label="Test Label" checked={true} onChange={() => {}} />);

    const checkboxElement = screen.getByLabelText(
      "Test Label",
    ) as HTMLInputElement;
    expect(checkboxElement.checked).toBe(true);
  });

  test("disables the checkbox when disabled prop is true", () => {
    render(
      <Checkbox
        label="Test Label"
        checked={false}
        disabled
        onChange={() => {}}
      />,
    );

    const checkboxElement = screen.getByLabelText(
      "Test Label",
    ) as HTMLInputElement;
    expect(checkboxElement).toBeDisabled();
  });
});
