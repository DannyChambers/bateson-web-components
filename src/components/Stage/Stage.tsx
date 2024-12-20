// --------------------------------------------
//
// Stage
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import styles from "./Stage.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface StageProps {
  // Define your component props here
  children: React.ReactNode;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Stage({ children }: StageProps) {
  return (
    <div data-component="Stage" className={styles["stage"]}>
      {children}
    </div>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default Stage;
