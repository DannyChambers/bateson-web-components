// --------------------------------------------
//
// Table
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Table from "./Table";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Table", () => {
  it("renders the Table component", () => {
    render(
      <Table
        headers={["Title", "Description"]}
        data={[
          { title: "Test 1", description: "Description 1" },
          { title: "Test 2", description: "Description 2" },
        ]}
      />,
    );
    screen.debug();
  });
});
