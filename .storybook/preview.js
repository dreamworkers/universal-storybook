import { addParameters, addDecorator } from '@storybook/react';
import { Parser } from 'html-to-react';
import { withTests } from '@storybook/addon-jest';

import results from './.jest-test-results.json';
import '!style-loader!css-loader!less-loader!../src/assets/styles/themes/base.less';

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

const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename, content: tokenContext(filename).default }));

/**
 * Configuration for components unit testing using Jest
 */
addDecorator(
  withTests({
    results,
  })
);
/**
 * Configuration for viewport
 */
const customViewport = {
  xs_max: {
    name: 'Small mobile',
    styles: {
      height: '960px',
      width: '360px',
    },
    type: 'mobile',
  },
  mobile_min: {
    name: 'Mobile (min)',
    styles: {
      height: '960px',
      width: '520px',
    },
    type: 'mobile',
  },
  mobile_max: {
    name: 'Mobile (max)',
    styles: {
      height: '960px',
      width: '767px',
    },
    type: 'mobile',
  },
  tablet_min: {
    name: 'Tablet (min)',
    styles: {
      height: '896px',
      width: '768px',
    },
    type: 'mobile',
  },
  tablet_max: {
    name: 'Tablet (max)',
    styles: {
      height: '896px',
      width: '991px',
    },
    type: 'mobile',
  },
  desktop_min: {
    name: 'Desktop (min)',
    styles: {
      height: '1112px',
      width: '992px',
    },
    type: 'desktop',
  },
  desktop_max: {
    name: 'Desktop (max)',
    styles: {
      height: '1112px',
      width: '1199px',
    },
    type: 'desktop',
  },

  xl_desktop: {
    name: 'XL Desktop',
    styles: {
      height: '1112px',
      width: '1200px',
    },
    type: 'desktop',
  },
  xxl_desktop: {
    name: 'XXL Desktop',
    styles: {
      height: '1112px',
      width: '1440px',
    },
    type: 'desktop',
  },
};

/**
 * Configuration for backgrounds
 */
const customBackgrounds = [
  {
    name: 'light mode',
    value: '#fff',
  },
  {
    name: 'dark mode',
    value: '#111',
  },
  {
    name: 'misty rose',
    value: '#ead7d7',
  },
  {
    name: 'blue purple',
    value: '#7d82b8',
  },
  {
    name: 'dark purple',
    value: '#412234',
  },
  {
    name: 'rose',
    value: '#ff007f',
  },
];

/**
 * HTML preview add-on
 */
const htmlPreview = [
  {
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
];

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
    styleInjection:
      '@import url("styles/inc/fonts.css"); @import url("styles/inc/storybook-base.css");',
  },
  html: htmlPreview,
  backgrounds: {
    default: 'light mode',
    values: customBackgrounds,
  },
  options: {
    storySort: {
      order: ['React', 'Web Core'],
    },
  },
  viewport: { viewports: customViewport },
};
