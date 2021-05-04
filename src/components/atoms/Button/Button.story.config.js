import PropTypes from "prop-types";

/**
 * Common story configuration
 */

export const ArgTypesButton = {
  label: {
    control: {
      type: "text",
    },
  },
  backgroundColor: { control: "color" },
  primary: {
    control: {
      type: "boolean",
    },
  },
  size: {
    options: ["small", "medium", "large"],
    control: {
      type: "radio",
    },
  },
  onClick: {
    control: false,
  },
  render: {
    control: false,
  },
};

export const ArgsButton = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};

export const ArgsButtonPrimary = {
  label: "Button",
  ...ArgsButton,
  primary: true,
};
export const ArgsButtonSecondary = {
  label: "Button",
  ...ArgsButton,
};
export const ArgsButtonLarge = {
  label: "Button",
  ...ArgsButton,
  size: "large",
};
export const ArgsButtonSmall = {
  label: "Button",
  ...ArgsButton,
  size: "small",
};

/**
 * React story configuration
 */

export const PropsButton = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

/**
 * Web core story configuration
 */

export const ArgTypesButtonHtml = {
  ...ArgTypesButton,
  render: {
    control: false,
  },
};

export const ArgsButtonHtml = {
  render: "html",
};

export const ArgsButtonPrimaryHtml = {
  ...ArgsButtonPrimary,
  ...ArgsButtonHtml,
};
export const ArgsButtonSecondaryHtml = {
  ...ArgsButtonSecondary,
  ...ArgsButtonHtml,
};
export const ArgsButtonLargeHtml = {
  ...ArgsButtonLarge,
  ...ArgsButtonHtml,
};
export const ArgsButtonSmallHtml = {
  ...ArgsButtonSmall,
  ...ArgsButtonHtml,
};
