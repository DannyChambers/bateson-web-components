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
  url?: string;
  disabled?: boolean;
  onClick?: () => void;
  appearance?: "body-1" | "body-2" | "body-3";
  capitalize?: boolean;
  layout?: boolean;
  stretch?: boolean;
  type?: "button" | "submit" | "reset";
  tier?: "primary" | "secondary" | "tertiary";
  icon?: string;
  iconPosition?: "before" | "after";
  iconOnly?: boolean;
  iconColor?: string;
  iconSize?: "sm" | "md" | "lg";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

// ----- Button ----- //

function Button({
  children,
  url,
  disabled = false,
  onClick,
  appearance = "body-2",
  capitalize,
  layout = true,
  stretch = false,
  type = "button",
  tier = "primary",
  icon,
  iconPosition = "after",
  iconColor,
  iconSize,
  iconOnly = false,
  target = "_self",
  rel = "noopener noreferrer",
}: ButtonProps): React.ReactElement {
  const commonClasses = clsx(
    styles.button,
    styles[`button--${tier}`],
    styles[`button--${appearance}`],
    !layout && styles["button--no-layout"],
    capitalize && styles["button--capitalize"],
    stretch && styles["button--stretch"],
    iconOnly && styles["button--icon-only"],
  );

  const content = (
    <>
      {stretch && <span className={clsx(styles["button__hit-area"])}></span>}
      {icon && iconPosition === "before" && (
        <Icon name={icon} size={iconSize} />
      )}
      <span className={styles["button__text"]}>{children}</span>
      {icon && iconPosition === "after" && (
        <Icon
          name={icon}
          size={iconSize}
          {...(iconColor && { color: iconColor })}
        />
      )}
    </>
  );

  if (url) {
    return (
      <a
        data-component="Button"
        href={url}
        className={commonClasses}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      data-component="Button"
      className={commonClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
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
