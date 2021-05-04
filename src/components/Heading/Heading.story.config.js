import PropTypes from "prop-types";

/**
 * Common story configuration
 */

export const ArgTypesHeading = {
  label: {
    control: {
      type: "text",
    },
  },
  color: { control: "color" },
  size: {
    options: ["small", "medium", "large"],
    control: {
      type: "radio",
    },
  },
};

export const ArgsHeading = {
  color: null,
  size: "medium",
};

export const ArgsHeadingLarge = {
  label: "Heading",
  ...ArgsHeading,
  size: "large",
};
export const ArgsHeadingMedium = {
  label: "Heading",
  ...ArgsHeading,
};
export const ArgsHeadingSmall = {
  label: "Heading",
  ...ArgsHeading,
  size: "small",
};

/**
 * React story configuration
 */

export const PropsHeading = {
  primary: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
};
