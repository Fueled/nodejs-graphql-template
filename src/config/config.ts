import dotenv from "dotenv";
import getenv from "getenv";

dotenv.config();

const config: { [key: string]: any } = {
  debug: getenv.bool("DEBUG", false),
  log_level: "error",
  http: {
    host: getenv("HTTP_HOST", "localhost"),
    port: getenv.int("HTTP_PORT", 8000),
    schema: getenv("HTTP_SCHEMA", "http"),
  },
  graphql: {
    introspection: getenv.bool("GRAPHQL_INTROSPECTION_ENABLED", false),
  },
};

export default { ...config };
