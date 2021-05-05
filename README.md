# Universal Storybook

A unified storybook and component structure for both React and HTML components, which enables:

- a universal storybook.
- a uniform component structure.
- a shared style.
- a shared story control configuration.
- a unified testing framework.

## Features

- Unit testing both components using **Jest** and **Enzyme**.
- LESS for styling.
- Design tokens, using Storybook plugin for design tokens and CSS variables as tokens.
- Maintain code quality using **ESLint**, **Prettier**, and Family. Ensure no code with bad linting and formatting go past, using **lint-staged**.
- Already configured ESLint and VS code editor settings. Use recommended VS Code extensions to better developer experience.

### Storybook add-ons for:

- Controls
- Actions
- Design tokens
- Test coverage and status
- Story source
- Component documentation
- Light/dark mode
- Viewport and grid

## Getting started

### Prerequisite

Make sure you have Yarn installed

```bash
yarn -v
```

If not, then instal it globally.

```bash
npm install yarn -g
```

### Develop

To start the development environment for storybook:

```bash
yarn storybook
```

To test the components

```bash
yarn test
yarn test -u // to re-generate snapshots
yarn test:output // generate test results for storybook
```

To lint and format

```bash
yarn lint
yarn lint --fix // to fix linting issues
yarn format // format unformatted code
```

### Publish

To build the storybook for production

```bash
yarn storybook:build
```

## Component and story structures

### React version

Example: [Heading component](https://github.com/dreamworkers/universal-storybook/tree/main/src/components/atoms/Heading)

```text
├── src/
│   └── components/
│     └── atoms/
│       └── Button/
│           ├── Button.story.config.js
│           ├── Button.less
│           ├── Button.js
│           ├── Button.stories.js
│           └── Button.test.js
│     └── molecules/
│     └── organisms/
│   └── pages/
│   └── globals/
```

### HTML version

Example: [Text Component](https://github.com/dreamworkers/universal-storybook/tree/main/src/components/atoms/Text)

```text
├── src/
│   └── components/
│     └── atoms/
│       └── Button/
│           ├── Button.story.config.js
│           ├── Button.less
│           ├── Button.html.js
│           ├── Button.html.stories.mdx
│           └── Button.html.test.js
│     └── molecules/
│     └── organisms/
│   └── pages/
│   └── globals/
```

### Both React and HTML versions

Example: [Button Component](https://github.com/dreamworkers/universal-storybook/tree/main/src/components/atoms/Button)

```text
├── src/
│   └── components/
│     └── atoms/
│       └── Button/
│           ├── Button.story.config.js
│           ├── Button.less
│           ├── Button.js
│           ├── Button.stories.js
│           ├── Button.test.js
│           ├── Button.html.js
│           ├── Button.html.stories.mdx
│           └── Button.html.test.js
│     └── molecules/
│     └── organisms/
│   └── pages/
│   └── globals/
```
