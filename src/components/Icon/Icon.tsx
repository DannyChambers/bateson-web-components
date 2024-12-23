// --------------------------------------------
//
// Icon.tsx
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./Icon.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface IconProps {
  name:
    | "menu"
    | "close"
    | "arrow"
    | "x-logo"
    | "linkedin-logo"
    | "bluesky-logo"
    | string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

// --------------------------------------------
// Icon Component
// --------------------------------------------

const Icon: React.FC<IconProps> = ({ name, size = "md", color }) => {
  const renderIcon = () => {
    console.log("name: ", name);
    switch (name) {
      case "menu":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        );
      case "arrow":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        );
      case "check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
          </svg>
        );
      case "close":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        );
      case "envelope":
        return (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m464 64h-416c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-288c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701-76.407-59.83-112.162-88.228-134.587-106.49v-40.805zm-416 288v-185.602c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653v185.601z" />
          </svg>
        );
      case "phone":
        return (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m497.39 361.8-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6a370.66 370.66 0 0 1 -177.19-177.19l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112a24.16 24.16 0 0 0 -27.5-13.9l-104 24a24 24 0 0 0 -18.6 23.39c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0 -14.01-27.6z" />
          </svg>
        );

      case "x-logo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              style={{ stroke: "none" }}
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
            />
          </svg>
        );
      case "linkedin-logo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              style={{ stroke: "none" }}
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            />
          </svg>
        );
      case "bluesky-logo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 452.263"
          >
            <path
              fill="currentColor"
              fillRule="nonzero"
              d="M110.983 30.443C169.682 74.656 232.823 164.296 256 212.4v127.056c0-2.705-1.04.351-3.282 6.935-12.094 35.646-59.343 174.777-167.383 63.552-56.888-58.561-30.551-117.119 72.998-134.801-59.239 10.111-125.839-6.6-144.114-72.119C8.958 184.18 0 68.081 0 52.402 0-26.143 68.632-1.454 110.983 30.443zm290.034 0C342.318 74.656 279.177 164.296 256 212.4v127.056c0-2.705 1.04.351 3.282 6.935 12.094 35.646 59.343 174.777 167.383 63.552 56.888-58.561 30.551-117.119-72.998-134.801 59.239 10.111 125.839-6.6 144.114-72.119C503.042 184.18 512 68.081 512 52.402c0-78.545-68.624-53.856-110.983-21.959z"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div
      data-component="Icon"
      className={clsx(styles.icon, styles[`icon--${size}`])}
      {...(color && { style: { color } })}
      aria-hidden="true"
    >
      {renderIcon()}
    </div>
  );
};

// --------------------------------------------
// Export
// --------------------------------------------

export default Icon;
