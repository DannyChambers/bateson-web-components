// --------------------------------------------
//
// PageSection
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import PageSection from "./PageSection";
import styles from "./PageSection.module.css";

vi.mock("../Layout", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-layout">{children}</div>
  ),
}));

// Gets the outermost element of a container
function getOutermostElement(container: HTMLElement): HTMLElement | null {
  return container.firstElementChild as HTMLElement;
}

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PageSection", () => {
  test("renders with default props", () => {
    const { container } = render(<PageSection tag="div">Content</PageSection>);
    const section = getOutermostElement(container);
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(styles["page-section"]);
  });

  test("renders as a section when tag prop is 'section'", () => {
    const { container } = render(
      <PageSection tag="section" screen="full">
        Content
      </PageSection>,
    );
    const section = getOutermostElement(container);
    expect(section?.tagName.toLowerCase()).toBe("section");
  });
});
