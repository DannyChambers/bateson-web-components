// --------------------------------------------
//
// Link
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Link.module.css";
import { Icon } from "@/components/Icon";

// --------------------------------------------
// Types
// --------------------------------------------

export interface LinkProps {
  children: React.ReactNode;
  external?: boolean;
  url?: string; //Optional to allow for consumer routing techniques
  target?: string;
  appearance?: "body-1" | "body-2" | "body-3";
  stretch?: boolean;
  title?: string;
  icon?: string;
  iconPosition?: "before" | "after";
  iconColor?: string;
  iconOnly?: boolean;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Link({
  children,
  external = false,
  url,
  target,
  appearance,
  stretch = false,
  title,
  icon,
  iconPosition = "after",
  iconColor,
  iconOnly = false,
}: LinkProps) {
  const ref = external ? { rel: "noreferrer" } : {};
  const Tag = url ? "a" : "span";

  return (
    <Tag
      {...(url && {
        ...ref,
        href: url,
        title: title,
        ...(target && { target: target }),
      })}
      data-component="Link"
      className={clsx(
        styles.link,
        appearance && styles[`link--${appearance}`],
        stretch && styles["link--stretch"],
        iconOnly && styles["link--icon-only"],
      )}
    >
      {stretch && <span className={clsx(styles["link__hit-area"])}></span>}
      {icon && iconPosition === "before" && <Icon name={icon} size="md" />}
      <span className={styles["link__text"]}>{children}</span>
      {icon && iconPosition === "after" && (
        <Icon name={icon} size="md" {...(iconColor && { color: iconColor })} />
      )}
    </Tag>
  );
}

// ----- LinkGroup ----- //

function LinkGroup({
  children,
  alignment = "left",
}: {
  children: React.ReactNode;
  alignment?: "left" | "center" | "right";
}): React.ReactElement {
  return (
    <div
      data-component="LinkGroup"
      className={clsx(styles["link-group"], styles[`link-group--${alignment}`])}
    >
      {children}
    </div>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export { Link, LinkGroup };
export default Link;
