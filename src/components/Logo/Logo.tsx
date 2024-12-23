// --------------------------------------------
//
// Logo
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Logo.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface LogoProps {
  url?: string;
  size?: "sm" | "md" | "lg";
  src?: string;
  alt: string;
  tag?: "div" | "h1";
}

// --------------------------------------------
// Component
// --------------------------------------------

function Logo({ url, size = "md", src, alt, tag: Tag = "div" }: LogoProps) {
  if (url) {
    return (
      <a href={url}>
        <Tag
          data-component="Logo"
          className={clsx(styles.logo, size && styles[`logo--${size}`])}
        >
          {Tag === "h1" && <span className="visually-hidden">{alt}</span>}
          <img src={src} alt={alt} className={styles["logo_image"]} />
        </Tag>
      </a>
    );
  }

  return (
    <Tag
      data-component="Logo"
      className={clsx(styles.logo, size && styles[`logo--${size}`])}
    >
      {Tag === "h1" && <span className="visually-hidden">{alt}</span>}
      <img src={src} alt={alt} className={styles["logo_image"]} />
    </Tag>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default Logo;
