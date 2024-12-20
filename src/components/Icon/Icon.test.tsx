// --------------------------------------------
//
// Icon.test.tsx
// -> Unit Test
//
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("Icon Component", () => {
  it("renders the Arrow icon", () => {
    render(<Icon name="arrow" size="md" />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders the Close icon", () => {
    render(<Icon name="close" size="lg" />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders the LinkedIn logo icon", () => {
    render(<Icon name="linkedin-logo" size="sm" />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it("renders the X logo icon", () => {
    render(<Icon name="x-logo" size="md" />);
    const svgElement = screen.getByRole("img", { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });
});
