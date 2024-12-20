// --------------------------------------------
//
// PageHeader
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./PageHeader.module.css";

import { Layout } from "@/components/Layout";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageHeaderProps {
  // Define your component props here
  children: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageHeader({ children }: PageHeaderProps) {
  return (
    <div data-component="PageHeader" className={clsx(styles["page-header"])}>
      {children}
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageHeader;
