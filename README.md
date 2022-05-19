# Fueled Assignment

This repo contains the starter code for Fueled Assignment in NodeJS + TypeScript. Using Postgres as the primary database.

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

The following will install all necessary packages and run the app under development mode which uses `nodemon` for reloading the build when changes are made.

```
npm install
npm run dev
```

## Docker Local

A Dockerfile is available to run the backend services in a container exposed through ports. The Docker container
includes the hot reloading Node application, PostgresSQL database, and Redis for caching.

The three services are available under the following:

```
app: fueled_assignment
  fueled_assignment_app        // Node application
  fueled_assignment_redis      // Redis server
  fueled_assignment_postgres   // PostgreSQL database
```

To build and run the Docker container, ensure you have the Docker CLI available, and optionally Docker Desktop.

To build the Docker container:

```
docker compose build
```

To start the Docker container:

```
docker compose up
```

To stop the Docker container:

```
docker compose down
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

