// --------------------------------------------
//
// SiteFooter
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./SiteFooter.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface SiteFooterProps {
  // Define your component props here
  children: React.ReactNode;
  backgroundColor?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

function SiteFooter({ children, backgroundColor }: SiteFooterProps) {
  return (
    <div className={clsx(styles["site-footer"])} style={{ backgroundColor }}>
      <div className={clsx(styles["site-footer-container"])}>{children}</div>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default SiteFooter;
