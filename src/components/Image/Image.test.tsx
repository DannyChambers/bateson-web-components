// --------------------------------------------
//
// Image
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Image from "./Image";
import styles from "./Image.module.css";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Image", () => {
  test("renders with required props", () => {
    const { container } = render(<Image alt="testing image" src="test.jpg" />);
    const img = container.firstChild as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "test.jpg");
    expect(img).toHaveClass(styles.image);
  });

  test("applies alt text", () => {
    const { container } = render(<Image alt="testing image" src="test.jpg" />);
    const img = container.firstChild as HTMLImageElement;
    expect(img).toHaveAttribute("alt", "testing image");
  });

  test("applies fluid class when fluid prop is true", () => {
    const { container } = render(
      <Image alt="testing image" src="test.jpg" fluid />,
    );
    const img = container.firstChild as HTMLImageElement;
    expect(img).toHaveClass(styles["image--fluid"]);
  });

  test("applies width and height attributes", () => {
    const { container } = render(
      <Image alt="testing image" src="test.jpg" width={100} height={200} />,
    );
    const img = container.firstChild as HTMLImageElement;
    expect(img).toHaveAttribute("width", "100");
    expect(img).toHaveAttribute("height", "200");
  });
});
