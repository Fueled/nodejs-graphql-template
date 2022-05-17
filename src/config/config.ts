import dotenv from "dotenv";
import getenv from "getenv";
import merge from "lodash.merge";

dotenv.config();

const baseConfig = {
  debug: getenv.bool("DEBUG", false),
  log_level: "error",
  app: {
    host: getenv("HTTP_HOST", "localhost"),
    port: getenv.int("HTTP_PORT", 8000),
    schema: getenv("HTTP_SCHEMA", "http"),
  },
};

const config: { [key: string]: any } = {
  test: {
    debug: false,
  },
  development: {
    log_level: "debug",
    debug: getenv.bool("DEBUG", true),
  },
  production: {},
};

const env: string = process.env.NODE_ENV || "development";

export default merge(baseConfig, config[env]);
