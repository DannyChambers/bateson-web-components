// --------------------------------------------
//
// ThemeProvider
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ThemeProvider, { useTheme } from "./ThemeProvider";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("ThemeProvider", () => {
  test("updates theme and scheme dynamically", () => {
    const TestComponent = () => {
      const { setTheme } = useTheme();
      return <button onClick={() => setTheme("new-theme")}>Set Theme</button>;
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    screen.getByText("Set Theme").click();
    expect(document.documentElement).toHaveClass("theme--new-theme");

    screen.getByText("Set Scheme").click();
    expect(document.documentElement).toHaveClass("scheme--high-contrast");
  });
});
