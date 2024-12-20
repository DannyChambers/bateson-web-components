// --------------------------------------------
//
// Stage
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Stage from "./Stage";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Stage", () => {
  it("renders the Stage component", () => {
    render(<Stage>Stage</Stage>);
    screen.debug();
  });
});
