// --------------------------------------------
//
// PageFooter
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./PageFooter.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageFooterProps {
  // Define your component props here
  children: React.ReactNode;
  backgroundColor?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageFooter({ children, backgroundColor }: PageFooterProps) {
  return (
    <div
      data-component="PageFooter"
      className={clsx(styles["page-footer"])}
      style={{ backgroundColor }}
    >
      <div className={clsx(styles["page-footer-container"])}>{children}</div>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageFooter;
