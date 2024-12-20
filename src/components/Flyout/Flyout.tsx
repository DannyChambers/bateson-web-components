import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./Flyout.module.css";
import { SchemeProvider } from "@/components/SchemeProvider";
import { Button } from "@/components/Button";
import { breakpoint } from "@/foundation/dimension/dimension.ts";
import { useMediaQuery } from "@/utilities/useMediaQuery.ts";
import { scrollLock } from "@/utilities/scrollLock";

import { useTheme } from "@/components/ThemeProvider";

export interface FlyoutProps {
  position: "left" | "right" | "bottom";
  flyoutTitle?: string;
  children: React.ReactNode;
  loadOpen?: boolean;
  backgroundColor?: string;
}

const Flyout: React.FC<FlyoutProps> = ({
  flyoutTitle,
  position,
  children,
  loadOpen = false,
  backgroundColor = "transparent",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loadedOpen, setLoadedOpen] = useState(loadOpen);

  const { color } = useTheme();

  const isDesktopLarge = useMediaQuery(`(min-width: ${breakpoint.lg.value})`);

  const handleToggle = () => {
    const nextOpenState = !isOpen;
    setIsOpen(nextOpenState);
    setLoadedOpen(nextOpenState);
    scrollLock(nextOpenState); // Apply scroll lock based on open state
  };

  const handleClose = () => {
    setIsOpen(false);
    setLoadedOpen(false);
    scrollLock(false); // Unlock scroll when closing
  };

  useEffect(() => {
    return () => scrollLock(false); // Ensure scroll unlock on unmount
  }, []);

  return (
    <div
      data-component="Flyout"
      className={clsx(styles["flyout"], styles[`flyout--${position}`], {
        [styles["flyout--active"]]: isOpen,
        [styles["flyout--load-open"]]: loadedOpen,
      })}
    >
      <div
        className={clsx(styles["flyout-overlay"])}
        onClick={handleClose}
      ></div>
      {!isDesktopLarge && (
        <div className={styles["flyout-trigger"]}>
          <Button
            onClick={handleToggle}
            appearance="body-3"
            tier="tertiary"
            icon={isOpen ? "close" : "menu"}
            iconOnly
          >
            {isOpen ? "Close Flyout" : "Open Flyout"}
          </Button>
        </div>
      )}
      <SchemeProvider scheme="dark">
        <div
          className={clsx(styles["flyout-content"])}
          role="dialog"
          aria-modal="true"
          aria-labelledby="flyout-title"
          style={{ backgroundColor }}
        >
          <h2 className={styles["flyout-title"]}>{flyoutTitle}</h2>
          {children}

          {!isDesktopLarge && (
            <div className={styles["flyout__close"]}>
              <Button
                appearance="body-3"
                tier="tertiary"
                icon="close"
                iconOnly
                iconColor={color.brand4.value}
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </SchemeProvider>
    </div>
  );
};

export default Flyout;
