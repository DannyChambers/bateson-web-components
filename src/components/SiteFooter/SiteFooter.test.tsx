// --------------------------------------------
//
// SiteFooter
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import SiteFooter from "./SiteFooter";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("SiteFooter", () => {
  it("renders the SiteFooter component", () => {
    render(<SiteFooter>SiteFooter</SiteFooter>);
    screen.debug();
  });
});
