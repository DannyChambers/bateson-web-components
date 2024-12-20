import React from "react"; // Explicitly import React to resolve the UMD global issue.
import type { Preview } from "@storybook/react";
import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider";
import SchemeProvider from "../src/components/SchemeProvider/SchemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

import "./storybook.css";
import "../src/foundation/color/color.css";
import "../src/foundation/reset/reset.css";
import "../src/foundation/dimension/dimension.css";
import "../src/foundation/duration/duration.css";
import "../src/foundation/typography/typography.css";

const customViewports = {
  viewport1: {
    name: "Small",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
  viewport2: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  viewport3: {
    name: "Large",
    styles: {
      width: "1280px",
      height: "1024px",
    },
  },
  viewport4: {
    name: "Extra large",
    styles: {
      width: "1440px",
      height: "1024px",
    },
  },
};

const preview: Preview = {
  decorators: [
    (StoryFn, context) => (
      <ThemeProvider theme="DesignTechnologist">
        <ThemeSwitcher />
        <StoryFn {...context} />
      </ThemeProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: {
        order: ["Foundation", "Components"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
};

export default preview;
