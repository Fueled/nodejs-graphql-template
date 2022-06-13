export type AppLogLevel = "debug" | "error"; // TBC...
export type AppHttpSchema = "http" | "https";

export type AppConfig = {
  debug: boolean;
  logLevel: AppLogLevel;
  http: {
    host: string;
    port: number;
    schema: AppHttpSchema;
  };
  graphql: {
    csrfPrevention: boolean,
    introspectionEnabled: boolean;
  };
};
