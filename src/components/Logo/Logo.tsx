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
import logoImage from "@/assets/images/dt-logo.jpeg";

// --------------------------------------------
// Types
// --------------------------------------------

export interface LogoProps {
  url?: string;
  size?: "sm" | "md" | "lg";
}

// --------------------------------------------
// Component
// --------------------------------------------

function Logo({ url, size = "md" }: LogoProps) {
  return url ? (
    <a
      data-component="Logo"
      href={url}
      className={clsx(styles.logo, size && styles[`logo--${size}`])}
    >
      <img
        src={logoImage}
        alt="Design Technologist.co.uk"
        className={styles["logo_image"]}
      />
    </a>
  ) : (
    <div
      data-component="Logo"
      className={clsx(styles.logo, size && styles[`logo--${size}`])}
    >
      <img
        src={logoImage}
        alt="Design Technologist.co.uk"
        className={styles["logo_image"]}
      />
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default Logo;
