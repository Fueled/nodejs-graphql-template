# Fueled NodeJS GraphQL starter template

This repo contains the starter template for a NodeJS + TypeScript based GraphQL project.

## Requirements

- NodeJS v16+
- NPM 7+

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://github.com/expressjs/express)
- [Apollo Server](https://github.com/apollographql/apollo-server) with [apollo-server-express](https://github.com/apollographql/apollo-server/tree/main/packages/apollo-server-express) integration
- [Prisma ORM](https://github.com/prisma/prisma) for database integration
- [Jest](https://github.com/facebook/jest) for testing
- Code formating & linting
  - [ESLint](https://github.com/eslint/eslint) for code quality standards
  - [Prettier](https://github.com/prettier/prettier) with [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for auto-formatting
  - [EditorConfig](https://editorconfig.org/)
- [Husky](https://github.com/typicode/husky) for pre-commit hooks

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

The following services are available currently:

```
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

## Testing

This repository has npm commands & examples ready for:
- Unit tests
- E2E tests

### Unit tests

Unit tests should be used to test smaller fragments of code, for example, services. Database calls & HTTP calls are expcted to be mocked within unit tests. Any file within `test/` directory with a suffix of `.spec.ts` will be treated as a unit test file.

### E2E tests

E2E tests should be used to test API endpoints. It is expected to use actual database functionality instead of mocks. External 3rd party HTTP requests should be mocked. Any file within `test/` directory with a suffix of `.e2e-spec.ts` will be treated as an E2E test file.

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
