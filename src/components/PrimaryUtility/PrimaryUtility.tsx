// --------------------------------------------
//
// PrimaryUtility
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./PrimaryUtility.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PrimaryUtilityProps {
  children: React.ReactNode;
  align?: "left" | "right" | "center";
}

// --------------------------------------------
// Component
// --------------------------------------------

function PrimaryUtility({ children, align = "left" }: PrimaryUtilityProps) {
  return (
    <div
      data-component="PrimaryUtility"
      className={clsx(
        styles["primary-utility"],
        styles[`primary-utility--align-${align}`],
      )}
    >
      {React.Children.map(children, child => (
        <div className={styles["primary-utility__item"]}>{child}</div>
      ))}
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PrimaryUtility;
