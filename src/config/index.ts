import dotenv from "dotenv";
import getenv from "getenv";
import path from "path";
import { AppConfig, AppHttpSchema } from "src/types";

dotenv.config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV !== "test" ? ".env" : ".env.testing"),
});

const httpSchema = getenv("HTTP_SCHEMA", "http");
if (!["http", "https"].includes(httpSchema)) {
  throw new Error(`Invalid HTTP schema provided - ${httpSchema}`);
}

const config: AppConfig = {
  debug: getenv.bool("DEBUG", false),
  logLevel: "error",
  http: {
    host: getenv("HTTP_HOST", "localhost"),
    port: getenv.int("HTTP_PORT", 8000),
    schema: httpSchema as AppHttpSchema,
  },
  graphql: {
    csrfPrevention: getenv.bool("GRAPHQL_CSRF_PREVENTION", true),
    introspectionEnabled: getenv.bool("GRAPHQL_INTROSPECTION_ENABLED", true),
  },
};

export default { ...config };
