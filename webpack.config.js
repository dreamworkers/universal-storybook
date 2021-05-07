/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');

module.exports = {
  configureWebpack: (config) => {
    config.resolve = {
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.mdx', '.css', '.less'],
      alias: {
        '~': path.join(__dirname, 'src'),
        '@Assets': path.resolve(__dirname, 'src/assets'),
        '@Components': path.resolve(__dirname, 'src/components'),
        '@Styles': path.resolve(__dirname, 'src/assets/styles'),
      },
    };
  },
};
