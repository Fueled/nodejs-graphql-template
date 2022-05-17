import errorHandler from "errorhandler";

import app from "./app";
import config from "./config/config";

/**
 * Error Handler. Provides full stack
 */
if (config.debug) {
  console.log(JSON.stringify(config, null, 2));
  app.use(errorHandler());
}

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  [Server] Server is running on " +
      `${config.app.schema}://${config.app.host}:${config.app.port}` +
      ` in ${app.get("env")} mode.`
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
