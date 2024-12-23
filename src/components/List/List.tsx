// --------------------------------------------
//
// List
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./List.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface ListProps {
  marker?: boolean;
  appearance?: "body-1" | "body-2" | "body-3";
  children: React.ReactNode;
  tag?: "ul" | "ol";
  inline?: "left" | "center" | "right";
  color?: string;
  columns?: number;
}

// --------------------------------------------
// Component
// --------------------------------------------

function List({
  marker = true,
  appearance = "body-2",
  children,
  tag = "ul",
  inline,
  color,
  columns,
}: ListProps) {
  const Tag = tag === "ol" ? "ol" : "ul";
  return (
    <Tag
      data-component="List"
      className={clsx(
        styles.list,
        styles[`list--${tag}`],
        styles[`list--${appearance}`],
        marker === false && styles["list--no-marker"],
        inline && styles["list-inline"],
        inline && styles[`list-inline--${inline}`],
      )}
      style={{
        ...(color && { color }),
        ...(columns && { columnCount: `${columns}` }),
      }}
    >
      {children}
    </Tag>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default List;
