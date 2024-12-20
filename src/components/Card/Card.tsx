// --------------------------------------------
//
// Card.tsx
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Card.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface CardProps {
  image?: string;
  children?: React.ReactNode;
  borderRadius?: "sm" | "md" | "lg";
}

export interface CardHeaderProps {
  children?: React.ReactNode;
  headerBackgroundColor?: string;
  headerBorderColor?: string;
  padded?: boolean;
}

export interface CardBodyProps {
  children?: React.ReactNode;
}

export interface CardFooterProps {
  children?: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Card({ children, image, borderRadius = "md" }: CardProps) {
  return (
    <div
      data-component="Card"
      className={clsx(
        styles.card,
        borderRadius && styles[`layout--border-radius-${borderRadius}`],
      )}
    >
      {image && (
        <figure
          className={styles.card__image}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {children}
    </div>
  );
}

function CardHeader({
  headerBackgroundColor = "transparent",
  headerBorderColor,
  padded,
  children,
}: CardHeaderProps) {
  return (
    <div
      className={clsx(
        styles.card__header,
        padded && styles["card__header--padded"],
      )}
      style={{
        background: headerBackgroundColor,
        borderBottom: `2px solid ${headerBorderColor}`,
      }}
    >
      <div className={styles["card-header__content"]}>{children}</div>
    </div>
  );
}

function CardBody({ children }: CardBodyProps) {
  return <div className={clsx(styles.card__body)}>{children}</div>;
}

function CardFooter({ children }: CardBodyProps) {
  return <div className={clsx(styles.card__footer)}>{children}</div>;
}

// --------------------------------------------
// Exports
// --------------------------------------------

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
