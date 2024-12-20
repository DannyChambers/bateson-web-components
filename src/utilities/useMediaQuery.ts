import { useState, useEffect } from "react";

/**
 * Custom hook to monitor a media query's status.
 * @param query - The media query string, e.g., '(max-width: 768px)'.
 * @returns - True if the media query matches, false otherwise.
 */
export function useMediaQuery(query: string): boolean {
  // Set the initial state based on the current window size
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // Avoids running on the server

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Listen for changes to the media query
    mediaQueryList.addEventListener("change", handleChange);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
