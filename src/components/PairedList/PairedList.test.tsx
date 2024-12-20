// --------------------------------------------
//
// PairedList
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import PairedList from "./PairedList";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("PairedList", () => {
  it("renders the PairedList component", () => {
    render(<PairedList>PairedList</PairedList>);
    screen.debug();
  });
});
