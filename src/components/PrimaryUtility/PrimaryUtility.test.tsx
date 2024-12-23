// --------------------------------------------
//
// PrimaryUtility
// -> Unit Test
//
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import PrimaryUtility from "./PrimaryUtility";

describe("PrimaryUtility", () => {
  it("renders children correctly", () => {
    render(<PrimaryUtility>Test Content</PrimaryUtility>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies alignment classes correctly", () => {
    const { container } = render(
      <PrimaryUtility align="right">Test Content</PrimaryUtility>,
    );
    expect(container.firstChild).toHaveClass("primary-utility--align-right");
  });
});
