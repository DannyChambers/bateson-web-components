// --------------------------------------------
//
// Video
// -> Tests
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { render, screen } from "@testing-library/react";
import Video from "./Video";

// --------------------------------------------
// Tests
// --------------------------------------------

describe("Video", () => {
  it("renders the Video component", () => {
    render(<Video>Video</Video>);
    screen.debug();
  });
});
