// --------------------------------------------
//
// Modal
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { ReactNode, useEffect } from "react";
import clsx from "clsx";
import styles from "./Modal.module.css";

import { Button } from "../Button";
import { scrollLock } from "@/utilities/scrollLock";

// --------------------------------------------
// Types
// --------------------------------------------

export interface ModalProps {
  isDialog?: boolean;
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

// --------------------------------------------
// Modal Component
// --------------------------------------------

const Modal: React.FC<ModalProps> = ({
  isDialog = false,
  isOpen,
  onClose,
  children,
  size = "md",
}) => {
  const modalClasses = clsx(styles["modal"], styles[`modal--${size}`], {
    [styles["modal--open"]]: isOpen,
  });

  useEffect(() => {
    scrollLock(isOpen); // Lock scroll when modal is open
    return () => scrollLock(false); // Unlock scroll on unmount or close
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      data-component="Modal"
      className={styles["modal-overlay"]}
      onClick={onClose}
    >
      <div className={modalClasses} onClick={e => e.stopPropagation()}>
        {!isDialog && (
          <div className={styles["modal-close"]}>
            <Button onClick={onClose} tier="tertiary" icon="close" iconOnly>
              Close
            </Button>
          </div>
        )}
        <div className={styles["modal__content"]}>{children}</div>
      </div>
    </div>
  );
};

// --------------------------------------------
// Export
// --------------------------------------------

export default Modal;
