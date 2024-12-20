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
import defaultLogoImage from "@/assets/images/dt-logo.jpeg";

// --------------------------------------------
// Types
// --------------------------------------------

export interface LogoProps {
  url?: string;
  size?: "sm" | "md" | "lg";
  src?: string; // Custom logo source
  alt: string; // Custom alt text
  tag?: "div" | "h1";
}

// --------------------------------------------
// Component
// --------------------------------------------

function Logo({ url, size = "md", src, alt, tag: Tag = "div" }: LogoProps) {
  const logoSrc = src || defaultLogoImage; // Use the `src` prop if provided, otherwise use the default logo

  if (url) {
    return (
      <a
        data-component="Logo"
        href={url}
        className={clsx(styles.logo, size && styles[`logo--${size}`])}
      >
        <Tag
          data-component="Logo"
          className={clsx(styles.logo, size && styles[`logo--${size}`])}
        >
          <img src={logoSrc} alt={alt} className={styles["logo_image"]} />
        </Tag>
      </a>
    );
  }

  return (
    <Tag
      data-component="Logo"
      className={clsx(styles.logo, size && styles[`logo--${size}`])}
    >
      <img src={logoSrc} alt={alt} className={styles["logo_image"]} />
    </Tag>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default Logo;
