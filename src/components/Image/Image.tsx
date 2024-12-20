// --------------------------------------------
//
// Image
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Image.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface ImageProps {
  alt: string;
  fluid?: boolean;
  height?: string | number;
  src: string;
  width?: string | number;
  bordered?: boolean;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Image({ alt = "", fluid, height, src, width, bordered }: ImageProps) {
  const classes = clsx(
    styles.image,
    fluid && styles["image--fluid"],
    bordered && styles["image--bordered"],
  );

  return (
    <img
      data-component="Image"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classes}
    />
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default Image;
