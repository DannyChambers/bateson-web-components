// --------------------------------------------
//
// Video
// -> Component
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import clsx from "clsx";
import styles from "./Video.module.css";

// --------------------------------------------
// Types
// --------------------------------------------
export interface VideoProps {
  fullbleed: boolean;
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string;
  zIndex?: string;
}

// --------------------------------------------
// Component
// --------------------------------------------

function Video({
  fullbleed = false,
  src,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
  width,
  height,
  aspectRatio,
  zIndex,
}: VideoProps) {
  return (
    <div
      className={clsx(
        styles["video-wrapper"],
        fullbleed && styles["video--fullbleed"],
      )}
      style={{ aspectRatio, zIndex }}
      data-component="VideoWrapper"
    >
      <video
        data-component="Video"
        src={src}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        width={width}
        height={height}
        className={clsx(styles["video"])}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// --------------------------------------------
// Export
// --------------------------------------------

export default Video;
