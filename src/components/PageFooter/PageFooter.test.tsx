// --------------------------------------------
//
// PageFooter
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import PageFooter from "./PageFooter";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PageFooter", () => {
  it("renders the PageFooter component", () => {
    render(<PageFooter>PageFooter</PageFooter>);
    screen.debug();
  });
});
