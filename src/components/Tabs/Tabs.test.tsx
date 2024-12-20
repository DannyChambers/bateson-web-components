// --------------------------------------------
//
// Tabs
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Tabs", () => {
  it("renders the Tabs component with correct tab labels", () => {
    render(
      <Tabs>
        <Tabs.Panel label="Home">
          <div>Home Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="About">
          <div>About Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="Contact">
          <div>Contact Content</div>
        </Tabs.Panel>
      </Tabs>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("displays the correct content when a tab is clicked", () => {
    render(
      <Tabs>
        <Tabs.Panel label="Home">
          <div>Home Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="About">
          <div>About Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="Contact">
          <div>Contact Content</div>
        </Tabs.Panel>
      </Tabs>,
    );

    fireEvent.click(screen.getByText("About"));
    expect(screen.getByText("About Content")).toBeVisible();

    fireEvent.click(screen.getByText("Contact"));
    expect(screen.getByText("Contact Content")).toBeVisible();
  });

  it("changes the active tab when arrow keys are pressed", () => {
    render(
      <Tabs>
        <Tabs.Panel label="Home">
          <div>Home Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="About">
          <div>About Content</div>
        </Tabs.Panel>
        <Tabs.Panel label="Contact">
          <div>Contact Content</div>
        </Tabs.Panel>
      </Tabs>,
    );

    const homeTab = screen.getByText("Home");
    homeTab.focus();
    fireEvent.keyDown(homeTab, { key: "ArrowRight" });
    expect(screen.getByText("About Content")).toBeVisible();

    fireEvent.keyDown(screen.getByText("About"), { key: "ArrowRight" });
    expect(screen.getByText("Contact Content")).toBeVisible();
  });
  it("renders large amounts of content within a tab", () => {
    render(
      <Tabs>
        <Tabs.Panel label="Home">
          <div>
            <h1>Home Content</h1>
            <p>{"Large content ".repeat(100)}</p>
          </div>
        </Tabs.Panel>
        {/* Add a second Tabs.Panel to ensure multiple children */}
        <Tabs.Panel label="Empty">
          <div>Empty Tab</div>
        </Tabs.Panel>
      </Tabs>,
    );

    expect(screen.getByText("Home Content")).toBeVisible();
  });
});
