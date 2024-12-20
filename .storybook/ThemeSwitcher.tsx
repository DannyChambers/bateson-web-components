// --------------------------------------------
//
// ThemeSwitcher
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

// --------------------------------------------
// Component
// --------------------------------------------

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [scheme, setScheme] = useState("default");

  // Theme and Scheme Options
  const themes = ["DesignTechnologist", "Grayscale"];
  const schemes = ["light", "dark"];

  // Apply default theme and scheme on load
  useEffect(() => {
    // Initialize theme and scheme only if unset
    if (!theme) setTheme(themes[0]);
    if (!scheme) setScheme(schemes[0]);
  }, [theme, scheme, setTheme, setScheme]);

  // Apply the current theme and scheme to the root element
  useEffect(() => {
    const root = document.documentElement;

    // Remove existing theme and scheme classes
    root.classList.remove(
      ...Array.from(root.classList).filter(
        cls => cls.startsWith("theme--") || cls.startsWith("scheme--"),
      ),
    );

    // Add the current theme and scheme classes
    root.classList.add(`theme--${theme}`);
  }, [theme, scheme]);

  return (
    <div className="theme-switcher">
      <div>
        <select
          id="theme-select"
          value={theme}
          onChange={e => setTheme(e.target.value)}
        >
          {themes.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default ThemeSwitcher;
