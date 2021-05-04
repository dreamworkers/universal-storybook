import React from "react";

import { PropsHeading, ArgsHeading } from "./Heading.story.config";
import "./heading.less";

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ color, size, label, ...props }) => {
  return (
    <h1
      className={["button", `button--${size}`].join(" ")}
      style={color && { color }}
      {...props}
    >
      {label}
    </h1>
  );
};

Heading.propTypes = { ...PropsHeading };
Heading.defaultProps = { ...ArgsHeading };
