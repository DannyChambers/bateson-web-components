// --------------------------------------------
//
// PageHeader
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PageHeader", () => {
  it("renders the PageHeader component", () => {
    render(<PageHeader>PageHeader</PageHeader>);
    screen.debug();
  });
});
