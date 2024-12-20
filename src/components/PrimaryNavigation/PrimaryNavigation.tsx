// --------------------------------------------
//
// PrimaryNavigation
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./PrimaryNavigation.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PrimaryNavigationProps {
  children: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function PrimaryNavigation({ children }: PrimaryNavigationProps) {
  return (
    <nav
      data-component="PrimaryNavigation"
      className={clsx(styles["primary-navigation"])}
    >
      <ul>{children}</ul>
    </nav>
  );
}

// --------------------------------------------
// Sub Components
// --------------------------------------------

export interface PrimaryNavigationItemProps {
  children: React.ReactNode;
  active?: boolean;
  spaced?: boolean;
}

export const PrimaryNavigationItem: React.FC<PrimaryNavigationItemProps> = ({
  children,
  active = false,
  spaced = false,
}) => {
  return (
    <li
      className={clsx(
        styles["primary-navigation-item"],
        active && styles["primary-navigation-item--active"],
        spaced && styles["primary-navigation-item--spaced"],
      )}
    >
      {children}
    </li>
  );
};

export interface PrimarySubNavigationProps {
  children: React.ReactNode;
}

export const PrimarySubNavigation: React.FC<PrimarySubNavigationProps> = ({
  children,
}) => {
  return (
    <nav className={clsx(styles["primary-sub-navigation"])}>
      <ul>{children}</ul>
    </nav>
  );
};

export interface PrimarySubNavigationItemProps {
  children: React.ReactNode;
  active?: boolean;
  spaced?: boolean;
}

export const PrimarySubNavigationItem: React.FC<
  PrimarySubNavigationItemProps
> = ({ children, active = false, spaced = false }) => {
  return (
    <li
      className={clsx(
        styles["primary-sub-navigation-item"],
        active && styles["primary-sub-navigation-item--active"],
        spaced && styles["primary-sub-navigation-item--spaced"],
      )}
    >
      {children}
    </li>
  );
};

// --------------------------------------------
// Exports
// --------------------------------------------

export default PrimaryNavigation;
