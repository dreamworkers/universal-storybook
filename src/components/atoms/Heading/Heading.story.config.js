import PropTypes from 'prop-types';

/**
 * Common story configuration
 */

export const ArgTypesHeading = {
  content: {
    control: {
      type: 'text',
    },
  },
  color: { control: 'color' },
  size: {
    options: ['small', 'medium', 'large'],
    control: {
      type: 'radio',
    },
  },
};

export const ArgsHeading = {
  color: null,
  size: 'medium',
};

export const ArgsHeadingLarge = {
  content: 'Heading',
  ...ArgsHeading,
  size: 'large',
};
export const ArgsHeadingMedium = {
  content: 'Heading',
  ...ArgsHeading,
};
export const ArgsHeadingSmall = {
  content: 'Heading',
  ...ArgsHeading,
  size: 'small',
};

/**
 * React story configuration
 */

export const PropsHeading = {
  primary: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  content: PropTypes.string.isRequired,
};
