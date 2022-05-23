import errorHandler from "errorhandler";
import app from "./app";
import config from "./config/config";

/**
 * Error Handler. Provides full stack trace.
 */
if (config.debug) {
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  // TODO: Replace with logger
  // TODO: See if we can replace config with app.get()
  console.log(
    "  [Server] Server is running on " +
      `${config.http.schema}://${config.http.host}:${config.http.port}` +
      ` in ${app.get("env") as string} mode.`
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
