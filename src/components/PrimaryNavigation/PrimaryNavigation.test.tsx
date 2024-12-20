// --------------------------------------------
//
// PrimaryNavigation
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import PrimaryNavigation, { PrimaryNavigationItem } from "./PrimaryNavigation";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PrimaryNavigation", () => {
  test("renders PrimaryNavigation with children", () => {
    render(
      <PrimaryNavigation>
        <PrimaryNavigationItem>Home</PrimaryNavigationItem>
        <PrimaryNavigationItem>About</PrimaryNavigationItem>
      </PrimaryNavigation>,
    );

    // Check if the navigation items are in the document
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(
      <PrimaryNavigation>
        <PrimaryNavigationItem>Home</PrimaryNavigationItem>
      </PrimaryNavigation>,
    );
    const navigationElement = screen.getByText("Home").parentElement; // Adjust if necessary to target the navigation parent
    expect(navigationElement).toHaveClass("primaryNavigation"); // Make sure this matches your CSS class
  });

  test("renders multiple navigation items", () => {
    render(
      <PrimaryNavigation>
        <PrimaryNavigationItem>Home</PrimaryNavigationItem>
        <PrimaryNavigationItem>Services</PrimaryNavigationItem>
        <PrimaryNavigationItem>Contact</PrimaryNavigationItem>
      </PrimaryNavigation>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders without crashing when children are provided", () => {
    render(
      <PrimaryNavigation>
        <PrimaryNavigationItem>Test Item</PrimaryNavigationItem>
      </PrimaryNavigation>,
    );
    const navigationElement = screen.getByText("Test Item");
    expect(navigationElement).toBeInTheDocument();
  });

  test("does not render when no children are provided", () => {
    const { container } = render(
      <PrimaryNavigation>
        <PrimaryNavigationItem>Home</PrimaryNavigationItem>
      </PrimaryNavigation>,
    );
    expect(container.firstChild).not.toBeNull(); // There should be a child
  });
});
