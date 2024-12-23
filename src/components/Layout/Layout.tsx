// --------------------------------------------
//
// Layout/component.tsx
// -> React Version with Layout.Column
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { createElement, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Layout.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface LayoutProps {
  wrapper?: boolean;
  container?: boolean;
  block?: boolean;
  tag?: "div" | "ul";
  verticalAlign?: "top" | "middle" | "bottom";
  horizontalAlign?: "left" | "middle" | "right";
  grid?:
    | "55"
    | "65"
    | "75"
    | "85"
    | "50_50"
    | "40_60"
    | "60_40"
    | "48_52"
    | "52_48"
    | "66_33"
    | "70_30"
    | "80_20"
    | "33_33_33"
    | "25_25_25_25";
  pair?: "xs" | "sm" | "md";
  stack?: "xs" | "sm" | "md";
  contentReverse?: boolean;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  topGutter?: "sm" | "md" | "lg" | "xl";
  bottomGutter?: "sm" | "md" | "lg" | "xl";
  showGrid?: boolean;
  children: ReactNode;
}

export interface ColumnProps {
  children: ReactNode;
  className?: string;
}

// --------------------------------------------
// Layout Component
// --------------------------------------------

function Layout({
  wrapper = false,
  container = false,
  block = false,
  tag = "div",
  verticalAlign,
  horizontalAlign,
  grid,
  pair,
  stack,
  contentReverse = false,
  gap,
  topGutter,
  bottomGutter,
  showGrid = false,
  children,
}: LayoutProps) {
  const classes = clsx(styles["layout"], {
    [styles["layout--container"]]: container,
    [styles["layout--wrapper"]]: wrapper,
    [styles["layout--block"]]: block,
    [styles[`layout--verticalAlign-${verticalAlign}`]]: verticalAlign,
    [styles[`layout--horizontalAlign-${horizontalAlign}`]]: horizontalAlign,
    [styles[`layout--${grid}`]]: grid,
    [styles[`layout--pair-${pair}`]]: pair,
    [styles[`layout--stack-${stack}`]]: stack,
    [styles["layout--content-reverse"]]: contentReverse,
    [styles[`layout--gap-${gap}`]]: gap,
    [styles[`layout--top-gutter-${topGutter}`]]: topGutter,
    [styles[`layout--bottom-gutter-${bottomGutter}`]]: bottomGutter,
    [styles["layout--show-grid"]]: showGrid,
  });

  return createElement(
    tag,
    {
      "data-component": "Layout",
      className: classes,
    },
    children,
  );
}

// --------------------------------------------
// Column Subcomponent
// --------------------------------------------

const Column = ({ children }: ColumnProps) => {
  return <div className={styles["layout__column"]}>{children}</div>;
};

Layout.Column = Column;

// --------------------------------------------
// Export
// --------------------------------------------

export default Layout;
