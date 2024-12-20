// --------------------------------------------
//
// List
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import List from "./List";
import styles from "./List.module.css";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("List", () => {
  test("renders an unordered list by default", () => {
    render(
      <List tag="ul" appearance="body-2">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("UL");
  });

  test("renders an ordered list when tag is 'ol'", () => {
    render(
      <List tag="ol" appearance="body-2">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("OL");
  });

  test("applies correct tag class", () => {
    render(
      <List tag="ol" appearance="body-2">
        <li>Item</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list).toHaveClass(styles["list--ol"]);
  });

  test("applies correct appearance class", () => {
    render(
      <List tag="ul" appearance="body-1">
        <li>Item</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list).toHaveClass(styles["list--body-1"]);
  });

  test("renders children correctly", () => {
    render(
      <List tag="ul" appearance="body-2">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>,
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Item 1");
    expect(items[1]).toHaveTextContent("Item 2");
  });

  test("applies all correct classes", () => {
    render(
      <List tag="ol" appearance="body-3">
        <li>Item</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list).toHaveClass(styles.list);
    expect(list).toHaveClass(styles["list--ol"]);
    expect(list).toHaveClass(styles["list--body-3"]);
  });

  test("renders with default props", () => {
    render(
      <List tag="ul" appearance="body-2">
        <li>Item</li>
      </List>,
    );
    const list = screen.getByRole("list");
    expect(list).toHaveClass(styles["list--ul"]);
    expect(list).toHaveClass(styles["list--body-2"]);
  });
});
