// --------------------------------------------
//
// PageHeader
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./PageHeader.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageHeaderProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageHeader({ children, backgroundColor }: PageHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      data-component="PageHeader"
      className={clsx(styles["page-header"], {
        [styles["page-header--scroll"]]: isScrolled,
      })}
      style={{ backgroundColor }}
    >
      <div className={clsx(styles["page-header-container"])}>{children}</div>
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageHeader;
