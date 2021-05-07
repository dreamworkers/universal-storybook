const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
    'storybook-design-token',
    '@storybook/addon-storysource',
    '@storybook/preset-ant-design',
    '@storybook/addon-jest',
  ],
  webpackFinal: (config) => ({
    ...config,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30 * 1024,
        maxSize: 500 * 1024,
      },
    },
    performance: {
      maxAssetSize: 500 * 1024,
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.mdx', '.css', '.less'],
      alias: {
        '~': path.join(__dirname, '../src'),
        '@Assets': path.resolve(__dirname, '../src/assets'),
        '@Components': path.resolve(__dirname, '../src/components'),
        '@Styles': path.resolve(__dirname, '../src/assets/styles'),
      },
    },
  }),
};
