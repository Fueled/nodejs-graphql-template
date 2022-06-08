export default {
  collectCoverageFrom: ["./src/**/*.(t|j)s"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  modulePaths: ["<rootDir>"],
  preset: "ts-jest",
  rootDir: "./",
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
