import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { color } from "@/foundation/color/color.ts";

// Define the structure of the color object
type ColorEntry = {
  name: string;
  value: string;
  raw: string;
  alias: string;
};

// Update the ColorObject type definition to allow for dynamic keys
type ColorObject = {
  [section: string]: ColorEntry;
};

// Define the valid theme keys based on the color object
type ThemeKeys = keyof typeof color;

// Update the ThemeContextValue
export interface ThemeContextValue {
  theme: string;
  setTheme: (theme: ThemeKeys) => void;
  color: ColorObject;
}

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeKeys;
}

// Create the context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ThemeProvider component
const ThemeProvider = ({
  children,
  theme: initialTheme = "Grayscale",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme);

  // Dynamically set the palette for the selected theme
  const themeColors: ColorObject = useMemo(() => color[theme] || {}, [theme]);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        color: themeColors,
      }}
    >
      <div
        data-component="ThemeProvider"
        data-theme={theme}
        className={`theme--${theme}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
