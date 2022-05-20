import dotenv from "dotenv";
import getenv from "getenv";

dotenv.config();

type LogLevel = "debug" | "error";  // TBC...
type HttpSchema = "http" | "https";

export type Config = {
  debug: boolean;
  logLevel: LogLevel;
  http: {
    host: string;
    port: number;
    schema: HttpSchema;
  };
  graphql: {
    introspectionEnabled: boolean;
  };
};

const httpSchema = getenv("HTTP_SCHEMA", "http");
if (!["http", "https"].includes(httpSchema)) {
  throw new Error(`Invalid HTTP schema provided - ${httpSchema}`);
}

const config: Config = {
  debug: getenv.bool("DEBUG", false),
  logLevel: "error",
  http: {
    host: getenv("HTTP_HOST", "localhost"),
    port: getenv.int("HTTP_PORT", 8000),
    schema: httpSchema as HttpSchema,
  },
  graphql: {
    introspectionEnabled: getenv.bool("GRAPHQL_INTROSPECTION_ENABLED", false),
  },
};

export default { ...config };
