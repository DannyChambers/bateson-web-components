// --------------------------------------------
//
// PageSection
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./PageSection.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface PageSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundImagePosition?:
    | "topLeft"
    | "topRight"
    | "bottomRight"
    | "bottomLeft"
    | "center"
    | "cover";
  backgroundVideo?: string; // New prop for background video
  children: React.ReactNode;
  screen?: "half" | "full";
  padding?: "sm" | "md" | "lg";
  tag?: "div" | "section";
}

// --------------------------------------------
// Component
// --------------------------------------------

function PageSection({
  backgroundColor = "transparent",
  backgroundImage,
  backgroundImagePosition,
  backgroundVideo, // Destructure the new prop
  children,
  screen,
  padding = "md",
  tag = "div",
}: PageSectionProps) {
  const Tag = tag;

  return (
    <Tag
      data-component="PageSection"
      className={clsx(
        styles["page-section"],
        screen && styles[`page-section--${screen}screen`],
        padding && styles[`page-section--padding-${padding}`],
        backgroundImagePosition &&
          styles[`page-section-backgroundPosition--${backgroundImagePosition}`],
        backgroundVideo && styles["page-section--video"],
      )}
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {backgroundVideo && (
        <video
          className={styles["page-section__background-video"]}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}
      {children}
    </Tag>
  );
}

// --------------------------------------------
// Exports
// --------------------------------------------

export default PageSection;
