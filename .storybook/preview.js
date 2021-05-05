import { addParameters, addDecorator } from '@storybook/react';
import { Parser } from 'html-to-react';
import { withTests } from '@storybook/addon-jest';

import results from './.jest-test-results.json';

/**
 * Configuration for previewing HTML and React stories
 */
const htmlToReactParser = new Parser();
const renderFrameworkBaseStories = (storyFn, { args }) => {
  const { render } = args || {};

  switch (render) {
    case 'html':
      return htmlToReactParser.parse(storyFn());
    default:
      return storyFn();
  }
};

addDecorator(renderFrameworkBaseStories);

addParameters({
  docs: {
    prepareForInline: renderFrameworkBaseStories,
    inlineStories: true,
  },
});

/**
 * Configuration for design tokens
 */
const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

/**
 * Configuration for components unit testing using Jest
 */
addDecorator(
  withTests({
    results,
  })
);

/**
 * Preview parameters
 */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  designToken: {
    defaultTab: 'Colors',
    files: tokenFiles,
  },
};
