import { defineConfig } from "vitest/config";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import path from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      ".storybook": path.resolve(__dirname, "./.storybook"),
    },
  },
  plugins: [react(), dts({ include: ["src"] }), libInjectCss(), svgr()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "WebComponents",
      fileName: format => `index.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: [
              "src/**/*.d.ts",
              "src/**/*.stories.{ts, tsx}",
              "src/**/*.test.{ts, tsx}",
            ],
          })
          .map(file => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        exports: "named",
        assetFileNames: "assets/[name][extname]", // Keep original asset names
        entryFileNames: "[name].js", // Keep original entry names (no hash)
        chunkFileNames: "[name].js", // Keep chunk names as well
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
