module.exports = {
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@babel).+\\.js$"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "json"],
  collectCoverageFrom: [
    "./**/*.{js,jsx,ts,tsx}",
    "!src/index.{js,jsx,tsx}",
    "!src/.tests/",
  ],
};
