// --------------------------------------------
//
// Link
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Link from "./Link";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Link", () => {
  test("renders with required props", () => {
    render(<Link url="https://example.com">Test Link</Link>);
    const link = screen.getByText("Test Link").closest("a");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("renders external icon with external prop", () => {
    render(
      <Link url="https://example.com" external>
        Test Link
      </Link>,
    );
    const link = screen.getByText("Test Link").closest("a");
    expect(link).toBeInTheDocument();

    const svg = link?.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
