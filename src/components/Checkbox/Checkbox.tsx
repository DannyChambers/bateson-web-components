// --------------------------------------------
//
// Checkbox
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { ChangeEvent } from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  appearance?: "body-1" | "body-2" | "body-3";
}

// --------------------------------------------
// Component
// --------------------------------------------

function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  className,
  appearance = "body-2",
}: CheckboxProps) {
  const classes = clsx(
    className,
    styles.checkbox,
    styles[`checkbox--${appearance}`],
    { [styles["checkbox--disabled"]]: disabled },
  );

  return (
    <label data-component="Checkbox" className={classes}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles["checkbox-input"]}
      />
      {label && <span className={styles["checkbox-label"]}>{label}</span>}
    </label>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default Checkbox;
