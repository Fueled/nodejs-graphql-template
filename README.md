# Fueled NodeJS GraphQL starter template

This repo contains the starter template code for a NodeJS + TypeScript based GraphQL project, using [Prisma](https://prisma.io/) as the ORM and [Jest](https://jestjs.io/) for testing.

## Requirements

- NodeJS v16+
- NPM 7+

## Features

- TypeScript
- ExpressJS
- Apollo Server
- Jest
- Code formating & linting
  - [ESLint](#eslint)
  - [Prettier](https://prettier.io/)
  - [EditorConfig](https://editorconfig.org/)
  - [Husky](https://typicode.github.io/husky/)

Husky is used for pre-commit hooks. It gets installed automatically via `npm i` as we have `prepare` lifecycle hook set.
To avoid executing pre-commit scripts - append `--no-verify` flag to `git commit`.

## Get Started

The following will install all necessary packages and run the app under development mode which uses `nodemon` for reloading the build when changes are made.

```
npm install
npm run dev
```

## Docker Setup

A Dockerfile is available to run the backend services in a container exposed through ports. The Docker container
includes the hot reloading Node application, PostgresSQL database, and Redis for caching.

The three services are available under the following:

```
app: fueled_assignment
  app        // Node application
  redis      // Redis server
  postgres   // PostgreSQL database
```

To build and run the Docker container, ensure you have the Docker CLI available, and optionally Docker Desktop.

To build the Docker container:

```
docker compose build
```

To start the Docker container:

```
docker compose up [-d]
```

To stop the Docker container:

```
docker compose down
```

To run a specific container only:

```
docker compose up [-d] <container_name>
```

## Code formatting & quality

This starter template uses ESLint along side Prettier, with separated responsibilities:
- ESLint for code quality standards.
- Prettier for code formatting standards.

## ESLint

ESLint is a code linter which mainly helps catch quickly minor code quality and style issues.

Like most linters, ESLint has a wide set of configurable rules as well as support for custom rule sets. All rules are configured through `.eslintrc` configuration file.
In this starter template ESLint rules are definied specifically around code quality, rather than formatting.

### Running ESLint

```
npm run lint      // ESLint checks
npm run lint:fix  // ESLint checks + attemt to fix errors
npm run lint:all  // ESLint checks + attempt to fix errors & warnings
```

### VS Code extensions

If you are interested in seeing ESLint feedback as soon as possible, I strongly recommend the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).


## Prettier

Prettier is a code formatting tool which helps enforce a set of standardized formatting rules across all of our NodeJS projects.
It's not able to enforce specific rules for code quality (especially with TypeScript), hence that responsibility is left to ESLint.

### Running Prettier

```
npm run prettier      // Code formatting checks only
npm run prettier:fix  // Code formatting fixes
```

### VS Code extensions

The following plugin allows you to set Prettier as default code formatter as well as apply Prettier code formating upon file save - [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Helpful VS Code extensions

- [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#overview) - lets you run ESLint & Prettier in a particular order of your preference.
