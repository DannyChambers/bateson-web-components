// --------------------------------------------
//
// Text
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import styles from "./Text.module.css";
import Text from "./Text";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Text", () => {
  test("renders with default props", () => {
    render(<Text>Default text</Text>);
    const textElement = screen.getByText("Default text");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass(styles.text);
    expect(textElement).toHaveClass(styles["text--left"]);
    expect(textElement).toHaveClass(styles["text--body-2"]);
  });

  test("renders with custom appearance", () => {
    render(<Text appearance="body-1">Custom appearance</Text>);
    const textElement = screen.getByText("Custom appearance");
    expect(textElement).toHaveClass(styles["text--body-1"]);
  });

  test("renders with custom alignment", () => {
    render(<Text alignment="center">Centered text</Text>);
    const textElement = screen.getByText("Centered text");
    expect(textElement).toHaveClass(styles["text--center"]);
  });

  test("applies custom color", () => {
    render(<Text color="red">Colored text</Text>);
    const textElement = screen.getByText("Colored text");
    expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });

  test("applies custom className", () => {
    render(<Text className="custom-class">Custom class</Text>);
    const textElement = screen.getByText("Custom class");
    expect(textElement).toHaveClass("custom-class");
  });

  test("renders without layout", () => {
    render(<Text layout={false}>No layout</Text>);
    const textElement = screen.getByText("No layout");
    expect(textElement).toHaveClass(styles["text--no-layout"]);
  });
});
