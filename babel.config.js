module.exports = {
  presets: ["@babel/env", "@babel/react"],
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"],
    },
  },
};
