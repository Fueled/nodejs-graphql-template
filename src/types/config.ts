import { Secret } from "jsonwebtoken";

export type AppLogLevel = "debug" | "error"; // TBC...
export type AppHttpSchema = "http" | "https";

export type AppConfig = {
  debug: boolean;
  logging: {
    level: AppLogLevel;
  };
  http: {
    host: string;
    port: number;
    schema: AppHttpSchema;
  };
  graphql: {
    csrfPrevention: boolean,
    introspectionEnabled: boolean;
  };
  auth: {
    jwtSecret: Secret;
    jwtPassphrase?: string;
    jwtExpiresIn?: number;
  };
};
