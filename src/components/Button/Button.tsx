// --------------------------------------------
// Button
// -> Component
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Button.module.css";

import { Icon } from "@/components/Icon";

// --------------------------------------------
// Types
// --------------------------------------------

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  appearance?: "body-1" | "body-2" | "body-3";
  stretch?: boolean;
  type?: "button" | "submit" | "reset";
  tier?: "primary" | "secondary" | "tertiary";
  icon?: string;
  iconPosition?: "before" | "after";
  iconOnly?: boolean;
  iconColor?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

// ----- Button ----- //

function Button({
  children,
  disabled = false,
  onClick,
  appearance = "body-2",
  stretch = false,
  type = "button",
  tier = "primary",
  icon,
  iconPosition = "after",
  iconColor,
  iconOnly = false,
}: ButtonProps): React.ReactElement {
  return (
    <button
      data-component="Button"
      className={clsx(
        styles.button,
        styles[`button--${tier}`],
        styles[`button--${appearance}`],
        stretch && styles["button--stretch"],
        iconOnly && styles["button--icon-only"],
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {stretch && <span className={clsx(styles["button__hit-area"])}></span>}
      {icon && iconPosition === "before" && <Icon name={icon} size="md" />}
      <span className={styles["button__text"]}>{children}</span>
      {icon && iconPosition === "after" && (
        <Icon name={icon} size="md" {...(iconColor && { color: iconColor })} />
      )}
    </button>
  );
}

// ----- ButtonGroup ----- //

function ButtonGroup({
  children,
  alignment = "left",
}: {
  children: React.ReactNode;
  alignment?: "left" | "center" | "right" | "justify";
}): React.ReactElement {
  return (
    <div
      data-component="ButtonGroup"
      className={clsx(
        styles["button-group"],
        styles[`button-group--${alignment}`],
      )}
    >
      {children}
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export { Button, ButtonGroup };
