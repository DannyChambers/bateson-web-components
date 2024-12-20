// --------------------------------------------
//
// PairedList
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./PairedList.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PairedListProps {
  children: ReactNode;
  appearance?: "body-1" | "body-2" | "body-3"; // New appearance prop
}

// --------------------------------------------
// PairedList Component
// --------------------------------------------

const PairedList: React.FC<PairedListProps> & {
  Item: React.FC<PairedListItemProps>;
} = ({ children, appearance = "body-2" }) => {
  const pairedListClasses = clsx(
    styles["paired-list"],
    styles[`paired-list--${appearance}`],
  );

  return (
    <dl data-component="PairedList" className={pairedListClasses}>
      {children}
    </dl>
  );
};

// --------------------------------------------
// PairedList.Item Subcomponent
// --------------------------------------------

export interface PairedListItemProps {
  definition: ReactNode;
  children: ReactNode;
}

const PairedListItem: React.FC<PairedListItemProps> = ({
  definition,
  children,
}) => {
  return (
    <>
      <dt className={styles["paired-list-term"]}>{definition}</dt>
      <dd className={styles["paired-list-definition"]}>{children}</dd>
    </>
  );
};

// --------------------------------------------
// Assign Item to PairedList and Export
// --------------------------------------------

PairedList.Item = PairedListItem;
export default PairedList;
