import React from 'react';

import { PropsHeading, ArgsHeading } from './Heading.story.config';
import './heading.less';

/**
 * Primary UI component for user interaction
 */
export const Heading = ({ color, size, content, ...props }) => (
  <h1
    className={['heading', `heading--${size}`].join(' ')}
    style={color && { color }}
    {...props}
  >
    {content}
  </h1>
);

Heading.propTypes = { ...PropsHeading };
Heading.defaultProps = { ...ArgsHeading };
