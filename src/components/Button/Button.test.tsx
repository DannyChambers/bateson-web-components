// --------------------------------------------
//
// Button
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { vi, test, expect, describe } from "vitest";
import { Button, ButtonProps } from "./Button";
import styles from "./Button.module.css";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Button", () => {
  const defaultProps: ButtonProps = { children: "Click me", onClick: () => {} };

  test("renders button with default props", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(styles.button);
    expect(button).toHaveClass(styles["button--primary"]);
    expect(button).toHaveClass(styles["button--md"]);
    expect(button).toHaveAttribute("type", "button");
  });

  test.each(["button", "submit", "reset"] as const)(
    "renders button with type %s",
    type => {
      render(<Button {...defaultProps} type={type} />);
      expect(screen.getByRole("button")).toHaveAttribute("type", type);
    },
  );

  test.each(["primary", "secondary"] as const)(
    "renders button with appearance %s",
    appearance => {
      render(<Button {...defaultProps} tier={appearance} />);
      expect(screen.getByRole("button")).toHaveClass(
        styles[`button--${appearance}`],
      );
    },
  );

  test.each(["body-1", "body-2", "body-3"] as const)(
    "renders button with size %s",
    size => {
      render(<Button {...defaultProps} appearance={size} />);
      expect(screen.getByRole("button")).toHaveClass(styles[`button--${size}`]);
    },
  );

  test("renders disabled button", () => {
    render(<Button {...defaultProps} disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders children correctly", () => {
    render(<Button {...defaultProps}>Custom Text</Button>);
    expect(screen.getByText("Custom Text")).toBeInTheDocument();
  });

  test("calls onClick when button is clicked", () => {
    const onClickSpy = vi.fn();
    render(
      <Button {...defaultProps} onClick={onClickSpy}>
        Button
      </Button>,
    );
    const button = screen.getByRole("button");
    button.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
});
