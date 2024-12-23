// --------------------------------------------
//
// Text
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { createElement } from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  appearance?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "heading-7"
    | "body-1"
    | "body-2"
    | "body-3";
  alignment?: "left" | "right" | "center";
  children: React.ReactNode;
  className?: string;
  color?: string;
  layout?: boolean;
  font?: "heading" | "body";
  weight?: string;
  decorator?: boolean;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Text({
  tag = "p",
  appearance,
  alignment = "left",
  color,
  weight,
  layout = true,
  font,
  className,
  children,
  decorator,
}: TextProps) {
  const classes = clsx(className, styles.text, styles[`text--${alignment}`], {
    [styles["text--no-layout"]]: !layout,
    [styles[`text--${appearance}`]]: appearance,
    [styles[`text--font-${font}`]]: font,
    [styles[`text--weight-${weight}`]]: weight,
    [styles["text--decorator"]]: decorator,
  });

  // Function to prevent orphan words
  const preventOrphanWords = (text: React.ReactNode) => {
    if (typeof text === "string") {
      const words = text.trim().split(" ");
      if (words.length > 1) {
        return `${words.slice(0, -2).join(" ")} ${words.slice(-2).join("\u00A0")}`;
      }
    }
    return text;
  };

  // Apply preventOrphanWords only for body appearances
  const content =
    appearance === "body-1" ||
    appearance === "body-2" ||
    appearance === "body-3"
      ? preventOrphanWords(children)
      : children;

  return createElement(
    tag,
    {
      "data-component": "Text",
      className: classes,
      style: { color },
    },
    content,
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default Text;
