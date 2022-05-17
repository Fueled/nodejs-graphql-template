# [Sample Project]

[@TODO: add project description here]

## Requirements

- NodeJS v16+
- NPM 7+

## Features

- TypeScript
- ExpressJS
- Code formating & linting
  - [ESLint](#eslint)
  - [Prettier](https://prettier.io/) `npm run format`
  - [EditorConfig](https://editorconfig.org/)
  - [pre-commit](https://pre-commit.com/) - `pre-commit install`

## Get Started

```
npm install
npm run start
```

## ESLint

ESLint is a code linter which mainly helps catch quickly minor code quality and style issues.

### ESLint rules

Like most linters, ESLint has a wide set of configurable rules as well as support for custom rule sets. All rules are configured through `.eslintrc` configuration file. In this project, we are using a fairly basic set of rules with no additional custom rules.

### Running ESLint

Like the rest of our build steps, we use npm scripts to invoke ESLint. To run ESLint you can call the main build script or just the ESLint task.

```
npm run build   // runs full build including ESLint
npm run lint    // runs only ESLint
```

Notice that ESLint is not a part of the main watch task.

If you are interested in seeing ESLint feedback as soon as possible, I strongly recommend the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
