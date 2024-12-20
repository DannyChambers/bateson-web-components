// --------------------------------------------
//
// Avatar
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Avatar.module.css";
import Text from "../Text/Text";
import { Button } from "@/components/Button";

// --------------------------------------------
// Types
// --------------------------------------------

export interface AvatarProps {
  src?: string;
  username?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onImageUpload?: (file: File) => void; // Function to handle image upload
}

// --------------------------------------------
// Component
// --------------------------------------------

const Avatar: React.FC<AvatarProps> = ({
  src,
  username,
  size = "md",
  onImageUpload,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle file input change and pass the file to onImageUpload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onImageUpload) {
      onImageUpload(file);
    }
  };

  return (
    <div
      data-component="Avatar"
      className={clsx(styles["avatar"], styles[`avatar--${size}`])} // Apply size class
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles["avatar_image"]}>
        {src ? (
          <img src={src} alt={username || "Profile image"} />
        ) : (
          <div className={styles["avatar_placeholder"]} />
        )}
      </div>
      {username && (
        <Text appearance="body-3" alignment="center" layout={false}>
          {username}
        </Text>
      )}
      {isHovered && onImageUpload && (
        // Only show button on hover if onImageUpload is provided
        <div className={styles["avatar_button"]}>
          <Button
            onClick={() => document.getElementById("fileInput")?.click()}
            appearance="body-3"
          >
            {src ? "Edit" : "Upload"}
          </Button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};

// --------------------------------------------
// Export
// --------------------------------------------

export default Avatar;
