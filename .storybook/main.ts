import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../src/assets"],
  viteFinal: async viteConfig => {
    return mergeConfig(viteConfig, {
      plugins: [
        svgr({
          include: "**/*.svg", // Make sure SVG files are included for SVGR transformation
        }),
      ],
    });
  },
};

export default config;
